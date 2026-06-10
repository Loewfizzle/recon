import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            {/* American flag icon (replaces logo in footer) */}
            <div 
              className="w-8 h-5 flex-shrink-0 overflow-hidden rounded-sm border border-white/20 shadow-sm" 
              aria-hidden="true"
            >
              <svg 
                viewBox="0 0 190 100" 
                className="w-full h-full" 
              >
                {/* Red field */}
                <rect width="190" height="100" fill="#B22234" />
                {/* White stripes */}
                <rect y="7.69" width="190" height="7.69" fill="#fff" />
                <rect y="23.08" width="190" height="7.69" fill="#fff" />
                <rect y="38.46" width="190" height="7.69" fill="#fff" />
                <rect y="53.85" width="190" height="7.69" fill="#fff" />
                <rect y="69.23" width="190" height="7.69" fill="#fff" />
                <rect y="84.62" width="190" height="7.69" fill="#fff" />
                {/* Blue canton */}
                <rect width="76" height="53.85" fill="#3C3B6E" />
                {/* Simplified stars (dots for small size readability) */}
                <g fill="#fff">
                  {/* Row 1 */}
                  <circle cx="8" cy="6" r="2" />
                  <circle cx="20" cy="6" r="2" />
                  <circle cx="32" cy="6" r="2" />
                  <circle cx="44" cy="6" r="2" />
                  <circle cx="56" cy="6" r="2" />
                  <circle cx="68" cy="6" r="2" />
                  {/* Row 2 */}
                  <circle cx="14" cy="15" r="2" />
                  <circle cx="26" cy="15" r="2" />
                  <circle cx="38" cy="15" r="2" />
                  <circle cx="50" cy="15" r="2" />
                  <circle cx="62" cy="15" r="2" />
                  {/* Row 3 */}
                  <circle cx="8" cy="24" r="2" />
                  <circle cx="20" cy="24" r="2" />
                  <circle cx="32" cy="24" r="2" />
                  <circle cx="44" cy="24" r="2" />
                  <circle cx="56" cy="24" r="2" />
                  <circle cx="68" cy="24" r="2" />
                  {/* Row 4 */}
                  <circle cx="14" cy="33" r="2" />
                  <circle cx="26" cy="33" r="2" />
                  <circle cx="38" cy="33" r="2" />
                  <circle cx="50" cy="33" r="2" />
                  <circle cx="62" cy="33" r="2" />
                  {/* Row 5 */}
                  <circle cx="8" cy="42" r="2" />
                  <circle cx="20" cy="42" r="2" />
                  <circle cx="32" cy="42" r="2" />
                  <circle cx="44" cy="42" r="2" />
                  <circle cx="56" cy="42" r="2" />
                  <circle cx="68" cy="42" r="2" />
                </g>
              </svg>
            </div>
          </div>
          <p className="text-sm text-slate-400 max-w-[22ch]">
            Proudly engineered and made in the USA
          </p>
        </div>

        <div>
          <div className="uppercase tracking-[1px] text-xs font-semibold text-slate-400 mb-3">Products</div>
          <ul className="space-y-[9px] text-sm">
            <li><a href="#machines" className="hover:text-white transition">Single Cell Machine</a></li>
            <li><a href="#machines" className="hover:text-white transition">Dual Cell Machine</a></li>
            <li><a href="#comparison" className="hover:text-white transition">HOCl Pre-Dip</a></li>
          </ul>
        </div>

        <div>
          <div className="uppercase tracking-[1px] text-xs font-semibold text-slate-400 mb-3">Company</div>
          <ul className="space-y-[9px] text-sm">
            <li><a href="#why" className="hover:text-white transition">Why Farmers Choose Us</a></li>
            <li><a href="#how" className="hover:text-white transition">How It Works</a></li>
            <li><a href="#calculator" className="hover:text-white transition">Savings Calculator</a></li>
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
