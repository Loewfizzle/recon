'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

type AppMethod = 'robot' | 'foamers' | 'spray' | 'cups';

const APP_METHODS: { value: AppMethod; label: string; ml: number; reconCostPerGal: number }[] = [
  { value: 'robot',   label: 'Robot',        ml: 15, reconCostPerGal: 0.185 },
  { value: 'foamers', label: 'Foamers',      ml: 6,  reconCostPerGal: 0.585 },
  { value: 'spray',   label: 'Manual Spray', ml: 17, reconCostPerGal: 0.185 },
  { value: 'cups',    label: 'Dip Cups',     ml: 12, reconCostPerGal: 0.185 },
];

const TEATS_PER_COW  = 4;
const ML_PER_GALLON  = 3785;
const DAYS_PER_MONTH = 30;

function loadSaved() {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem('reconCalculator') || '{}');
  } catch {
    return {};
  }
}

export default function SavingsCalculator() {
  const [herdSize, setHerdSize] = useState<number>(() => loadSaved().herd     || 620);
  const [herdRaw,  setHerdRaw]  = useState<string>(() => String(loadSaved().herd || 620));
  const [method,   setMethod]   = useState<AppMethod>(() => loadSaved().method || 'foamers');
  const [rtuPrice, setRtuPrice] = useState<number>(() => loadSaved().rtuPrice  || 2.50);
  const [rtuRaw,   setRtuRaw]   = useState<string>(() => String(loadSaved().rtuPrice || 2.50));
  const [milkings, setMilkings] = useState<2 | 3>(() => loadSaved().milkings  || 3);

  useEffect(() => {
    localStorage.setItem('reconCalculator', JSON.stringify({
      herd: herdSize, method, rtuPrice, milkings,
    }));
  }, [herdSize, method, rtuPrice, milkings]);

  const selectedMethod = APP_METHODS.find(m => m.value === method)!;

  const { gallonsPerMonth, currentMonthly, reconMonthly, monthlySavings, annualSavings, percentSavings } = useMemo(() => {
    const milkingsPerMonth  = milkings * DAYS_PER_MONTH;
    const totalMl           = herdSize * TEATS_PER_COW * selectedMethod.ml * milkingsPerMonth;
    const gallonsPerMonth   = totalMl / ML_PER_GALLON;
    const currentMonthly    = gallonsPerMonth * rtuPrice;
    const reconMonthly      = gallonsPerMonth * selectedMethod.reconCostPerGal;
    const monthlySavings    = Math.max(0, currentMonthly - reconMonthly);
    const annualSavings     = monthlySavings * 12;
    const percentSavings    = currentMonthly > 0 ? Math.round((monthlySavings / currentMonthly) * 100) : 0;
    return { gallonsPerMonth, currentMonthly, reconMonthly, monthlySavings, annualSavings, percentSavings };
  }, [herdSize, milkings, rtuPrice, selectedMethod]);

  const fmt = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  const copyText = [
    `Recon Savings Estimate`,
    `Herd: ${herdSize} cows`,
    `Method: ${selectedMethod.label}`,
    `Current RTU price: $${rtuPrice.toFixed(2)}/gal`,
    `Milkings/day: ${milkings}x`,
    `Estimated gallons/month: ${Math.round(gallonsPerMonth)}`,
    `Current monthly cost: ${fmt(currentMonthly)}`,
    `Recon monthly cost: ${fmt(reconMonthly)}`,
    `Monthly savings: ${fmt(monthlySavings)} (${percentSavings}%)`,
    `Annual savings: ${fmt(annualSavings)}`,
  ].join('\n');

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-start gap-3 mb-6">
        <div className="mt-1 p-2.5 rounded-2xl bg-[#14532d]/10 text-[#14532d]">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <div className="font-semibold text-xl tracking-tight">See Your Estimated Savings</div>
          <p className="text-[#475569] text-[15px] mt-1">Adjust the numbers to match your operation. Results update instantly.</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">

        {/* Inputs */}
        <div className="lg:col-span-3 space-y-7">

          {/* Herd Size + Milkings Per Day */}
          <div className="flex flex-wrap gap-6">
            <div>
              <label className="block font-semibold text-sm tracking-wide text-[#334155] mb-2">
                MILKING HERD SIZE
              </label>
              <input
                type="number"
                value={herdRaw}
                min={50}
                max={5000}
                onChange={(e) => setHerdRaw(e.target.value)}
                onBlur={() => {
                  const val = parseInt(herdRaw, 10);
                  const clamped = isNaN(val) ? herdSize : Math.min(5000, Math.max(50, val));
                  setHerdSize(clamped);
                  setHerdRaw(String(clamped));
                }}
                className="input-number max-w-[160px]"
                aria-label="Milking herd size"
              />
            </div>

            <div>
              <label className="block font-semibold text-sm tracking-wide text-[#334155] mb-2">
                MILKINGS PER DAY
              </label>
              <div className="inline-flex rounded-xl border border-slate-200 overflow-hidden">
                {([2, 3] as const).map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setMilkings(n)}
                    className={`px-6 py-2.5 text-sm font-semibold transition ${
                      milkings === n
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'bg-white text-[#475569] hover:bg-slate-50'
                    }`}
                  >
                    {n}×/day
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Application Method */}
          <div>
            <label className="block font-semibold text-sm tracking-wide text-[#334155] mb-2">
              APPLICATION METHOD
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {APP_METHODS.map(({ value, label, ml }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setMethod(value)}
                  className={`rounded-xl border px-3 py-3 text-sm text-left transition ${
                    method === value
                      ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5 text-[var(--color-primary)] font-semibold'
                      : 'border-slate-200 bg-white text-[#475569] hover:border-slate-300'
                  }`}
                >
                  <div className="font-semibold">{label}</div>
                  <div className="text-xs text-[#64748b] mt-0.5">{ml} ml/cow</div>
                </button>
              ))}
            </div>
          </div>

          {/* Current RTU Price */}
          <div>
            <label className="block font-semibold text-sm tracking-wide text-[#334155] mb-2">
              CURRENT PRE-DIP PRICE (RTU, PER GALLON)
            </label>
            <div className="relative max-w-[170px]">
              <div className="absolute left-3.5 top-2.5 text-[#64748b] font-medium">$</div>
              <input
                type="number"
                value={rtuRaw}
                step="0.01"
                min="0.01"
                onChange={(e) => setRtuRaw(e.target.value)}
                onBlur={() => {
                  const val = parseFloat(rtuRaw);
                  const clean = isNaN(val) || val <= 0 ? rtuPrice : val;
                  setRtuPrice(clean);
                  setRtuRaw(String(clean));
                }}
                className="input-number input-currency w-full"
                aria-label="Current pre-dip price per gallon RTU"
              />
            </div>
          </div>

        </div>

        {/* Results */}
        <div className="lg:col-span-2 space-y-4">

          {/* Monthly Savings — hero */}
          <div className="rounded-2xl bg-[#f1f5f9] p-5">
            <div className="uppercase text-[10px] tracking-[1.5px] font-semibold text-[#0f766e] mb-1">ESTIMATED MONTHLY SAVINGS</div>
            <div className="savings-value tabular-nums">{fmt(monthlySavings)}</div>
            <div className="mt-1 text-sm text-[#15803d] font-medium flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" /> {percentSavings}% lower than current spend
            </div>
          </div>

          {/* Annual + Recon cost */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="text-xs uppercase tracking-widest text-[#64748b] mb-1">ANNUAL SAVINGS</div>
              <div className="text-2xl font-semibold tabular-nums text-[#14532d]">{fmt(annualSavings)}</div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="text-xs uppercase tracking-widest text-[#64748b] mb-1">RECON MONTHLY</div>
              <div className="text-2xl font-semibold tabular-nums text-[var(--color-brand-blue)]">{fmt(reconMonthly)}</div>
            </div>
          </div>

          {/* Current monthly cost */}
          <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 p-4 text-sm">
            <div className="shrink-0 p-2 bg-slate-100 rounded-xl text-[#475569]">
              <DollarSign className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[#64748b]">Your current monthly cost: </span>
              <span className="font-semibold text-[#334155]">{fmt(currentMonthly)}</span>
              <span className="text-[#64748b] text-xs ml-1">({Math.round(gallonsPerMonth)} gal/mo)</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              const contact = document.getElementById('contact');
              if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  const herdInput = document.querySelector('input[name="herd"]') as HTMLInputElement | null;
                  if (herdInput) {
                    herdInput.value = herdSize.toString();
                    herdInput.focus();
                  }
                });
              });
            }}
            className="btn-accent w-full justify-center text-base py-3 mt-1"
          >
            Get a Personalized Quote
          </button>
          <p className="text-center text-[12px] text-[#64748b]">No obligation. We&apos;ll run the exact numbers for your parlor.</p>

          <div className="pt-3 border-t flex gap-2">
            <button
              onClick={() => {
                navigator.clipboard?.writeText(copyText);
                alert('Results copied to clipboard!');
              }}
              className="btn-secondary text-sm flex-1 justify-center"
            >
              Copy results
            </button>
            <a
              href={`mailto:?subject=Recon%20Savings%20Estimate&body=${encodeURIComponent(copyText + '\n\n(Visit recon.loewfizzle.com to calculate your own estimate.)')}`}
              className="btn-secondary text-sm flex-1 justify-center"
            >
              Email results
            </a>
          </div>

        </div>
      </div>

      <div className="mt-6 pt-4 border-t text-[11px] text-[#94a3b8] leading-snug">
        Application volume assumptions: Robot 15 ml · Foamers 6 ml · Manual Spray 17 ml · Dip Cups 12 ml per teat per milking. Recon cost includes PH activator, sodium hypochlorite, and surfactant. RTU = ready-to-use.
      </div>
    </div>
  );
}
