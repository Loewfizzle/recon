'use client';

import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '#machines', label: 'Machines' },
  { href: '#hocl', label: 'HOCl Science' },
  { href: '#comparison', label: 'HOCl vs Iodine' },
  { href: '#how', label: 'How It Works' },
  { href: '#why', label: 'Why Recon' },
  { href: '#calculator', label: 'Savings Calculator' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-24 flex items-center justify-between">
        {/* Logo - full lockup */}
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2.5 group" aria-label="Recon Technologies home">
          <Image
            src="/logo.png"
            alt="Recon Technologies"
            width={759}
            height={281}
            className="h-14 w-auto md:h-16"
            priority
          />
          {/* American flag — mobile only */}
          <svg viewBox="0 0 190 100" className="md:hidden w-12 h-[25px] rounded-sm shadow-sm shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <rect width="190" height="100" fill="#B22234" />
            {[1,3,5,7,9,11].map(i => <rect key={i} y={i * 100/13} width="190" height={100/13} fill="#FFFFFF" />)}
            <rect width="76" height={700/13} fill="#3C3B6E" />
            {[1,3,5,7,9].flatMap(row => [1,3,5,7,9,11].map(col => <circle key={`r${row}c${col}`} cx={76/12*col} cy={(700/13)/10*row} r={2} fill="#FFFFFF" />))}
            {[2,4,6,8].flatMap(row => [2,4,6,8,10].map(col => <circle key={`r${row}c${col}`} cx={76/12*col} cy={(700/13)/10*row} r={2} fill="#FFFFFF" />))}
          </svg>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#475569] hover:text-[#14532d] transition-colors focus-ring rounded px-1 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:8003384950"
            className="flex items-center gap-2 text-sm font-semibold text-[#14532d] hover:text-[#0f3d22] px-3 py-1.5 rounded-full hover:bg-white transition whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            800-338-4950
          </a>
          <button
            type="button"
            onClick={() => document.querySelector('#calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="btn-primary text-[13px] px-4 py-2 h-10"
          >
            Calculate Savings
          </button>
        </div>

        {/* Mobile: Phone + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:8003384950"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#14532d] active:bg-slate-50"
            aria-label="Call Recon Technologies"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#14532d] active:bg-slate-50"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white mobile-menu">
          <div className="px-4 py-3 border-b flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Recon Technologies" 
              width={80} 
              height={30} 
              className="h-6 w-auto" 
            />
          </div>
          <nav className="px-4 py-4 flex flex-col gap-1 text-[15px] font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-3 px-3 text-[#334155] hover:bg-slate-50 rounded-lg active:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-slate-100 my-2" />
            <a
              href="tel:8003384950"
              className="flex items-center gap-2 py-3 px-3 text-[#14532d] font-semibold"
            >
              <Phone className="w-4 h-4" /> Call 800-338-4950
            </a>
            <button
              type="button"
              onClick={() => { closeMenu(); setTimeout(() => document.querySelector('#calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50); }}
              className="btn-primary mt-2 justify-center"
            >
              Calculate Your Savings
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
