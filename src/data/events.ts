import { ChurchEvent } from '../types';
import { CHURCH_PROFILE } from './churchData';

export const EVENTS_DATA: ChurchEvent[] = [
  {
    id: "sunday-worship",
    title: {
      id: "Ibadah Raya Minggu",
      en: "Sunday Worship Service"
    },
    date: "Setiap Minggu / Every Sunday",
    timePlaceholder: CHURCH_PROFILE.placeholders.serviceTime,
    locationPlaceholder: CHURCH_PROFILE.placeholders.address,
    description: {
      id: "Ibadah umum bersama dengan pujian, doa syafaat, pembacaan firman, dan khotbah pengajaran pastoral.",
      en: "Weekly congregational worship gathering featuring worship, corporate prayer, Scripture reading, and pastoral sermon."
    },
    category: "worship",
    isRecurring: true
  },
  {
    id: "prayer-fellowship",
    title: {
      id: "Malam Doa & Pujian Bersama",
      en: "Community Prayer & Worship Night"
    },
    date: "Rabu Pekan Ini / This Wednesday",
    timePlaceholder: "19:00 - 20:30 WIB",
    locationPlaceholder: `${CHURCH_PROFILE.placeholders.address} - Ruang Doa`,
    description: {
      id: "Ruang teduh untuk merenung, memanjatkan doa syafaat bagi sesama, dan mencari pemulihan di hadapan Tuhan.",
      en: "A quiet mid-week sanctuary to pause, pray for one another, and find spiritual restoration."
    },
    category: "prayer"
  },
  {
    id: "bible-study-reflection",
    title: {
      id: "Pendalaman Alkitab Komunitas",
      en: "Community Scripture Discussion"
    },
    date: "Jumat Pekan Ini / This Friday",
    timePlaceholder: "19:30 - 21:00 WIB",
    locationPlaceholder: `${CHURCH_PROFILE.placeholders.address} / Online Link`,
    description: {
      id: "Diskusi interaktif yang santai mengenai penerapan firman Tuhan dalam kehidupan sehari-hari.",
      en: "An open, casual conversation applying biblical insights to work, relationships, and daily life."
    },
    category: "study"
  },
  {
    id: "youth-gathering",
    title: {
      id: "Persekutuan Remaja & Pemuda",
      en: "Youth & Young Adults Fellowship"
    },
    date: "Sabtu Sore / Saturday Afternoon",
    timePlaceholder: "16:30 - 18:30 WIB",
    locationPlaceholder: `${CHURCH_PROFILE.placeholders.address} - Youth Hall`,
    description: {
      id: "Wadah bertumbuh bagi generasi muda dalam iman, persahabatan sejati, dan proyek kepedulian sosial.",
      en: "A vibrant space for young people to grow in genuine friendship, purpose, and community service."
    },
    category: "youth"
  },
  {
    id: "community-service-day",
    title: {
      id: "Aksi Kasih & Bakti Sosial Masyarakat",
      en: "Community Compassion & Service Day"
    },
    date: "Sabtu Terakhir Bulan Ini / Last Saturday of Month",
    timePlaceholder: "08:00 - 12:00 WIB",
    locationPlaceholder: `Wilayah Sekitar ${CHURCH_PROFILE.placeholders.address}`,
    description: {
      id: "Pelayanan nyata bagi masyarakat sekitar berupa pembagian sembako, pemeriksaan kesehatan gratis, dan kepedulian lingkungan.",
      en: "Practical neighborly service providing basic supplies, free health screenings, and environmental care."
    },
    category: "community"
  }
];
