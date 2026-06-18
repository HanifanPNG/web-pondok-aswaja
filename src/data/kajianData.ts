// src/data/kajianData.ts
export interface KajianItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  pemateri?: string;
  category?: string;
  content: string;
}

export const kajianData: KajianItem[] = [
  {
    id: 1,
    title: "Kajian Kitab Riyadhus Shalihin: Bab Ikhlas dalam Beramal",
    description: "Pembahasan mendalam tentang makna ikhlas dalam setiap amal ibadah berdasarkan kitab Riyadhus Shalihin karya Imam An-Nawawi rahimahullah...",
    date: "12 Mei 2026",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800",
    slug: "kajian-riyadhus-shalihin-ikhlas",
    pemateri: "KH. Ahmad Mustofa, Lc.",
    content: `<p><strong>Purwokerto</strong> – Kajian rutin mingguan Pondok Pesantren Aswaja An-nahdliyah kembali digelar dengan mengkaji Kitab Riyadhus Shalihin karya Imam An-Nawawi rahimahullah. Pada pertemuan kali ini, pembahasan berfokus pada Bab Ikhlas dalam Beramal yang merupakan fondasi utama diterimanya sebuah amal ibadah.</p>

<p>KH. Ahmad Mustofa, Lc. selaku pemateri utama membuka kajian dengan membacakan hadits Rasulullah ﷺ yang diriwayatkan oleh Imam Bukhari dan Muslim: <em>"Sesungguhnya setiap amal perbuatan tergantung pada niatnya, dan sesungguhnya setiap orang akan mendapatkan sesuai dengan apa yang ia niatkan."</em></p>

<p>Beliau menjelaskan bahwa ikhlas bukanlah sekadar tidak mengharap pujian dari manusia, tetapi juga menjaga hati agar seluruh motivasi beramal hanya tertuju kepada Allah SWT semata. "Ikhlas itu tersembunyi, bahkan dari diri kita sendiri. Oleh karena itu, kita harus terus-menerus muhasabah dan memperbarui niat sebelum dan selama beramal," tutur KH. Ahmad Mustofa.</p>

<p>Kajian ini juga membahas tentang bahaya riya (pamer) dan sum'ah (ingin didengar) yang dapat menghapus pahala amal. Para peserta kajian diajak untuk merenungi kembali niat di balik setiap ibadah yang mereka lakukan, baik sholat, puasa, sedekah, maupun aktivitas sehari-hari.</p>

<p>Sebagai penutup, beliau menyampaikan nasihat berharga: "Ukuran keberhasilan seorang hamba bukan pada banyaknya amal, tetapi pada dalamnya ikhlas dalam beramal. Sedikit amal yang ikhlas jauh lebih bernilai di sisi Allah daripada banyak amal yang penuh riya."</p>`
  },
  {
    id: 2,
    title: "Halaqah Fiqih: Hukum Muamalah dalam Era Digital",
    description: "Diskusi ilmiah tentang hukum-hukum fiqih yang berkaitan dengan transaksi digital, e-commerce, dan keuangan syariah di masa modern...",
    date: "10 Mei 2026",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800",
    slug: "halaqah-fiqih-muamalah-digital",
    pemateri: "Ustadz Dr. Hamid Fahmi, M.H.I.",
    content: `<p><strong>Purwokerto</strong> – Pondok Pesantren Aswaja An-nahdliyah menggelar Halaqah Fiqih bertema "Hukum Muamalah dalam Era Digital" yang membahas berbagai persoalan fiqih kontemporer terkait transaksi ekonomi di zaman modern. Kajian ini menghadirkan Ustadz Dr. Hamid Fahmi, M.H.I., seorang pakar fiqih muamalah dari Universitas Islam Negeri Purwokerto.</p>

<p>Ustadz Hamid membuka kajian dengan memaparkan prinsip-prinsip dasar muamalah dalam Islam: kehalalan objek transaksi, kesepakatan kedua belah pihak, kejelasan akad, dan bebas dari unsur gharar (ketidakjelasan), maisir (perjudian), dan riba.</p>

<p>Dalam sesi utama, beliau membahas berbagai pertanyaan kontemporer yang sering muncul di masyarakat: Bagaimana hukum jual beli online? Apakah dropshipping itu halal? Bagaimana ketentuan syariah untuk investasi di pasar modal? Dan bagaimana hukum menggunakan dompet digital dan paylater?</p>

<p>Menurut Ustadz Hamid, jual beli online pada dasarnya diperbolehkan selama memenuhi rukun dan syarat jual beli dalam Islam. "Yang perlu diperhatikan adalah kejelasan barang, harga, dan mekanisme pembayarannya. Jika ada gharar yang signifikan, maka perlu dihindari," jelasnya dengan terperinci.</p>

<p>Kajian ini berlangsung sangat dinamis dengan banyaknya pertanyaan dari para peserta yang terdiri dari santri senior, asatidz, dan masyarakat umum. Halaqah semacam ini direncanakan akan terus diadakan secara rutin setiap bulan untuk menjawab tantangan fiqih di era modern.</p>`
  },
  {
    id: 3,
    title: "Kajian Tafsir: Memahami Surah Al-Hujurat dan Etika Sosial",
    description: "Penjelasan mendalam tentang kandungan Surah Al-Hujurat sebagai panduan etika sosial Islam yang relevan di era modern dan media sosial...",
    date: "08 Mei 2026",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800",
    slug: "kajian-tafsir-surah-al-hujurat",
    pemateri: "KH. Zainul Arifin, M.Ag.",
    content: `<p><strong>Purwokerto</strong> – Kajian Tafsir mingguan Pondok Pesantren Aswaja An-nahdliyah membahas Surah Al-Hujurat, sebuah surah yang sarat dengan panduan etika sosial yang sangat relevan dengan kehidupan bermasyarakat, termasuk di era media sosial yang penuh tantangan ini.</p>

<p>KH. Zainul Arifin, M.Ag. memulai kajian dengan menjelaskan konteks historis turunnya Surah Al-Hujurat. Surah ini diturunkan di Madinah dan memuat berbagai petunjuk tentang adab terhadap Allah, Rasul-Nya, dan sesama manusia.</p>

<p>Beliau secara khusus menekankan ayat ke-6 tentang tabayyun (klarifikasi): <em>"Wahai orang-orang yang beriman! Jika seseorang yang fasik datang kepadamu membawa suatu berita, maka telitilah kebenarannya."</em> Ayat ini, menurut beliau, adalah panduan anti-hoaks yang diturunkan Allah 14 abad yang lalu.</p>

<p>"Di era media sosial sekarang, kita sering kali share berita tanpa tabayyun terlebih dahulu. Islam sudah mengajarkan kita untuk selalu klarifikasi sebelum menyebarkan informasi. Ini adalah etika digital yang diajarkan Al-Quran," ungkap KH. Zainul Arifin.</p>

<p>Kajian juga membahas tentang larangan ghibah (gosip), namimah (adu domba), dan tajassus (mencari-cari aib orang lain) yang tercantum dalam Surah Al-Hujurat. Para peserta diajak untuk refleksi bagaimana mengimplementasikan nilai-nilai ini dalam kehidupan sehari-hari dan interaksi di media sosial.</p>`
  },
  {
    id: 4,
    title: "Majelis Dzikir dan Sholawat: Mendekatkan Diri kepada Allah",
    description: "Majelis dzikir bersama yang dipenuhi dengan lantunan sholawat, istighfar, dan wirid sebagai sarana mendekatkan diri kepada Allah SWT...",
    date: "05 Mei 2026",
    image: "https://images.unsplash.com/photo-1564429097439-e400644e1b5f?q=80&w=800",
    slug: "majelis-dzikir-sholawat",
    pemateri: "KH. Ahmad Mustofa, Lc.",
    content: `<p><strong>Purwokerto</strong> – Malam yang syahdu menyelimuti Pondok Pesantren Aswaja An-nahdliyah saat Majelis Dzikir dan Sholawat digelar setelah sholat Isya. Ratusan santri, asatidz, dan masyarakat sekitar berkumpul dengan khusyuk untuk bersama-sama mendekatkan diri kepada Allah SWT melalui dzikir dan lantunan sholawat.</p>

<p>Majelis ini dibuka dengan pembacaan Surah Yasin bersama, dilanjutkan dengan Tahlil, dan kemudian dilantunkan Sholawat Nariyah sebanyak 4.444 kali secara berjamaah. Suasana semakin khidmat ketika alunan sholawat mengalun merdu memenuhi ruangan masjid yang diterangi cahaya temaram.</p>

<p>KH. Ahmad Mustofa dalam tausiyah singkatnya menjelaskan keutamaan dzikir dan sholawat. "Ketika kita bersholawat kepada Nabi Muhammad ﷺ, Allah akan membalas dengan 10 sholawat kepada kita. Bayangkan betapa besar kasih sayang Allah kepada kita," tutur beliau dengan penuh haru.</p>

<p>Beliau juga mengingatkan tentang pentingnya dzikir dalam kehidupan sehari-hari. "Hati yang banyak berdzikir adalah hati yang tenang. Di tengah hiruk-pikuk kehidupan modern, dzikir adalah obat penawar kegelisahan jiwa yang paling mujarab," lanjut KH. Ahmad Mustofa.</p>

<p>Majelis Dzikir dan Sholawat ini diakhiri dengan doa bersama yang dipimpin langsung oleh pengasuh pondok pesantren, memohon keberkahan, keselamatan, dan ridho Allah SWT untuk seluruh keluarga besar pondok pesantren dan umat Islam pada umumnya.</p>`
  },
  {
    id: 5,
    title: "Kajian Hadits: Pentingnya Menjaga Lisan dan Perkataan",
    description: "Pembahasan hadits-hadits pilihan tentang urgensi menjaga lisan dari perkataan yang sia-sia, bohong, dan menyakitkan hati orang lain...",
    date: "01 Mei 2026",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=800",
    slug: "kajian-hadits-menjaga-lisan",
    pemateri: "Ustadzah Nur Hasanah, Lc., M.A.",
    content: `<p><strong>Purwokerto</strong> – Kajian Hadits spesial untuk para santriwati Pondok Pesantren Aswaja An-nahdliyah digelar dengan tema yang sangat relevan: "Pentingnya Menjaga Lisan dan Perkataan." Kajian ini diasuh oleh Ustadzah Nur Hasanah, Lc., M.A., seorang akademisi muda yang ahli dalam ilmu hadits.</p>

<p>Ustadzah Nur membuka kajian dengan menyampaikan hadits dari Abu Hurairah r.a. bahwa Rasulullah ﷺ bersabda: <em>"Barangsiapa yang beriman kepada Allah dan hari akhir, maka hendaklah ia berkata yang baik atau diam."</em> (HR. Bukhari dan Muslim)</p>

<p>Dalam penjelasannya, Ustadzah Nur menekankan bahwa hadits ini memberikan pilihan yang sangat jelas: berkata baik atau diam. Tidak ada pilihan ketiga untuk berkata buruk. "Lisan adalah amanah yang Allah berikan kepada kita. Setiap kata yang kita ucapkan akan dicatat oleh malaikat dan akan dimintai pertanggungjawaban di akhirat nanti," ungkap Ustadzah Nur.</p>

<p>Kajian ini juga membahas hadits tentang larangan berbohong, menggunjing (ghibah), berkata kasar, dan menyakiti perasaan orang lain. Ustadzah Nur mengajak para santriwati untuk merefleksikan kebiasaan mereka dalam berkomunikasi, baik secara langsung maupun di media sosial.</p>

<p>"Di era media sosial, lisan kita sudah bertransformasi menjadi jari-jari kita yang mengetik. Hukumnya tetap sama. Komentar buruk di media sosial, ujaran kebencian, dan cyberbullying semuanya termasuk dalam kategori yang dilarang Nabi ﷺ," tegas Ustadzah Nur Hasanah.</p>`
  },
  {
    id: 6,
    title: "Kajian Sirah Nabawiyah: Keteladanan Akhlak Rasulullah ﷺ",
    description: "Menyelami perjalanan hidup Rasulullah Muhammad ﷺ dan meneladani akhlak mulia beliau sebagai panduan menjalani kehidupan yang bermartabat...",
    date: "28 April 2026",
    image: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?q=80&w=800",
    slug: "kajian-sirah-akhlak-rasulullah",
    pemateri: "KH. Zainul Arifin, M.Ag.",
    content: `<p><strong>Purwokerto</strong> – Kajian Sirah Nabawiyah bulanan Pondok Pesantren Aswaja An-nahdliyah kali ini mengangkat tema yang selalu relevan sepanjang zaman: Keteladanan Akhlak Rasulullah ﷺ. Kajian yang dipenuhi peserta ini dibawakan oleh KH. Zainul Arifin, M.Ag. dengan penuh semangat dan kecintaan kepada Nabi ﷺ.</p>

<p>KH. Zainul Arifin membuka kajian dengan membacakan firman Allah dalam Al-Quran Surah Al-Ahzab ayat 21: <em>"Sesungguhnya telah ada pada diri Rasulullah itu suri tauladan yang baik bagimu, yaitu bagi orang yang mengharap rahmat Allah dan kedatangan hari kiamat dan dia banyak menyebut nama Allah."</em></p>

<p>Beliau kemudian menguraikan berbagai sifat mulia Rasulullah ﷺ yang patut diteladani: kejujuran (shidiq), kepercayaan (amanah), kemampuan menyampaikan (tabligh), dan kecerdasan (fathonah). Namun lebih dari itu, beliau menekankan bagaimana Nabi ﷺ memperlakukan orang-orang di sekitarnya dengan penuh kasih sayang dan rasa hormat.</p>

<p>"Rasulullah ﷺ adalah orang yang paling mulia akhlaknya, namun beliau tidak pernah sombong. Beliau adalah pemimpin umat, namun beliau juga membantu pekerjaan rumah tangga. Beliau tegas dalam kebenaran, namun lembut kepada yang lemah. Inilah sosok teladan sejati yang harus kita contohi," papar KH. Zainul Arifin dengan penuh penghayatan.</p>

<p>Kajian ditutup dengan sesi tanya jawab yang hangat dan doa bersama memohon kepada Allah agar kita semua dapat meneladani akhlak Rasulullah ﷺ dalam setiap aspek kehidupan sehari-hari kita.</p>`
  }
];
