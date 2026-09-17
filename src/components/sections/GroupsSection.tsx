import React from 'react';
import { Eyebrow } from '../Eyebrow';
import { Users, Bus } from '../Icons';
import { WhatsAppButton } from '../WhatsAppButton';

export const GroupsSection: React.FC = () => {
  return (
    <section className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Eyebrow>Grupos</Eyebrow>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">VIAJANDO EM GRUPO?</h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Para grupos, empresas, eventos e viagens personalizadas, a DESTINA também oferece soluções sob medida.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="border border-border bg-card p-8">
            <Users className="size-5 text-clay" />
            <h3 className="mt-5 text-2xl tracking-wide">VANS</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Para famílias, grupos e operações personalizadas.
            </p>
          </div>
          <div className="border border-border bg-card p-8">
            <Bus className="size-5 text-clay" />
            <h3 className="mt-5 text-2xl tracking-wide">ÔNIBUS EXECUTIVO</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Para grupos maiores, empresas, eventos e operações especiais.
            </p>
          </div>
        </div>

        <WhatsAppButton
          message="Olá! Gostaria de solicitar um orçamento de transporte para grupo. Origem: Brasília. Destino: Data: Número de passageiros:"
          className="mt-10"
        >
          Solicitar orçamento
        </WhatsAppButton>
      </div>
    </section>
  );
};
