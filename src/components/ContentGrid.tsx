import {
  ArrowRight,
  Calendar,
  Play,
  Instagram,
  Facebook,
  MessageCircle,
  Video,
} from "lucide-react";

const kegiatanItems = [
  {
    title: "Khutbah Jumat 17 Agustus | Edisi Hari Kemerdekaan RI. Nilai-Nilai Penting dalam Kepahlawanan",
    date: "Minggu, 20 Agustus 2026",
    slug: "khutbah-jumat-17-agustus-hari-kemerdekaan", // <--- Tambahkan ini
  },
  {
    title: "Kesunnahan di Awal Bulan Dzulhijjah | Khutbah Jumat",
    date: "Selasa, 25 September 2026",
    slug: "kesunnahan-awal-bulan-dzulhijjah",
  },
  {
    title: "Khutbah Idul Adha | Kurban Ajaran Islam Untuk Kemanusiaan",
    date: "Rabu, 19 Juli 2026",
    slug: "khutbah-idul-adha-kurban-kemanusiaan",
  },
];

const kajianItems = [
  {
    title: "Khutbah Jumat 17 Agustus | Edisi Hari Kemerdekaan RI. Nilai-Nilai Penting dalam Kepahlawanan",
    date: "Minggu, 20 Agustus 2026",
    slug: "kajian-khutbah-jumat-17-agustus",
  },
  {
    title: "Kesunnahan di Awal Bulan Dzulhijjah | Khutbah Jumat",
    date: "Selasa, 25 September 2026",
    slug: "kajian-kesunnahan-awal-bulan-dzulhijjah",
  },
  {
    title: "Khutbah Idul Adha | Kurban Ajaran Islam Untuk Kemanusiaan",
    date: "Rabu, 19 Juli 2026",
    slug: "kajian-khutbah-idul-adha",
  },
];

