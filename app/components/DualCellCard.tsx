'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check, Zap } from 'lucide-react';
import Modal from './Modal';

const specs: [string, string][] = [
  ['Concentration', '8,000 ± PPM Free Available Chlorine'],
  ['Output', '55 gal every 10 hrs per cell'],
  ['Power Requirement', 'Dedicated 120V, 30 amp twist-lock'],
  ['Power Draw', '30 amps @ 30 volts DC per cell'],
  ['Machine Size', '48" W x 40" D x 84" H'],
  ['Room Temperature', '40°F - 100°F'],
  ['Water Source', 'Softened + Reverse Osmosis purified'],
];

function ModalContent({ onRequestQuote }: { onRequestQuote: () => void }) {
  return (
    <div className="space-y-7 text-[15px]">

      {/* Hero image */}
      <div className="rounded-xl overflow-hidden">
        <Image
          src="/dual.png"
          alt="C-200 Dual Cell ECALogical machine"
          width={800}
          height={500}
          className="w-full h-48 sm:h-64 object-cover"
          priority
        />
      </div>

      {/* Intro */}
      <div className="rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 p-4">
        <p className="text-[#334155] leading-relaxed">
          The C-200 is a fully automated, dual-cell system that produces sodium hypochlorite concentrate
          right on your farm. Combined with Recon&apos;s PH Activator at the correct ratio, it delivers
          fresh hypochlorous acid (HOCl) — your ready-to-use pre-dip. Just load the salt brine and press start.
        </p>
      </div>

      {/* Key Benefits */}
      <section>
        <h4 className="font-semibold text-base tracking-tight mb-3 text-[var(--color-primary)]">Key Benefits</h4>
        <ul className="space-y-2.5">
          {[
            ['Easy to use', 'Load brine, press start. Fully automated.'],
            ['High output', '55 gallons of concentrate every 10 hours.'],
            ['Strong product', '8,000 PPM Free Available Chlorine (FAC).'],
            ['Reliable', 'Built in the USA with excellent support.'],
            ['Dual cell advantage', 'Fills a 275-gallon tote in roughly half the time of single-cell models.'],
          ].map(([title, desc]) => (
            <li key={title} className="flex gap-3">
              <Check className="w-4 h-4 mt-0.5 text-[#15803d] shrink-0" />
              <span className="text-[#334155]"><span className="font-semibold">{title}</span> — {desc}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Production Capacity */}
      <section>
        <h4 className="font-semibold text-base tracking-tight mb-3 text-[var(--color-primary)]">Production Capacity</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="text-[#64748b] text-xs tracking-wide uppercase mb-1">Per Batch</div>
            <div className="font-semibold text-2xl text-[var(--color-primary)]">55 gal</div>
            <div className="text-xs text-[#64748b] mt-0.5">every 10 hours</div>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="text-[#64748b] text-xs tracking-wide uppercase mb-1">Before Refill</div>
            <div className="font-semibold text-2xl text-[var(--color-primary)]">275 gal</div>
            <div className="text-xs text-[#64748b] mt-0.5">5 batches unattended</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section>
        <h4 className="font-semibold text-base tracking-tight mb-3 text-[var(--color-primary)]">How It Works</h4>
        <ol className="space-y-3">
          {[
            'Load salt brine into the tank.',
            'Press "Start".',
            'The machine automatically produces 8,000 PPM sodium hypochlorite concentrate.',
            'Combine the sodium hypochlorite concentrate with Recon\'s PH Activator to produce fresh HOCl. Use for pre-dip, water chlorination, sand treatment, calf stall cleaning, general cleaning, and more.',
          ].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-[#334155]">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Support Package */}
      <section>
        <h4 className="font-semibold text-base tracking-tight mb-3 text-[var(--color-primary)]">Full Support Package</h4>
        <div className="space-y-5">
          {[
            {
              phase: 'Before you buy',
              items: [
                'Free on-site consultation',
                'Free product trial',
                'Efficacy testing (teat end swabbing + water analysis)',
              ],
            },
            {
              phase: 'During installation',
              items: [
                'Professional installation by trained technicians',
                'Help setting up your mechanical room',
                'On-site training + detailed operator manual (English & Spanish)',
              ],
            },
            {
              phase: 'After installation',
              items: [
                'Full warranty',
                '24/7 remote support — monitor and control from anywhere via internet',
                'You focus on the cows — we help with the machine',
              ],
            },
          ].map(({ phase, items }) => (
            <div key={phase}>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#64748b] mb-2">{phase}</div>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[#334155]">
                    <Check className="w-4 h-4 mt-0.5 text-[#15803d] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Main Components */}
      <section>
        <h4 className="font-semibold text-base tracking-tight mb-1 text-[var(--color-primary)]">Main Components</h4>
        <p className="text-xs text-[#64748b] mb-2.5">C-200 Dual Cell (PN: 101200) includes:</p>
        <ul className="space-y-1.5">
          {[
            'Dual cell ECActiv production cell + tanks',
            'Control and power panel boxes',
            '35-gallon Brine tank',
            '55-gallon Process tank',
            'Reverse Osmosis (RO) system',
          ].map((item) => (
            <li key={item} className="flex gap-2.5 text-[#334155]">
              <span className="text-[var(--color-primary)] font-bold shrink-0">·</span> {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Technical Specs */}
      <section>
        <h4 className="font-semibold text-base tracking-tight mb-3 text-[var(--color-primary)]">Technical Specs</h4>
        <div className="rounded-xl overflow-hidden border border-slate-200">
          {specs.map(([label, value], i) => (
            <div
              key={label}
              className={`grid grid-cols-2 gap-3 px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
            >
              <span className="font-medium text-[#475569]">{label}</span>
              <span className="text-[#334155]">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <button
        onClick={onRequestQuote}
        className="btn-primary w-full justify-center text-base py-3.5"
      >
        Request a Quote
      </button>
    </div>
  );
}

export default function DualCellCard() {
  const [open, setOpen] = useState(false);

  const handleRequestQuote = () => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  };

  return (
    <>
      <div className="card flex flex-col overflow-hidden ring-1 ring-[var(--color-primary)]/10">
        {/* Machine photo */}
        <div className="w-full">
          <Image
            src="/dual.png"
            alt="C-200 Dual Cell ECALogical machine"
            width={800}
            height={500}
            className="w-full h-auto"
          />
        </div>

        <div className="p-6 sm:p-7 flex flex-col flex-1">
        <div className="flex items-center gap-2">
          <div className="uppercase text-xs tracking-[1px] font-semibold text-[#0f766e]">DUAL CELL • C200</div>
          <div className="text-[10px] px-2 py-px rounded bg-[#14532d] text-white font-medium">FASTER</div>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight mt-2">Dual Cell Machine</h3>

        <p className="mt-3 text-[#475569] text-[15px] leading-relaxed">
          Nearly twice the speed of the single-cell model. Built for larger herds and operations
          running pre-dip, parlor wash, sand treatment, and calf hutch cleaning — all from one machine.
        </p>

        <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-[var(--color-primary)]/5 px-4 py-3">
          <Zap className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
          <span className="text-sm font-semibold text-[var(--color-primary)]">
            55 gallons every 10 hours &bull; Faster production
          </span>
        </div>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-4xl font-semibold tabular-nums text-[var(--color-primary)]">~50</span>
          <span className="text-[#475569] text-[15px]">hours to fill a 275-gallon tote</span>
        </div>
        <div className="text-xs text-[#64748b] mt-1">Concentrate — yields ~1,925 gal RTU per tote</div>

        <div className="mt-auto pt-6 flex flex-wrap gap-3">
          <button
            onClick={() => setOpen(true)}
            className="btn-primary flex-1 sm:flex-none justify-center"
          >
            Learn More
          </button>
          <button
            type="button"
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="btn-secondary flex-1 sm:flex-none justify-center"
          >
            See Savings
          </button>
        </div>
        </div>
      </div>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="C-200 ECALogical Dual Cell Generator"
      >
        <ModalContent onRequestQuote={handleRequestQuote} />
      </Modal>
    </>
  );
}
