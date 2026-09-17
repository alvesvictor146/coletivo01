import React from 'react';
import { DESTINATIONS, SPECIAL_DATES_NOTE } from '../../data/destinaData';
import { Eyebrow } from '../Eyebrow';
import { WhatsAppButton } from '../WhatsAppButton';

export const TransportsSection: React.FC = () => {
  return (
    <section id="transportes" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-20 px-5 lg:px-8">
        {DESTINATIONS.map((d) => (
          <div key={d.id} id={d.id} className="scroll-mt-24">
            <Eyebrow>Transportes</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">{d.titulo}</h2>
            <p className="mt-3 text-muted-foreground">Escolha como você quer chegar.</p>

            <div className="mt-8 grid gap-4 border-y border-border py-6 sm:grid-cols-2">
              <div>
                <p className="eyebrow">Saídas de Brasília</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  A partir das <strong className="text-foreground">09h</strong> e{' '}
                  <strong className="text-foreground">12h</strong>
                </p>
              </div>
              <div>
                <p className="eyebrow">Retorno — {d.slug} → Brasília</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  A partir das <strong className="text-foreground">{d.retorno[0]}</strong> e{' '}
                  <strong className="text-foreground">{d.retorno[1]}</strong>
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {d.fares.map((fare) => (
                <article
                  key={fare.id}
                  className="flex flex-col justify-between border border-border bg-card p-8"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                      {fare.label}
                    </p>
                    <p className="mt-5 font-display text-4xl">{fare.price}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {fare.unit}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{fare.note}</p>
                  </div>
                  <WhatsAppButton message={fare.message} className="mt-8 w-full">
                    {fare.cta}
                  </WhatsAppButton>
                </article>
              ))}
            </div>

            <div className="mt-6 border-l-2 border-clay bg-secondary/60 p-5">
              <p className="eyebrow">Observação</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {SPECIAL_DATES_NOTE}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
