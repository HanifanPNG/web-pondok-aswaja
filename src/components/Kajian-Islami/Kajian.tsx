import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Search, BookOpen } from 'lucide-react';
import bgHero from '../../../assets/img/pp aswaja.jpg';
import { kajianData } from '../../data/kajianData';

const ITEMS_PER_PAGE = 6;

const Kajian = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = kajianData.filter(
    (k) =>
      k.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      k.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = () => {
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-white font-sans antialiased">

      {/* HERO SECTION */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800"
        style={{ backgroundImage: `url('${bgHero}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#436A6C] via-[#436a6c]/95 to-[#436a6c]/80" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Kajian Islami
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Informasi terbaru seputar kajian islami Pondok Pesantren Aswaja An Nahdliyah.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#436A6C_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* SEARCH BAR */}
        <div className="flex items-center gap-3 max-w-md mb-12">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Cari kajian islami...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full bg-white text-gray-900 placeholder-gray-400 text-sm rounded-[100px] px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-[#436A6C]"
            />
            <Search className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
          </div>
          <button
            onClick={handleSearch}
            className="bg-[#436A6C] hover:bg-[#345355] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-md"
          >
            Cari
          </button>
        </div>

        {/* KAJIAN GRID */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {paginated.map((kajian) => (
              <Link
                key={kajian.id}
                to={`/kajian/${kajian.slug}`}
                className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={kajian.image}
                    alt={kajian.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=600';
                    }}
                  />
                  {kajian.category && (
                    <span className="absolute top-3 left-3 bg-[#436A6C] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {kajian.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-white text-gray-900">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 line-clamp-2 group-hover:text-[#436A6C] transition-colors duration-200 mb-2 leading-snug">
                      {kajian.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm line-clamp-3 mb-3 leading-relaxed">
                      {kajian.description}
                    </p>
                    {kajian.pemateri && (
                      <div className="flex items-center gap-1.5 text-xs text-[#436A6C] font-medium mb-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span className="truncate">{kajian.pemateri}</span>
                      </div>
                    )}
                  </div>

                  {/* Footer Card */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-gray-400 mt-2">
                    <div className="flex items-center text-xs">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                      <span>{kajian.date}</span>
                    </div>
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 group-hover:bg-[#436A6C] group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <Search className="w-10 h-10 mx-auto mb-3 opacity-40" />
            <p className="text-sm">Tidak ada kajian yang cocok dengan pencarian Anda.</p>
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4 pb-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 text-gray-400 hover:text-[#436A6C] hover:border-[#436A6C] disabled:opacity-40 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 flex items-center justify-center rounded-md font-medium text-sm transition-colors ${
                  page === currentPage
                    ? 'bg-[#223E40] text-white border border-[#223E40]'
                    : 'border border-gray-300 text-gray-500 hover:text-[#436A6C] hover:border-[#436A6C]'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 text-gray-400 hover:text-[#436A6C] hover:border-[#436A6C] disabled:opacity-40 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Kajian;