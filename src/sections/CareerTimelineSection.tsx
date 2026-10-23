import { useEffect, useRef, useState } from 'react';
import {
  CheckCircle2, Briefcase, Award, TrendingUp, Globe,
  Zap, Users, Code2, ChevronRight,
} from 'lucide-react';
import { careerTimeline, type CareerEntry } from '@/data/siteData';
import TiltCard from '@/components/TiltCard';

const companyIcons = [
  Code2, Zap, TrendingUp, Users, Globe, Briefcase, Briefcase,
];
const neonColors = [
  '#00F0C8', '#A855F7', '#EC4899', '#F59E0B', '#3B82F6', '#00F0C8', '#A855F7',
];

function TimelineEntry({ entry, index }: { entry: CareerEntry; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const Icon = companyIcons[index % companyIcons.length];
  const color = neonColors[index % neonColors.length];
  const isLatest = index === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const showHighlights = expanded ? entry.highlights : entry.highlights.slice(0, 3);
  const hasMore = entry.highlights.length > 3;

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 100}ms`,
      }}
    >
      <TiltCard tiltAmount={3} glareOpacity={0.04} className="h-full">
        <div
          className="glass-card p-6 md:p-8 relative overflow-hidden group"
          style={{ borderRadius: '20px' }}
        >
          <div
            className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${color}, ${color}20)`,
              opacity: visible ? 1 : 0,
              transition: `opacity 0.5s ease ${index * 100 + 200}ms`,
            }}
          />

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${color}12`, border: `1px solid ${color}20` }}
            >
              <Icon size={18} style={{ color }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>{entry.company}</h3>
                {isLatest && (
                  <span className="px-2 py-0.5 text-[8px] font-['Roboto_Mono',monospace] tracking-wider rounded-full" style={{ background: `${color}15`, color }}>CURRENT</span>
                )}
              </div>
              <p className="text-xs mt-0.5" style={{ color }}>{entry.role}</p>
            </div>
            <span className="font-['Roboto_Mono',monospace] text-[10px] tracking-wider shrink-0" style={{ color: 'var(--text-muted)' }}>{entry.period}</span>
          </div>

          <div className="h-px mb-5" style={{ background: 'linear-gradient(to right, var(--border-color), transparent)' }} />

          <ul className="flex flex-col gap-2.5">
            {showHighlights.map((h, i) => (
              <li key={i} className="text-xs leading-relaxed flex items-start gap-3" style={{ color: 'var(--text-secondary)' }}>
                <div className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: `${color}10` }}>
                  <CheckCircle2 size={10} style={{ color: `${color}80` }} />
                </div>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {hasMore && (
            <button onClick={() => setExpanded(!expanded)} className="mt-4 flex items-center gap-1.5 text-[10px] font-['Roboto_Mono',monospace] tracking-wider hover:gap-2 transition-all" style={{ color: 'var(--text-muted)' }}>
              <ChevronRight size={12} style={{ transform: expanded ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
              {expanded ? 'COLLAPSE' : `VIEW ALL ${entry.highlights.length} ACHIEVEMENTS`}
            </button>
          )}

          <div className="mt-5 pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[8px] font-['Roboto_Mono',monospace] tracking-wider" style={{ color: 'var(--text-muted)' }}>IMPACT SCORE</span>
              <span className="text-[8px] font-['Roboto_Mono',monospace]" style={{ color }}>{85 + (index % 3) * 5}%</span>
            </div>
            <div className="stat-bar-track">
              <div className="stat-bar-fill" style={{ width: visible ? `${85 + (index % 3) * 5}%` : '0%', background: `linear-gradient(90deg, ${color}30, ${color})`, transitionDelay: `${400 + index * 100}ms` }} />
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}

export default function CareerTimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.05 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative w-full py-20 md:py-28" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-full w-[200%]" style={{ background: 'linear-gradient(to right, transparent, var(--neon-cyan), var(--neon-purple), var(--neon-pink), transparent, transparent, var(--neon-cyan), var(--neon-purple), transparent)', backgroundSize: '50% 100%', animation: visible ? 'border-flow 4s linear infinite' : 'none' }} />
      </div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0, 240, 200, 0.1)', border: '1px solid rgba(0, 240, 200, 0.2)' }}>
              <Briefcase size={18} style={{ color: 'var(--neon-cyan)' }} />
            </div>
          </div>
          <span className="section-label block">Career Archive / 职业档案</span>
          <h2 className="font-['DM_Serif_Display','Noto_Serif_SC',serif] text-3xl md:text-4xl mb-3" style={{ color: 'var(--text-primary)' }}>16 年游戏行业履历</h2>
          <p className="text-sm max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>从阿里巴巴到猎豹移动，从宜乐互娱到冰川网络，从运营走到制作人，从传统游戏走到 AI 赋能。</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.2s' }}>
          {[
            { icon: Briefcase, label: 'COMPANIES', value: '7', color: 'var(--neon-cyan)' },
            { icon: Award, label: 'YEARS EXP', value: '16+', color: 'var(--neon-purple)' },
            { icon: TrendingUp, label: 'PROJECTS', value: '9', color: 'var(--neon-pink)' },
            { icon: Globe, label: 'DOWNLOADS', value: '10亿+', color: 'var(--neon-orange)' },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="glass-card p-4 text-center" style={{ borderRadius: '16px' }}>
                <Icon size={16} className="mx-auto mb-2" style={{ color: s.color }} />
                <span className="font-['Roboto_Mono',monospace] text-xl font-bold block" style={{ color: s.color }}>{s.value}</span>
                <span className="text-[8px] font-['Roboto_Mono',monospace] tracking-wider" style={{ color: 'var(--text-muted)' }}>{s.label}</span>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {careerTimeline.map((entry, index) => (
            <TimelineEntry key={entry.company} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
