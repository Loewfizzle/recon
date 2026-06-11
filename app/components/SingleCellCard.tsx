'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import Modal from './Modal';

function ModalContent({ onRequestQuote }: { onRequestQuote: () => void }) {
  return (
    <div className="space-y-7 text-[15px]">

      {/* Hero image */}
      <div className="rounded-xl overflow-hidden">
        <Image
          src="/single.png"
          alt="C-100 Single Cell ECALogical machine"
          width={800}
          height={500}
          className="w-full h-48 sm:h-64 object-cover"
          priority
        />
      </div>

      {/* Intro */}
      <div className="rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 p-4">
        <p className="text-[#334155] leading-relaxed">
          The C-100 is a fully automated, single-cell system that produces fresh sodium hypochlorite
          (ECActiv Concentrate) right on your farm. The ideal entry point for most dairies — reliable,
          efficient, and simple to operate.
        </p>
      </div>

      {/* Key Features */}
      <section>
        <h4 className="font-semibold text-base tracking-tight mb-3 text-[var(--color-primary)]">Key Features</h4>
        <ul className="space-y-2.5">
          {[
            ['Easy to use', 'Fully automated PLC control — just load and go.'],
            ['Made in the USA', 'Engineered and built in Grand Rapids, Michigan.'],
            ['Remote support', 'Internet monitoring and control from anywhere in the country.'],
            ['Service included', 'Monthly service plan and full warranty included.'],
            ['Right-sized', 'Ideal for herds up to ~900 cows.'],
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
            <div className="text-xs text-[#64748b] mt-0.5">every ~18 hours</div>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="text-[#64748b] text-xs tracking-wide uppercase mb-1">275-Gal Tote</div>
            <div className="font-semibold text-2xl text-[var(--color-primary)]">~103 hrs</div>
            <div className="text-xs text-[#64748b] mt-0.5">to fill completely</div>
          </div>
        </div>
      </section>

      {/* Who It&apos;s For */}
      <section>
        <h4 className="font-semibold text-base tracking-tight mb-2 text-[var(--color-primary)]">Who It&apos;s For</h4>
        <p className="text-[#334155] leading-relaxed">
          Perfect entry point for farms looking to eliminate purchased pre-dip and premise chemicals.
          Excellent ROI even on moderate-sized operations. If your primary use is pre-dip and your herd
          is under ~900 cows, the C-100 is the right machine.
        </p>
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

export default function SingleCellCard() {
  const [open, setOpen] = useState(false);

  const handleRequestQuote = () => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  };

  return (
    <>
      <div className="card flex flex-col overflow-hidden">
        {/* Machine photo */}
        <div className="w-full">
          <Image
            src="/single.png"
            alt="C-100 Single Cell ECALogical machine"
            width={800}
            height={500}
            className="w-full h-44 sm:h-52 object-cover"
          />
        </div>

        <div className="p-6 sm:p-7 flex flex-col flex-1">
          <div className="uppercase text-xs tracking-[1px] font-semibold text-[#0f766e]">SINGLE CELL • C100</div>
          <h3 className="text-2xl font-semibold tracking-tight mt-2">Single Cell Machine</h3>
          <p className="mt-3 text-[#475569] text-[15px] leading-relaxed">
            Reliable output for most dairies. Ideal for herds focused primarily on pre-dip, up to ~900 cows.
          </p>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-semibold tabular-nums text-[var(--color-primary)]">103</span>
            <span className="text-[#475569] text-[15px]">hours to fill a 275-gallon tote</span>
          </div>

          <div className="mt-auto pt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setOpen(true)}
              className="btn-secondary flex-1 sm:flex-none justify-center"
            >
              Learn More
            </button>
            <a href="#calculator" className="btn-primary flex-1 sm:flex-none justify-center">
              See Savings
            </a>
          </div>
        </div>
      </div>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Single Cell Machine (C100)"
      >
        <ModalContent onRequestQuote={handleRequestQuote} />
      </Modal>
    </>
  );
}
