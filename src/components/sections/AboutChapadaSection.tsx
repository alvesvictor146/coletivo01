import React from 'react';
import { Eyebrow } from '../Eyebrow';

export const AboutChapadaSection: React.FC = () => {
  return (
    <section id="a-chapada" className="mx-auto max-w-4xl px-5 py-20 text-center lg:py-28">
      <Eyebrow>A Chapada dos Veadeiros</Eyebrow>
      <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
        Cerca de 230 km de Brasília
      </h2>
      <div className="rule-line mx-auto mt-8 w-32" />
      <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
        Conhecida pelas cachoeiras, cânions, vales, trilhas, Cerrado e paisagens únicas, a Chapada dos Veadeiros reúne alguns dos cenários mais marcantes do Centro-Oeste brasileiro.
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        A distância varia conforme o destino escolhido.
      </p>
    </section>
  );
};
