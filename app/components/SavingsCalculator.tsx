'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

type AppMethod = 'robot' | 'foamers' | 'spray' | 'cups';

const APP_METHODS: { value: AppMethod; label: string; ml: number }[] = [
  { value: 'robot',   label: 'Robot',        ml: 15 },
  { value: 'foamers', label: 'Foamers',      ml: 6  },
  { value: 'spray',   label: 'Manual Spray', ml: 17 },
  { value: 'cups',    label: 'Dip Cups',     ml: 12 },
];

function loadSaved() {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem('reconCalculator') || '{}');
  } catch {
    return {};
  }
}

export default function SavingsCalculator() {
  const [herdSize,  setHerdSize]  = useState<number>(() => loadSaved().herd      || 620);
  const [method,    setMethod]    = useState<AppMethod>(() => loadSaved().method  || 'foamers');
  const [rtuPrice,  setRtuPrice]  = useState<number>(() => loadSaved().rtuPrice  || 2.50);
  const [milkings,  setMilkings]  = useState<2 | 3>(() => loadSaved().milkings  || 2);

  useEffect(() => {
    localStorage.setItem('reconCalculator', JSON.stringify({
      herd:     herdSize,
      method,
      rtuPrice,
      milkings,
    }));
  }, [herdSize, method, rtuPrice, milkings]);

  const methodLabel = APP_METHODS.find(m => m.value === method)?.label ?? method;

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

        {/* Controls */}
        <div className="lg:col-span-3 space-y-7">

          {/* Herd Size */}
          <div>
            <label className="block font-semibold text-sm tracking-wide text-[#334155] mb-2">
              MILKING HERD SIZE
            </label>
            <input
              type="number"
              value={herdSize}
              min={50}
              max={5000}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                if (!isNaN(val)) setHerdSize(Math.min(5000, Math.max(50, val)));
              }}
              className="input-number max-w-[160px]"
              aria-label="Milking herd size"
            />
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
                  <div className="text-xs text-[#64748b] mt-0.5">{ml} ml/teat</div>
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
                value={rtuPrice}
                step="0.01"
                min="0.01"
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  if (!isNaN(val) && val > 0) setRtuPrice(val);
                }}
                className="input-number pl-7 w-full"
                aria-label="Current pre-dip price per gallon RTU"
              />
            </div>
          </div>

          {/* Milkings Per Day */}
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

        {/* Results — placeholder until calculation logic is wired */}
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl bg-[#f1f5f9] p-5">
            <div className="uppercase text-[10px] tracking-[1.5px] font-semibold text-[#0f766e] mb-1">ESTIMATED MONTHLY SAVINGS</div>
            <div className="savings-value tabular-nums text-[#94a3b8]">—</div>
            <div className="mt-1 text-sm text-[#94a3b8] flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" /> Calculation coming soon
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="text-xs uppercase tracking-widest text-[#64748b] mb-1">ANNUAL SAVINGS</div>
              <div className="text-3xl font-semibold tabular-nums text-[#94a3b8]">—</div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="text-xs uppercase tracking-widest text-[#64748b] mb-1">RECON MONTHLY COST</div>
              <div className="text-3xl font-semibold tabular-nums text-[#94a3b8]">—</div>
              <div className="text-[11px] text-[#64748b] mt-0.5">Estimated</div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white border border-[var(--color-brand-blue)]/15 p-4 text-sm">
            <div className="shrink-0 p-2 bg-[var(--color-brand-blue)] rounded-xl text-white">
              <DollarSign className="w-4 h-4" />
            </div>
            <div className="text-[#475569]">
              Machine recommendation will appear once calculated.
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
                const text = `Recon Savings Estimate\nHerd: ${herdSize} cows\nMethod: ${methodLabel}\nCurrent RTU price: $${rtuPrice.toFixed(2)}/gal\nMilkings/day: ${milkings}x\nMonthly savings: —\nAnnual savings: —`;
                navigator.clipboard?.writeText(text);
                alert('Results copied to clipboard!');
              }}
              className="btn-secondary text-sm flex-1 justify-center"
            >
              Copy results
            </button>
            <a
              href={`mailto:?subject=Recon%20Savings%20Estimate&body=${encodeURIComponent(
                `Herd: ${herdSize} cows\nApplication method: ${methodLabel}\nCurrent RTU price: $${rtuPrice.toFixed(2)}/gal\nMilkings/day: ${milkings}x\n\n(Visit recon.loewfizzle.com to see full savings estimate.)`
              )}`}
              className="btn-secondary text-sm flex-1 justify-center"
            >
              Email results
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t text-[11px] text-[#94a3b8] leading-snug">
        Application volume assumptions: Robot 15 ml · Foamers 6 ml · Manual Spray 17 ml · Dip Cups 12 ml per teat per milking. RTU = ready-to-use dilution.
      </div>
    </div>
  );
}
