import { useEffect, useRef, useState } from 'react';
import { ArrowRight, FileText, BarChart3, Lightbulb, Wand2 } from 'lucide-react';
import { scrollArticles } from '@/data/siteData';

export default function PaperScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const icons = [FileText, BarChart3, Lightbulb, Wand2];
  const colors = ['#00F0C8', '#A855F7', '#EC4899', '#3B82F6'];

  return (
    <section ref={ref} className="relative w-full py-20 md:py-28" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span className="section-label block">Essays / 观点文章</span>
          <h2 className="font-['DM_Serif_Display','Noto_Serif_SC',serif] text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>Paper Scroll</h2>
        </div>

        <div className="relative" style={{ height: '420px', perspective: '1200px' }}>
          {scrollArticles.map((article, index) => {
            const Icon = icons[index % icons.length];
            const color = colors[index % colors.length];
            const yOffset = index * 12;
            const zOffset = index * -40;

            return (
              <div
                key={article.id}
                className="absolute w-full"
                style={{
                  top: `${index * 90}px`,
                  transform: `translateY(${yOffset}px) translateZ(${zOffset}px)`,
                  zIndex: scrollArticles.length - index,
                  opacity: visible ? 1 : 0,
                  transition: `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 150}ms`,
                }}
              >
                <div
                  className="glass-card p-6 flex items-center justify-between gap-4 group cursor-pointer"
                  style={{ borderRadius: '16px', borderLeft: `3px solid ${color}40` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}10` }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{article.title}</h3>
                      <div className="flex items-center gap-3">
                        <span className="font-['Roboto_Mono',monospace] text-[9px] tracking-wider" style={{ color: 'var(--text-muted)' }}>{article.date}</span>
                        <span className="text-[9px] font-['Roboto_Mono',monospace] px-2 py-0.5 rounded-full" style={{ background: `${color}10`, color }}>{article.category}</span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={14} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" style={{ color: 'var(--text-muted)' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
