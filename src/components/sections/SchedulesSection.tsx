import React from 'react';
import { Eyebrow } from '../Eyebrow';
import { Clock } from '../Icons';

export const SchedulesSection: React.FC = () => {
  return (
    <section className="surface-night">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <Eyebrow>Horários</Eyebrow>
        <h2 className="mt-5 text-3xl text-sand sm:text-4xl">HORÁRIOS DE SAÍDA E RETORNO</h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="border-t border-white/15 pt-6">
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-ember">
              <Clock className="size-4" /> Ida — Brasília
            </p>
            <p className="mt-4 font-display text-3xl text-sand">09h · 12h</p>
            <p className="mt-2 text-sm text-sand/65">
              Saídas regulares do transporte compartilhado, a partir desses horários.
            </p>
          </div>
          <div className="border-t border-white/15 pt-6">
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-ember">
              <Clock className="size-4" /> Volta para Brasília
            </p>
            <ul className="mt-4 space-y-2 text-sand/80">
              <li>Alto Paraíso: a partir das 07h e 12h</li>
              <li>São Jorge: a partir das 07h e 12h</li>
              <li>Cavalcante: a partir das 06h e 12h</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-sand/60">
          Os horários são apresentados como “a partir de” e não como horários garantidos. A disponibilidade precisa ser confirmada pela equipe.
        </p>
        <p className="mt-6 font-display text-xl italic text-sand">
          Precisa viajar em outro horário? Consulte nossas opções de transporte privativo.
        </p>
      </div>
    </section>
  );
};
