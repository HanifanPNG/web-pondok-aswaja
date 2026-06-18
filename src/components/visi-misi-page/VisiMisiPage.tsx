// src/components/visi-misi-page/VisiMisiPage.tsx
import Navbar from '../Navbar';
import Footer from '../Footer';
import VisiMisi from './VisiMisi';

const VisiMisiPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <VisiMisi />
      <Footer />
    </div>
  );
};

export default VisiMisiPage;
