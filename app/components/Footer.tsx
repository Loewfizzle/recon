'use client';

import React from 'react';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            {/* Inline SVG American flag — 13 stripes, blue canton, 50 stars */}
            <svg
              viewBox="0 0 190 100"
              className="w-16 h-[34px] rounded-sm shadow-sm"
              aria-label="American flag"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Red base */}
              <rect width="190" height="100" fill="#B22234" />
              {/* 6 white stripes (even-indexed: 1,3,5,7,9,11) */}
              {[1,3,5,7,9,11].map(i => (
                <rect key={i} y={i * 100/13} width="190" height={100/13} fill="#FFFFFF" />
              ))}
              {/* Blue canton: 40% wide, covers top 7 stripes */}
              <rect width="76" height={700/13} fill="#3C3B6E" />
              {/* 50 stars — 5 rows of 6 (odd rows) + 4 rows of 5 (even rows) */}
              {/* x: col * 76/12 — y: row * (700/13)/10 */}
              {[1,3,5,7,9].flatMap(row =>
                [1,3,5,7,9,11].map(col => (
                  <circle key={`r${row}c${col}`} cx={76/12*col} cy={(700/13)/10*row} r={2} fill="#FFFFFF" />
                ))
              )}
              {[2,4,6,8].flatMap(row =>
                [2,4,6,8,10].map(col => (
                  <circle key={`r${row}c${col}`} cx={76/12*col} cy={(700/13)/10*row} r={2} fill="#FFFFFF" />
                ))
              )}
            </svg>
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
