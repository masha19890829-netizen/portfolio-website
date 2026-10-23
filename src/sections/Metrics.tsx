import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Target, Zap, Globe } from 'lucide-react';
import { metrics } from '@/data/siteData';

const icons = [TrendingUp, Target, Zap, Globe];
const colors = ['#00F0C8', '#A855F7', '#EC4899', '#3B82F6'];

export default function Metrics() {
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, index) => {
            const Icon = icons[index % icons.length];
            const color = colors[index % colors.length];
            return (
              <div
                key={metric.label}
                className="glass-card p-6 md:p-8 text-center"
                style={{
                  borderRadius: '20px',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${index * 100}ms`,
                }}
              >
                <Icon size={20} className="mx-auto mb-3" style={{ color }} />
                <span className="font-['Roboto_Mono',monospace] text-3xl md:text-4xl font-bold block mb-1" style={{ color }}>
                  {metric.value}
                </span>
                <span className="font-['Roboto_Mono',monospace] text-[9px] tracking-wider block" style={{ color: 'var(--text-muted)' }}>
                  {metric.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
