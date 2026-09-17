import React from 'react';

export const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <p className="eyebrow">{children}</p>;
};
