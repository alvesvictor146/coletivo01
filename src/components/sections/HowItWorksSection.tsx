import React from 'react';
import { FOUR_STEPS } from '../../data/destinaData';
import { Eyebrow } from '../Eyebrow';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Eyebrow>Como funciona</Eyebrow>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">QUATRO PASSOS</h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FOUR_STEPS.map(([title, desc], index) => (
            <div key={title}>
              <p className="font-display text-5xl text-clay/40">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 text-base uppercase tracking-[0.14em]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-clay bg-secondary/60 p-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            A solicitação pelo site não significa confirmação automática da viagem. A disponibilidade é controlada internamente pela nossa equipe e confirmada no atendimento.
          </p>
        </div>
      </div>
    </section>
  );
};
