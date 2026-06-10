'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import SavingsCalculator from './components/SavingsCalculator';
import { Check, X, ArrowRight, Users, Clock, Shield, DollarSign, Leaf } from 'lucide-react';
import DualCellCard from './components/DualCellCard';

// Machine detail content for modals
const singleCellDetails = (
  <div className="space-y-5">
    <div>
      <div className="uppercase tracking-[1px] text-xs font-semibold text-[var(--color-accent)]">C100 / SINGLE CELL</div>
      <div className="text-2xl font-semibold tracking-tight mt-1">Reliable capacity for most dairies</div>
    </div>

    <div className="grid grid-cols-2 gap-4 text-sm">
      <div className="rounded-xl bg-slate-50 p-4">
        <div className="text-[#64748b] text-xs tracking-wide">275-GALLON TOTE</div>
        <div className="font-semibold text-xl mt-1 text-[var(--color-brand-blue)]">~103 hours</div>
      </div>
      <div className="rounded-xl bg-slate-50 p-4">
        <div className="text-[#64748b] text-xs tracking-wide">CONCENTRATE OUTPUT</div>
        <div className="font-semibold text-xl mt-1">55 gal every ~18 hrs</div>
      </div>
    </div>

    <div>
      <div className="font-semibold mb-2">Key Features</div>
      <ul className="space-y-1.5 text-[15px]">
        <li className="flex gap-2"><Check className="w-4 h-4 mt-1 text-[#15803d] shrink-0" /> Fully automated PLC control</li>
        <li className="flex gap-2"><Check className="w-4 h-4 mt-1 text-[#15803d] shrink-0" /> Made in the USA (Grand Rapids, MI)</li>
        <li className="flex gap-2"><Check className="w-4 h-4 mt-1 text-[#15803d] shrink-0" /> Remote internet monitoring &amp; support</li>
        <li className="flex gap-2"><Check className="w-4 h-4 mt-1 text-[#15803d] shrink-0" /> Monthly service plan included</li>
        <li className="flex gap-2"><Check className="w-4 h-4 mt-1 text-[#15803d] shrink-0" /> Ideal for herds up to ~900 cows</li>
      </ul>
    </div>

    <div className="pt-2 text-sm border-t">
      Perfect entry point for farms looking to eliminate purchased pre-dip and premise chemicals. Excellent ROI even on moderate-sized operations.
    </div>
  </div>
);

