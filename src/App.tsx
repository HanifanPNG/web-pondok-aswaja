// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NewsPage from './components/berita-page/NewsPage';
import BeritaDetail from './components/berita-page/BeritaDetail';
import KajianPage from './components/Kajian-Islami/KajianPage';
import KajianDetail from './components/Kajian-Islami/KajianDetail';
import VisiMisiPage from './components/visi-misi-page/VisiMisiPage';
import GaleriPage from './components/galeri-page/GaleriPage';
import BiografiPage from './components/biografi-page/BiografiPage';
import InfoPsbPage from './components/info-psb-page/InfoPsbPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Utama / Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Halaman Khusus Berita */}
        <Route path="/berita" element={<NewsPage />} />
        <Route path="/berita/:slug" element={<BeritaDetail />} />

        {/* Halaman Khusus Kajian */}
        <Route path="/kajian" element={<KajianPage />} />
        <Route path="/kajian/:slug" element={<KajianDetail />} />

        {/* Halaman Visi Misi */}
        <Route path="/visi-misi" element={<VisiMisiPage />} />

        {/* Halaman Biografi */}
        <Route path="/biografi" element={<BiografiPage />} />

        {/* Halaman Galeri */}
        <Route path="/galeri" element={<GaleriPage />} />

        {/* Halaman Info PSB */}
        <Route path="/info-psb" element={<InfoPsbPage />} />
      </Routes>
    </Router>
  );
}

export default App;