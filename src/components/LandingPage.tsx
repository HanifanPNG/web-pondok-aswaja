// src/components/LandingPage.tsx
import Navbar from './Navbar';
import Hero from './Hero';
import ProgramSection from './ProgramSection';
import NewsSection from './NewsSection';
import ContentGrid from './ContentGrid';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Hero />
      <ProgramSection />
      <NewsSection />
      <ContentGrid />
      <Footer />
    </div>
  );
};

export default LandingPage;