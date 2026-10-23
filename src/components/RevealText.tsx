import { useEffect, useRef, useState } from 'react';

interface RevealTextProps {
  text: string;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'div';
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
}

export default function RevealText({ text, as: Tag = 'p', className = '', style, stagger = 20 }: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const chars = text.split('');

  return (
    <Tag ref={ref as any} className={className} style={style}>
      {chars.map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(4px)',
            transition: `all 0.4s ease ${i * stagger}ms`,
            whiteSpace: char === ' ' ? 'pre' : undefined,
          }}
        >
          {char}
        </span>
      ))}
    </Tag>
  );
}
