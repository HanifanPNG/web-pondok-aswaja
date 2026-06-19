import { ArrowRight, ChevronsRight } from 'lucide-react';
import bgHero from '../../../assets/img/ppaswaja_2.png';

const VisiMisi = () => {
  return (
    <main className="min-h-screen bg-[#fafafa] font-sans antialiased text-gray-800">
      {/* SECTION 1: PROFIL SINGKAT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Teks Deskripsi */}
          <div className="lg:col-span-6" data-aos="fade-right">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#223E40] tracking-tight leading-tight mb-6">
              Mengenal Lebih Dekat PP Aswaja An-Nahdliyah Panembahan
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
              Pondok Pesantren Aswaja An-Nahdliyah Panembahan (Banteran, Banyumas) adalah lembaga pendidikan Islam yang mendedikasikan diri dalam pembentukan karakter santri berlandaskan nilai-nilai Ahlussunnah wal Jama'ah An-Nahdliyah.
            </p>
            <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
              Berfokus pada penanaman akhlak mulia, pendalaman ilmu syariat, dan pelestarian amaliah serta tradisi Nahdliyin, kami mengintegrasikan sistem pendidikan pesantren salaf yang dipadukan dengan kesiapan santri menghadapi tantangan modernitas. Di sini, kami menempa generasi muda yang cerdas, toleran, mandiri, dan berjiwa qur'ani.
            </p>
            
            {/* Tombol Aksi */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#daftar" 
                className="bg-[#223E40] hover:bg-[#1C3335] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                Daftar Sekarang <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#visi-misi" 
                className="border border-[#223E40] text-[#223E40] hover:bg-[#223E40]/5 font-bold py-3 px-6 rounded-lg transition-all"
              >
                Visi & Misi
              </a>
            </div>
          </div>

          {/* Gambar Signboard */}
          <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="150">
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl p-2">
              <img 
                src={bgHero} 
                alt="Papan Nama Pondok Pesantren Aswaja An-Nahdliyah" 
                className="w-full h-auto object-cover rounded-[1.8rem] aspect-[4/3] lg:aspect-square"
              />
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2: VISI & MISI */}
      <div id="visi-misi" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* KARTU VISI */}
          <div className="bg-white rounded-xl shadow-md border-t-4 border-[#5E8B90] p-8 sm:p-10 min-h-[450px] transition-all hover:shadow-lg" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-[#436A6C] tracking-wide mb-8">
              VISI
            </h2>
            <blockquote className="text-gray-700 text-lg leading-relaxed relative pl-4 border-l-2 border-gray-200 py-2 italic font-medium">
              "Menjadi pusat pendidikan Islam yang unggul dalam melahirkan generasi tafaqquh fiddin yang berakhlak mulia, mandiri, dan teguh mengamalkan nilai-nilai Ahlussunnah wal Jama'ah An-Nahdliyah."
            </blockquote>
          </div>

          {/* KARTU MISI */}
          <div className="bg-white rounded-xl shadow-md border-t-4 border-[#223E40] p-8 sm:p-10 transition-all hover:shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl font-bold text-[#436A6C] tracking-wide mb-8">
              MISI
            </h2>
            
            <div className="space-y-6">
              
              {/* Item Misi 1 */}
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <ChevronsRight className="w-5 h-5 text-[#436A6C]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wider text-[#436A6C] uppercase mb-1">
                    PENDIDIKAN KITAB & SYARIAT
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Menyelenggarakan sistem pembelajaran agama Islam yang bersumber pada kitab-kitab muktabar dengan sanad keilmuan yang jelas dan tersambung (mutawatir).
                  </p>
                </div>
              </div>

              {/* Item Misi 2 */}
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <ChevronsRight className="w-5 h-5 text-[#436A6C]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wider text-[#436A6C] uppercase mb-1">
                    KARAKTER ASWAJA
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Membentuk karakter santri yang memegang teguh prinsip Tawasuth (moderat), Tawazun (seimbang), I'tidal (tegak lurus/adil), dan Tasamuh (toleran) dalam kehidupan bermasyarakat.
                  </p>
                </div>
              </div>

              {/* Item Misi 3 */}
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <ChevronsRight className="w-5 h-5 text-[#436A6C]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wider text-[#436A6C] uppercase mb-1">
                    AKHLAKUL KARIMAH
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Menempa mental, spiritual, dan etika santri melalui pembiasaan amaliah harian, wirid, salawat, dan penghormatan kepada guru/ulama.
                  </p>
                </div>
              </div>

              {/* Item Misi 4 */}
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <ChevronsRight className="w-5 h-5 text-[#436A6C]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wider text-[#436A6C] uppercase mb-1">
                    POTENSI & KEMANDIRIAN
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Wadah bagi santri untuk mengasah kreativitas, seni Islami (seperti hadroh/khitobah), organisasi, serta keterampilan hidup (life skills) agar siap terjun di masyarakat.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default VisiMisi;
