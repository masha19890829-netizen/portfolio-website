import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '@/data/siteData';

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <main className="min-h-screen pt-24 pb-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
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
            Projects
          </h1>
          <div className="h-px w-24 mb-6" style={{ background: 'linear-gradient(to right, var(--neon-cyan), transparent)' }} />
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            从 AI 原生游戏到超休闲爆款，从研究原型到商业产品。
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden"
              style={{ borderRadius: '20px' }}
            >
              <button
                onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left"
              >
                <div>
                  <h3 className="font-['Noto_Serif_SC',serif] text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                    {project.nameZh}
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{project.name}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="px-3 py-1 text-[9px] font-['Roboto_Mono',monospace] tracking-wider rounded-full"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    {project.status.toUpperCase()}
                  </span>
                  {expanded === project.id ? <ChevronUp size={16} style={{ color: 'var(--text-muted)' }} /> : <ChevronDown size={16} style={{ color: 'var(--text-muted)' }} />}
                </div>
              </button>

              {expanded === project.id && (
                <div className="px-6 md:px-8 pb-8">
                  <div className="h-px mb-6" style={{ background: 'var(--border-color)' }} />
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {project.descriptionZh}
                  </p>
                  <p className="text-xs leading-relaxed mb-6 italic" style={{ color: 'var(--text-muted)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 text-[10px] font-['Roboto_Mono',monospace] tracking-wider rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.images && (
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                      {project.images.map((img) => (
                        <div key={img} className="overflow-hidden rounded-xl" style={{ aspectRatio: '4/5' }}>
                          <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
