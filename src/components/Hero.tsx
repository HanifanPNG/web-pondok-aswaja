import { ArrowRight } from 'lucide-react';
import aswajaImg from '../../assets/img/aswajapp.jpeg';;

const Hero = () => {
  return (
    <header className="relative h-[500px] sm:h-[600px] flex items-center overflow-hidden">
      <img
        alt="Santri Aswaja"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={aswajaImg}
      />
      <div className="absolute inset-0 hero-overlay"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            PONDOK PESANTREN<br />ASWAJA AN NAHDLIYAH PANEMBAHAN BANTERAN
          </h1>
          <p className="text-gray-200 text-base sm:text-lg mb-8 leading-relaxed">
            Mencetak Generasi Berakhlakul Karimah, Berlandaskan Ajaran Ahlussunnah wal Jama'ah An-Nahdliyah
          </p>
          <a
            className="inline-flex items-center bg-[#436A6C] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-bold text-sm sm:text-base hover:bg-[#365A5C] hover:scale-105 active:scale-95 transition-all duration-300 transform shadow-lg hover:shadow-xl group"
            href="#"
          >
            Daftar Sekarang
            <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
