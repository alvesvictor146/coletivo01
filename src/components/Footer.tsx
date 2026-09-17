import React from 'react';
import { DEFAULT_WHATSAPP_MESSAGE } from '../data/destinaData';
import { MessageCircle } from './Icons';
import { WhatsAppButton } from './WhatsAppButton';

export const Footer: React.FC = () => {
  return (
    <footer className="surface-night border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-display text-2xl tracking-[0.3em] text-sand">DESTINA</p>
          <p className="mt-3 font-display text-base italic text-sand/70">
            Seu destino começa no caminho.
          </p>
          <p className="mt-6 max-w-md text-sm text-sand/55">
            Transporte compartilhado, privativo e soluções para grupos entre Brasília e a Chapada dos Veadeiros.
          </p>
        </div>
        <div className="flex items-start">
          <WhatsAppButton message={DEFAULT_WHATSAPP_MESSAGE} variant="outline">
            <MessageCircle className="size-4" /> WhatsApp
          </WhatsAppButton>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs uppercase tracking-[0.18em] text-sand/40">
        © {new Date().getFullYear()} DESTINA
      </div>
    </footer>
  );
};
