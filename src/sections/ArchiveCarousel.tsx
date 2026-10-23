import { useState, useEffect, useRef, useCallback } from 'react';
import { carouselProjects } from '@/data/siteData';

export default function ArchiveCarousel() {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startRotation.current = rotation;
  }, [rotation]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startX.current;
    setRotation(startRotation.current + deltaX * 0.15);
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    const handleGlobalMouseUp = () => { isDragging.current = false; };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const getCardStyle = (index: number) => {
    const angle = (360 / carouselProjects.length) * index + rotation;
    const radian = (angle * Math.PI) / 180;
    const radius = 450;
    const x = Math.sin(radian) * radius;
    const z = Math.cos(radian) * radius;
    const isActive = activeIndex === index;

    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${-angle}deg) scale(${isActive ? 1.1 : 1})`,
      opacity: z > -100 ? 1 : 0.3,
      filter: z > -100 ? 'brightness(1)' : 'brightness(0.5)',
      zIndex: Math.round(z + 500),
    };
  };

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-12">
        <span className="section-label block">Research Archive / 研究档案</span>
        <h2 className="font-['DM_Serif_Display','Noto_Serif_SC',serif] text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>
          Archive
        </h2>
      </div>

      <div
        ref={containerRef}
        className="carousel-container cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="card-list"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          {carouselProjects.map((project, index) => (
            <div
              key={project.id}
              className="carousel-card"
              style={getCardStyle(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="glow" />
              <span className="font-['Roboto_Mono',monospace] text-[10px] tracking-wider mb-4 block" style={{ color: 'var(--text-muted)' }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-['Noto_Serif_SC',serif] text-xl mb-2" style={{ color: 'var(--text-primary)' }}>
                {project.title}
              </h3>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{project.subtitle}</p>
              <div className="mt-auto pt-4">
                <div className="h-px w-full" style={{ background: 'var(--border-color)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-[10px] font-['Roboto_Mono',monospace] mt-8" style={{ color: 'var(--text-muted)' }}>
        DRAG TO ROTATE / 拖拽旋转
      </p>
    </section>
  );
}
