import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ChevronDown, ZoomIn } from 'lucide-react';
import bgHero from '../../../assets/img/pp aswaja.jpg';
import imgHalaman from '../../../assets/img/galeri_santri_halaman.png';
import imgQuran from '../../../assets/img/galeri_quran_rehal.png';
import imgRobotik from '../../../assets/img/galeri_santri_robotik.png';
import imgNgaji from '../../../assets/img/galeri_ngaji_kitab.png';
import imgHadroh from '../../../assets/img/galeri_hadroh.png';
import imgMasjid from '../../../assets/img/galeri_masjid_pondok.png';

const allPhotos = [
  { id: 1, src: imgHalaman,  alt: 'Santri di Halaman Pondok',       category: 'Kegiatan' },
  { id: 2, src: imgQuran,    alt: 'Al-Quran di Atas Rehal',         category: 'Kegiatan' },
  { id: 3, src: imgRobotik,  alt: 'Santri Belajar Robotika',        category: 'Prestasi' },
  { id: 4, src: imgNgaji,    alt: 'Ngaji Kitab Kuning Bersama',     category: 'Kegiatan' },
  { id: 5, src: imgHadroh,   alt: 'Penampilan Hadroh Santri',       category: 'Prestasi' },
  { id: 6, src: imgMasjid,   alt: 'Masjid Pondok Pesantren',        category: 'Fasilitas' },
  { id: 7, src: imgHalaman,  alt: 'Aktivitas Pagi Santri',          category: 'Kegiatan' },
  { id: 8, src: imgQuran,    alt: 'Tadarus Al-Quran',               category: 'Kegiatan' },
  { id: 9, src: imgRobotik,  alt: 'Inovasi Teknologi Santri',       category: 'Prestasi' },
  { id: 10, src: imgNgaji,   alt: 'Kajian Kitab Klasik',            category: 'Kegiatan' },
  { id: 11, src: imgHadroh,  alt: 'Festival Seni Islam',            category: 'Fasilitas' },
  { id: 12, src: imgMasjid,  alt: 'Suasana Masjid Saat Sholat',    category: 'Fasilitas' },
];

const PHOTOS_PER_PAGE = 6;

const categories = ['Semua', ...Array.from(new Set(allPhotos.map(p => p.category)))];

const Galeri = () => {
  const [visibleCount, setVisibleCount] = useState(PHOTOS_PER_PAGE);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({ open: false, index: 0 });

  const filtered = activeCategory === 'Semua'
    ? allPhotos
    : allPhotos.filter(p => p.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleLoadMore = () => setVisibleCount(prev => prev + PHOTOS_PER_PAGE);
  const handleCollapse = () => setVisibleCount(PHOTOS_PER_PAGE);

  const openLightbox = (index: number) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });

  const prevPhoto = () =>
    setLightbox(prev => ({ ...prev, index: (prev.index - 1 + filtered.length) % filtered.length }));

  const nextPhoto = () =>
    setLightbox(prev => ({ ...prev, index: (prev.index + 1) % filtered.length }));

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(PHOTOS_PER_PAGE);
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-white font-sans antialiased">

      {/* ── HERO SECTION ── */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url('${bgHero}')` }}
      >
        {/* Dark teal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b3a3c]/95 via-[#1b3a3c]/80 to-[#1b3a3c]/60" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Galeri Pondok
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Momen kebersamaa dan aktifitas santri di Pondok Aswaja An-nahdliyah
          </p>
        </div>
        {/* Dot overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#436A6C_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* ── CATEGORY FILTER TABS ── */}
      <div className="bg-[#fafafa] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-3 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold 
border border-[#436A6C]/30 
hover:bg-[#436A6C] hover:text-white hover:border-[#436A6C] hover:shadow-md 
active:scale-95 active:shadow-sm
transition-all duration-150 ease-out ${
                activeCategory === cat
                  ? 'bg-[#436A6C] text-white shadow-lg shadow-[#436A6C]/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── PHOTO GRID ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((photo, idx) => (
            <div
              key={photo.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#1c2128] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#5ab4b8] uppercase tracking-wider">{photo.category}</span>
                    <p className="text-white font-semibold text-sm mt-0.5">{photo.alt}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── PAGINATION BUTTONS ── */}
        {filtered.length > PHOTOS_PER_PAGE && (
          <div className="flex flex-col items-center gap-3 mt-12">
            <div className="flex gap-3 mt-2">
              {hasMore && (
                <button
                  onClick={handleLoadMore}
                  className="group flex items-center gap-2 bg-[#1c2128] hover:bg-[#436A6C] border border-white/15 hover:border-[#436A6C] text-gray-300 hover:text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-[#436A6C]/30 hover:shadow-lg"
                >
                  Tampilkan Lebih banyak
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </button>
              )}
              {visibleCount > PHOTOS_PER_PAGE && (
                <button
                  onClick={handleCollapse}
                  className="flex items-center gap-2 bg-[#1c2128] hover:bg-[#436A6C] border border-white/10 text-gray-400 hover:text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                >
                  Sembunyikan
                  <ChevronLeft className="w-4 h-4 rotate-90" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Modal box */}
          <div
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Image */}
            <img
              src={filtered[lightbox.index].src}
              alt={filtered[lightbox.index].alt}
              className="w-full rounded-2xl shadow-2xl max-h-[75vh] object-contain"
            />

            {/* Caption */}
            <div className="mt-4 text-center">
              <span className="text-xs text-[#5ab4b8] font-semibold uppercase tracking-wider">
                {filtered[lightbox.index].category}
              </span>
              <p className="text-gray-300 text-sm mt-1">{filtered[lightbox.index].alt}</p>
              <p className="text-gray-600 text-xs mt-1">{lightbox.index + 1} / {filtered.length}</p>
            </div>

            {/* Prev / Next */}
            <button
              onClick={prevPhoto}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-[#436A6C] flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-[#436A6C] flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Galeri;
