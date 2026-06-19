import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const pengasuhData = [
  {
    id: 1,
    name: "Prof. Dr. Kholid Mawardi S.Ag, M.Kom",
    role: "Pengasuh PonnPes Aswaja An-Nahdliyah Panembahan Banteran",
    image: "../../../assets/img/pak-kholid.jpeg",
  },
  {
    id: 2,
    name: "Prof. Dr. Kholid Mawardi S.Ag, M.Kom",
    role: "Pengasuh PonnPes Aswaja An-Nahdliyah Panembahan Banteran",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  }
];

const asatidzData = [
  {
    id: 1,
    name: "Hanifan Pangabekti S.Kom, M.Kom",
    role: "Lurah Pondok",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop", // Outdoor look
  },
  {
    id: 2,
    name: "Hanifan Pangabekti S.Kom, M.Kom",
    role: "Lurah Pondok (Formal)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop", // Suit
    bgClass: "bg-[#8B2635]"
  },
  {
    id: 3,
    name: "Hanifan Pangabekti S.Kom, M.Kom",
    role: "Lurah Pondok (Seragam)",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop", // Blue uniform look
  },
  {
    id: 4,
    name: "Ahmad Fauzi S.Pd.I",
    role: "Sekretaris Pondok",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop", // Formal headshot
  },
  {
    id: 5,
    name: "Ustadz M. Ridwan S.Sy",
    role: "Bendahara & Kepala Madrasah",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop", // Portrait
  },
  {
    id: 6,
    name: "Ustadzah Siti Aminah S.Ag",
    role: "Pengurus Putri",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", // Portrait female teacher
  }
];

const Biografi = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh AOS when component mounts (in case of route navigation)
    import('aos').then((AOS) => AOS.default.refresh());
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-gray-800">
      
      {/* Hiding scrollbar utility styling locally */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* SECTION 1: PENGASUH (PIMPINAN PONDOK) */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image of Pengasuh */}
          <div className="flex flex-col group" data-aos="fade-right">
            {/* Curved Image Container matching the reference style */}
            <div className="relative overflow-hidden rounded-t-full rounded-b-[2.5rem] shadow-sm group-hover:shadow-md transition-all duration-500 bg-gray-50 aspect-[4/5] w-full">
              <img
                src={pengasuhData[0].image}
                alt={pengasuhData[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  // Fallback to beautiful default avatar
                  e.currentTarget.src = "../../../assets/img/ppaswaja_2.png";
                }}
              />
            </div>

            {/* Caption details */}
            <div className="mt-6">
              <span className="text-xs sm:text-sm text-gray-500 italic block mb-2 font-medium">
                {pengasuhData[0].name}
              </span>
              <h2 className="text-[#223E40] text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-tight group-hover:text-[#436A6C] transition-colors duration-300">
                {pengasuhData[0].role}
              </h2>
            </div>
          </div>

          {/* Right Column: Description Text (similar to VisiMisi.tsx) */}
          <div className="flex flex-col" data-aos="fade-left" data-aos-delay="150">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#223E40] tracking-tight leading-tight mb-6">
              Mengenal Lebih Dekat Pengasuh Pondok Pesantren
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
              Pondok Pesantren Aswaja An-Nahdliyah Panembahan dibimbing oleh jajaran pengasuh yang berdedikasi tinggi dalam mendidik karakter santri berlandaskan nilai-nilai Ahlussunnah wal Jama'ah An-Nahdliyah. Beliau menanamkan dasar keimanan, kemandirian, dan etika Islami yang kuat.
            </p>
            <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
              Dengan memadukan kurikulum salafiyah klasik (kitab-kitab muktabar) dan kesiapan sains-teknologi di era digital, pengasuhan pondok mendampingi santri secara kontinu agar tumbuh menjadi pribadi yang tafaqquh fiddin, tangguh, berakhlak mulia, serta siap mengabdi di tengah-tengah masyarakat modern.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#hubungi" 
                className="bg-[#223E40] hover:bg-[#1C3335] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm"
              >
                Daftar Sekarang <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="/visi-misi" 
                className="border border-[#223E40] text-[#223E40] hover:bg-[#223E40]/5 font-bold py-3 px-6 rounded-lg transition-all text-sm"
              >
                Visi & Misi
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: ASATIDZ & PENGURUS PONDOK (WITH CAROUSEL SLIDER) */}
      <div className="bg-[#f8f9fa] border-t border-gray-100 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section with Carousel Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <div className="text-center sm:text-left" data-aos="fade-up">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#223E40] tracking-wide inline-block relative">
                Asatidz & Pengurus Pondok
                <span className="block w-16 h-1 bg-[#436A6C] mx-auto sm:mx-0 mt-4 rounded-full"></span>
              </h3>
            </div>
          </div>

          {/* Cards Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {asatidzData.map((asatidz) => (
              <div
                key={asatidz.id}
                className="w-[280px] sm:w-[320px] md:w-[340px] flex-shrink-0 snap-start bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100/80 group"
                data-aos="fade-up"
                data-aos-delay={`${(asatidz.id - 1) * 100}`}
              >
                {/* Teacher Image */}
                <div className={`relative h-72 sm:h-80 w-full overflow-hidden bg-gray-100 ${asatidz.bgClass || ""}`}>
                  <img
                    src={asatidz.image}
                    alt={asatidz.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600";
                    }}
                  />
                </div>

                {/* Teacher Info */}
                <div className="p-6">
                  <h4 className="font-bold text-base sm:text-lg text-[#223E40] group-hover:text-[#436A6C] transition-colors duration-300 line-clamp-1">
                    {asatidz.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium line-clamp-1">
                    {asatidz.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </main>
  );
};

export default Biografi;
