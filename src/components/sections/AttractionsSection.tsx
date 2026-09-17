import React from 'react';
import { ATTRACTIONS } from '../../data/destinaData';
import { Eyebrow } from '../Eyebrow';

export const AttractionsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Eyebrow>Principais atrativos</Eyebrow>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">O QUE ESPERA POR VOCÊ</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ATTRACTIONS.map((item) => (
            <figure key={item.nome}>
              <img
                src={item.img}
                alt={item.nome}
                width={1024}
                height={768}
                loading="lazy"
                className="h-60 w-full object-cover"
              />
              <figcaption className="mt-4">
                <h3 className="text-lg tracking-wide">{item.nome}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
