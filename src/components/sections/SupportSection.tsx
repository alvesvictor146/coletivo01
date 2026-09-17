import React from 'react';
import { Eyebrow } from '../Eyebrow';
import { MessageCircle } from '../Icons';
import { WhatsAppButton } from '../WhatsAppButton';

export const SupportSection: React.FC = () => {
  const items = [
    'Atendimento 24 horas',
    'Consulta de disponibilidade',
    'Organização do transporte',
    'Atendimento individual',
    'Atendimento para grupos',
    'Suporte antes da viagem'
  ];

  return (
    <section className="surface-night grain">
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <Eyebrow>Atendimento</Eyebrow>
        <h2 className="mt-5 text-3xl text-sand sm:text-4xl">ATENDIMENTO 24 HORAS</h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-sand/75">
          Do primeiro contato até a viagem, nossa equipe está disponível para orientar, consultar disponibilidade e organizar seu transporte.
        </p>

        <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item}
              className="border-b border-white/10 pb-3 text-sm uppercase tracking-[0.12em] text-sand/80"
            >
              {item}
            </li>
          ))}
        </ul>

        <WhatsAppButton
          message="Olá! Gostaria de falar com a equipe da DESTINA sobre transporte para a Chapada dos Veadeiros."
          variant="outline"
          className="mt-10"
        >
          <MessageCircle className="size-4" /> Falar com a DESTINA
        </WhatsAppButton>
      </div>
    </section>
  );
};