const ContentGrid = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Column 1: Kegiatan Pondok */}
          <div className="border border-gray-100 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-aswaja-teal">
                Kegiatan Pondok
              </h3>
              <a
                className="text-xs text-gray-500 flex items-center hover:text-aswaja-teal"
                href="#"
              >
                Lihat Semua
                <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
            <a
              href="/kegiatan/sholawat-bersama-maulid-nabi" // <--- Ganti dengan URL halaman berita utama ini
              className="relative block h-32 sm:h-40 rounded-lg overflow-hidden mb-4 group cursor-pointer"
            >
              <img
                alt="Activity"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUi-NROEeYeYsEFcX6Y3uwKc5uB4_5VpIUy_JseW5cLiIlLa8HztCokigv06HyVygXOTFpX4TyvByXwNewKKUVBcaXW9PS4w1in370ziZ_ObdvEsYubRU83nDBVcvBpkLRcGB5z8nyJSLxx4uOJg4A8U1ILONiTtXx1QbtHIOM0-sFqqOj7Hyc50YrMBbNm5BJjFctjP13vX72-mok6Dr2VBmVUrcxC8okquBE8HpTXaUmqIG8VjVyMQ7ieIeP7aSUl1D2qPiLw2rQgRI"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 p-3 sm:p-4 flex flex-col justify-end">
                <h4 className="text-white text-xs sm:text-sm font-bold line-clamp-2 group-hover:text-teal-200 transition-colors duration-300">
                  Sholawat bersama dalam rangka memperingati maulid Nabi Muham...
                </h4>
                <span className="text-[10px] text-gray-300 mt-1 flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  Minggu, 13 Mei 2026
                </span>
              </div>
            </a>

              <div className="space-y-3 sm:space-y-4">
                {kegiatanItems.map((item, index) => (
                  <a
                    key={index}
                    href={`/kegiatan/${item.slug}`} // Mengarah ke halaman dinamis
                    className="block pb-3 sm:pb-4 border-b border-gray-50 last:border-0 last:pb-0 group/item hover:no-underline"
                  >
                    <h5 className="text-sm font-bold text-aswaja-teal line-clamp-2 group-hover/item:text-teal-600 transition-colors duration-200">
                      {item.title}
                    </h5>
                    <span className="text-[10px] text-gray-400 mt-1 block">
                      {item.date}
                    </span>
                  </a>
                ))}
              </div>
          </div>

          {/* Column 2: Kajian Islami */}
          <div className="border border-gray-100 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-aswaja-teal">
                Kajian Islami
              </h3>
              <a
                className="text-xs text-gray-500 flex items-center hover:text-aswaja-teal"
                href="#"
              >
                Lihat Semua
                <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
              <a
                href="/kajian/mengapa-muslim-dan-kafir-dibedakan" // <--- Ganti dengan URL halaman detail kajian ini
                className="relative block h-32 sm:h-40 rounded-lg overflow-hidden mb-4 group cursor-pointer"
              >
                <img
                  alt="Kajian"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa-2ImWBPOUh6yZaeYtR4YspwgPMibSVFmLwnTv42EMiU9DcnuaTjCkHS6kFKHHZ0flD5Q4mVyCU1kV7UNWU8y-Khr7ouWkWGl4PZRMmWiY4LR6hzh8tKPsaTzHkrHuBu6b8h2XLTtvNG8UyjEOKWKJF5cQUtyTBsVRvsJuB8kIDLOA6LHzinFtg24ZdEUBHUu1Sq1FLa1TSTmxJbzdG0OFDbwJdA7nRUgqxtcx-PJDEB_2F5GPePeClypbmUTPrm-aTVncGlvBL92JAw"
                />
                {/* Efek overlay yang sedikit menggelap saat di-hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 p-3 sm:p-4 flex flex-col justify-end">
                  {/* Teks judul ikut berubah warna ke teal muda saat di-hover */}
                  <h4 className="text-white text-xs sm:text-sm font-bold group-hover:text-teal-200 transition-colors duration-300">
                    Mengapa muslim dan kafir dibedakan
                  </h4>
                  <span className="text-[10px] text-gray-300 mt-1 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    Minggu, 13 Mei 2026
                  </span>
                </div>
              </a>
              <div className="space-y-3 sm:space-y-4">
                {kajianItems.map((item, index) => (
                  <a
                    key={index}
                    href={`/kajian/${item.slug}`} // Mengarah ke halaman dinamis
                    className="block pb-3 sm:pb-4 border-b border-gray-50 last:border-0 last:pb-0 group/item hover:no-underline"
                  >
                    <h5 className="text-sm font-bold text-aswaja-teal line-clamp-2 group-hover/item:text-teal-600 transition-colors duration-200">
                      {item.title}
                    </h5>
                    <span className="text-[10px] text-gray-400 mt-1 block">
                      {item.date}
                    </span>
                  </a>
                ))}
              </div>
          </div>

          {/* Column 3: Profil Pondok & Social */}
          <div className="border border-gray-100 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-aswaja-teal mb-4 sm:mb-6">
              Profil Pondok
            </h3>
            <div className="relative h-36 sm:h-48 bg-gray-200 rounded-lg mb-6 sm:mb-8 overflow-hidden group cursor-pointer flex items-center justify-center">
              <img
                alt="Video Thumb"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqG-JFvbeDQa3-X2e6MkufpCZPxY3kOWwOh1LRS2NISzj_p5XwkZForwnMHN5wbavq0YTHBGl4rYLtcCA6TZexuCba4zUX_v_QhwTmNt48z-KisdeXcNH_2PEeGL-B4dS_n00W3J5KUyQ11ZOSD36ubGVcYsRHPnF1YlopQSjKEnCdkSLmKjMqY1ftB6j4BsMqnxxoBVBtVKqOEObNeD25NP5ZKaQwHhtOVa4yUxGLrBc_oxfxgHOpUVii2O1JxgTH357GTySh3uSfdZA"
              />
              <div className="relative z-10 text-red-600">
                <Play
                  className="w-12 h-12 sm:w-16 sm:h-16"
                  fill="currentColor"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-aswaja-teal mb-3 sm:mb-4">
              Sosial Media
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {/* INSTAGRAM */}
              <a
                className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-aswaja-teal transition-all duration-300 transform hover:translate-x-1 group"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-pink-50 text-pink-500 mr-3 group-hover:bg-pink-100 transition-colors">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                <span className="font-medium">@pp.aswajaannahdliyah</span>
              </a>

              {/* TIKTOK */}
              <a
                className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-aswaja-teal transition-all duration-300 transform hover:translate-x-1 group"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-gray-100 text-black mr-3 group-hover:bg-gray-200 transition-colors">
                  {/* Catatan: Jika lucide-react Anda belum ada <Tiktok />, Anda bisa gunakan <Video /> */}
                  <Video className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                <span className="font-medium">@pp.aswajaannahdliyah</span>
              </a>

              {/* FACEBOOK */}
              <a
                className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-aswaja-teal transition-all duration-300 transform hover:translate-x-1 group"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mr-3 group-hover:bg-blue-100 transition-colors">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                <span className="font-medium">PP. Aswaja An-Nahdliyah</span>
              </a>

              {/* WHATSAPP */}
              <a
                className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-aswaja-teal transition-all duration-300 transform hover:translate-x-1 group"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-green-50 text-green-500 mr-3 group-hover:bg-green-100 transition-colors">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                <div className="flex flex-col">
                  <span className="font-medium leading-none">
                    Hubungi via WhatsApp
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-400 mt-0.5">
                    Aswaja An-Nahdliyah Banteran
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;
