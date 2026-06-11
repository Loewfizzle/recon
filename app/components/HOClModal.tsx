'use client';

import React, { useState } from 'react';
import Modal from './Modal';

function ModalContent({ onTalkToSpecialist }: { onTalkToSpecialist: () => void }) {
  return (
    <div className="space-y-7 text-[15px]">

      <section>
        <h4 className="font-semibold text-base tracking-tight mb-3 text-[var(--color-primary)]">What is HOCl?</h4>
        <p className="text-[#334155] leading-relaxed">
          Hypochlorous acid (HOCl) is a weak acid and powerful oxidizing agent that occurs naturally — it is the
          same molecule your own white blood cells produce to fight infection. At the correct pH (between 5 and 7),
          sodium hypochlorite converts to HOCl, which is 80–120x more effective as a biocide than sodium hypochlorite
          alone at the same concentration.
        </p>
      </section>

      <section>
        <h4 className="font-semibold text-base tracking-tight mb-3 text-[var(--color-primary)]">Why it works on dairies</h4>
        <p className="text-[#334155] leading-relaxed">
          At the teat end, bacteria form biofilms that protect them from standard disinfectants. HOCl&apos;s small
          molecular size and neutral charge allow it to penetrate those biofilms and destroy the cell membranes of
          pathogens directly. It is effective against the primary mastitis-causing organisms: Staphylococcus aureus,
          Streptococcus species, E. coli, Klebsiella, and Pseudomonas.
        </p>
      </section>

      <section>
        <h4 className="font-semibold text-base tracking-tight mb-3 text-[var(--color-primary)]">Freshness matters</h4>
        <p className="text-[#334155] leading-relaxed">
          HOCl is inherently unstable — it begins to degrade when exposed to light, heat, and air. Purchased pre-dip
          products lose active concentration sitting in drums and jugs before they ever reach your parlor. Recon&apos;s
          on-site system produces HOCl fresh at every use, ensuring your cows always receive fully active solution.
        </p>
      </section>

      <section>
        <h4 className="font-semibold text-base tracking-tight mb-3 text-[var(--color-primary)]">How Recon produces it</h4>
        <p className="text-[#334155] leading-relaxed">
          The ECALogical machine electrolyzes a salt brine solution to produce sodium hypochlorite concentrate. When
          combined with Recon&apos;s PH Activator at the correct ratio, the pH drops into the optimal range and the
          sodium hypochlorite converts to hypochlorous acid. The result is a fresh, farm-made pre-dip that costs a
          fraction of purchased alternatives.
        </p>
      </section>

      <section>
        <h4 className="font-semibold text-base tracking-tight mb-3 text-[var(--color-primary)]">Safety</h4>
        <p className="text-[#334155] leading-relaxed">
          HOCl is non-toxic, non-irritating at use concentrations, and breaks down into trace salt and water —
          leaving no harmful residues on teat skin or in the milk. It is safe for cows, safe for operators, and
          safe for the environment.
        </p>
      </section>

      <button
        onClick={onTalkToSpecialist}
        className="btn-primary w-full justify-center text-base py-3.5"
      >
        Talk to a Recon Specialist
      </button>
    </div>
  );
}

export default function HOClModal() {
  const [open, setOpen] = useState(false);

  const handleTalkToSpecialist = () => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  };

  return (
    <>
      <div className="mt-8 text-center">
        <button
          onClick={() => setOpen(true)}
          className="btn-secondary px-8 py-3"
        >
          Learn the Science
        </button>
      </div>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="The Science Behind Hypochlorous Acid"
      >
        <ModalContent onTalkToSpecialist={handleTalkToSpecialist} />
      </Modal>
    </>
  );
}
