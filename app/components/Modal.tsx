'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // Close on ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b px-5 py-4 bg-white rounded-t-2xl">
          <h3 id="modal-title" className="font-semibold text-lg tracking-tight pr-8">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-5 sm:p-6 text-[15px] leading-relaxed text-[#334155]">
          {children}
        </div>
        <div className="p-5 pt-0 sm:px-6">
          <button
            onClick={onClose}
            className="btn-primary w-full justify-center"
          >
            Close
          </button>
          <p className="text-center text-xs text-[#64748b] mt-3">
            Call <a href="tel:8003384950" className="font-semibold text-[#14532d] underline underline-offset-2">800-338-4950</a> for a custom quote and on-farm demo.
          </p>
        </div>
      </div>
    </div>
  );
}
