import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';
import { todayQuestImages } from '@/data/siteData';

export default function TodayQuestGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => setLightbox((prev) => (prev !== null ? (prev + 1) % todayQuestImages.length : null));
  const prevImage = () => setLightbox((prev) => (prev !== null ? (prev - 1 + todayQuestImages.length) % todayQuestImages.length : null));

  return (
    <section ref={ref} className="relative w-full py-20 md:py-28" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-label !mb-0">App Design / 应用设计</span>
            <span className="px-2 py-0.5 text-[8px] font-['Roboto_Mono',monospace] tracking-wider rounded-full" style={{ background: 'rgba(236, 72, 153, 0.12)', color: 'var(--neon-pink)' }}>DESIGN SYSTEM</span>
          </div>
          <h2 className="font-['DM_Serif_Display','Noto_Serif_SC',serif] text-3xl md:text-4xl mb-3" style={{ color: 'var(--text-primary)' }}>今天怎么玩</h2>
          <p className="text-sm max-w-lg" style={{ color: 'var(--text-muted)' }}>
            AI 驱动的日常探索应用设计。通过 AI 推荐每日趣味任务，让用户发现生活中的小确幸。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {todayQuestImages.map((img, index) => (
            <div
              key={img}
              className="glass-card overflow-hidden cursor-pointer group"
              style={{
                borderRadius: '20px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${index * 150}ms`,
              }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '9/16' }}>
                <img
                  src={img}
                  alt={`今天怎么玩设计图 ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ background: 'rgba(11,15,26,0.6)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                    <Smartphone size={20} style={{ color: 'var(--neon-cyan)' }} />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <span className="font-['Roboto_Mono',monospace] text-[10px] tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  SCREEN {String(index + 1).padStart(2, '0')} / {String(todayQuestImages.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(11, 15, 26, 0.95)', backdropFilter: 'blur(20px)' }}
          onClick={closeLightbox}
        >
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 md:left-8 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid var(--border-color)' }}>
            <ChevronLeft size={20} style={{ color: 'var(--text-primary)' }} />
          </button>
          <img
            src={todayQuestImages[lightbox]}
            alt={`今天怎么玩设计图 ${lightbox + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 md:right-8 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid var(--border-color)' }}>
            <ChevronRight size={20} style={{ color: 'var(--text-primary)' }} />
          </button>
          <button onClick={closeLightbox} className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid var(--border-color)' }}>
            <X size={18} style={{ color: 'var(--text-primary)' }} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {todayQuestImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  background: i === lightbox ? 'var(--neon-cyan)' : 'var(--text-muted)',
                  opacity: i === lightbox ? 1 : 0.4,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
