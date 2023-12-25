'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';

type Props = {
  children?: React.ReactNode;
};

export default function Provider({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
