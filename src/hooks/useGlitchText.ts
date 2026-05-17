import { useState, useEffect, useRef, useCallback } from 'react';

const GLITCH_CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ!@#$%&?<>[]{}|~';

export const useGlitchText = (text: string, trigger: boolean) => {
  const [display, setDisplay] = useState(text);
  const hasRun = useRef(false);
  const isGlitching = useRef(false);

  const runGlitch = useCallback(() => {
    if (isGlitching.current) return;
    isGlitching.current = true;

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < iterations) return text[i];
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join('')
      );
      iterations += 0.55;
      if (iterations > text.length) {
        clearInterval(interval);
        setDisplay(text);
        isGlitching.current = false;
      }
    }, 36);
  }, [text]);

  // Auto-trigger on scroll into view (once)
  useEffect(() => {
    if (!trigger || hasRun.current) return;
    hasRun.current = true;
    runGlitch();
  }, [trigger, runGlitch]);

  return { display, triggerGlitch: runGlitch };
};
