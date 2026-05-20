export interface Episode {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  subtitleUrl: string;
  thumbnailUrl?: string;
}

export interface Series {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
  episodes: Episode[];
}

export const seriesData: Series[] = [
  {
    id: "crookhaven-2026",
    title: "Crookhaven (2026)",
    description: "Yetenekli bir yankesici olan Gabriel Avery, öğrencilere suç dünyasının yöntemlerini kullanarak iyilik yapmanın öğretildiği gizli bir okula, Crookhaven'a davet edilir.",
    coverImage: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
    episodes: [
      {
        id: "s01e01",
        title: "S01E01: Bilgeye Bir Söz",
        description: "Yankesici Gabriel Avery, suçluları kendi oyunlarında alt etmeyi öğreten bir hırsızlar okulu olan Crookhaven'a katıldığında kendini yepyeni ve gizemli bir hayatın içinde bulur.",
        videoUrl: "https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frluemj6q2zh/b/runterya-runwatch/o/h264_Crookhaven%202026%20S01E01%20Word%20to%20the%20Wise%20720p%20WEB-DL%20HEVC%20x265%20BONE.mp4",
        subtitleUrl: "/subtitles/Crookhaven 1. Sezon 1. Bölüm izle - Dizibox.vtt",
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      },
      {
        id: "s01e02",
        title: "S01E02: İçeri Sızış",
        description: "İçeri Sızma Yarışması sırasında 'Meritler' ve 'Legacy'ler' arasındaki rekabet kızışır. Bu sırada Amira kardeşinin ihanetinin sonuçlarıyla uğraşırken, Gabriel şok edici bir keşif yapar.",
        videoUrl: "https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frluemj6q2zh/b/runterya-runwatch/o/h264_Crookhaven%202026%20S01E02%20The%20Break-In%20720p%20WEB-DL%20HEVC%20x265%20BONE.mp4",
        subtitleUrl: "/subtitles/Crookhaven 1. Sezon 2. Bölüm izle - Dizibox.vtt",
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      },
      {
        id: "s01e03",
        title: "S01E03: Tam İfşa",
        description: "Gabriel ve Penelope kozlarını paylaşırken birbirlerinin sırlarını ortaya dökmek için sınırları zorlar. Ade ve Ede ise bir hırsıza güvenmenin ne kadar riskli olduğunu öğrenirler.",
        videoUrl: "",
        subtitleUrl: "/subtitles/Crookhaven 1. Sezon 3. Bölüm izle - Dizibox.vtt",
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      },
      {
        id: "s01e04",
        title: "S01E04: Çarpık Ağ",
        description: "'İsimsizler' saldırıya geçtiğinde okul karantinaya alınır. Gabriel ve ekibi, Crookhaven'ın sakladığı derin aile sırlarını keşfetmek için tehlikeli bir göreve çıkar.",
        videoUrl: "",
        subtitleUrl: "/subtitles/Crookhaven 1. Sezon 4. Bölüm izle - Dizibox.vtt",
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      },
      {
        id: "s01e05",
        title: "S01E05: Şilin Testi",
        description: "Bir casus okulda ortalığı birbirine katar. Gabriel ailesini ararken kendini Crookhaven'ın kalbinde bulur ve Edgar, şilin testini kazanmak için her şeyi göze alır.",
        videoUrl: "",
        subtitleUrl: "/subtitles/Crookhaven 1. Sezon 5. Bölüm izle - Dizibox.vtt",
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      },
      {
        id: "s01e06",
        title: "S01E06: Crooxeat",
        description: "Öğrenciler eve döner ve okul kurallarını çiğnerler. Penelope cevaplar beklerken Amira ve Nicki karşı karşıya gelir. Gerçek dünyadaki bir soygun ekibi düşmanla yüz yüze getirir.",
        videoUrl: "",
        subtitleUrl: "/subtitles/Crookhaven 1. Sezon 6. Bölüm izle - Dizibox.vtt",
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      },
      {
        id: "s01e07",
        title: "S01E07: Davalar",
        description: "Tüm suç dünyasının gözü üzerlerindeyken öğrenciler kıran kırana geçen sınavlarda yarışır. İsimsiz casus çaresizce hamleler yaparken Jia, Amira'yı aramaya başlar.",
        videoUrl: "",
        subtitleUrl: "/subtitles/Crookhaven 1. Sezon 7. Bölüm izle - Dizibox.vtt",
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      },
      {
        id: "s01e08",
        title: "S01E08: Maskeli Balo",
        description: "Maskeli Balo herkesin gerçek yüzünü ortaya çıkarır. İçerideki bir düşman Gabriel'i her şeyi sorgulamaya zorlar ve Caspian'ın planı Penelope'yi büyük bir tehlikeye atar.",
        videoUrl: "",
        subtitleUrl: "/subtitles/Crookhaven 1. Sezon 8. Bölüm izle - Dizibox.vtt",
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      }
    ]
  }
];

export function getEpisodeById(seriesId: string, episodeId: string): Episode | undefined {
  const series = seriesData.find(s => s.id === seriesId);
  return series?.episodes.find(e => e.id === episodeId);
}
