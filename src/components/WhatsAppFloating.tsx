import React from 'react';
import { DEFAULT_WHATSAPP_MESSAGE, getWhatsAppUrl } from '../data/destinaData';
import { MessageCircle } from './Icons';

export const WhatsAppFloating: React.FC = () => {
  return (
    <a
      href={getWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whats text-white shadow-lg shadow-night/30 transition-transform hover:scale-105 lg:hidden"
    >
      <MessageCircle className="size-7" />
    </a>
  );
};
