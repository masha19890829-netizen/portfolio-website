import { Link } from 'react-router';
import { ArrowLeft, Mail, MessageCircle, FolderOpen } from 'lucide-react';
import { contactInfo } from '@/data/siteData';

export default function Contact() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

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
            Contact
          </h1>
          <div className="h-px w-24 mb-6" style={{ background: 'linear-gradient(to right, var(--neon-cyan), transparent)' }} />
          <p
            className="text-sm max-w-xl"
            style={{ color: 'var(--text-muted)', fontFamily: "'Inter', 'Noto Sans SC', sans-serif" }}
          >
            如果你对 AI 游戏、AI 产品制作或任何研究方向感兴趣，欢迎通过以下方式联系。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {/* Email */}
          <button
            onClick={() => copyToClipboard(contactInfo.email)}
            className="glass-card p-6 text-left group transition-all duration-300"
            style={{ borderRadius: '20px' }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0, 240, 200, 0.1)' }}>
              <Mail size={18} style={{ color: 'var(--neon-cyan)' }} />
            </div>
            <span className="font-['Roboto_Mono',monospace] text-[10px] tracking-wider block mb-2" style={{ color: 'var(--text-muted)' }}>
              EMAIL
            </span>
            <span className="text-sm font-medium block mb-1" style={{ color: 'var(--text-primary)' }}>
              {contactInfo.email}
            </span>
            <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>点击复制</span>
          </button>

          {/* WeChat */}
          <button
            onClick={() => copyToClipboard(contactInfo.wechat)}
            className="glass-card p-6 text-left group transition-all duration-300"
            style={{ borderRadius: '20px' }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(168, 85, 247, 0.1)' }}>
              <MessageCircle size={18} style={{ color: 'var(--neon-purple)' }} />
            </div>
            <span className="font-['Roboto_Mono',monospace] text-[10px] tracking-wider block mb-2" style={{ color: 'var(--text-muted)' }}>
              WECHAT
            </span>
            <span className="text-sm font-medium block mb-1" style={{ color: 'var(--text-primary)' }}>
              {contactInfo.wechat}
            </span>
            <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>点击复制</span>
          </button>

          {/* Portfolio */}
          <div
            className="glass-card p-6"
            style={{ borderRadius: '20px', opacity: 0.6 }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(236, 72, 153, 0.1)' }}>
              <FolderOpen size={18} style={{ color: 'var(--neon-pink)' }} />
            </div>
            <span className="font-['Roboto_Mono',monospace] text-[10px] tracking-wider block mb-2" style={{ color: 'var(--text-muted)' }}>
              PORTFOLIO
            </span>
            <span className="text-sm font-medium block mb-1" style={{ color: 'var(--text-primary)' }}>
              Coming Soon
            </span>
            <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>作品集整理中</span>
          </div>
        </div>

        {/* Note */}
        <div
          className="p-6"
          style={{
            backgroundColor: 'var(--bg-glass)',
            borderLeft: '3px solid var(--neon-cyan)',
          }}
        >
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--text-muted)', fontFamily: "'Inter', 'Noto Sans SC', sans-serif" }}
          >
            <strong style={{ color: 'var(--text-primary)' }}>联系方式：</strong>
            邮箱与微信可直接复制使用。作品集链接正在整理中，敬请期待。
          </p>
        </div>
      </div>
    </main>
  );
}
