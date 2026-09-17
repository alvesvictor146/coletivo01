import React from 'react';
import { WHY_DESTINA } from '../../data/destinaData';
import { Eyebrow } from '../Eyebrow';

export const WhyDestinaSection: React.FC = () => {
  return (
    <section className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Eyebrow>Por que DESTINA</Eyebrow>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">UMA OPERAÇÃO ORGANIZADA</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_DESTINA.map(([title, desc]) => (
            <div key={title} className="border-t border-night/20 pt-6">
              <h3 className="text-base uppercase tracking-[0.14em]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
