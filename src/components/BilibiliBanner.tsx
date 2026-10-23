import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Play, Users, Eye, Heart } from 'lucide-react';

export default function BilibiliBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const bilibiliUrl = 'https://space.bilibili.com/237167264';

  return (
    <section ref={ref} className="relative w-full py-20 md:py-28" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div
          className="glass-card p-8 md:p-12 relative overflow-hidden"
          style={{
            borderRadius: '24px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10" style={{ background: 'radial-gradient(circle, #FB7299, transparent 70%)' }} />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-label !mb-0">Bilibili Channel / B站频道</span>
                  <span className="px-2 py-0.5 text-[8px] font-['Roboto_Mono',monospace] tracking-wider rounded-full" style={{ background: 'rgba(251, 114, 153, 0.12)', color: '#FB7299' }}>LIVE</span>
                </div>
                <h2 className="font-['DM_Serif_Display','Noto_Serif_SC',serif] text-3xl md:text-4xl mb-3" style={{ color: 'var(--text-primary)' }}>
                  游戏与 AI 探索频道
                </h2>
                <p className="text-sm max-w-lg" style={{ color: 'var(--text-muted)' }}>
                  分享 AI 游戏制作心得、行业观察、项目复盘与技术实验。用视频记录 AI 与游戏交汇的每一个有趣瞬间。
                </p>
              </div>
              <a
                href={bilibiliUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn inline-flex items-center gap-2 shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #FB7299, #FF85A7)',
                  color: 'white',
                  fontWeight: 600,
                }}
              >
                <ExternalLink size={12} />
                访问 B站主页
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Play, label: 'VIDEO COUNT', value: '50+', color: '#FB7299' },
                { icon: Users, label: 'FOLLOWERS', value: 'GROWING', color: '#00F0C8' },
                { icon: Eye, label: 'VIEWS', value: 'ACTIVE', color: '#A855F7' },
                { icon: Heart, label: 'INTERACTIONS', value: 'HIGH', color: '#EC4899' },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="glass-card p-4 text-center" style={{ borderRadius: '16px' }}>
                    <Icon size={16} className="mx-auto mb-2" style={{ color: s.color }} />
                    <span className="font-['Roboto_Mono',monospace] text-lg font-bold block mb-1" style={{ color: s.color }}>{s.value}</span>
                    <span className="text-[8px] font-['Roboto_Mono',monospace] tracking-wider" style={{ color: 'var(--text-muted)' }}>{s.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="glass-card p-5 flex items-center gap-4" style={{ borderRadius: '16px', borderLeft: '3px solid #FB729940' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #FB7299, #FF85A7)' }}>
                <Play size={20} style={{ color: 'white' }} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>最新动态</h4>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>持续更新 AI 游戏制作、产品设计与行业观察相关内容</p>
              </div>
              <a href={bilibiliUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-[10px] font-['Roboto_Mono',monospace] tracking-wider rounded-lg shrink-0 transition-all duration-300 hover:scale-105" style={{ background: 'rgba(251,114,153,0.15)', color: '#FB7299', border: '1px solid rgba(251,114,153,0.3)' }}>
                WATCH NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
