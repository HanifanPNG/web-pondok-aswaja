import { useState } from 'react';
import {  
  MessageCircle, 
  CheckCircle2, 
  FileText, 
  CreditCard, 
  ArrowRight, 
  Download,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

const InfoPsb = () => {
  const [activeTab, setActiveTab] = useState<'persyaratan' | 'prosedur'>('persyaratan');

  const contacts = [
    { name: 'Mas Nur Rohman', phone: '081227528983', formattedPhone: '+6281227528983' },
    { name: 'Abdul Azis', phone: '081227998337', formattedPhone: '+6281227998337' },
  ];

  const timelineSteps = [
    {
      step: '1',
      title: 'Membayar Administrasi',
      desc: 'Membayar biaya pendaftaran sebesar Rp. 200.000 secara langsung atau transfer bank.',
      borderColor: 'border-emerald-500'
    },
    {
      step: '2',
      title: 'Menyerahkan Bukti',
      desc: 'Mengirim bukti transfer atau tanda terima pembayaran ke panitia via WhatsApp.',
      borderColor: 'border-blue-500'
    },
    {
      step: '3',
      title: 'Mengisi Formulir',
      desc: 'Mengisi form pendaftaran online/offline dengan data calon santri yang lengkap.',
      borderColor: 'border-amber-500'
    },
    {
      step: '4',
      title: 'Daftar Ulang',
      desc: 'Melakukan pembayaran daftar ulang sesuai rincian administrasi awal masuk.',
      borderColor: 'border-purple-500'
    },
    {
      step: '5',
      title: 'Santri Resmi',
      desc: 'Selamat! Calon santri resmi terdaftar sebagai bagian dari keluarga besar pondok.',
      borderColor: 'border-emerald-600 font-bold'
    }
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] font-sans antialiased text-gray-800">
      
      {/* SECTION 1: HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-br from-aswaja-teal to-[#2b4c4e] text-white py-20 lg:py-28">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Penerimaan Santri Baru
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Bergabunglah dengan Pondok Pesantren Aswaja An-Nahdliyah Panembahan untuk mendapatkan pendidikan Islam berkualitas yang mengintegrasikan nilai-nilai Ahlussunnah wal Jama'ah An-Nahdliyah dengan kesiapan menghadapi tantangan zaman.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://psb.darussalampurwokerto.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-aswaja-navy font-bold py-3.5 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                Daftar Sekarang <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://drive.google.com/drive/folders/1ch1-ep5i5Rd08OsUjZSe5urFfz4xFJvH?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 bg-white/5 hover:bg-white/10 text-white font-bold py-3.5 px-8 rounded-lg transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                <Download className="w-5 h-5" /> Download Brosur
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: ALUR PENDAFTARAN */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#223E40] tracking-tight mb-4">
            Alur Pendaftaran
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Berikut adalah alur pendaftaran santri baru Pondok Pesantren Aswaja An-Nahdliyah.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"></div>
          
          {timelineSteps.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center relative z-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              data-aos="fade-up"
              data-aos-delay={`${idx * 100}`}
            >
              {/* Step Circle */}
              <div className={`w-12 h-12 rounded-full bg-[#43b190] flex items-center justify-center font-bold text-lg mb-4 shadow-md ring-4 ring-gray-50 group-hover:scale-110 transition-transform`}>
                {item.step}
              </div>
              <h3 className="font-extrabold text-gray-800 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: TABS DETAIL (PERSYARATAN & PROSEDUR) */}
      <div className="bg-[#f0f5f5] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10" data-aos="fade-up">
            <h2 className="text-3xl font-extrabold text-[#223E40] mb-3">
              Informasi Lengkap PSB
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Berikut adalah informasi lengkap mengenai persyaratan berkas dan prosedur pendaftaran santri baru.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex justify-center mb-10">
            <div className="bg-white p-1.5 rounded-xl shadow-sm border border-gray-200 flex gap-2 w-full max-w-md">
              <button
                onClick={() => setActiveTab('persyaratan')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === 'persyaratan'
                    ? 'bg-aswaja-teal text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <FileText className="w-4 h-4" /> Persyaratan
              </button>
              <button
                onClick={() => setActiveTab('prosedur')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === 'prosedur'
                    ? 'bg-aswaja-teal text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <ClipboardListIcon className="w-4 h-4" /> Prosedur Pendaftaran
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10 transition-all duration-300" data-aos="fade-up">
            {activeTab === 'persyaratan' ? (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold text-aswaja-teal mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-aswaja-teal" /> Persyaratan Pendaftaran
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Persyaratan Berkas */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-800 text-base border-b border-gray-100 pb-2 flex items-center gap-1.5">
                      <ChevronRight className="w-4 h-4 text-aswaja-teal" /> Kelengkapan Berkas (Offline/Online)
                    </h4>
                    
                    <ul className="space-y-3">
                      {[
                        'Pas foto berwarna terbaru ukuran 3x4 (4 lembar)',
                        'Fotokopi Kartu Keluarga (KK) sebanyak 2 lembar',
                        'Fotokopi Akta Kelahiran sebanyak 2 lembar',
                        'Fotokopi KTP Orang Tua / Wali sebanyak 2 lembar',
                        'Fotokopi Ijazah / SKL (Surat Keterangan Lulus) terakhir 2 lembar',
                        'Membawa berkas asli di atas saat verifikasi fisik/pendaftaran langsung'
                      ].map((text, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-600 items-start">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Persyaratan Administrasi */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-800 text-base border-b border-gray-100 pb-2 flex items-center gap-1.5">
                      <ChevronRight className="w-4 h-4 text-aswaja-teal" /> Persyaratan Administrasi Keuangan
                    </h4>
                    
                    <ul className="space-y-3">
                      {[
                        'Membayar biaya pendaftaran administrasi sebesar Rp. 200.000.',
                        'Pembayaran pendaftaran bisa diserahkan langsung ke Kantor Sekretariat atau transfer ke Rekening Bank resmi pondok.',
                        'Menyerahkan/mengunggah bukti transfer pembayaran pendaftaran ke nomor panitia PSB.',
                        'Melunasi administrasi daftar ulang bagi calon santri yang dinyatakan diterima sesuai waktu yang ditentukan.'
                      ].map((text, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-600 items-start">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bank Info Box */}
                    <div className="bg-aswaja-teal-light/50 border border-aswaja-teal-light rounded-xl p-4 mt-6">
                      <p className="text-xs text-aswaja-teal font-extrabold uppercase tracking-wider mb-2 flex items-center gap-1">
                        <CreditCard className="w-3.5 h-3.5" /> Rekening Pembayaran Resmi:
                      </p>
                      <p className="text-sm font-bold text-gray-800">Bank Syariah Indonesia (BSI)</p>
                      <p className="text-lg font-black text-aswaja-teal my-0.5">7182 2752 89</p>
                      <p className="text-xs text-gray-500">a.n. Pondok Pesantren Aswaja Panembahan</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold text-aswaja-teal mb-6 flex items-center gap-2">
                  <ClipboardListIcon className="w-6 h-6 text-aswaja-teal" /> Prosedur & Tata Cara Pendaftaran
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      num: '1',
                      title: 'Mengisi Formulir & Mengunggah Berkas',
                      desc: 'Mengisi formulir secara daring (online) pada link pendaftaran resmi, atau datang secara langsung ke Sekretariat PSB Pondok Pesantren Aswaja An-Nahdliyah Panembahan (Banteran, Banyumas) dengan membawa fotokopi berkas yang diperlukan.'
                    },
                    {
                      num: '2',
                      title: 'Membayar Biaya Registrasi',
                      desc: 'Membayar biaya pendaftaran sebesar Rp. 200.000. Bukti transfer wajib disimpan dan dikirimkan kepada kontak panitia pendaftaran untuk verifikasi manual.'
                    },
                    {
                      num: '3',
                      title: 'Verifikasi Berkas',
                      desc: 'Tim panitia PSB akan memverifikasi berkas pendaftaran dan validasi pembayaran. Status pendaftaran calon santri akan diinformasikan kembali melalui pesan WhatsApp/kontak panitia.'
                    },
                    {
                      num: '4',
                      title: 'Pembayaran Daftar Ulang & Masuk Asrama',
                      desc: 'Calon santri yang berkasnya sudah terverifikasi lengkap melakukan proses daftar ulang dan pelunasan rincian biaya awal masuk. Setelah lunas, santri akan mendapatkan jadwal penyerahan asrama dan seragam.'
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-aswaja-teal-light text-aswaja-teal font-black text-sm flex items-center justify-center flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-gray-800 text-base mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 4: INFORMASI LEBIH LANJUT (CONTACTS) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-[#223E40] mb-4">
            Informasi Lebih Lanjut
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Silakan hubungi kontak panitia Penerimaan Santri Baru (PSB) di bawah ini jika Anda memiliki pertanyaan seputar pendaftaran.
          </p>
        </div>

        {/* Contacts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contacts.map((contact, idx) => {
            const waLink = `https://wa.me/62${contact.phone.slice(1)}?text=Assalamualaikum%20Panitia%20PSB%20Aswaja%2C%20saya%20ingin%20bertanya%20mengenai%20pendaftaran%20santri%20baru...`;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={`${idx * 100}`}
              >
                <div>
                  <h3 className="font-extrabold text-gray-800 text-lg mt-3 mb-1">
                    {contact.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    {contact.phone}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <a 
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 py-2.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-emerald-200"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </main>
  );
};

// Simple helper icon for tabs because Lucide-react might not export ClipboardList
function ClipboardListIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}

export default InfoPsb;
