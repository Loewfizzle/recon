'use client';

import React from 'react';
import Image from 'next/image';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            {/* American flag icon (replaces logo in footer) - larger on mobile */}
            <div
              className="w-16 h-8 flex-shrink-0 overflow-hidden"
              aria-hidden="true"
            >
              <Image
                src="/usa-flag.png"
                alt=""
                width={64}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="text-sm text-slate-400 max-w-[26ch] leading-snug">
            Proudly engineered and made in the USA
          </p>
        </div>

        <div>
          <div className="uppercase tracking-[1px] text-xs font-semibold text-slate-400 mb-3">Products</div>
          <ul className="space-y-[9px] text-sm">
            <li><button onClick={() => scrollTo('machines')} className="hover:text-white transition">Single Cell Machine</button></li>
            <li><button onClick={() => scrollTo('machines')} className="hover:text-white transition">Dual Cell Machine</button></li>
            <li><button onClick={() => scrollTo('comparison')} className="hover:text-white transition">HOCl Pre-Dip</button></li>
          </ul>
        </div>

        <div>
          <div className="uppercase tracking-[1px] text-xs font-semibold text-slate-400 mb-3">Company</div>
          <ul className="space-y-[9px] text-sm">
            <li><button onClick={() => scrollTo('why')} className="hover:text-white transition">Why Farmers Choose Us</button></li>
            <li><button onClick={() => scrollTo('how')} className="hover:text-white transition">How It Works</button></li>
            <li><button onClick={() => scrollTo('calculator')} className="hover:text-white transition">Savings Calculator</button></li>
          </ul>
        </div>

        <div>
          <div className="uppercase tracking-[1px] text-xs font-semibold text-slate-400 mb-3">Contact</div>
          <div className="space-y-1 text-sm">
            <a href="tel:8003384950" className="block font-semibold text-white hover:underline">800-338-4950</a>
            <a href="mailto:recon@recontechusa.com" className="block hover:text-white transition">recon@recontechusa.com</a>
            <div className="pt-1 text-slate-400">Grand Rapids, Michigan</div>
            <div className="text-[13px] pt-2 text-slate-500">Serving dairy producers across the U.S. since 2008</div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500 px-4">
        © {new Date().getFullYear()} Recon Technologies, LLC. All rights reserved. Built for the men and women who milk cows.
      </div>
    </footer>
  );
}
