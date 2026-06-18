// src/components/LandingPage.tsx
import Navbar from '../Navbar';
import Footer from '../Footer';
import News from './News';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
        <News></News>
      <Footer />
    </div>
  );
};

export default LandingPage;