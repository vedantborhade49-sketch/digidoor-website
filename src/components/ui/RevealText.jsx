import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function RevealText({ text, elementType = 'h2', className = '', style = {}, delay = 0 }) {
  const ref = useScrollReveal();
  const Element = elementType;
  
  // Handlers for string, array, or complex JSX children
  const lines = Array.isArray(text) ? text : [text];

  return (
    <Element ref={ref} className={`reveal-element ${className}`} style={style}>
      {lines.map((line, idx) => (
        <span key={idx} className="reveal-text-line">
          <span className="reveal-text-inner" style={{ transitionDelay: `${delay + (idx * 0.15)}s` }}>
            {line}
          </span>
        </span>
      ))}
    </Element>
  );
}
