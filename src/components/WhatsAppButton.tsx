import React from 'react';
import { getWhatsAppUrl } from '../data/destinaData';

interface WhatsAppButtonProps {
  message: string;
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'dark';
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  children,
  variant = 'solid',
  className = ''
}) => {
  const variantStyles = {
    solid: 'bg-clay text-primary-foreground hover:bg-night',
    outline: 'border border-sand/50 text-sand hover:bg-sand hover:text-night',
    dark: 'border border-night/25 text-night hover:bg-night hover:text-sand'
  }[variant];

  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${variantStyles} ${className}`}
    >
      {children}
    </a>
  );
};