export default function ReconLanding() {
  const [modalOpen, setModalOpen] = useState<'single' | null>(null);
  const openModal = () => setModalOpen('single');
  const closeModal = () => setModalOpen(null);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a]">
      <Header />

      {/* HERO */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 border-b bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-4 py-1 text-sm font-medium text-[var(--color-primary)] mb-5">
            <Leaf className="w-4 h-4" /> On-site generation since 2008
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[52px] leading-[1.05] font-semibold tracking-[-1.6px] max-w-[18ch] mx-auto">
            Stop buying teat dip.<br />Make it on your farm for pennies a gallon.
          </h1>

          <p className="mt-5 max-w-[42ch] mx-auto text-xl text-[#475569]">
            Fresh hypochlorous acid (HOCl) pre-dip and parlor cleaner — generated automatically with Recon ECALogical machines.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#calculator" className="btn-primary px-8 py-3.5 text-base">
              Calculate My Savings <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#machines" className="btn-secondary px-8 py-3.5 text-base">
              See the Machines
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6 text-sm text-[#64748b]">
            <div className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> Made in Michigan</div>
            <div>Serving 16+ states</div>
            <div>300,000+ cows protected</div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-3xl">
          <div className="uppercase tracking-[2px] text-xs font-semibold text-[#0f766e]">SINCE 2008 • GRAND RAPIDS, MICHIGAN</div>
          <h2 className="section-title mt-3">We build the machines that let dairy farmers take control of their chemistry.</h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-[#334155]">
            Recon Technologies manufactures ECALogical on-site generators that produce fresh, highly effective sodium hypochlorite from salt, water, and electricity. 
            No more waiting on trucks. No more volatile chemical prices. Just consistent, low-cost pre-dip and cleaning solution — always available, always fresh.
          </p>
        </div>
      </section>

      {/* OUR ECA MACHINES */}
      <section id="machines" className="bg-white border-y py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <div className="text-[#0f766e] text-sm font-semibold tracking-widest">ECALOGICAL GENERATING SYSTEMS</div>
              <h2 className="section-title mt-1">Two machines. Both produce the same powerful HOCl solution.</h2>
            </div>
            <p className="text-[#475569] max-w-md text-[15px]">Choose the output speed that matches your herd and parlor demands.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Single Cell Card */}
            <div className="card p-6 sm:p-7 flex flex-col">
              <div className="uppercase text-xs tracking-[1px] font-semibold text-[#0f766e]">SINGLE CELL • C100</div>
              <h3 className="text-2xl font-semibold tracking-tight mt-2">Single Cell Machine</h3>
              <div className="mt-5 space-y-3 text-[15px]">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tabular-nums text-[var(--color-primary)]">103</span>
                  <span className="text-[#475569]">hours to fill a 275-gallon tote</span>
                </div>
                <div className="text-[#475569]">Best for mid-size herds or farms primarily focused on pre-dip.</div>
              </div>

              <div className="mt-auto pt-6">
                <div className="text-sm text-[#64748b] mb-3">Price positioning: Strong value, rapid payback for most operations.</div>
                <div className="flex flex-wrap gap-3">
                  <button onClick={openModal} className="btn-secondary flex-1 sm:flex-none justify-center">
                    Learn More
                  </button>
                  <a href="#calculator" className="btn-primary flex-1 sm:flex-none justify-center">See Savings</a>
                </div>
              </div>
            </div>

            {/* Dual Cell Card */}
            <DualCellCard />
          </div>

          <p className="text-center text-sm text-[#64748b] mt-7">Both machines are fully automated, remotely supported, and backed by our monthly service program. Pricing available on request.</p>
        </div>
      </section>

      {/* HOCl vs IODINE */}
      <section id="comparison" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-8">
          <div className="text-[#0f766e] uppercase text-sm tracking-[1.5px] font-semibold">THE CLEAR CHOICE FOR PRE-DIP</div>
          <h2 className="section-title mt-2">HOCl vs Traditional Iodine</h2>
          <p className="mt-3 text-[#475569] max-w-prose">On-site generated hypochlorous acid delivers superior performance at a fraction of the cost — with none of the supply headaches.</p>
        </div>

        {/* Desktop + mobile friendly comparison */}
        <div className="card overflow-hidden">
          <div className="hidden sm:grid grid-cols-3 bg-slate-50 px-5 py-3 text-sm font-semibold text-[#334155] border-b">
            <div>Factor</div>
            <div>Traditional Iodine</div>
            <div className="text-[var(--color-brand-blue)]">Recon HOCl (ECActiv)</div>
          </div>

          {/* Rows */}
          {[
            ['Cost per ready-to-use gallon', 'High & volatile ($1.80–$3.50+)', 'Pennies — typically $0.08–$0.15'],
            ['Freshness', 'Shipped and stored — can degrade', 'Generated on demand, always fresh'],
            ['Efficacy', 'Good broad-spectrum kill', 'Fast kill, highly effective against mastitis pathogens'],
            ['Supply reliability', 'Dependent on deliveries & price spikes', 'You control production — never run out'],
            ['Cow comfort', 'Can dry or irritate teats over time', 'Gentle on teat skin, excellent condition'],
            ['Handling & storage', 'Hazardous, heavy drums/totes', 'Make only what you need, minimal storage'],
            ['Environmental impact', 'Chemical residues & transport', 'Biodegradable, minimal footprint'],
          ].map(([factor, iodine, hocl], idx) => (
            <div key={idx} className="compare-row">
              <div className="font-medium text-[#334155]">{factor}</div>
              <div className="flex items-start gap-2 text-[#64748b]">
                <X className="w-4 h-4 mt-0.5 text-red-500/70 shrink-0" /> {iodine}
              </div>
              <div className="flex items-start gap-2 text-[var(--color-brand-blue)] font-medium">
                <Check className="w-4 h-4 mt-0.5 text-[#15803d] shrink-0" /> {hocl}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-center mt-3 text-[#64748b]">Data based on field experience and customer reports across hundreds of dairies.</p>
      </section>

      {/* SAVINGS CALCULATOR */}
      <section id="calculator" className="bg-white border-y py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8 text-center">
            <div className="inline text-[#0f766e] text-sm font-semibold tracking-widest">REAL NUMBERS FOR REAL HERDS</div>
            <h2 className="section-title mt-2">Savings Calculator</h2>
            <p className="mt-3 text-[#475569]">Most farms see 65–85% reduction in pre-dip chemical costs. See what it means for yours.</p>
          </div>

          <SavingsCalculator />
        </div>
      </section>

      {/* WHY FARMERS CHOOSE RECON */}
      <section id="why" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-9">
          <h2 className="section-title">Why farmers choose Recon</h2>
          <p className="mt-2 text-[#475569]">Over 300,000 cows across 16 states rely on Recon ECALogical systems every day.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: DollarSign, title: "Dramatic cost reduction", desc: "Produce pre-dip and parlor wash for a fraction of purchased chemical prices. Most dairies recover their investment in months." },
            { icon: Clock, title: "Always fresh, always available", desc: "No delivery delays. No empty totes. Make exactly what you need, when you need it — 24/7." },
            { icon: Shield, title: "Proven & supported", desc: "Machines engineered for dairy environments. Full warranty, monthly service plan, and remote internet-based support from our Michigan team." },
            { icon: Users, title: "Built by dairy people", desc: "We've been serving producers since 2008. We understand parlor workflows, mastitis prevention, and the real economics of your operation." },
          ].map((benefit, i) => (
            <div key={i} className="card p-6">
              <div className="w-10 h-10 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-4">
                <benefit.icon className="w-5 h-5" />
              </div>
              <div className="font-semibold text-lg tracking-tight mb-2">{benefit.title}</div>
              <p className="text-[14.5px] text-[#475569] leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-white border-y py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="text-[#0f766e] text-sm font-semibold tracking-widest">SIMPLE. AUTOMATED. RELIABLE.</div>
            <h2 className="section-title mt-1">How it works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'We install the machine', desc: 'Our technicians deliver and set up your ECALogical generator with proper water softening and electrical connections.' },
              { num: '2', title: 'Add brine additive', desc: 'Simply load the food-grade salt-based additive into the machine. One container lasts days or weeks depending on usage.' },
              { num: '3', title: 'Machine generates fresh solution', desc: 'Fully automated. The system produces concentrated ECActiv solution on a continuous schedule with zero daily intervention.' },
              { num: '4', title: 'Dilute & use in the parlor', desc: 'Draw concentrate and dilute per label for pre-dip, post-dip, premise wash, calf hutches, or drop hoses. Always fresh. Always effective.' },
            ].map((step, index) => (
              <div key={index} className="step">
                <div className="step-number">{step.num}</div>
                <div className="font-semibold text-lg tracking-tight mb-1.5">{step.title}</div>
                <p className="text-sm text-[#475569] leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 text-center text-sm text-[#475569]">
            Internet-connected for remote monitoring and fast support. Monthly service keeps everything running at peak performance.
          </div>
        </div>
      </section>

      {/* FINAL CTA + CONTACT */}
      <section id="contact" className="py-14 sm:py-16 border-b bg-[#14532d] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter">Ready to cut your chemical costs and never worry about pre-dip supply again?</h2>
          <p className="mt-4 text-lg text-white/80 max-w-prose mx-auto">Talk to a Recon specialist. We'll visit your farm, analyze your current usage, and show you the exact numbers for your herd.</p>

          {/* Lead capture form */}
          <form
            className="mt-8 max-w-md mx-auto bg-white/10 rounded-2xl p-4 sm:p-5 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value || '';
              const herd = (form.elements.namedItem('herd') as HTMLInputElement)?.value || '';
              const notes = (form.elements.namedItem('notes') as HTMLTextAreaElement)?.value || '';
              const body = `Phone: ${phone}\nHerd size: ${herd}\nNotes: ${notes}\n\n(From website landing page)`;
              window.open(`mailto:recon@recontechusa.com?subject=Free%20on-farm%20analysis%20request&body=${encodeURIComponent(body)}`);
            }}
          >
            <div className="text-white/90 text-sm font-semibold mb-3">Request free on-farm analysis</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input name="phone" type="tel" required placeholder="Phone number" className="bg-white text-[#0f172a] rounded-lg px-3 py-2 text-sm" />
              <input name="herd" type="number" placeholder="Herd size (optional)" className="bg-white text-[#0f172a] rounded-lg px-3 py-2 text-sm" />
            </div>
            <textarea name="notes" placeholder="Notes (e.g. current pre-dip cost, questions)" className="mt-3 w-full bg-white text-[#0f172a] rounded-lg px-3 py-2 text-sm h-16 resize-y" />
            <button type="submit" className="mt-3 w-full btn-primary text-base py-2.5">Send request</button>
            <div className="mt-2 text-[11px] text-white/60 text-center">We'll follow up within 1 business day. No obligation.</div>
          </form>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8003384950" className="inline-flex h-14 items-center justify-center rounded-full bg-white text-[#14532d] font-semibold px-9 text-lg hover:bg-white/95 active:bg-white transition">
              Call 800-338-4950
            </a>
            <a href="mailto:recon@recontechusa.com" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-white/70 hover:bg-white/10 font-semibold px-8 text-lg transition">
              Email recon@recontechusa.com
            </a>
          </div>

          <div className="mt-6 text-sm text-white/60">
            Free on-farm analysis • Custom ROI report • No pressure
          </div>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      <Modal
        isOpen={modalOpen === 'single'}
        onClose={closeModal}
        title="Single Cell Machine (C100)"
      >
        {singleCellDetails}
      </Modal>
    </div>
  );
}
