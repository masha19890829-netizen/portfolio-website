import { useState } from 'react';
import { portfolioImages } from '@/data/siteData';

export default function PortfolioGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="relative w-full py-20 md:py-28" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span className="section-label block">Portfolio / 作品展示</span>
          <h2 className="font-['DM_Serif_Display','Noto_Serif_SC',serif] text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>Game Art & Design</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolioImages.map((img, index) => (
            <div
              key={img}
              className="glass-card overflow-hidden cursor-pointer group"
              style={{
                borderRadius: '16px',
                aspectRatio: index === 0 ? '4/5' : '3/4',
              }}
              onClick={() => setLightbox(img)}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(11,15,26,0.8), transparent 60%)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(11, 15, 26, 0.95)', backdropFilter: 'blur(20px)' }}
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="" className="max-w-full max-h-[85vh] object-contain rounded-xl" />
        </div>
      )}
    </section>
  );
}
