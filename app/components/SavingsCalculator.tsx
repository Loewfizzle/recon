'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

export default function SavingsCalculator() {
  const [herdSize, setHerdSize] = useState(620);
  const [currentMonthly, setCurrentMonthly] = useState(1850);
  const [variablePerCow, setVariablePerCow] = useState(0.92);
  const [serviceFee, setServiceFee] = useState(189);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('reconCalculator');
    if (saved) {
      try {
        const { herd, spend, vpc, fee } = JSON.parse(saved);
        if (herd) setHerdSize(herd);
        if (spend) setCurrentMonthly(spend);
        if (vpc) setVariablePerCow(vpc);
        if (fee) setServiceFee(fee);
      } catch {}
    }
  }, []);

  // Save to localStorage when values change
  useEffect(() => {
    localStorage.setItem('reconCalculator', JSON.stringify({
      herd: herdSize,
      spend: currentMonthly,
      vpc: variablePerCow,
      fee: serviceFee,
    }));
  }, [herdSize, currentMonthly, variablePerCow, serviceFee]);

  // Realistic but simplified model — assumptions are now tunable
  const reconMonthly = useMemo(() => {
    return Math.round(herdSize * variablePerCow + serviceFee);
  }, [herdSize, variablePerCow, serviceFee]);

  const monthlySavings = Math.max(0, currentMonthly - reconMonthly);
  const annualSavings = monthlySavings * 12;
  const percentSavings = currentMonthly > 0 ? Math.round((monthlySavings / currentMonthly) * 100) : 0;

  // Rough recommendation
  const recommended = herdSize > 850 || currentMonthly > 2400 ? 'Dual Cell' : 'Single Cell';

  const formatCurrency = (n: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  const handleHerdChange = (value: number) => {
    const clamped = Math.min(2800, Math.max(80, Math.round(value)));
    setHerdSize(clamped);
  };

  const handleSpendChange = (value: number) => {
    const clamped = Math.min(8500, Math.max(280, Math.round(value)));
    setCurrentMonthly(clamped);
  };

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
            <div className="flex items-baseline justify-between mb-2">
              <label className="font-semibold text-sm tracking-wide text-[#334155]">MILKING HERD SIZE</label>
              <div className="font-mono text-2xl font-semibold tabular-nums text-[#14532d]">{herdSize}</div>
            </div>
            <input
              type="range"
              min={80}
              max={2800}
              step={10}
              value={herdSize}
              onChange={(e) => handleHerdChange(parseInt(e.target.value))}
              className="w-full accent-[#14532d] cursor-pointer"
              aria-label="Milking herd size"
            />
            <div className="flex justify-between text-xs text-[#64748b] mt-1">
              <div>80 cows</div>
              <div>2,800 cows</div>
            </div>
            <input
              type="number"
              value={herdSize}
              onChange={(e) => handleHerdChange(parseInt(e.target.value) || 80)}
              className="input-number mt-3 max-w-[140px]"
              min={80}
              max={2800}
              aria-label="Herd size exact"
            />
          </div>

          {/* Current Monthly Spend */}
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <label className="font-semibold text-sm tracking-wide text-[#334155]">YOUR CURRENT MONTHLY PRE-DIP COST</label>
              <div className="font-mono text-2xl font-semibold tabular-nums text-[#14532d]">{formatCurrency(currentMonthly)}</div>
            </div>
            <input
              type="range"
              min={280}
              max={8500}
              step={25}
              value={currentMonthly}
              onChange={(e) => handleSpendChange(parseInt(e.target.value))}
              className="w-full accent-[#14532d] cursor-pointer"
              aria-label="Current monthly chemical spend"
            />
            <div className="flex justify-between text-xs text-[#64748b] mt-1">
              <div>$280</div>
              <div>$8,500</div>
            </div>
            <div className="relative mt-3 max-w-[170px]">
              <div className="absolute left-3.5 top-2.5 text-[#64748b] font-medium">$</div>
              <input
                type="number"
                value={currentMonthly}
                onChange={(e) => handleSpendChange(parseInt(e.target.value) || 280)}
                className="input-number pl-7 max-w-[170px]"
                min={280}
                max={8500}
                aria-label="Current spend exact"
              />
            </div>
          </div>

          <div className="pt-4 border-t text-xs">
            <div className="font-semibold tracking-wide text-[#334155] mb-2">TUNABLE ASSUMPTIONS (adjust for your operation)</div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[#64748b] mb-0.5">Variable $/cow/mo</label>
                <input
                  type="number"
                  step="0.01"
                  value={variablePerCow}
                  onChange={(e) => setVariablePerCow(parseFloat(e.target.value) || 0.92)}
                  className="input-number w-full"
                />
              </div>
              <div>
                <label className="block text-[#64748b] mb-0.5">Monthly service fee</label>
                <input
                  type="number"
                  value={serviceFee}
                  onChange={(e) => setServiceFee(parseInt(e.target.value) || 189)}
                  className="input-number w-full"
                />
              </div>
            </div>
            <div className="mt-2 text-[#64748b] leading-snug">
              These are estimates based on real-world dairy usage patterns and on-site generation costs. Your actual numbers may vary.
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl bg-[#f1f5f9] p-5">
            <div className="uppercase text-[10px] tracking-[1.5px] font-semibold text-[#0f766e] mb-1">ESTIMATED MONTHLY SAVINGS</div>
            <div className="savings-value tabular-nums">{formatCurrency(monthlySavings)}</div>
            <div className="mt-1 text-sm text-[#15803d] font-medium flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" /> {percentSavings}% lower than current spend
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="text-xs uppercase tracking-widest text-[#64748b] mb-1">ANNUAL SAVINGS</div>
              <div className="text-3xl font-semibold tabular-nums text-[#14532d]">{formatCurrency(annualSavings)}</div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="text-xs uppercase tracking-widest text-[#64748b] mb-1">RECON MONTHLY COST</div>
              <div className="text-3xl font-semibold tabular-nums text-[var(--color-brand-blue)]">{formatCurrency(reconMonthly)}</div>
              <div className="text-[11px] text-[#64748b] mt-0.5">All-in (generation + support)</div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white border border-[var(--color-brand-blue)]/15 p-4 text-sm">
            <div className="shrink-0 p-2 bg-[var(--color-brand-blue)] rounded-xl text-white">
              <DollarSign className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold">Recommended for your herd:</span>{' '}
              <span className="font-semibold text-[var(--color-brand-blue)]">{recommended}</span> Machine
            </div>
          </div>

          <button 
            type="button" 
            onClick={() => {
              const contact = document.getElementById('contact');
              if (contact) {
                contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
              setTimeout(() => {
                const herdInput = document.querySelector('input[name="herd"]') as HTMLInputElement | null;
                if (herdInput) {
                  herdInput.value = herdSize.toString();
                  herdInput.focus();
                }
              }, 700);
            }}
            className="btn-accent w-full justify-center text-base py-3 mt-1"
          >
            Get a Personalized Quote
          </button>
          <p className="text-center text-[12px] text-[#64748b]">No obligation. We’ll run the exact numbers for your parlor.</p>

          {/* Share / Email results */}
          <div className="pt-3 border-t flex gap-2">
            <button
              onClick={() => {
                const text = `Recon Savings Estimate\nHerd: ${herdSize} cows\nCurrent: ${formatCurrency(currentMonthly)}/mo\nRecon est: ${formatCurrency(reconMonthly)}/mo\nMonthly savings: ${formatCurrency(monthlySavings)} (${percentSavings}%)\nAnnual savings: ${formatCurrency(annualSavings)}\nRecommended: ${recommended} Cell`;
                navigator.clipboard?.writeText(text);
                alert('Results copied to clipboard!');
              }}
              className="btn-secondary text-sm flex-1 justify-center"
            >
              Copy results
            </button>
            <a
              href={`mailto:?subject=Recon%20Savings%20Estimate&body=${encodeURIComponent(`Herd: ${herdSize} cows\nCurrent monthly cost: ${formatCurrency(currentMonthly)}\nEstimated Recon cost: ${formatCurrency(reconMonthly)}\nMonthly savings: ${formatCurrency(monthlySavings)} (${percentSavings}%)\nAnnual savings: ${formatCurrency(annualSavings)}\nRecommended machine: ${recommended} Cell\n\n(Estimates only — contact Recon for exact quote.)`)}`}
              className="btn-secondary text-sm flex-1 justify-center"
            >
              Email results
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
