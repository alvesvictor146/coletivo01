import React from 'react';
import { BOARDING_POINTS } from '../../data/destinaData';
import { Eyebrow } from '../Eyebrow';
import { MapPin } from '../Icons';

export const BoardingSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Eyebrow>Embarques</Eyebrow>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">
          SEU EMBARQUE COMEÇA EM BRASÍLIA
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BOARDING_POINTS.map((point) => (
            <div key={point} className="border border-border bg-card p-6">
              <MapPin className="size-4 text-clay" />
              <p className="mt-4 text-sm uppercase tracking-[0.12em]">{point}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Trabalhamos com diferentes pontos de embarque em Brasília. O local exato é confirmado pela equipe no momento da consulta.
        </p>
      </div>
    </section>
  );
};
