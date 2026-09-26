export const CHURCH_PROFILE = {
  name: "GKMI Joshua Generation",
  shortName: "GKMI JG",
  tagline: {
    id: "Datang apa adanya. Bertumbuh dalam iman. Berjalan bersama.",
    en: "Come as you are. Grow in faith. Walk together."
  },
  missionStatement: {
    id: "Komunitas Kristen tempat kita berkumpul untuk beribadah, bertumbuh dalam iman, melayani sesama, dan menjalani kehidupan bersama.",
    en: "A Christian community where we gather to worship, grow in faith, serve others, and walk through life together."
  },
  mapsUrl: "https://maps.app.goo.gl/UfqR7gShH91qzrfr7",
  placeholders: {
    address: "Rhema Building Convention Center, Lt. 2",
    fullAddress: "Rhema Building Convention Center, Lt. 2\nJl. K.H. Noer Ali, RT 005/RW 006A, Jakasampurna,\nBekasi Barat, Kota Bekasi, Jawa Barat 17145",
    serviceTime: "10:00 - selesai",
    serviceDay: "Setiap Minggu",
    phone: "+62 858-8087-2623",
    email: "novarungkat3@gmail.com",
    pastorName: "Pdt. Nova Jelly Rungkat, S.Pt., M.Pd.,M.Th",
    instagramUrl: "[INSTAGRAM URL]",
    youtubeUrl: "[YOUTUBE URL]",
    facebookUrl: "[FACEBOOK URL]"
  },
  images: {
    hero: "/hero_worship_community_1790167355191.jpg",
    pastor: "/pastor-photo.png",
    community: "/community_fellowship_1790167383537.jpg",
    devotional: "/devotional_reading_1790167400759.jpg"
  }
};

export const VISITOR_FAQS = [
  {
    id: "where",
    question: {
      id: "Di mana lokasi gereja kami?",
      en: "Where is the church located?"
    },
    answer: {
      id: `Gedung ibadah kami bertempat di ${CHURCH_PROFILE.placeholders.address}. Terdapat area parkir dan akses yang ramah bagi keluarga maupun penyandang disabilitas.`,
      en: `Our worship building is located at ${CHURCH_PROFILE.placeholders.address}. Parking and accessible entrance facilities are available.`
    }
  },
  {
    id: "when",
    question: {
      id: "Kapan jadwal kebaktian / ibadah mingguan?",
      en: "When is the weekly worship service?"
    },
    answer: {
      id: `Ibadah umum diadakan ${CHURCH_PROFILE.placeholders.serviceDay.toLowerCase()} pukul ${CHURCH_PROFILE.placeholders.serviceTime}. Kami menyarankan hadir 10–15 menit lebih awal untuk menikmati suasana teduh dan penyambutan ramah dari tim kami.`,
      en: `Sunday worship gathers every Sunday at ${CHURCH_PROFILE.placeholders.serviceTime}. We invite you to arrive 10–15 minutes early for quiet reflection and a warm welcome.`
    }
  },
  {
    id: "wear",
    question: {
      id: "Pakaian apa yang harus saya kenakan?",
      en: "What should I wear?"
    },
    answer: {
      id: "Datanglah apa adanya. Tidak ada aturan berpakaian yang kaku. Banyak jemaat mengenakan pakaian kasual yang rapi dan nyaman.",
      en: "Come as you are. There is no strict dress code. Most people wear comfortable, neat casual or smart-casual clothing."
    }
  },
  {
    id: "alone",
    question: {
      id: "Bolehkah saya datang seorang diri?",
      en: "Can I come alone?"
    },
    answer: {
      id: "Tentu saja! Banyak orang yang pertama kali datang sendiri. Tim penyambut kami akan dengan senang hati menyapa dan membantu Anda menemukan tempat duduk yang nyaman tanpa paksaan apa pun.",
      en: "Absolutely! Many first-timers arrive on their own. Our welcome team will warmly greet you and help you find a comfortable seat without any pressure."
    }
  },
  {
    id: "duration",
    question: {
      id: "Berapa lama durasi ibadah?",
      en: "How long is the worship service?"
    },
    answer: {
      id: "Kebaktian Minggu umumnya berlangsung sekitar 75 hingga 90 menit.",
      en: "Our Sunday service typically lasts between 75 and 90 minutes."
    }
  },
  {
    id: "flow",
    question: {
      id: "Apa saja rangkaian kegiatan selama ibadah berlangsung?",
      en: "What happens during the service?"
    },
    answer: {
      id: "Rangkaian ibadah kami sederhana dan berpusat pada Kristus: Pujian & Penyembahan → Doa Bersama → Pembacaan Firman Tuhan → Renungan / Khotbah yang aplikatif → Persekutuan & Ramah Tamah santai setelah ibadah.",
      en: "Our service flow is simple and Christ-centered: Praise & Worship → Corporate Prayer → Scripture Reading → Practical Pastoral Sermon → Informal Fellowship & Coffee afterwards."
    }
  },
  {
    id: "children",
    question: {
      id: "Apakah ada pelayanan untuk anak-anak?",
      en: "Is there a program for children?"
    },
    answer: {
      id: "Ya, kami menyediakan kelas Sekolah Minggu / bimbingan anak yang aman, hangat, dan menyenangkan selama sesi khotbah berlangsung.",
      en: "Yes, we provide safe, warm, and engaging Sunday school activities for kids during the sermon portion."
    }
  }
];
