import React from 'react';
import { DESTINATIONS } from '../../data/destinaData';
import { Eyebrow } from '../Eyebrow';
import { MapPin, ArrowRight } from '../Icons';

export const DestinationsSection: React.FC = () => {
  return (
    <section id="destinos" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Eyebrow>Destinos</Eyebrow>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">ESCOLHA SEU DESTINO</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {DESTINATIONS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between border border-border bg-card p-8"
            >
              <div>
                <MapPin className="size-5 text-clay" />
                <h3 className="mt-5 text-2xl tracking-wide">{item.cidade}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.resumo}</p>
                <p className="mt-6 font-display text-2xl">
                  {item.fares[0]?.price}
                  <span className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {' '}
                    / pessoa
                  </span>
                </p>
              </div>
              <a
                href={`#${item.id}`}
                className="mt-8 inline-flex items-center justify-between border border-night/25 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-night hover:text-sand"
              >
                Ir para {item.slug} <ArrowRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
