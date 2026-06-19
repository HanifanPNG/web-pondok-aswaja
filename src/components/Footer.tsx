import { MapPin, Phone, Instagram, Facebook, MessageCircle, Video } from 'lucide-react';

const navigationItems = [
  'Beranda',
  'Profil',
  'Berita',
  'Kajian Islami',
  'Kegiatan',
];

const Footer = () => {
  return (
    <footer className="bg-[#110B30] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* About */}
          <div className="sm:col-span-1" data-aos="fade-up">
            <img
              alt="Footer Logo"
              className="h-16 sm:h-20 w-auto mb-4 sm:mb-6"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOYAn1HxGwdubTYqgjLOaFdDBLW15BYbK5cI0GrriK0CGYr4fgGy9CQ4s4KvgrAUyl7qWLD5FTrR2sCVaHCWpt4-lfnaUn1xRo3gbqBzWX3jOAF7iJYfY5U2e5vC-ogxyMH-fkZzkZxR6iurKdGAEDi0bjhngnThQXajEAOixmF8Dbm0GTp2zjwUyGGuuki2Lid-16TwSIEwmN0b9nVN2e3EJ7zeiUyH39orl6qYxy40LyR0wm7efF8MrKe6sLZpXRtPNoxwjfS_dshYc"
            />
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 sm:mb-6">
              Mencetak generasi unggul yang berakhlak mulia, berwawasan luas, dan siap menghadapi tantangan global dengan tetap berpegang pada nilai-nilai Islam.
            </p>
            <div className="flex space-x-4">
              <a className="text-white hover:text-aswaja-teal transition" href="#">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a className="text-white hover:text-aswaja-teal transition" href="#">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a className="text-white hover:text-aswaja-teal transition" href="#">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a className="text-white hover:text-aswaja-teal transition" href="#">
                <Video className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="sm:col-span-1" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">Navigasi</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm font-medium">
              {navigationItems.map((item) => (
                <li key={item}>
                  <a className="flex items-center hover:text-aswaja-teal transition text-sm" href="#">
                    <span className="w-2 h-2 bg-aswaja-teal rounded-full mr-3"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="sm:col-span-2 md:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">Kontak</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-aswaja-teal mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-gray-400">
                  Karangtengah Wetan, RT.08/RW.03, Dusun I, Banteran, Kec. Sumbang, Kabupaten Banyumas, Jawa Tengah 53183
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-aswaja-teal mr-3 sm:mr-4 flex-shrink-0" />
                <p className="text-xs sm:text-sm font-base">081228859043</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © 2026 Pondok Pesantren Aswaja An-Nahdliyah Panembahan Banteran. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
