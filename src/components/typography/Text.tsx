"use client";

import React, { ReactNode } from 'react';

type TextProps = {
  children: ReactNode;
  variant?: 'heading' | 'body';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
};

export default function Text({
  children,
  variant = 'body',
  className = '',
  as: Component = 'p',
}: TextProps) {
  const fontFamily = variant === 'heading' 
    ? 'var(--font-big-shoulders)' 
    : 'var(--font-roboto)';

  return (
    <Component 
      className={className}
      style={{ fontFamily }}
    >
      {children}
    </Component>
  );
} 