// src/components/LandingPage.tsx
import Navbar from '../Navbar';
import Footer from '../Footer';
import Kajian from './Kajian';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
        <Kajian></Kajian>
      <Footer />
    </div>
  );
};

export default LandingPage;