import { ArrowUpRight } from 'lucide-react';
import { contactInfo } from '@/data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-16" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-['DM_Serif_Display','Noto_Serif_SC',serif] text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>Masha Zhou</h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              AI 游戏制作人 / 产品设计师<br />
              用游戏思维做 AI 产品，用 AI 能力做游戏产品。
            </p>
          </div>
          <div>
            <h4 className="font-['Roboto_Mono',monospace] text-[10px] tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>Contact</h4>
            <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>{contactInfo.email}</p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>微信: {contactInfo.wechat}</p>
          </div>
          <div>
            <h4 className="font-['Roboto_Mono',monospace] text-[10px] tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>Links</h4>
            <div className="flex flex-col gap-2">
              <a href="https://space.bilibili.com/237167264" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 transition-colors hover:text-[var(--neon-cyan)]" style={{ color: 'var(--text-secondary)' }}>
                Bilibili <ArrowUpRight size={10} />
              </a>
              <a href="https://github.com/masha19890829-netizen" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 transition-colors hover:text-[var(--neon-cyan)]" style={{ color: 'var(--text-secondary)' }}>
                GitHub <ArrowUpRight size={10} />
              </a>
              <a href="https://5050game.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 transition-colors hover:text-[var(--neon-cyan)]" style={{ color: 'var(--text-secondary)' }}>
                5050 Lab <ArrowUpRight size={10} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8" style={{ borderTop: '1px solid var(--border-color)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] font-['Roboto_Mono',monospace] tracking-wider" style={{ color: 'var(--text-muted)' }}>
              &copy; {currentYear} Masha Zhou. All rights reserved.
            </p>
            <p className="text-[10px] font-['Roboto_Mono',monospace] tracking-wider" style={{ color: 'var(--text-muted)' }}>
              AI Game & Product Lab / Designed & Built with AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
