import React, { useState } from 'react';
import { FAQ_ITEMS } from '../../data/destinaData';
import { Eyebrow } from '../Eyebrow';
import { Plus, Minus } from '../Icons';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-5 text-3xl sm:text-4xl">PERGUNTAS FREQUENTES</h2>

        <div className="mt-10 border-t border-border">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium">{item.q}</span>
                  {isOpen ? (
                    <Minus className="size-4 shrink-0 text-clay" />
                  ) : (
                    <Plus className="size-4 shrink-0 text-clay" />
                  )}
                </button>
                {isOpen && (
                  <p className="pb-6 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
