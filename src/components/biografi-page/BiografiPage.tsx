// src/components/biografi-page/BiografiPage.tsx
import Navbar from '../Navbar';
import Footer from '../Footer';
import Biografi from './Biografi';

const BiografiPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Biografi />
      <Footer />
    </div>
  );
};

export default BiografiPage;
