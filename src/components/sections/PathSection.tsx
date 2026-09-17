import React from 'react';
import { Eyebrow } from '../Eyebrow';

export const PathSection: React.FC = () => {
  return (
    <section className="surface-night grain">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div>
          <Eyebrow>O caminho</Eyebrow>
          <h2 className="mt-5 text-3xl leading-tight text-sand sm:text-4xl lg:text-5xl">
            A CHAPADA COMEÇA ANTES DA CHEGADA
          </h2>
          <p className="mt-7 text-base leading-relaxed text-sand/75">
            Existe um momento na estrada em que a paisagem começa a mudar. O relevo ganha força, o horizonte se abre e as serras aparecem com suas formas singulares. É quando você percebe que a Chapada está chegando.
          </p>
          <p className="mt-5 font-display text-xl italic text-ember">
            Para a DESTINA, esse momento também faz parte da viagem.
          </p>
        </div>
        <img
          src="/assets/caminho-D-HPQQFl.jpg"
          alt="Vista da estrada descendo em direção às serras da Chapada"
          width={1600}
          height={1008}
          loading="lazy"
          className="h-[320px] w-full object-cover lg:h-[520px]"
        />
      </div>
    </section>
  );
};
