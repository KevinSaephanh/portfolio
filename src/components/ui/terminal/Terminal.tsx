'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

type Line = { role: 'input' | 'output'; text: string | string[] };

const COMMANDS: Record<string, string | string[]> = {
  help: [
    'Available commands:',
    '  whoami         — who is this guy?',
    '  ls             — list sections',
    '  cat resume.txt — highlights',
    '  sudo hire-me   — make the call',
    '  clear          — clear terminal',
    '  exit           — close terminal',
  ],
  whoami: 'Senior SWE. Builder. Gamer. Currently @ Capital One.',
  ls: 'about/  career/  projects/  contact/',
  'cat resume.txt': [
    'Kevin Saephanh — Software Engineer',
    '─────────────────────────────────',
    'Languages : Java, Python, TypeScript, Go',
    'Cloud     : AWS (Lambda, S3, DynamoDB, SQS)',
    'Frontend  : React, Next.js',
    'Backend   : Spring Boot, Node.js',
    '─────────────────────────────────',
    'Open to full-time opportunities.',
  ],
};

export const Terminal = () => {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([
    { role: 'output', text: 'Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const processCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    const inputLine: Line = { role: 'input', text: raw.trim() };

    if (cmd === 'clear') {
      setLines([]);
      setInput('');
      return;
    }

    if (cmd === 'exit') {
      setLines(prev => [...prev, inputLine]);
      setInput('');
      setTimeout(() => setOpen(false), 300);
      return;
    }

    if (cmd === 'sudo hire-me') {
      setLines(prev => [
        ...prev,
        inputLine,
        {
          role: 'output',
          text: [
            '[sudo] password for recruiter: ••••••••',
            'Access granted. Redirecting to /contact...',
          ],
        },
      ]);
      setInput('');
      setTimeout(() => router.push('/contact'), 1200);
      return;
    }

    const response = COMMANDS[cmd];
    const outputLine: Line = response
      ? { role: 'output', text: response }
      : { role: 'output', text: `bash: ${raw.trim()}: command not found` };

    setLines(prev => [...prev, inputLine, outputLine]);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') processCommand(input);
    if (e.key === 'Escape') setOpen(false);
  };

  return (
    <>
      {/* Collapsed toggle button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key='toggle'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            onClick={() => setOpen(true)}
            className='fixed bottom-6 right-6 z-[9997] hidden md:block font-press-start text-[10px] px-3 py-2 rounded border border-teal-400/60 bg-black/90 text-teal-400 hover:shadow-[0_0_14px_rgba(45,212,191,0.5)] transition-shadow duration-200'
          >
            &gt;_
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded terminal panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className='fixed bottom-6 right-6 z-[9997] hidden md:flex flex-col w-[380px] h-[320px] rounded-xl border border-teal-400/30 bg-black/95 overflow-hidden shadow-[0_0_32px_rgba(45,212,191,0.1)]'
          >
            {/* Header */}
            <div className='flex items-center justify-between px-3 py-2 border-b border-teal-900/40 shrink-0'>
              <span className='font-press-start text-[10px] text-teal-400'>
                &gt;_ terminal
              </span>
              <button
                onClick={() => setOpen(false)}
                className='text-slate-400 hover:text-teal-400 transition-colors font-mono text-base leading-none'
              >
                ×
              </button>
            </div>

            {/* Output area */}
            <div className='flex-1 overflow-y-auto scrollbar p-3 font-mono text-sm space-y-1'>
              {lines.map((line, i) => (
                <div key={i}>
                  {line.role === 'input' ? (
                    <p className='text-teal-300'>
                      <span className='text-teal-600 select-none'>$ </span>
                      {line.text as string}
                    </p>
                  ) : Array.isArray(line.text) ? (
                    (line.text as string[]).map((t, j) => (
                      <p key={j} className='text-slate-400'>
                        {t}
                      </p>
                    ))
                  ) : (
                    <p className='text-slate-400'>{line.text as string}</p>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input row */}
            <div className='flex items-center gap-2 px-3 py-2 border-t border-teal-900/40 shrink-0'>
              <span className='text-teal-600 font-mono text-sm select-none shrink-0'>
                $
              </span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                spellCheck={false}
                autoComplete='off'
                className='terminal-input'
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
