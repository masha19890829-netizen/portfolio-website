import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Zap } from 'lucide-react';

const navItems = [
  { label: 'Home', labelZh: '首页', path: '/' },
  { label: 'Projects', labelZh: '项目', path: '/projects' },
  { label: 'Research', labelZh: '研究', path: '/research' },
  { label: 'Workflow', labelZh: '工作流', path: '/workflow' },
  { label: 'About', labelZh: '关于', path: '/about' },
  { label: 'Contact', labelZh: '联系', path: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(11, 15, 26, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <Zap size={16} style={{ color: 'var(--neon-cyan)' }} />
              <span className="font-['DM_Serif_Display','Noto_Serif_SC',serif] text-lg" style={{ color: 'var(--text-primary)' }}>Masha Zhou</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative text-[11px] font-['Roboto_Mono',monospace] tracking-wider uppercase transition-colors duration-300 group"
                  style={{ color: location.pathname === item.path ? 'var(--neon-cyan)' : 'var(--text-muted)' }}
                >
                  {item.label}
                  <span
                    className="absolute -bottom-1 left-0 h-[2px] transition-all duration-300 group-hover:w-full"
                    style={{
                      width: location.pathname === item.path ? '100%' : '0%',
                      background: 'var(--neon-cyan)',
                    }}
                  />
                </Link>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: 'var(--text-primary)' }}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" style={{ backgroundColor: 'rgba(11, 15, 26, 0.95)', backdropFilter: 'blur(20px)' }}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-2xl font-['Noto_Serif_SC',serif] transition-colors"
                style={{ color: location.pathname === item.path ? 'var(--neon-cyan)' : 'var(--text-primary)' }}
              >
                {item.labelZh}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
