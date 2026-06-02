'use client';

import { ReactNode, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { Terminal } from '@/components/ui/terminal/Terminal';
import { VoidCrawler } from '@/components/ui/void-crawler/VoidCrawler';
import { SceneProvider } from '@/context/SceneContext';

type Props = {
  children?: ReactNode;
};

export default function Provider({ children }: Props) {
  const [gameOpen, setGameOpen] = useState(false);

  return (
    <ThemeProvider attribute='class'>
      <SceneProvider>
        <Terminal onPlay={() => setGameOpen(true)} />
        <AnimatePresence>
          {gameOpen && <VoidCrawler onClose={() => setGameOpen(false)} />}
        </AnimatePresence>
        {children}
      </SceneProvider>
    </ThemeProvider>
  );
}
