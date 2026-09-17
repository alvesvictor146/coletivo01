import React from 'react';
import { Eyebrow } from '../Eyebrow';

export const MysticSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/assets/mistica-BHchRb06.jpg"
        alt="Horizonte do Cerrado ao anoitecer"
        width={1600}
        height={912}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-night/75" />
      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center lg:py-36">
        <Eyebrow>A mística da Chapada</Eyebrow>
        <h2 className="mt-5 text-3xl leading-tight text-sand sm:text-4xl">
          UMA PAISAGEM QUE VAI ALÉM DA PAISAGEM
        </h2>
        <p className="mt-8 text-base leading-relaxed text-sand/75">
          A Chapada dos Veadeiros também carrega uma forte relação com espiritualidade, natureza, silêncio e autoconhecimento. Histórias, tradições, comunidades e a imensidão do Cerrado fazem parte da identidade da região.
        </p>
      </div>
    </section>
  );
};
