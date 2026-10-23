import { useRef, useState, type ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  tiltAmount?: number;
  glareOpacity?: number;
  className?: string;
}

export default function TiltCard({ children, tiltAmount = 5, glareOpacity = 0.1, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -tiltAmount * 2;
    const rotateY = (x - 0.5) * tiltAmount * 2;
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    setGlarePos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg)');
    setGlarePos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="tilt-card-inner relative w-full"
        style={{
          transform: transform,
          transition: 'transform 0.15s ease-out',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] z-10"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glareOpacity}) 0%, transparent 60%)`,
            mixBlendMode: 'overlay',
          }}
        />
        {children}
      </div>
    </div>
  );
}
