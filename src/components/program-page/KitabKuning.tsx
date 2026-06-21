import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,

  Tag,
  FileText,
} from 'lucide-react';
import bgHero from '../../../assets/img/pp aswaja.jpg';

const KitabKuning = () => {
  useEffect(() => {
    import('aos').then((AOS) => AOS.default.refresh());
  }, []);

  const methods = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'Metode Sorogan',
      desc: 'Pengulangan ayat per ayat langsung dengan guru (sanad muttasil).',
    },
    {
      icon: <Tag className="w-5 h-5" />,
      title: 'Metode Bandongan',
      desc: 'Pengajian kitab dalam satu kumpulan dengan penjelasan guru untuk seluruh kelas.',
    },
  ];

  const books = [
    {
      id: 1,
      title: 'Kitab Khulashah Nurul Yaqin',
      category: 'Sejarah Islam & Kebangsaan',
      description: "Membahas sirah nabawiyah, dan materi khusus yang membahas pemikiran Hasyim Asy'ari",
    },
    {
      id: 2,
      title: 'Safinatun Najahb',
      category: 'Fikih & Hukum Islam ',
      description: 'Kitab panduan fiqih shalat dan bacaan dalam shalat.',
    },
    {
      id: 3,
      title: "Ta'limul Muta'allim",
      category: 'Akhlak & Tasawuf',
      description: 'anduan utama santri mengenai etika dan adab menghormati guru serta ilmu agar berkah.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] font-sans antialiased text-gray-800">

      {/* HERO SECTION */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-20 lg:py-28"
        style={{ backgroundImage: `url('${bgHero}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#436A6C] to-[#000000]/65"/>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#436A6C_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Kajian Kitab Kuning
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Pembelajaran kitab kuning klasik dengan metode sorogan dan bandongan di Pondok Pesantren Aswaja An-Nahdliyah.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/info-psb"
                className="bg-amber-500 hover:bg-amber-600 text-aswaja-navy font-bold py-3.5 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                Daftar Sekarang <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: METODE PEMBELAJARAN */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#223E40] tracking-tight mb-4">
            Metode Pembelajaran
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Dua metode utama dalam pembelajaran kitab kuning klasik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methods.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={`${idx * 100}`}
            >
              <div className="w-14 h-14 bg-[#436A6C]/10 text-[#436A6C] flex items-center justify-center rounded-full mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-extrabold text-gray-800 text-lg mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: KITAB YANG DIKAJI */}
      <div className="bg-[#f0f5f5] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#223E40] tracking-tight mb-4">
              Kitab-Kitab Kajian
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Berikut adalah kitab-kitab yang dipelajari dalam kajian kitab kuning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, idx) => (
              <div
                key={book.id}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={`${idx * 100}`}
              >
                <div className="w-10 h-10 rounded-full bg-[#436A6C] flex items-center justify-center text-white font-bold text-sm mb-4">
                  {book.id}
                </div>
                <h3 className="font-bold text-gray-800 text-base mb-1 group-hover:text-[#436A6C] transition-colors">
                  {book.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#436A6C] font-semibold mb-3">
                  {book.category}
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
};

export default KitabKuning;
