import { useEffect, useState, useCallback } from 'react';

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~';

interface GlitchTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  glitchInterval?: number;
}

export default function GlitchText({ text, className = '', style, glitchInterval = 3000 }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitch = useCallback(() => {
    setIsGlitching(true);
    let iterations = 0;
    const maxIterations = 8;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iterations) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      iterations += 1 / 2;
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, 40);
  }, [text]);

  useEffect(() => {
    const timer = setInterval(glitch, glitchInterval);
    return () => clearInterval(timer);
  }, [glitch, glitchInterval]);

  return (
    <span className={`glitch-text ${isGlitching ? 'glitching' : ''} ${className}`} style={style}>
      <span className="glitch-text-original">{displayText}</span>
      <span className="glitch-text-clone glitch-text-r" aria-hidden="true">{displayText}</span>
      <span className="glitch-text-clone glitch-text-b" aria-hidden="true">{displayText}</span>
    </span>
  );
}
