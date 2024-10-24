'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

type Props = {
  children?: ReactNode;
};

export default function Provider({ children }: Props) {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
}
