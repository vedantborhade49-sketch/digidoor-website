import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SectionEyebrow({ number, title, className = '' }) {
  const ref = useScrollReveal();
  
  return (
    <div ref={ref} className={`reveal-element flex items-center gap-4 mb-12 ${className}`}>
      <span className="label tracking-wide">
        {number} <span style={{ opacity: 0.5 }}>/</span> {title}
      </span>
      <span className="eyebrow-line"></span>
    </div>
  );
}
