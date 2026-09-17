import React from 'react';
import { Eyebrow } from '../Eyebrow';
import { WhatsAppButton } from '../WhatsAppButton';

export const RoundTripSection: React.FC = () => {
  return (
    <section className="surface-night">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Eyebrow>Ida e volta</Eyebrow>
            <h2 className="mt-5 text-3xl text-sand sm:text-4xl">VAI E VOLTA?</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-sand/75">
              Se você já sabe quando volta, consulte também a disponibilidade para o seu retorno. Os valores apresentados são referentes a cada trecho.
            </p>
          </div>
          <WhatsAppButton
            message="Olá! Gostaria de consultar ida e volta entre Brasília e a Chapada dos Veadeiros. Destino: Data de ida: Data de volta: Passageiros:"
            variant="outline"
          >
            Consultar ida e volta
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};
