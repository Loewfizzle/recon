import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.25" strokeLinejoin="round">
                <path d="M12 3L4 8.5V18L12 22L20 18V8.5L12 3Z" />
                <path d="M12 12L20 8.5" />
                <path d="M12 22V12" />
              </svg>
            </div>
            <span className="font-semibold text-white tracking-tight text-xl">RECON</span>
          </div>
          <p className="text-sm text-slate-400 max-w-[18ch]">
            On-site sodium hypochlorite generation for dairy farms since 2008.
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
