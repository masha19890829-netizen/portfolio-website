import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Star, GitFork, Github, Code2 } from 'lucide-react';
import { githubProjects, type GitHubProject } from '@/data/siteData';
import TiltCard from '@/components/TiltCard';

const statusColors: Record<string, string> = {
  active: 'var(--neon-cyan)',
  experimental: 'var(--neon-orange)',
  archived: 'var(--text-muted)',
  maintained: 'var(--neon-purple)',
};

const statusLabels: Record<string, string> = {
  active: 'ACTIVE',
  experimental: 'EXPERIMENTAL',
  archived: 'ARCHIVED',
  maintained: 'MAINTAINED',
};

const languageColors: Record<string, string> = {
  TypeScript: '#3178C6',
  Python: '#3572A5',
  JavaScript: '#F7DF1E',
  Rust: '#DEA584',
  Go: '#00ADD8',
  Swift: '#F05138',
};

function ProjectCard({ project, index }: { project: GitHubProject; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.7s ease ${index * 100}ms`,
      }}
    >
      <TiltCard tiltAmount={4} glareOpacity={0.06} className="h-full">
        <div className="glass-card p-6 h-full flex flex-col relative overflow-hidden group" style={{ borderRadius: '20px' }}>
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right, ${project.color}, transparent)` }} />

          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${project.color}12` }}>
                <Code2 size={14} style={{ color: project.color }} />
              </div>
              <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{project.name}</h3>
            </div>
            <span className="px-2 py-0.5 text-[8px] font-['Roboto_Mono',monospace] tracking-wider rounded-full" style={{ background: `${statusColors[project.status]}15`, color: statusColors[project.status] }}>
              {statusLabels[project.status]}
            </span>
          </div>

          <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-0.5 text-[9px] font-['Roboto_Mono',monospace] tracking-wider rounded-md" style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)' }}>{t}</span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star size={10} style={{ color: 'var(--text-muted)' }} />
                <span className="font-['Roboto_Mono',monospace] text-[10px]" style={{ color: 'var(--text-muted)' }}>{project.stars}</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork size={10} style={{ color: 'var(--text-muted)' }} />
                <span className="font-['Roboto_Mono',monospace] text-[10px]" style={{ color: 'var(--text-muted)' }}>{project.forks}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full" style={{ background: languageColors[project.language] || project.color }} />
              <span className="font-['Roboto_Mono',monospace] text-[9px]" style={{ color: 'var(--text-muted)' }}>{project.language}</span>
            </div>
          </div>

          <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`View ${project.name} on GitHub`} />
        </div>
      </TiltCard>
    </div>
  );
}

export default function GitHubProjects() {
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
        <div className="text-center mb-12">
          <span className="section-label block">Open Source / 开源项目</span>
          <h2 className="font-['DM_Serif_Display','Noto_Serif_SC',serif] text-3xl md:text-4xl mb-3" style={{ color: 'var(--text-primary)' }}>GitHub Projects</h2>
          <p className="text-sm max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>在 GitHub 上持续探索 AI 游戏工具与实验项目，欢迎 Star 与交流。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {githubProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="https://github.com/masha19890829-netizen" target="_blank" rel="noopener noreferrer" className="neon-btn neon-btn-outline inline-flex items-center gap-2">
            <Github size={14} /> 查看全部 GitHub 项目
          </a>
        </div>
      </div>
    </section>
  );
}
