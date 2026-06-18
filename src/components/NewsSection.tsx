import { ArrowRight, Calendar } from "lucide-react";

const featuredNews = {
  title: "Gema Salawat Santri PP Aswaja An-Nahdliyah Panembahan Sejukkan Jiwa",
  excerpt:
    "Melalui lantutan syiar dan bait-bait pujian kepada Rasulullah SAW, para santri mengajak jemaah mempertebal rasa cinta kepada Nabi sekaligus mempererat tali silaturahmi.",
  date: "Senin, 12 Mei 2026",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDqv2hgsKI04cY016e96aHzxiCE1VxaCtMvg60BiK9rDGJlXyatw2S7IrB826fsrL_XMFW7IrUoQTTuJGyXx7Rp7KF7c-7-zazGu0CG4jU_BDcvO2jy9Mfoxwq62hN6zVSpxrtwxTQjC-wQcHaxL3QbsxgpP1lKmsFybDZzzT1eBclYXABoYdaz8q0Cd3WkMsjQ4ZWDjxsj5GoeZEUduFaU0L0ODwvZRSsJl47Ot5b3KqSXQW6Ge_ScfX98DAUnAoLtZgjRO4yPMqiyNXg",
};

const newsList = [
  {
    title:
      "Keluarga besar Pondok Pesantren Aswaja An-Nahdliyah Panembahan Banteran mengucapkan selamat atas...",
    date: "Minggu, 13 Mei 2026",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBayww9e-hEjjCVVXjnft1rgJQFENQxFSiMtbV7Ypz9OnZidKARqNAikLcFMH-nPwfXlBTYabde-cxlJxRq0bGmudloFp6iXQLK4FiZhhSrj5eBaMA6ONohkSe0tQYIbdwptfzGsoW6hNv7Ad-7CvPKlD0v1dJoLRZ_9IIzHGNFMzW2eU3z_6RFWc68ZLx8KaqLur4A5b5sOXzftTPXhfoSa7p03Tdz5Y8MOuiegwxZKukUBhzoAYCTOY_KxWagv1Z5FGqPS3ne6_BOeVc",
  },
  {
    title:
      "Keluarga besar Pondok Pesantren Aswaja An-Nahdliyah Panembahan Banteran mengucapkan selamat atas...",
    date: "Minggu, 13 Mei 2026",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJcIZNgmDfZs2ioxyiBNTkg8-ErUn-V0bqxkas0v-AuqDBGobTIbf8_5O5r21RkwAc7fWjcdeQBHl4Vb-0Oc665ASld-GK6QQvhGUldur9qgWZdURrmKcEpniJBkuvfxwCxrShpp7DmNSrN-Ez4LNT9XMMRV04tUmo4ycajEcjyWcnnxo_3Qzf_LrQJzXR0WxPDFxpkckdfflOmEeozeTZscV_gqUqIrwYzOdh-UJpQWl8Uj00Wetjlpqv8jDpRIXt2F0ty5SkiebqOLo",
  },
  {
    title:
      "Keluarga besar Pondok Pesantren Aswaja An-Nahdliyah Panembahan Banteran mengucapkan selamat atas...",
    date: "Minggu, 13 Mei 2026",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUBtlZ_UrJrqnUSdaN9iyZLeg_MhAhQtMLpdGi1ucqSdD4LZnYBVz-L_0rd1ihxwhPfkfiQlVYzLjnMVlzieWYeUx-km0bGv2pZorFIw4zsXuFWaO9LRFWEcj0sDVE6mA5FqhKZr2xZo7CV7OayAVuUh3_RR6g2vdra-hQEngB_AGSClTnaL3sBeoQvEiXjgIlNCCxfSnvacXxSXLYda4_nicBd0xEgjYO2L5epvhiyyFqDWcl7gQ2QHVN-v7xq_-y5vzBRdTU1eYhKew",
  },
];

const NewsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 sm:mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-aswaja-teal mb-4">
              Berita Terkini
            </h2>
            <div className="w-24 h-1 bg-[#436A6C] mx-0 mb-4 sm:mb-6"></div>
          </div>
          x
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="relative h-[350px] sm:h-[400px] lg:h-[450px] rounded-xl overflow-hidden group hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <img
              alt="News Image"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              src={featuredNews.image}
            />
            <div className="absolute inset-0 news-gradient"></div>
            <div className="absolute bottom-0 p-4 sm:p-6 lg:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                {featuredNews.title}
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-2">
                {featuredNews.excerpt}
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                <a
                  className="group text-white font-bold flex items-center text-sm sm:text-base transition-all duration-300"
                  href="#"
                >
                  Selengkapnya
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1.5" />
                </a>
                <span className="text-xs flex items-center opacity-80">
                  <Calendar className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
                  {featuredNews.date}
                </span>
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col gap-3 sm:gap-4">
            {newsList.map((news, index) => (
              <div
                key={index}
                className="flex bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-24 sm:w-32 lg:w-40 flex-shrink-0">
                  <img
                    alt="Thumb"
                    className="w-full h-full object-cover min-h-[100px] sm:min-h-[120px]"
                    src={news.image}
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1">
                  <span className="text-[10px] sm:text-xs text-gray-500 block mb-1 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {news.date}
                  </span>
                  <h4 className="font-bold text-aswaja-teal text-xs sm:text-sm leading-snug mb-2 line-clamp-2">
                    {news.title}
                  </h4>
                  <a
                    className="text-aswaja-teal text-[10px] sm:text-xs font-bold flex items-center uppercase"
                    href="#"
                  >
                    Baca Berita
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
