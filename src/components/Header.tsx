import React, { useState, useEffect } from 'react';
import { NAV_LINKS, DEFAULT_WHATSAPP_MESSAGE, getWhatsAppUrl } from '../data/destinaData';
import { Menu, X, MessageCircle } from './Icons';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'surface-night border-b border-white/10'
          : 'bg-gradient-to-b from-night/70 to-transparent'
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <a href="#inicio" className="min-w-0">
          <span className="font-display text-2xl tracking-[0.3em] text-sand">DESTINA</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.18em] text-sand/75 transition-colors hover:text-ember"
            >
              {item.label}
            </a>
          ))}
          <a
            href={getWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-ember/70 bg-ember/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-ember transition-colors hover:bg-ember hover:text-night"
          >
            <MessageCircle className="size-4 shrink-0" /> WhatsApp
          </a>
        </nav>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
          className="shrink-0 p-2 text-sand lg:hidden"
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 px-5 pb-6 pt-2 lg:hidden">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/5 py-3 text-sm uppercase tracking-[0.18em] text-sand/80"
            >
              {item.label}
            </a>
          ))}
          <a
            href={getWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 bg-ember px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-night"
          >
            <MessageCircle className="size-4" /> WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
};
