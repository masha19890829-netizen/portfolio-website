import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Zap, Gamepad2, Cpu, Sparkles } from 'lucide-react';
import ConstellationCanvas from '@/components/ConstellationCanvas';
import GlitchText from '@/components/GlitchText';
import Typewriter from '@/components/Typewriter';
import TiltCard from '@/components/TiltCard';
import WaveBar from '@/components/WaveBar';
import { heroTags, bioText } from '@/data/siteData';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [bioTyped, setBioTyped] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => { const t = setTimeout(() => setMounted(true), 300); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({ x: ((e.clientX - rect.left) / rect.width - 0.5) * 20, y: ((e.clientY - rect.top) / rect.height - 0.5) * 20 });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const tagColors = ['rgba(0,240,200,0.12)','rgba(168,85,247,0.12)','rgba(236,72,153,0.12)','rgba(59,130,246,0.12)','rgba(245,158,11,0.12)','rgba(0,240,200,0.12)','rgba(168,85,247,0.12)','rgba(236,72,153,0.12)'];
  const tagTextColors = ['#00F0C8','#A855F7','#EC4899','#3B82F6','#F59E0B','#00F0C8','#A855F7','#EC4899'];

  return (
    <section ref={heroRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <ConstellationCanvas />

      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, var(--bg-primary) 100%)' }} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full opacity-[0.06]" style={{ top: '10%', left: '60%', background: 'radial-gradient(circle, var(--neon-cyan), transparent 70%)', transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`, transition: 'transform 0.3s ease-out' }} />
        <div className="absolute w-80 h-80 rounded-full opacity-[0.05]" style={{ top: '50%', left: '10%', background: 'radial-gradient(circle, var(--neon-purple), transparent 70%)', transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`, transition: 'transform 0.3s ease-out' }} />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
              <span className="section-label block mb-5">AI Game & Product Lab / 周文迪</span>
            </div>

            <div className="mb-6" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease 0.15s' }}>
              <GlitchText text="Masha Zhou" className="font-['DM_Serif_Display','Noto_Serif_SC',serif] text-5xl md:text-7xl lg:text-8xl block" glitchInterval={3500} />
              <div className="flex items-center gap-3 mt-3">
                <div className="h-px w-12" style={{ background: 'linear-gradient(to right, var(--neon-cyan), transparent)' }} />
                <span className="font-['Roboto_Mono',monospace] text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--text-muted)' }}>AI Producer & Researcher</span>
              </div>
            </div>

            <div className="mb-8 min-h-[4em]" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.8s ease 0.3s' }}>
              <Typewriter text={bioText} speed={35} className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', 'Noto Sans SC', sans-serif" }} onComplete={() => setBioTyped(true)} />
              <span className={`terminal-cursor inline-block ml-1 align-middle ${bioTyped ? 'opacity-0' : ''}`} style={{ width: '8px', height: '1em' }} />
            </div>

            <div className="flex flex-wrap gap-2 mb-10" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.9s ease 0.45s' }}>
              {heroTags.map((tag, i) => (
                <span key={tag} className="px-3 py-1.5 text-[10px] font-['Roboto_Mono',monospace] tracking-wider rounded-full transition-all duration-300 hover:scale-105" style={{ background: tagColors[i], color: tagTextColors[i], border: `1px solid ${tagTextColors[i]}20` }}>{tag}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: 'all 1s ease 0.6s' }}>
              <Link to="/about" className="neon-btn neon-btn-solid inline-flex items-center gap-2">
                <ArrowRight size={14} /> 查看我的简历
              </Link>
              <Link to="/projects" className="neon-btn neon-btn-outline inline-flex items-center gap-2">浏览项目库</Link>
            </div>
          </div>

          <div className="lg:col-span-2" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(30px)', transition: 'all 1.1s ease 0.5s' }}>
            <TiltCard tiltAmount={6} glareOpacity={0.08}>
              <div className="glass-card p-6 md:p-8 relative overflow-hidden" style={{ borderRadius: '24px' }}>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10" style={{ background: 'radial-gradient(circle, var(--neon-cyan), transparent 70%)' }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <Zap size={14} style={{ color: 'var(--neon-cyan)' }} />
                    <span className="font-['Roboto_Mono',monospace] text-[10px] tracking-wider" style={{ color: 'var(--text-muted)' }}>ACTIVE STATS / 实时数据</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[{ icon: Gamepad2, label: 'GAME EXP', value: '16+ Y', color: '#00F0C8' }, { icon: Cpu, label: 'AI PROJECTS', value: '9', color: '#A855F7' }, { icon: Sparkles, label: 'DOWNLOADS', value: '10亿+', color: '#EC4899' }, { icon: Zap, label: 'STAGE', value: 'BETA', color: '#3B82F6' }].map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <div key={stat.label} className="glass-card p-4 text-center" style={{ borderRadius: '16px', background: 'rgba(255,255,255,0.02)' }}>
                          <Icon size={16} className="mx-auto mb-2" style={{ color: stat.color }} />
                          <span className="font-['Roboto_Mono',monospace] text-lg font-bold block mb-1" style={{ color: stat.color }}>{stat.value}</span>
                          <span className="text-[8px] font-['Roboto_Mono',monospace] tracking-wider" style={{ color: 'var(--text-muted)' }}>{stat.label}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="h-px mb-5" style={{ background: 'linear-gradient(to right, var(--border-color), transparent)' }} />
                  <div className="flex items-center justify-center gap-1 h-8">
                    <WaveBar count={20} barWidth={3} gap={3} />
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
