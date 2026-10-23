import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
}

export default function Typewriter({ text, speed = 40, className = '', style, onComplete }: TypewriterProps) {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    setDisplay('');
    let i = 0;
    const timer = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed, onComplete]);

  return (
    <span className={className} style={style}>
      {display}
    </span>
  );
}
