import { useEffect, useRef, useState } from 'react';

export default function LabVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative w-full py-20 md:py-28" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <span className="section-label block">Demo Reel / 演示片段</span>
          <h2 className="font-['DM_Serif_Display','Noto_Serif_SC',serif] text-3xl md:text-4xl mb-3" style={{ color: 'var(--text-primary)' }}>实验影像</h2>
        </div>
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.98)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            border: '1px solid var(--border-color)',
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
            zIndex: 1,
          }} />
          <video
            className="w-full aspect-video object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/videos/lab-poster.jpg"
          >
            <source src="/videos/lab-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-4 left-4 z-10">
            <span className="font-['Roboto_Mono',monospace] text-[10px] tracking-wider" style={{ color: 'var(--text-muted)' }}>
              LAB FOOTAGE / 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
