import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileProfileOpen, setIsMobileProfileOpen] = useState(false);
  const location = useLocation();

  const isProfileActive = location.pathname.startsWith('/profil') || location.pathname === '/visi-misi' || location.pathname === '/biografi' || location.pathname === '/galeri' || isProfileOpen;

  const navLinkStyle = "relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-aswaja-teal after:transition-all after:duration-300 hover:after:scale-x-100";

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
            <img
              alt="Aswaja Logo"
              className="h-12 w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkOQ_v9B7JUA8bEe9bNaiIQG-BVkbbuXYMdYdsJQrGVHHHD1h-9KMz130vcD0S-5tM_Z9-vMtMideFgR0kVL6gwM2otw4QDVq9QsDLUymVKsCVtBZBF9pZZE2N-IdJzRWCSrZQ2SuqHNHMDMkDKpU_UO8w-5lHzP0EbxYrmIbwpJULU4zWEHIZ97rbkh9To-jiQ3fSt0lfYZ250sHApj8yCJVYJsyEQr__rivP-iJNaSHSyRh6P_7sLxZPeWOq1hIf46SK1r2kzM9JK5c"
            />
            <div className="flex flex-col text-aswaja-teal mt-1 ">
              <span className="font-extrabold text-[15px] sm:text-lg leading-tight sm:leading-none tracking-tight">
                Aswaja An-Nahdliyah
              </span>
              <span className="font-bold text-[10px] leading-none opacity-90 mt-0.5">
                Panembahan Banteran Sumbang
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 items-center text-sm font-bold text-aswaja-teal absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* BERANDA - Menggunakan NavLink dengan deteksi 'isActive' bawaan */}
            <NavLink
              to="/"
              className={({ isActive }) => 
                `${navLinkStyle} ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}`
              }
            >
              BERANDA
            </NavLink>
            
            {/* PROFIL DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setIsProfileOpen(true)}
              onMouseLeave={() => setIsProfileOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center py-0.5 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-aswaja-teal after:transition-all after:duration-300 ${isProfileActive ? 'after:scale-x-100' : 'after:scale-x-0'} hover:after:scale-x-100`}
              >
                PROFIL
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProfileOpen && (
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50 animate-fadeIn">
                  <NavLink 
                    to="/visi-misi" 
                    className={({ isActive }) => 
                      `block px-4 py-2 text-sm text-aswaja-teal hover:bg-aswaja-teal-light transition-colors ${isActive ? 'font-bold bg-aswaja-teal-light/50' : ''}`
                    }
                  >
                    Visi Misi
                  </NavLink>
                  <NavLink 
                    to="/biografi" 
                    className={({ isActive }) => 
                      `block px-4 py-2 text-sm text-aswaja-teal hover:bg-aswaja-teal-light transition-colors ${isActive ? 'font-bold bg-aswaja-teal-light/50' : ''}`
                    }
                  >
                    Biografi
                  </NavLink>
                  <NavLink
                    to="/galeri"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-aswaja-teal hover:bg-aswaja-teal-light transition-colors ${isActive ? 'font-bold bg-aswaja-teal-light/50' : ''}`
                    }
                  >
                    Galeri
                  </NavLink>
                </div>
              )}
            </div>

            {/* BERITA - Garis bawah otomatis aktif saat URL berganti ke /berita */}
            <NavLink
              to="/berita"
              className={({ isActive }) => 
                `${navLinkStyle} ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}`
              }
            >
              BERITA
            </NavLink>

            {/* KAJIAN ISLAMI */}
            <NavLink
              to="/kajian"
              className={({ isActive }) => 
                `${navLinkStyle} ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}`
              }
            >
              KAJIAN ISLAMI
            </NavLink>
          </div>

          <div className="hidden md:block">
            <Link
              className="inline-block bg-[#436A6C] text-white px-6 py-2 rounded font-bold text-sm hover:bg-[#365A5C] hover:scale-105 active:scale-95 transition-all duration-300 transform shadow-md hover:shadow-lg"
              to="/info-psb"
            >
              INFO PSB
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden text-aswaja-teal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 animate-fadeIn">
            <div className="flex flex-col space-y-4 pt-4">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-aswaja-teal font-bold py-2 border-l-4 pl-4 transition-all duration-300 ${isActive ? 'border-aswaja-teal bg-aswaja-teal-light' : 'border-transparent hover:border-aswaja-teal hover:bg-aswaja-teal-light/50'}`
                }
              >
                BERANDA
              </NavLink>
              
              {/* PROFIL COLLAPSIBLE FOR MOBILE */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileProfileOpen(!isMobileProfileOpen)}
                  className="w-full text-left text-aswaja-teal font-bold py-2 border-l-4 pl-4 transition-all duration-300 border-transparent hover:border-aswaja-teal hover:bg-aswaja-teal-light/50 flex justify-between items-center"
                >
                  <span>PROFIL</span>
                  <ChevronDown className={`mr-4 w-4 h-4 transition-transform ${isMobileProfileOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileProfileOpen && (
                  <div className="pl-6 flex flex-col space-y-2 pt-2 pb-2">
                    <NavLink
                      to="/visi-misi"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileProfileOpen(false);
                      }}
                      className={({ isActive }) =>
                        `text-aswaja-teal text-sm py-1 border-l-2 pl-3 transition-all duration-300 ${isActive ? 'border-aswaja-teal font-bold bg-aswaja-teal-light/30' : 'border-transparent hover:border-aswaja-teal hover:bg-aswaja-teal-light/20'}`
                      }
                    >
                      Visi Misi
                    </NavLink>
                    <NavLink
                      to="/biografi"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileProfileOpen(false);
                      }}
                      className={({ isActive }) =>
                        `text-aswaja-teal text-sm py-1 border-l-2 pl-3 transition-all duration-300 ${isActive ? 'border-aswaja-teal font-bold bg-aswaja-teal-light/30' : 'border-transparent hover:border-aswaja-teal hover:bg-aswaja-teal-light/20'}`
                      }
                    >
                      Biografi
                    </NavLink>
                    <NavLink
                      to="/galeri"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileProfileOpen(false);
                      }}
                      className={({ isActive }) =>
                        `text-aswaja-teal text-sm py-1 border-l-2 pl-3 transition-all duration-300 ${isActive ? 'border-aswaja-teal font-bold bg-aswaja-teal-light/30' : 'border-transparent hover:border-aswaja-teal hover:bg-aswaja-teal-light/20'}`
                      }
                    >
                      Galeri
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink
                to="/berita"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-aswaja-teal font-bold py-2 border-l-4 pl-4 transition-all duration-300 ${isActive ? 'border-aswaja-teal bg-aswaja-teal-light' : 'border-transparent hover:border-aswaja-teal hover:bg-aswaja-teal-light/50'}`
                }
              >
                BERITA
              </NavLink>

              <NavLink
                to="/kajian"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-aswaja-teal font-bold py-2 border-l-4 pl-4 transition-all duration-300 ${isActive ? 'border-aswaja-teal bg-aswaja-teal-light' : 'border-transparent hover:border-aswaja-teal hover:bg-aswaja-teal-light/50'}`
                }
              >
                KAJIAN ISLAMI
              </NavLink>

              <Link
                className="inline-block bg-[#436A6C] text-white px-6 py-3 rounded font-bold text-sm hover:bg-[#365A5C] hover:scale-105 active:scale-95 transition-all duration-300 transform shadow-md hover:shadow-lg text-center mt-2"
                to="/info-psb"
                onClick={() => setIsMenuOpen(false)}
              >
                INFO PSB
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;