// src/components/Kajian-Islami/KajianDetail.tsx
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, User, Tag, BookOpen } from 'lucide-react';
import { kajianData } from '../../data/kajianData';
import Navbar from '../Navbar';
import Footer from '../Footer';
import bgHero from '../../../assets/img/pp aswaja.jpg';

const KajianDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const kajian = kajianData.find((k) => k.slug === slug);

  if (!kajian) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
          <div className="w-24 h-24 rounded-full bg-[#436A6C]/10 flex items-center justify-center mb-6">
            <BookOpen className="w-10 h-10 text-[#436A6C]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Kajian tidak ditemukan</h2>
          <p className="text-gray-500 mb-8 max-w-md">
            Kajian yang Anda cari tidak tersedia atau telah dihapus.
          </p>
          <Link
            to="/kajian"
            className="self-end inline-flex items-center gap-2 bg-[#436A6C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#345355] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Kajian Islami
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Kajian lainnya (exclude yang sedang dibuka)
  const otherKajian = kajianData.filter((k) => k.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <Navbar />

      {/* ─── HERO HEADER ─── */}
      <div
        className="relative bg-cover bg-center bg-no-repeat pt-12 pb-24 sm:pb-32 px-4"
        style={{ backgroundImage: `url('${bgHero}')` }}
      >
        {/* Overlay disamakan dengan warna berita */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#436a6c]/95 via-[#436a6c]/90 to-[#2c4a4b]" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Tombol Kembali */}
          <div className="flex justify-start mb-6">
            <Link
              to="/kajian"
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Kembali
            </Link>
          </div>

          <div className="text-center">
            {/* Judul */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
              {kajian.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/75 text-sm">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{kajian.date}</span>
              </div>
              {kajian.pemateri && (
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  <span>{kajian.pemateri}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-10">

        {/* Gambar Utama */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-8 -mt-16 sm:-mt-24 relative z-10">
          <img
            src={kajian.image}
            alt={kajian.title}
            className="w-full h-72 sm:h-96 object-cover"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800';
            }}
          />
        </div>

        {/* Kartu Pemateri */}
        {kajian.pemateri && (
          <div className="bg-white rounded-2xl border border-[#436A6C]/20 p-5 mb-6 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#436A6C]/10 flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-[#436A6C]" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Pemateri</p>
              <p className="text-gray-800 font-bold">{kajian.pemateri}</p>
            </div>
            {kajian.category && (
              <div className="ml-auto hidden sm:flex items-center gap-1.5 bg-[#436A6C]/10 text-[#436A6C] text-xs font-semibold px-3 py-1.5 rounded-full">
                <Tag className="w-3.5 h-3.5" />
                {kajian.category}
              </div>
            )}
          </div>
        )}

        {/* Artikel */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 mb-10">
          {/* Dekoratif quran icon */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-[#436A6C]/10 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5 text-[#436A6C]" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Kajian Islami</p>
              <p className="text-sm font-semibold text-gray-700">PP Aswaja An-nahdliyah</p>
            </div>
          </div>

          {/* Isi Artikel */}
          <div
            className="prose prose-gray max-w-none text-gray-700 leading-relaxed
              prose-p:mb-5 prose-p:text-base
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-em:italic prose-em:text-gray-600
              [&_p]:text-[15px] [&_p]:leading-8"
            dangerouslySetInnerHTML={{ __html: kajian.content }}
          />

          {/* Divider */}
          <hr className="my-8 border-gray-100" />

          {/* Footer Artikel */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#436A6C]/10 flex items-center justify-center">
                <User className="w-4 h-4 text-[#436A6C]" />
              </div>
              <span>
                Pemateri:{' '}
                <strong className="text-gray-600">{kajian.pemateri ?? 'Tim Pengajar'}</strong>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{kajian.date}</span>
            </div>
          </div>
        </article>

        {/* ─── KAJIAN LAINNYA ─── */}
        {otherKajian.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#436A6C] rounded-full inline-block" />
              Kajian Lainnya
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherKajian.map((item) => (
                <Link
                  key={item.id}
                  to={`/kajian/${item.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=400';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[#436A6C] font-semibold mb-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </p>
                    <h3 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-[#436A6C] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/kajian"
                className="inline-flex items-center gap-2 border-2 border-[#436A6C] text-[#436A6C] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#436A6C] hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Lihat Semua Kajian
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default KajianDetail;
