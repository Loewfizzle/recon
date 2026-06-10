'use client';

import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '#machines', label: 'Machines' },
  { href: '#comparison', label: 'HOCl vs Iodine' },
  { href: '#calculator', label: 'Savings Calculator' },
  { href: '#why', label: 'Why Recon' },
  { href: '#how', label: 'How It Works' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    closeMenu();
    // Smooth scroll is handled by CSS, but ensure close on mobile
    const target = document.querySelector(href);
    if (target) {
      const offset = 70; // account for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      e.preventDefault();
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 group" aria-label="Recon Technologies home">
          <div className="w-9 h-9 rounded-xl bg-[#14532d] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 3L4 8.5V18L12 22L20 18V8.5L12 3Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M12 12L20 8.5" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/>
              <path d="M12 22V12" stroke="white" strokeWidth="1.6"/>
              <circle cx="12" cy="7" r="1.6" fill="#14b8a6"/>
            </svg>
          </div>
          <div className="leading-none">
            <div className="font-semibold tracking-[-0.5px] text-2xl text-[#14532d] group-hover:text-[#0f3d22] transition-colors">RECON</div>
            <div className="text-[10px] font-medium text-[#0f766e] -mt-1 tracking-[1.5px]">TECHNOLOGIES</div>
          </div>
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
            className="flex items-center gap-2 text-sm font-semibold text-[#14532d] hover:text-[#0f3d22] px-3 py-1.5 rounded-full hover:bg-white transition"
          >
            <Phone className="w-4 h-4" />
            800-338-4950
          </a>
          <a
            href="#calculator"
            onClick={(e) => handleNavClick(e, '#calculator')}
            className="btn-primary text-sm px-5 py-2 h-10"
          >
            Calculate Savings
          </a>
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
            <a
              href="#calculator"
              onClick={(e) => handleNavClick(e, '#calculator')}
              className="btn-primary mt-2 justify-center"
            >
              Calculate Your Savings
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
