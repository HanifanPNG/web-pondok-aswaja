import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Target,
  Calendar,
  ChevronRight,
  Star,
} from 'lucide-react';
import bgHero from '../../../assets/img/pp aswaja.jpg';

const Tahfidz = () => {
  useEffect(() => {
    import('aos').then((AOS) => AOS.default.refresh());
  }, []);

  const benefits = [
    {
      icon: <Star className="w-5 h-5" />,
      title: 'Metode Talaqqi & Muraja\'ah',
      desc: 'Belajar menghafal langsung dari guru (talaqqi) dan pengulangan terstruktur (muraja\'ah).',
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Target Hafalan Terukur',
      desc: 'Target hafalan yang jelas per minggu/bulan dengan monitoring kemajuan santri.',
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: 'Sanad Terhubung ke Rasulullah ﷺ',
      desc: 'Hafalan dengan sanad muttasil yang terhubung hingga ke Nabi Muhammad SAW.',
    },
  ];

  const levels = [
    {
      step: '1',
      title: 'Tahsin & Dasar',
      desc: 'Memperbaiki bacaan tajwid dan mempelajari metode hafalan dasar (1-3 juz).',
    },
    {
      step: '2',
      title: 'Tahfidz Juz 30 & 29',
      desc: 'Menghafal Juz 30 dan Juz 29 dengan metode talaqqi dan muraja\'ah harian.',
    },
    {
      step: '3',
      title: 'Tahfidz 5 Juz',
      desc: 'Menghafal 5 juz (Juz 26-30) dengan setoran mingguan dan bulanan.',
    },
    {
      step: '4',
      title: 'Tahfidz 30 Juz (Khatam)',
      desc: 'Menghafal seluruh Al-Qur\'an (30 juz) dan mendapat ijazah sanad.',
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
              Program Tahfidz Al-Quran
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Program menghafal Al-Quran dengan metode talaqqi dan muraja'ah yang terstruktur di Pondok Pesantren Aswaja An-Nahdliyah.
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

      {/* SECTION 2: MANFAAT PROGRAM */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#223E40] tracking-tight mb-4">
            Keunggulan Program
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Mengapa memilih program tahfidz di PP Aswaja An-Nahdliyah?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
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

      {/* SECTION 3: TINGKAT TAHFIDZ */}
      <div className="bg-[#f0f5f5] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#223E40] tracking-tight mb-4">
              Tingkat Tahfidz
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Program tahfidz dibagi menjadi beberapa tingkat sesuai kemampuan santri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 z-0"></div>

            {levels.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center relative z-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={`${idx * 100}`}
              >
                <div className="w-12 h-12 rounded-full bg-[#43b190] flex items-center justify-center font-bold text-lg mb-4 shadow-md ring-4 ring-gray-50 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="font-extrabold text-gray-800 text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
};

export default Tahfidz;
