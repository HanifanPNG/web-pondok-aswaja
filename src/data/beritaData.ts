// src/data/beritaData.ts
export interface BeritaItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  author?: string;
  content: string; // Isi artikel lengkap (HTML string)
}

export const beritaData: BeritaItem[] = [
  {
    id: 1,
    title: "Peringatan Hari Santri Nasional: Memperkokoh Karakter Bangsa",
    description: "Acara puncak peringatan Hari Santri Nasional di Pondok Pesantren Aswaja An Nahdliyah berlangsung meriah dengan berbagai rangkaian acara khidmat...",
    date: "12 Mei 2026",
    image: "https://images.unsplash.com/photo-1564429097439-e400644e1b5f?q=80&w=800",
    slug: "peringatan-hari-santri-nasional",
    author: "Admin PP Aswaja",
    content: `<p><strong>Purwokerto</strong> – Pondok Pesantren Aswaja An-nahdliyah kembali menunjukkan komitmennya dalam membangun generasi santri yang berkarakter kuat, cerdas, dan berakhlak mulia melalui peringatan Hari Santri Nasional yang berlangsung penuh khidmat dan semarak.</p>

<p>Acara puncak peringatan Hari Santri Nasional digelar di lapangan utama pondok pesantren. Seluruh santri, asatidz, dan pengurus pondok hadir mengenakan sarung dan baju koko putih, mencerminkan identitas santri yang bangga dengan jati dirinya.</p>

<p>Dalam sambutannya, Pengasuh Pondok Pesantren menyampaikan bahwa semangat santri adalah semangat kebangsaan. "Santri bukan hanya penjaga nilai-nilai agama, tetapi juga garda terdepan dalam membangun peradaban bangsa yang bermartabat," ujar beliau di hadapan ratusan santri yang hadir.</p>

<p>Rangkaian acara meliputi upacara bendera, pembacaan Sholawat Nariyah bersama, lomba pidato kebangsaan, dan pameran karya santri. Kegiatan ini semakin meriah dengan penampilan seni budaya santri yang memukau para tamu undangan.</p>

<p>Peringatan Hari Santri Nasional ini diharapkan dapat semakin memperkokoh semangat para santri dalam menimba ilmu dan berkontribusi nyata bagi masyarakat, bangsa, dan agama.</p>`
  },
  {
    id: 2,
    title: "Pembukaan Pendaftaran Santri Baru Tahun Ajaran 2026/2027",
    description: "Kami membuka kesempatan bagi putra-putri terbaik bangsa untuk bergabung dan mendalami ilmu agama serta sains di Pondok Pesantren kami...",
    date: "10 Mei 2026",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
    slug: "pembukaan-pendaftaran-santri-baru",
    content: `<p><strong>Purwokerto</strong> – Pondok Pesantren Aswaja An-nahdliyah dengan bangga mengumumkan pembukaan pendaftaran santri baru untuk Tahun Ajaran 2026/2027. Kesempatan emas ini terbuka bagi putra-putri terbaik bangsa yang ingin mendalami ilmu agama sekaligus mengembangkan potensi akademik secara integral.</p>

<p>Pendaftaran dibuka secara resmi mulai tanggal 10 Mei hingga 30 Juni 2026. Calon santri dapat mendaftar secara langsung ke kantor sekretariat pondok pesantren atau melalui formulir pendaftaran online yang telah tersedia di website resmi kami.</p>

<p>Pondok Pesantren Aswaja An-nahdliyah menawarkan program pendidikan terpadu yang memadukan kurikulum pesantren salaf dengan pendidikan formal modern. Para santri akan mendapatkan bekal ilmu agama yang mendalam sekaligus kemampuan akademik dan keterampilan hidup yang mumpuni.</p>

<p>Fasilitas yang tersedia meliputi asrama yang nyaman, ruang belajar modern, laboratorium komputer, perpustakaan lengkap, dan berbagai sarana olahraga. Pondok pesantren juga menyediakan program beasiswa bagi santri berprestasi dari keluarga kurang mampu.</p>

<p>Untuk informasi lebih lanjut, silakan menghubungi panitia penerimaan santri baru melalui nomor telepon yang tertera atau langsung mengunjungi kantor sekretariat pondok pesantren pada jam kerja.</p>`
  },
  {
    id: 3,
    title: "Santri Aswaja An Nahdliyah Meraih Medali Emas di Olimpiade",
    description: "Prestasi membanggakan kembali diukir oleh santri kami di tingkat nasional, membuktikan bahwa pendidikan pesantren mampu bersaing di kancah global...",
    date: "08 Mei 2026",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800",
    slug: "santri-aswaja-meraih-medali-emas",
    content: `<p><strong>Purwokerto</strong> – Kebanggaan luar biasa menyelimuti seluruh keluarga besar Pondok Pesantren Aswaja An-nahdliyah. Salah satu santri terbaik kami berhasil meraih Medali Emas dalam ajang Olimpiade Sains Nasional (OSN) tingkat nasional yang diselenggarakan di Jakarta.</p>

<p>Ahmad Fauzi, santri kelas XI yang telah tiga tahun menimba ilmu di pesantren ini, berhasil unggul dalam bidang Matematika setelah melewati serangkaian seleksi ketat dari tingkat kabupaten hingga nasional. Prestasi ini sekaligus membuktikan bahwa pendidikan di pondok pesantren tidak kalah bersaing dengan sekolah-sekolah umum.</p>

<p>Pengasuh pondok pesantren menyatakan rasa bangga dan terima kasihnya kepada seluruh tim pembimbing yang telah mendedikasikan waktu dan tenaganya untuk membimbing para santri. "Prestasi ini adalah bukti nyata bahwa ilmu agama dan ilmu umum bisa berjalan beriringan dengan harmonis," tutur beliau.</p>

<p>Ahmad Fauzi sendiri mengungkapkan bahwa kunci keberhasilannya adalah keseimbangan antara ibadah dan belajar. "Saya selalu menjaga waktu tahajjud dan tidak pernah melewatkan wirid harian. Saya percaya bahwa keberkahan ilmu itu datang dari keridhoan Allah," ujarnya dengan rendah hati.</p>

<p>Ke depannya, pondok pesantren berencana untuk semakin mengintensifkan program pembinaan akademik agar lebih banyak santri yang mampu menorehkan prestasi di tingkat nasional maupun internasional.</p>`
  },
  {
    id: 4,
    title: "Workshop Jurnalistik Santri: Mengembangkan Bakat Menulis",
    description: "Para santri dibekali keterampilan menulis kreatif dan etika jurnalistik digital dalam menghadapi arus informasi di era modern saat ini...",
    date: "05 Mei 2026",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800",
    slug: "workshop-jurnalistik-santri",
    content: `<p><strong>Purwokerto</strong> – Pondok Pesantren Aswaja An-nahdliyah sukses menggelar Workshop Jurnalistik Santri yang berlangsung selama dua hari penuh. Kegiatan ini diikuti oleh lebih dari 80 santri yang antusias ingin mengembangkan kemampuan menulis dan jurnalistik mereka.</p>

<p>Workshop yang menghadirkan narasumber berpengalaman dari kalangan jurnalis profesional dan akademisi ini mencakup berbagai materi penting, mulai dari dasar-dasar penulisan berita, teknik wawancara, fotografi jurnalistik, hingga etika bermedia sosial di era digital.</p>

<p>Salah satu materi yang paling menarik perhatian peserta adalah sesi tentang literasi digital dan cara mengidentifikasi berita hoaks. Di tengah maraknya penyebaran informasi palsu, kemampuan memilah dan memilih informasi yang akurat menjadi sangat krusial.</p>

<p>Para peserta juga mendapatkan kesempatan untuk langsung mempraktikkan ilmu yang didapat dengan membuat laporan berita tentang kegiatan pondok pesantren. Hasil karya terbaik akan dimuat dalam majalah internal pesantren yang terbit setiap bulan.</p>

<p>Direktur Pendidikan pondok pesantren menyampaikan harapannya agar para santri dapat menjadi agen penyebaran informasi yang positif dan bertanggung jawab. "Di era digital ini, pena santri harus lebih tajam dari sebelumnya, namun tetap dalam koridor kebenaran dan kemaslahatan," pesannya.</p>`
  },
  {
    id: 5,
    title: "Ujian Akhir Semester Berbasis Digital: Inovasi Pendidikan",
    description: "Implementasi sistem ujian digital untuk meningkatkan efisiensi, akurasi, dan transparansi penilaian hasil belajar para santri secara berkala...",
    date: "01 Mei 2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
    slug: "ujian-akhir-semester-berbasis-digital",
    content: `<p><strong>Purwokerto</strong> – Pondok Pesantren Aswaja An-nahdliyah kembali melakukan terobosan dalam dunia pendidikan dengan menerapkan sistem Ujian Akhir Semester (UAS) berbasis digital untuk pertama kalinya. Inovasi ini merupakan bagian dari transformasi digital pondok pesantren menuju pendidikan modern yang lebih efisien dan akuntabel.</p>

<p>Sistem ujian digital ini menggunakan platform Learning Management System (LMS) yang dikembangkan khusus oleh tim IT pondok pesantren. Para santri mengerjakan soal ujian melalui tablet dan komputer yang telah disiapkan di laboratorium komputer, dengan pengawasan ketat dari para asatidz.</p>

<p>Penerapan sistem ini membawa berbagai keuntungan, di antaranya: hasil ujian dapat diproses lebih cepat, mengurangi penggunaan kertas secara signifikan, meminimalisir kecurangan dengan soal yang diacak secara otomatis, dan memudahkan rekapitulasi nilai.</p>

<p>Koordinator IT Pondok Pesantren menjelaskan bahwa sistem ini juga dilengkapi dengan fitur analitik yang memungkinkan pengajar untuk memantau progres belajar setiap santri secara detail. "Kami bisa melihat soal mana yang paling banyak salah dijawab, sehingga bisa menjadi bahan evaluasi untuk materi pembelajaran ke depan," ungkapnya.</p>

<p>Para santri merespons positif inovasi ini. Mereka mengaku lebih nyaman mengerjakan ujian secara digital karena hasilnya langsung bisa diketahui dan tidak perlu menunggu lama. Ke depannya, sistem ini akan terus dikembangkan dan disempurnakan sesuai kebutuhan.</p>`
  },
  {
    id: 6,
    title: "Santri Menang Lomba Pidato Bahasa Arab Tingkat Provinsi",
    description: "Kemenangan luar biasa diraih oleh santriwati kami dalam ajang kompetisi bahasa Arab bergengsi di tingkat provinsi dengan poin mutlak...",
    date: "28 April 2026",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800",
    slug: "santri-menang-lomba-pidato-bahasa-arab",
    content: `<p><strong>Purwokerto</strong> – Prestasi gemilang kembali ditorehkan oleh santri Pondok Pesantren Aswaja An-nahdliyah. Kali ini, Fatimah Az-Zahra, santriwati kelas X, berhasil meraih juara pertama dalam Lomba Pidato Bahasa Arab tingkat Provinsi Jawa Tengah yang diselenggarakan di Semarang.</p>

<p>Fatimah tampil memukau dengan membawakan pidato bertema "Peran Pemuda Muslim dalam Membangun Peradaban" di hadapan ratusan penonton dan dewan juri yang berpengalaman. Keunggulan dalam lafal, intonasi, dan penguasaan materi membuat dewan juri memberikan nilai tertinggi untuknya.</p>

<p>Perjalanan Fatimah untuk mencapai prestasi ini tidaklah mudah. Ia harus berlatih intensif selama tiga bulan di bawah bimbingan asatidz bahasa Arab pondok pesantren. Setiap hari setelah sholat Maghrib, ia berlatih mengucapkan kalimat-kalimat Arab dengan fasih dan bersemangat.</p>

<p>"Saya tidak pernah menyangka bisa menang. Yang terpenting bagi saya adalah bisa berbagi ilmu dan dakwah melalui bahasa Arab, bahasa Al-Quran," ungkap Fatimah dengan senyum yang bangga namun tetap rendah hati.</p>

<p>Kemenangan ini semakin membuktikan komitmen Pondok Pesantren Aswaja An-nahdliyah dalam mengembangkan kemampuan bahasa Arab para santri sebagai bagian integral dari pendidikan keislaman yang komprehensif.</p>`
  }
];
