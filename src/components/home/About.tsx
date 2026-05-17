'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { TiltCard } from '@/components/ui/tilt-card/TiltCard';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TITLE = 'Software Engineer';
const NAME = 'Kevin Saephanh';
// Katakana + symbols for a cyberpunk glitch feel
const GLITCH_CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ!@#$%&?<>[]{}|~';

export const About = () => {
  const getYearsOfExp = () => new Date().getFullYear() - 2020;

  // Typewriter for title
  const [displayedTitle, setDisplayedTitle] = useState('');
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayedTitle(TITLE.slice(0, i));
      if (i >= TITLE.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  // Glitch effect for name
  const [glitchName, setGlitchName] = useState(NAME);
  const isGlitching = useRef(false);

  const triggerGlitch = useCallback(() => {
    if (isGlitching.current) return;
    isGlitching.current = true;
    let iterations = 0;
    const interval = setInterval(() => {
      setGlitchName(
        NAME.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (i < iterations) return NAME[i]; // resolved chars trail behind
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        }).join('')
      );
      iterations += 0.55;
      if (iterations > NAME.length) {
        clearInterval(interval);
        setGlitchName(NAME);
        isGlitching.current = false;
      }
    }, 36);
  }, []);

  // Periodic auto-glitch
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timeoutId = setTimeout(() => {
        triggerGlitch();
        schedule();
      }, 5000 + Math.random() * 4000);
    };
    timeoutId = setTimeout(() => { triggerGlitch(); schedule(); }, 3000);
    return () => clearTimeout(timeoutId);
  }, [triggerGlitch]);

  const [first, second] = glitchName.split(' ');

  return (
    <motion.div
      id='about'
      initial='hidden'
      animate='visible'
      className='grid grid-cols-1 md:grid-cols-12 gap-4 mt-6 md:mt-16 fading-border pb-8'
    >
      {/* Profile Pic */}
      <TiltCard
        variants={fadeIn}
        transition={{ delay: 0.1 }}
        className='md:col-span-4 flex-center flex-col p-6 gap-4'
      >
        <Image
          src='/assets/me.jpeg'
          alt='Kevin Saephanh'
          height={220}
          width={220}
          priority
          className='neon-ring object-cover'
        />
        <h3
          className='font-press-start text-sm md:text-base highlight text-center leading-loose cursor-pointer select-none'
          onMouseEnter={triggerGlitch}
        >
          {first}&nbsp;{second}
        </h3>
      </TiltCard>

      {/* Main Bio */}
      <TiltCard
        variants={fadeIn}
        transition={{ delay: 0.2 }}
        className='md:col-span-8 p-6 md:p-8 flex flex-col justify-center gap-4'
      >
        <div className='font-press-start text-sm md:text-base flex items-center gap-0.5 min-h-[1.5em]'>
          <span className='neon-text'>{displayedTitle}</span>
          <span className='neon-text cursor-blink'>_</span>
        </div>
        <p className='text-sm md:text-base leading-relaxed font-normal dark:text-slate-300'>
          Senior Software Engineer with{' '}
          <span className='highlight font-semibold'>{getYearsOfExp()} years of experience</span>{' '}
          specializing in{' '}
          <span className='highlight font-semibold'>architecting and optimizing distributed systems</span>.
          {' '}Off the clock: training MMA and hitting the gym, catching UFC cards, watching anime, getting lost in philosophical sci-fi audiobooks, and exploring aquariums and museums whenever I get the chance.
        </p>
      </TiltCard>

      {/* Years Tile */}
      <TiltCard
        variants={fadeIn}
        transition={{ delay: 0.3 }}
        className='md:col-span-4 p-6 flex-center flex-col gap-2'
      >
        <span className='font-press-start text-4xl md:text-5xl neon-text'>{getYearsOfExp()}+</span>
        <span className='text-sm uppercase tracking-widest font-mono dark:text-slate-400 text-slate-500'>
          Years Experience
        </span>
      </TiltCard>

      {/* Current Role */}
      <TiltCard
        variants={fadeIn}
        transition={{ delay: 0.4 }}
        className='md:col-span-8 p-5 md:p-6 flex items-center overflow-hidden'
      >
        <div className='font-mono text-sm md:text-base leading-loose w-full'>
          <span className='dark:text-slate-500 text-slate-400 text-xs block mb-1'>
            // current role
          </span>
          <span>
            <span className='text-purple-400 dark:text-purple-300'>const</span>{' '}
            <span className='text-cyan-500 dark:text-cyan-300'>role</span>{' '}
            <span className='dark:text-slate-400 text-slate-500'>=</span>{' '}
            <span className='text-yellow-600 dark:text-yellow-300'>&quot;Senior SWE @ </span>
            <span className='text-teal-600 dark:text-teal-300 font-bold'>Capital One</span>
            <span className='text-yellow-600 dark:text-yellow-300'>&quot;</span>
            <span className='dark:text-slate-400 text-slate-500'>;</span>
          </span>
        </div>
      </TiltCard>

      {/* RPG Stat Bars */}
      <TiltCard
        variants={fadeIn}
        transition={{ delay: 0.5 }}
        className='md:col-span-12 p-5 md:p-6'
      >
        <span className='font-mono text-xs dark:text-slate-500 text-slate-400 block mb-4'>
          // stats
        </span>
        <div className='flex flex-col gap-3'>
          {[
            { stat: 'Java / Spring',            value: 95 },
            { stat: 'Python / FastAPI',         value: 95 },
            { stat: 'JavaScript / TypeScript',  value: 85 },
            { stat: 'AWS',                      value: 85 },
            { stat: 'React / Angular',          value: 75 },
            { stat: 'Go',                       value: 75 },
          ].map(({ stat, value }, index) => (
            <div key={stat} className='flex items-center gap-3'>
              <span className='font-mono text-sm dark:text-slate-300 text-slate-600 w-36 shrink-0'>
                {stat}
              </span>
              <div className='flex-1 h-2.5 rounded-sm bg-slate-200 dark:bg-slate-800 overflow-hidden'>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${value}%` }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className='h-full rounded-sm bg-teal-500/70'
                  style={{ boxShadow: '0 0 6px rgba(45,212,191,0.6)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </TiltCard>
    </motion.div>
  );
};
