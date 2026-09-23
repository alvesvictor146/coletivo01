import React from 'react';
import { ArrowRight } from '../Icons';
import { WhatsAppButton } from '../WhatsAppButton';
import { DEFAULT_WHATSAPP_MESSAGE } from '../../data/destinaData';

export const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src="./assets/hero-estrada-CnbYba5s.jpg"
        alt="Estrada do Cerrado com as serras da Chapada dos Veadeiros no horizonte"
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/70" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 lg:px-8 lg:pb-24">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-ember">
          Brasília → Chapada dos Veadeiros
        </p>
        <h1 className="mt-5 font-display text-6xl leading-[0.95] tracking-[0.08em] text-sand sm:text-7xl lg:text-8xl">
          DESTINA
        </h1>
        <p className="mt-4 font-display text-xl italic text-sand/90 lg:text-2xl">
          Seu destino começa no caminho.
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-sand/75">
          Transporte compartilhado, privativo e soluções personalizadas entre Brasília e a Chapada dos Veadeiros.
        </p>
        <p className="mt-8 font-display text-3xl text-sand lg:text-4xl">
          A partir de R$ 150{' '}
          <span className="font-sans text-sm uppercase tracking-[0.2em] text-sand/60">por pessoa</span>
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton message={DEFAULT_WHATSAPP_MESSAGE}>
            Reservar agora <ArrowRight className="size-4" />
          </WhatsAppButton>
          <WhatsAppButton message={DEFAULT_WHATSAPP_MESSAGE} variant="outline">
            Consultar disponibilidade
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};
