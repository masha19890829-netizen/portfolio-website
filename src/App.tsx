import { Routes, Route } from 'react-router';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Research from '@/pages/Research';
import Workflow from '@/pages/Workflow';
import Contact from '@/pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/research" element={<Research />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
