// src/components/info-psb-page/InfoPsbPage.tsx
import Navbar from '../Navbar';
import Footer from '../Footer';
import InfoPsb from './InfoPsb';

const InfoPsbPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <InfoPsb />
      <Footer />
    </div>
  );
};

export default InfoPsbPage;
