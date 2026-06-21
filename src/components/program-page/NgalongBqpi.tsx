import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Award,
  Calendar,
  ChevronRight,
} from 'lucide-react';
import bgHero from '../../../assets/img/pp aswaja.jpg';

const NgalongBqpi = () => {
  useEffect(() => {
    import('aos').then((AOS) => AOS.default.refresh());
  }, []);

  const benefits = [
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Sertifikat BQPI Resmi',
      desc: 'Mendapatkan sertifikat Bukti Kecakapan Pembacaan Al-Qur\'an yang diakui secara resmi.',
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: 'Pendampingan Guru Ngaji',
      desc: 'Dibimbing oleh asatidz yang berpengalaman dalam membaca dan memahami Al-Qur\'an.',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Syarat Kelulusan utama',
      desc: 'Memenuhi standar kelulusan mata kuliah atau syarat wajib kelulusan mahasiswa di perguruan tinggi.',
    },
  ];

  const steps = [
    {
      step: '1',
      title: 'Pendaftaran',
      desc: 'Mendaftarkan diri ke google form BQPI dengan mengisi data yang diperlukan.',
    },
    {
      step: '2',
      title: 'Membayar biaya pendaftaran',
      desc: 'Melakukan pembayaran biaya pendaftaran sebesar 20.000.',
    },
    {
      step: '3',
      title: 'Membayar biaya bulanan',
      desc: 'Melakukan pembayaran biaya pendaftaran sebesar 75.000.',
    },
    {
      step: '4',
      title: 'Ujian & Sertifikasi',
      desc: 'Mengikuti mengaji rutin selama 4 bulan dan ujian akhir untuk mendapatkan sertifikat BQPI.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] font-sans antialiased text-gray-800">

      {/* HERO SECTION */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-20 lg:py-28"
        style={{ backgroundImage: `url('${bgHero}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#436A6C] to-[#000000]/65" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#436A6C_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Program Ngalong BQPI
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Program ini membantu mahasiswa UIN Saizu Purwokerto yang ingin mendapatkan sertifikat BQPI secara resmi lewat ngaji ngalong di Pondok Pesantren Aswaja An-Nahdliyah. Pendaftaran ngalong BQPI biasanya dibuka H-1 bulan sebelum kegiatan, jadi jangan sampai kelewat.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/info-psb"            
                className="bg-amber-500 hover:bg-amber-600 text-aswaja-navy font-bold py-3.5 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                Lihat Berita <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: MANFAAT PROGRAM */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#223E40] tracking-tight mb-4">
            Manfaat Program
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Berikut adalah manfaat yang akan didapatkan setelah mengikuti program ngalong BQPI.
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

      {/* SECTION 3: ALUR PROGRAM */}
      <div className="bg-[#f0f5f5] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#223E40] tracking-tight mb-4">
              Alur Program
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Berikut adalah langkah-langkah untuk mengikuti program ngalong BQPI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 z-0"></div>

            {steps.map((item, idx) => (
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

      {/* SECTION 4: PERSYARATAN */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10" data-aos="fade-up">
          <h3 className="text-2xl font-extrabold text-[#223E40] mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-[#436A6C]" /> Persyaratan Mengikuti ujian BQPI
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-3">
              {[
                'Absensi tidak kurang dari 75%',
                'Membayar biaya bulanan sebesar Rp 75.000',
                'Mampu menyelesaikan hafalana surat pendek yang ditentukan',
              ].map((text, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-600 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-3">
              <h4 className="font-bold text-gray-800 text-base border-b border-gray-100 pb-2 flex items-center gap-1.5">
                <ChevronRight className="w-4 h-4 text-[#436A6C]" /> Jadwal Program
              </h4>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Calendar className="w-4 h-4 text-[#436A6C] flex-shrink-0" />
                <span>Hari Selasa, Rabu, & Kamis </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-[#436A6C] flex-shrink-0" />
                <span>Pukul 20.00 WIB</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <BookOpen className="w-4 h-4 text-[#436A6C] flex-shrink-0" />
                <span>Lokasi: Pondok Pesantren Aswaja An-Nahdliyah</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default NgalongBqpi;
