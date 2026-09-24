import { Ministry } from '../types';
import { CHURCH_PROFILE } from './churchData';

export const MINISTRIES_DATA: Ministry[] = [
  {
    id: "children",
    name: {
      id: "Pelayanan Anak (Sekolah Minggu)",
      en: "Children's Ministry (Sunday School)"
    },
    audience: {
      id: "Usia 3 - 12 Tahun",
      en: "Ages 3 - 12"
    },
    description: {
      id: "Membimbing anak-anak mengenal kasih Allah melalui cerita Alkitab interaktif, lagu pujian ceria, dan kegiatan kreatif yang aman.",
      en: "Guiding children to discover God's love through interactive Bible stories, joyful songs, and safe creative activities."
    },
    schedulePlaceholder: `Minggu, bersamaan dengan ibadah umum ${CHURCH_PROFILE.placeholders.serviceTime}`
  },
  {
    id: "youth",
    name: {
      id: "Remaja & Pemuda (Youth & Teens)",
      en: "Youth & Young Adults"
    },
    audience: {
      id: "SMP, SMA & Mahasiswa",
      en: "Students & Young Adults"
    },
    description: {
      id: "Komunitas yang saling mendukung dalam masa transisi hidup, mencari panggilan hidup, dan membangun fondasi iman yang teguh.",
      en: "A supportive peer circle navigating life transitions, career discernment, and solid spiritual roots."
    },
    schedulePlaceholder: "Sabtu Sore, 16:30 WIB"
  },
  {
    id: "families",
    name: {
      id: "Keluarga & Pernikahan",
      en: "Family & Marriage Ministry"
    },
    audience: {
      id: "Pasangan Menikah & Orang Tua",
      en: "Married Couples & Parents"
    },
    description: {
      id: "Pendampingan bagi keluarga Kristen untuk membangun rumah tangga yang harmonis, penuh kasih, dan saling menguatkan.",
      en: "Equipping families and couples to build enduring, compassionate homes rooted in mutual respect."
    },
    schedulePlaceholder: "Pertemuan Bulanan / Monthly Sessions"
  },
  {
    id: "prayer-pastoral",
    name: {
      id: "Pelayanan Doa & Tim Pastoral",
      en: "Prayer & Pastoral Care"
    },
    audience: {
      id: "Semua Jemaat & Sahabat yang Membutuhkan",
      en: "All Members & Anyone Seeking Support"
    },
    description: {
      id: "Mendoakan setiap permohonan doa yang masuk secara rahasia, serta melayani konseling rohani bagi jiwa-jiwa yang sedang bergumul.",
      en: "Faithfully and confidentially praying over submitted requests, and offering pastoral counseling."
    },
    schedulePlaceholder: "Tersedia Setiap Hari melalui Formulir Pelayanan"
  },
  {
    id: "community-service",
    name: {
      id: "Pelayanan Sosial & Kepedulian Masyarakat",
      en: "Compassion & Community Service"
    },
    audience: {
      id: "Masyarakat Umum & Lingkungan Sekitar",
      en: "Local Community & Neighbors"
    },
    description: {
      id: "Mewujudkan kasih Kristus secara konkret melalui aksi kepedulian pangan, bantuan bencana, dan pendidikan masyarakat.",
      en: "Demonstrating Christ's sacrificial love through local food relief, crisis assistance, and civic engagement."
    },
    schedulePlaceholder: "Proyek Rutin Bulanan"
  }
];
