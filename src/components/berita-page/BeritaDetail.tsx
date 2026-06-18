// src/components/berita-page/BeritaDetail.tsx
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, User} from 'lucide-react';
import { beritaData } from '../../data/beritaData';
import Navbar from '../Navbar';
import Footer from '../Footer';
import bgHero from '../../../assets/img/pp aswaja.jpg';

const BeritaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const berita = beritaData.find((b) => b.slug === slug);


  if (!berita) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
          <div className="w-24 h-24 rounded-full bg-[#436A6C]/10 flex items-center justify-center mb-6">
            <span className="text-4xl">📰</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Berita tidak ditemukan</h2>
          <p className="text-gray-500 mb-8 max-w-md">
            Berita yang Anda cari tidak tersedia atau telah dihapus.
          </p>
          <Link
            to="/berita"
            className="inline-flex items-center gap-2 bg-[#436A6C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#345355] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Berita
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Berita lainnya (exclude yang sedang dibuka)
  const otherBerita = beritaData.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <Navbar />

      {/* ─── HERO HEADER ─── */}
      <div
        className="relative bg-cover bg-center bg-no-repeat pt-12 pb-24 sm:pb-32 px-4"
        style={{ backgroundImage: `url('${bgHero}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#436a6c]/95 via-[#436a6c]/90 to-[#2c4a4b]" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Tombol Kembali */}
          <div className="flex justify-start mb-6">
            <Link
              to="/berita"
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Kembali
            </Link>
          </div>

          <div className="text-center">
            {/* Judul */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
              {berita.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/75 text-sm">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{berita.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-10">

        {/* Gambar Utama */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-8 -mt-16 sm:-mt-24 relative z-10">
          <img
            src={berita.image}
            alt={berita.title}
            className="w-full h-72 sm:h-96 object-cover"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800';
            }}
          />
        </div>

        {/* Artikel */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 mb-10">

          {/* Isi Artikel */}
          <div
            className="prose prose-gray max-w-none text-gray-700 leading-relaxed
              prose-p:mb-5 prose-p:text-base
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-em:text-gray-600
              [&_p]:text-[15px] [&_p]:leading-8"
            dangerouslySetInnerHTML={{ __html: berita.content }}
          />

          {/* Divider */}
          <hr className="my-8 border-gray-100" />

          {/* Footer Artikel */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#436A6C]/10 flex items-center justify-center">
                <User className="w-4 h-4 text-[#436A6C]" />
              </div>
              <span>Ditulis oleh <strong className="text-gray-600">{berita.author ?? 'Admin'}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{berita.date}</span>
            </div>
          </div>
        </article>

        {/* ─── BERITA LAINNYA ─── */}
        {otherBerita.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#436A6C] rounded-full inline-block" />
              Berita Lainnya
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherBerita.map((item) => (
                <Link
                  key={item.id}
                  to={`/berita/${item.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=400';
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
                to="/berita"
                className="inline-flex items-center gap-2 border-2 border-[#436A6C] text-[#436A6C] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#436A6C] hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Lihat Semua Berita
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BeritaDetail;
