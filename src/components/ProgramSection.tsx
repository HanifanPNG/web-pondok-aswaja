import { ArrowRight, BookOpen } from 'lucide-react';

const programs = [
  {
    title: 'Program Ngalong BQPI',
    description: 'Program untuk membantu mahasiswa UIN yang ingin mendapatkan sertifikat BQPI secara resmi lewat ngaji ngalong',
  },
  {
    title: 'Program Tahfidz Al-Quran',
    description: 'Program menghafal Al-Quran dengan metode talaqqi dan muraja\'ah yang terstruktur',
  },
  {
    title: 'Kajian Kitab Kuning',
    description: 'Pembelajaran kitab kuning klasik dengan metode sorogan dan bandongan',
  },
];

const ProgramSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-aswaja-teal mb-4" data-aos="fade-up">Program Unggulan</h2>
        <div className="w-24 h-1 bg-[#436A6C] mx-auto mb-4 sm:mb-6"></div>
        <p className="text-aswaja-teal text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
          Fokus pembelajaran terbaik demi melahirkan generasi yang kuat dalam ilmu agama dan matang dalam karakter.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="program-card bg-white p-6 sm:p-8 shadow-lg border border-gray-100 flex flex-col items-start text-left hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-aswaja-teal-light text-aswaja-teal flex items-center justify-center rounded-md mb-4 sm:mb-6">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-aswaja-teal mb-3 sm:mb-4">{program.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 flex-grow">{program.description}</p>
              <a className="text-aswaja-teal font-bold text-sm flex items-center hover:underline" href="#">
                Selengkapnya
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
