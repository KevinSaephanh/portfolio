'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingBar } from '@/components/ui/loading-bar/LoadingBar';
import { Scene } from '@/components/ui/scene/Scene';
import { Projects } from '@/components/home/Projects';
import { Career } from '@/components/home/Career';
import { About } from '@/components/home/About';
import { GlbModel } from '@/components/ui/scene/GlbModel';
import { useScene } from '@/context/SceneContext';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const { contentVisible } = useScene();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='h-full'>
      {!isLoading && (
        <div
          className='fixed inset-0 -z-[2] bg-cover bg-center pointer-events-none'
          style={{ backgroundImage: "url('/assets/anime-rpg-landscape.jpg')" }}
        />
      )}

      <AnimatePresence mode='wait'>
        {isLoading ? (
          <motion.div
            key='loader'
            className='flex-center flex-col h-full'
            title='3D model credit: https://sketchfab.com/HallowDragon'
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          >
            <Scene autoRotate={true} autoRotateSpeed={2.5}>
              <GlbModel path='/assets/models/dragon.glb' />
            </Scene>
            <LoadingBar onComplete={() => setIsLoading(false)} />
          </motion.div>
        ) : (
          <motion.div
            key='content'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className='fixed inset-0 -z-[1] bg-black pointer-events-none'
              animate={{ opacity: contentVisible ? 0.6 : 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />

            <motion.div
              animate={{ opacity: contentVisible ? 1 : 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ pointerEvents: contentVisible ? 'auto' : 'none' }}
            >
              <div className='relative w-full md:w-4/5 mx-auto px-4'>
                <About />
                <Career />
                <Projects />
              </div>
            </motion.div>

            <AnimatePresence>
              {!scrolled && contentVisible && (
                <motion.div
                  className='fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none z-10'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <span className='text-xs font-mono dark:text-slate-500 text-slate-400'>scroll</span>
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                    className='dark:text-teal-400 text-teal-600 text-lg'
                  >
                    ↓
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
