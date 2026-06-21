import Navbar from '../Navbar';
import Footer from '../Footer';
import KitabKuning from './KitabKuning';

const KitabKuningPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <KitabKuning />
      <Footer />
    </div>
  );
};

export default KitabKuningPage;
