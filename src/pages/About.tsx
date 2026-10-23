import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import {
  ArrowLeft, CheckCircle2, GraduationCap, BookOpen, Sparkles,
  Briefcase, Award, TrendingUp, Globe, Code2, Zap,
} from 'lucide-react';
import RevealText from '@/components/RevealText';
import TiltCard from '@/components/TiltCard';
import {
  aboutBio, skillTags, type SkillTag, careerTimeline, education,
  playerProfiles, coreCapabilities,
} from '@/data/siteData';

function SkillBar({ tag, index }: { tag: SkillTag; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const barColors = ['var(--neon-cyan)', 'var(--neon-purple)', 'var(--neon-pink)', 'var(--neon-blue)', 'var(--neon-orange)'];

  return (
    <div
      ref={ref}
      className="py-4"
      style={{
        borderBottom: '1px solid var(--border-color)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        transition: `all 0.5s ease ${index * 80}ms`,
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{tag.name}</span>
        <span className="font-['Roboto_Mono',monospace] text-[10px]" style={{ color: 'var(--text-muted)' }}>{tag.level}%</span>
      </div>
      <div className="stat-bar-track">
        <div
          className="stat-bar-fill"
          style={{
            width: visible ? `${tag.level}%` : '0%',
            background: `linear-gradient(90deg, ${barColors[index % barColors.length]}60, ${barColors[index % barColors.length]})`,
            transitionDelay: `${index * 80}ms`,
          }}
        />
      </div>
    </div>
  );
}

const careerIcons = [Code2, Zap, TrendingUp, Briefcase, Globe, Briefcase, Briefcase];
const careerColors = [
  '#00F0C8', '#A855F7', '#EC4899', '#F59E0B', '#3B82F6', '#00F0C8', '#A855F7',
];

function AboutCareerEntry({ entry, index }: { entry: typeof careerTimeline[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const Icon = careerIcons[index % careerIcons.length];
  const color = careerColors[index % careerColors.length];
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

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-20px)',
        transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 80}ms`,
      }}
    >
      <div className="flex gap-4 py-5" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
          style={{ background: `${color}10`, border: `1px solid ${color}20` }}
        >
          <Icon size={16} style={{ color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              {entry.company}
            </h3>
            {isLatest && (
              <span
                className="px-2 py-0.5 text-[8px] font-['Roboto_Mono',monospace] tracking-wider rounded-full"
                style={{ background: `${color}15`, color }}
              >
                CURRENT
              </span>
            )}
          </div>
          <p className="text-xs mb-2" style={{ color }}>{entry.role}</p>
          <span className="font-['Roboto_Mono',monospace] text-[9px] tracking-wider block mb-2" style={{ color: 'var(--text-muted)' }}>
            {entry.period}
          </span>
          <ul className="flex flex-col gap-1.5">
            {entry.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="text-xs leading-relaxed flex items-start gap-2" style={{ color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={10} className="shrink-0 mt-0.5" style={{ color: `${color}60` }} />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] font-['Roboto_Mono',monospace] tracking-wider uppercase mb-8 transition-colors hover:text-[var(--neon-cyan)]"
            style={{ color: 'var(--text-muted)' }}
          >
            <ArrowLeft size={12} />
            BACK TO HOME
          </Link>
          <h1 className="font-['DM_Serif_Display','Noto_Serif_SC',serif] text-4xl md:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
            About
          </h1>
          <div className="h-px w-24" style={{ background: 'linear-gradient(to right, var(--neon-cyan), transparent)' }} />
        </div>

        {/* Bio + Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Bio */}
          <div>
            <span className="section-label mb-6 block">BIO / 简介</span>
            <div className="glass-card p-6 md:p-8 mb-8" style={{ borderRadius: '20px' }}>
              <RevealText text={aboutBio} as="p" className="text-base leading-[1.9]" />
            </div>

            {/* Education Cards */}
            <span className="section-label mb-6 block">EDUCATION / 教育背景</span>
            <div className="flex flex-col gap-4">
              {/* NUS Master */}
              <TiltCard tiltAmount={4} glareOpacity={0.06}>
                <div className="glass-card p-6" style={{ borderRadius: '20px', borderLeft: '3px solid var(--neon-purple)' }}>
                  <div className="flex items-center gap-3 mb-4 pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--neon-purple), var(--neon-pink))' }}>
                      <GraduationCap size={18} style={{ color: 'white' }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{education[1].school}</h3>
                      <p className="text-[10px] font-['Roboto_Mono',monospace]" style={{ color: 'var(--text-muted)' }}>{education[1].schoolZh}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="px-2 py-1 text-[8px] rounded-full" style={{ background: 'rgba(168, 85, 247, 0.15)', color: 'var(--neon-purple)' }}>MASTER</span>
                    </div>
                  </div>
                  <p className="text-sm mb-1" style={{ color: 'var(--neon-purple)' }}>
                    {education[1].degree} — {education[1].major}
                  </p>
                  <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
                    {education[1].degreeZh} · {education[1].majorZh}
                  </p>
                  <span className="font-['Roboto_Mono',monospace] text-[10px] block mb-4" style={{ color: 'var(--text-muted)' }}>
                    {education[1].period}
                  </span>
                  <ul className="flex flex-col gap-1.5 mb-4">
                    {education[1].highlights.map((h, i) => (
                      <li key={i} className="text-xs leading-relaxed flex items-start gap-2" style={{ color: 'var(--text-secondary)' }}>
                        <Sparkles size={10} className="shrink-0 mt-0.5" style={{ color: 'var(--neon-purple)' }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {education[1].certificates.map((cert) => (
                      <span key={cert} className="px-3 py-1.5 text-[9px] font-['Roboto_Mono',monospace] tracking-wider rounded-full" style={{ background: 'rgba(168, 85, 247, 0.1)', color: 'var(--neon-purple)', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>

              {/* Undergraduate */}
              <TiltCard tiltAmount={4} glareOpacity={0.06}>
                <div className="glass-card p-6" style={{ borderRadius: '20px', borderLeft: '3px solid var(--neon-cyan)' }}>
                  <div className="flex items-center gap-3 mb-4 pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-blue))' }}>
                      <BookOpen size={18} style={{ color: 'white' }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{education[0].school}</h3>
                      <p className="text-[10px] font-['Roboto_Mono',monospace]" style={{ color: 'var(--text-muted)' }}>{education[0].schoolZh}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="px-2 py-1 text-[8px] rounded-full" style={{ background: 'rgba(0, 240, 200, 0.15)', color: 'var(--neon-cyan)' }}>BACHELOR</span>
                    </div>
                  </div>
                  <p className="text-sm mb-1" style={{ color: 'var(--neon-cyan)' }}>
                    {education[0].degree} — {education[0].major}
                  </p>
                  <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
                    {education[0].degreeZh} · {education[0].majorZh}
                  </p>
                  <span className="font-['Roboto_Mono',monospace] text-[10px] block mb-4" style={{ color: 'var(--text-muted)' }}>
                    {education[0].period}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {education[0].certificates.map((cert) => (
                      <span key={cert} className="px-3 py-1.5 text-[9px] font-['Roboto_Mono',monospace] tracking-wider rounded-full" style={{ background: 'rgba(0, 240, 200, 0.1)', color: 'var(--neon-cyan)', border: '1px solid rgba(0, 240, 200, 0.2)' }}>
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Right: Skills */}
          <div>
            <span className="section-label mb-6 block">CAPABILITIES / 能力值</span>
            <div className="glass-card p-6 md:p-8" style={{ borderRadius: '20px' }}>
              <div className="flex flex-col">
                {skillTags.map((tag, index) => (
                  <SkillBar key={tag.name} tag={tag} index={index} />
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 glass-card p-6" style={{ borderRadius: '20px', borderLeft: '3px solid var(--neon-cyan)' }}>
              <p className="text-sm leading-relaxed italic mb-3" style={{ color: 'var(--text-secondary)' }}>
                "我更关心 AI 如何真正变成产品能力，而不是停留在演示效果。"
              </p>
              <span className="text-[10px] font-['Roboto_Mono',monospace] tracking-wider" style={{ color: 'var(--text-muted)' }}>
                — MASHA ZHOU
              </span>
            </div>
          </div>
        </div>

        {/* Career Timeline - Professional Archive */}
        <div className="mb-20">
          <span className="section-label mb-8 block">CAREER ARCHIVE / 职业履历</span>

          {/* Overview stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { icon: Briefcase, label: 'COMPANIES', value: '7', color: 'var(--neon-cyan)' },
              { icon: Award, label: 'YEARS', value: '16+', color: 'var(--neon-purple)' },
              { icon: TrendingUp, label: 'PROJECTS', value: '9', color: 'var(--neon-pink)' },
              { icon: Globe, label: 'DOWNLOADS', value: '10亿+', color: 'var(--neon-orange)' },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="glass-card p-4 text-center" style={{ borderRadius: '16px' }}>
                  <Icon size={16} className="mx-auto mb-2" style={{ color: stat.color }} />
                  <span className="font-['Roboto_Mono',monospace] text-xl font-bold block" style={{ color: stat.color }}>
                    {stat.value}
                  </span>
                  <span className="text-[8px] font-['Roboto_Mono',monospace] tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Career entries */}
          <div className="glass-card p-6 md:p-8" style={{ borderRadius: '20px' }}>
            {careerTimeline.map((entry, index) => (
              <AboutCareerEntry key={entry.company} entry={entry} index={index} />
            ))}
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-20">
          <span className="section-label mb-8 block">CORE CAPABILITIES / 核心能力</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreCapabilities.map((cap) => (
              <TiltCard key={cap.category} tiltAmount={4} glareOpacity={0.05}>
                <div className="glass-card p-6" style={{ borderRadius: '16px' }}>
                  <h4 className="font-['Noto_Serif_SC',serif] text-sm mb-4" style={{ color: 'var(--text-primary)' }}>{cap.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cap.items.map((item) => (
                      <span key={item} className="px-3 py-1 text-[10px] font-['Roboto_Mono',monospace] tracking-wider rounded-lg" style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)' }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Player Profile */}
        <div className="mb-12">
          <span className="section-label mb-8 block">PLAYER PROFILE / 玩家档案</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {playerProfiles.map((profile) => (
              <div key={profile.category} className="glass-card p-6" style={{ borderRadius: '16px' }}>
                <h4 className="font-['Roboto_Mono',monospace] text-[10px] tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>{profile.category}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {profile.games.map((game) => (
                    <span key={game} className="px-2 py-1 text-[10px] font-['Roboto_Mono',monospace] rounded-md" style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-secondary)' }}>
                      {game}
                    </span>
                  ))}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{profile.insight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
