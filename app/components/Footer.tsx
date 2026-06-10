import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image 
              src="/logo.png" 
              alt="Recon Technologies" 
              width={0}
              height={0}
              className="h-7 w-auto" 
            />
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
