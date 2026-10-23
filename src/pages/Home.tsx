import Hero from '@/sections/Hero';
import Metrics from '@/sections/Metrics';
import BilibiliBanner from '@/components/BilibiliBanner';
import CareerTimelineSection from '@/sections/CareerTimelineSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import TodayQuestGallery from '@/components/TodayQuestGallery';
import GameIncubatorBanner from '@/sections/GameIncubatorBanner';
import GitHubProjects from '@/components/GitHubProjects';
import PaperScroll from '@/sections/PaperScroll';
import Manifesto from '@/sections/Manifesto';
import ArchiveCarousel from '@/sections/ArchiveCarousel';
import LabVideo from '@/sections/LabVideo';

export default function Home() {
  return (
    <main>
      <Hero />
      <Metrics />
      <BilibiliBanner />
      <CareerTimelineSection />
      <PortfolioGallery />
      <TodayQuestGallery />
      <GameIncubatorBanner />
      <GitHubProjects />
      <PaperScroll />
      <Manifesto />
      <ArchiveCarousel />
      <LabVideo />
    </main>
  );
}
