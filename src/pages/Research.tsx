import { Link } from 'react-router';
import { ArrowLeft, FileText } from 'lucide-react';
import { researchNotes } from '@/data/siteData';

export default function Research() {
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
            Research
          </h1>
          <div className="h-px w-24 mb-6" style={{ background: 'linear-gradient(to right, var(--neon-cyan), transparent)' }} />
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            关于 AI 游戏、NPC 认知架构、情绪价值产品的思考与实验。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {researchNotes.map((note) => (
            <div
              key={note.id}
              className="glass-card p-6 md:p-8"
              style={{ borderRadius: '20px' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0, 240, 200, 0.1)' }}>
                  <FileText size={16} style={{ color: 'var(--neon-cyan)' }} />
                </div>
                <span className="font-['Roboto_Mono',monospace] text-[10px] tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  {note.date}
                </span>
              </div>
              <h3 className="font-['Noto_Serif_SC',serif] text-base mb-3" style={{ color: 'var(--text-primary)' }}>
                {note.title}
              </h3>
              <p className="text-xs leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                {note.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[9px] font-['Roboto_Mono',monospace] tracking-wider rounded-full"
                    style={{ background: 'rgba(0, 240, 200, 0.08)', color: 'var(--neon-cyan)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
