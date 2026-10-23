import { useEffect, useRef, useState } from 'react';

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const lines = [
    '把 AI 从\u201c会聊天的玩具\u201d拆成可控、可量化、可反馈的产品模块。',
    '不关心 AI 技术有多前沿，只关心它能不能变成一个让人想玩的游戏。',
    '16 年游戏行业经验 + 10 亿+ 次下载记录 + 持续迭代的实验精神。',
  ];

  return (
    <section ref={ref} className="relative w-full py-20 md:py-28" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, var(--neon-cyan))' }} />
          <span className="section-label !mb-0">Manifesto / 宣言</span>
          <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, var(--neon-cyan))' }} />
        </div>

        <div className="space-y-6">
          {lines.map((line, i) => (
            <p
              key={i}
              className="text-xl md:text-2xl font-['Noto_Serif_SC',serif] leading-relaxed"
              style={{
                color: 'var(--text-primary)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(15px)',
                transition: `all 0.6s ease ${i * 200 + 200}ms`,
              }}
            >
              {line}
            </p>
          ))}
        </div>

        <div
          className="mt-12 h-px mx-auto"
          style={{
            width: visible ? '120px' : '0px',
            background: 'linear-gradient(to right, var(--neon-cyan), var(--neon-purple))',
            transition: 'width 1s ease 0.8s',
          }}
        />
      </div>
    </section>
  );
}
