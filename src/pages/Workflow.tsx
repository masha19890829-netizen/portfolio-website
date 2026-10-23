import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { workflowSteps } from '@/data/siteData';

export default function Workflow() {
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
            Workflow
          </h1>
          <div className="h-px w-24 mb-6" style={{ background: 'linear-gradient(to right, var(--neon-cyan), transparent)' }} />
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            AI 赋能的游戏制作人工作流，从发现机会到持续运营。
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {workflowSteps.map((step, index) => (
            <div key={step.step}>
              <div
                className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start"
                style={{ borderRadius: '20px' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))' }}
                >
                  <span className="font-['Roboto_Mono',monospace] text-lg font-bold" style={{ color: 'var(--bg-primary)' }}>
                    {String(step.step).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-['Noto_Serif_SC',serif] text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                    {step.titleZh}
                  </h3>
                  <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>{step.title}</p>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                    {step.descriptionZh}
                  </p>
                  <p className="text-xs leading-relaxed italic" style={{ color: 'var(--text-muted)' }}>
                    {step.description}
                  </p>
                </div>
              </div>
              {index < workflowSteps.length - 1 && (
                <div className="flex justify-center py-3">
                  <ArrowRight size={16} className="rotate-90" style={{ color: 'var(--text-muted)' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
