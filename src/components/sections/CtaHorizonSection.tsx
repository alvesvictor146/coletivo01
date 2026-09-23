import React from 'react';
import { ArrowRight } from '../Icons';
import { WhatsAppButton } from '../WhatsAppButton';

export const CtaHorizonSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src="./assets/cta-horizonte-CVWEc-a7.jpg"
        alt="Estrada ao entardecer em direção às serras da Chapada"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-night/70" />
      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center lg:py-40">
        <h2 className="text-3xl leading-tight text-sand sm:text-5xl">
          A CHAPADA ESTÁ NO HORIZONTE.
        </h2>
        <p className="mt-4 font-display text-xl italic text-ember">
          Seu destino começa no caminho.
        </p>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-sand/75">
          Escolha seu destino, consulte a disponibilidade e deixe a estrada com a DESTINA.
        </p>
        <WhatsAppButton
          message="Olá! Quero viajar de Brasília para a Chapada dos Veadeiros. Gostaria de consultar as opções de transporte."
          className="mt-10"
        >
          Quero viajar <ArrowRight className="size-4" />
        </WhatsAppButton>
      </div>
    </section>
  );
};
