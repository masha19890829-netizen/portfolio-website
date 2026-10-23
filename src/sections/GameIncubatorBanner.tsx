import { ExternalLink, Database, BookOpen, MessageSquare, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function GameIncubatorBanner() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative w-full py-20 md:py-28 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-full w-[200%]" style={{ background: 'linear-gradient(to right, transparent, var(--neon-cyan), var(--neon-purple), var(--neon-pink), transparent, transparent, var(--neon-cyan), var(--neon-purple), transparent)', backgroundSize: '50% 100%', animation: visible ? 'border-flow 4s linear infinite' : 'none' }} />
      </div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="glass-card p-8 md:p-12 glow-border-flow relative overflow-hidden" style={{ borderRadius: '24px' }}>
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10" style={{ background: 'radial-gradient(circle, var(--neon-cyan), transparent 70%)' }} />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-label !mb-0">Incubator / 孵化库</span>
                  <span className="px-2 py-0.5 text-[8px] font-['Roboto_Mono',monospace] tracking-wider rounded-full" style={{ background: 'rgba(0, 240, 200, 0.12)', color: 'var(--neon-cyan)' }}>ACTIVE</span>
                </div>
                <h2 className="font-['DM_Serif_Display','Noto_Serif_SC',serif] text-3xl md:text-4xl mb-3" style={{ color: 'var(--text-primary)' }}>5050 Game Innovation Lab</h2>
                <p className="text-sm max-w-lg" style={{ color: 'var(--text-muted)' }}>
                  游戏创新孵化数据库，收录 75+ 可玩样本、1505+ 行业文章，配备 AI 创意验证助手。从灵感发现到 Demo 验证的完整工具链。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Database, label: 'PLAYABLE SAMPLES', value: '75+', color: 'var(--neon-cyan)' },
                { icon: BookOpen, label: 'INDUSTRY ARTICLES', value: '1505+', color: 'var(--neon-purple)' },
                { icon: MessageSquare, label: 'AI COPILOT', value: 'LIVE', color: 'var(--neon-pink)' },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="glass-card p-5" style={{ borderRadius: '16px', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
                    <Icon size={18} className="mb-3" style={{ color: f.color }} />
                    <span className="font-['Roboto_Mono',monospace] text-2xl font-bold block mb-1" style={{ color: f.color }}>{f.value}</span>
                    <span className="text-[9px] font-['Roboto_Mono',monospace] tracking-wider" style={{ color: 'var(--text-muted)' }}>{f.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://5050game.netlify.app/" target="_blank" rel="noopener noreferrer" className="neon-btn inline-flex items-center gap-2" style={{ background: 'linear-gradient(135deg, var(--neon-cyan), #7BA4A8)', color: 'var(--bg-primary)', fontWeight: 600 }}>
                <ExternalLink size={12} /> 访问 5050 网站
              </a>
              <a href="https://github.com/masha19890829-netizen/5050-game-innovation-lab" target="_blank" rel="noopener noreferrer" className="neon-btn neon-btn-outline inline-flex items-center gap-2">
                <Github size={14} /> GitHub 开源仓库
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
