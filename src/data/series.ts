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

const RAW_BASE = "https://raw.githubusercontent.com/Runteryaa/run-watch/master/public/subtitles/";

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
        subtitleUrl: `${RAW_BASE}Crookhaven%201.%20Sezon%201.%20B%C3%B6l%C3%BCm%20izle%20-%20Dizibox.vtt`,
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      },
      {
        id: "s01e02",
        title: "S01E02: İçeri Sızış",
        description: "İçeri Sızma Yarışması sırasında 'Meritler' ve 'Legacy'ler' arasındaki rekabet kızışır. Bu sırada Amira kardeşinin ihanetinin sonuçlarıyla uğraşırken, Gabriel şok edici bir keşif yapar.",
        videoUrl: "https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frluemj6q2zh/b/runterya-runwatch/o/h264_Crookhaven%202026%20S01E02%20The%20Break-In%20720p%20WEB-DL%20HEVC%20x265%20BONE.mp4",
        subtitleUrl: `${RAW_BASE}Crookhaven%201.%20Sezon%202.%20B%C3%B6l%C3%BCm%20izle%20-%20Dizibox.vtt`,
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      },
      {
        id: "s01e03",
        title: "S01E03: Tam İfşa",
        description: "Gabriel ve Penelope kozlarını paylaşırken birbirlerinin sırlarını ortaya dökmek için sınırları zorlar. Ade ve Ede ise bir hırsıza güvenmenin ne kadar riskli olduğunu öğrenirler.",
        videoUrl: "https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frluemj6q2zh/b/runterya-runwatch/o/h264_Crookhaven%202026%20S01E03%20Full%20Disclosure%20720p%20WEB-DL%20HEVC%20x265%20BONE.mp4",
        subtitleUrl: `${RAW_BASE}Crookhaven%201.%20Sezon%203.%20B%C3%B6l%C3%BCm%20izle%20-%20Dizibox.vtt`,
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      },
      {
        id: "s01e04",
        title: "S01E04: Çarpık Ağ",
        description: "'İsimsizler' saldırıya geçtiğinde okul karantinaya alınır. Gabriel ve ekibi, Crookhaven'ın sakladığı derin aile sırlarını keşfetmek için tehlikeli bir göreve çıkar.",
        videoUrl: "https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frluemj6q2zh/b/runterya-runwatch/o/h264_Crookhaven%202026%20S01E04%20The%20Crooked%20Network%20720p%20WEB-DL%20HEVC%20x265%20BONE.mp4",
        subtitleUrl: `${RAW_BASE}Crookhaven%201.%20Sezon%204.%20B%C3%B6l%C3%BCm%20izle%20-%20Dizibox.vtt`,
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      },
      {
        id: "s01e05",
        title: "S01E05: Şilin Testi",
        description: "Bir casus okulda ortalığı birbirine katar. Gabriel ailesini ararken kendini Crookhaven'ın kalbinde bulur ve Edgar, şilin testini kazanmak için her şeyi göze alır.",
        videoUrl: "https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frluemj6q2zh/b/runterya-runwatch/o/h264_Crookhaven%202026%20S01E05%20The%20Shilling%20Test%20720p%20WEB-DL%20HEVC%20x265%20BONE.mp4",
        subtitleUrl: `${RAW_BASE}Crookhaven%201.%20Sezon%205.%20B%C3%B6l%C3%BCm%20izle%20-%20Dizibox.vtt`,
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      },
      {
        id: "s01e06",
        title: "S01E06: Crooxeat",
        description: "Öğrenciler eve döner ve okul kurallarını çiğnerler. Penelope cevaplar beklerken Amira ve Nicki karşı karşıya gelir. Gerçek dünyadaki bir soygun ekibi düşmanla yüz yüze getirir.",
        videoUrl: "https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frluemj6q2zh/b/runterya-runwatch/o/h264_Crookhaven%202026%20S01E06%20Crooxeat%20720p%20WEB-DL%20HEVC%20x265%20BONE.mp4",
        subtitleUrl: `${RAW_BASE}Crookhaven%201.%20Sezon%206.%20B%C3%B6l%C3%BCm%20izle%20-%20Dizibox.vtt`,
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      },
      {
        id: "s01e07",
        title: "S01E07: Davalar",
        description: "Tüm suç dünyasının gözü üzerlerindeyken öğrenciler kıran kırana geçen sınavlarda yarışır. İsimsiz casus çaresizce hamleler yaparken Jia, Amira'yı aramaya başlar.",
        videoUrl: "https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frluemj6q2zh/b/runterya-runwatch/o/h264_Crookhaven%202026%20S01E07%20The%20Trials%20720p%20WEB-DL%20HEVC%20x265%20BONE.mp4",
        subtitleUrl: `${RAW_BASE}Crookhaven%201.%20Sezon%207.%20B%C3%B6l%C3%BCm%20izle%20-%20Dizibox.vtt`,
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      },
      {
        id: "s01e08",
        title: "S01E08: Maskeli Balo",
        description: "Maskeli Balo herkesin gerçek yüzünü ortaya çıkarır. İçerideki bir düşman Gabriel'i her şeyi sorgulamaya zorlar ve Caspian'ın planı Penelope'yi büyük bir tehlikeye atar.",
        videoUrl: "https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frluemj6q2zh/b/runterya-runwatch/o/h264_Crookhaven%202026%20S01E08%20Masquerade%20720p%20WEB-DL%20HEVC%20x265%20BONE.mp4",
        subtitleUrl: `${RAW_BASE}Crookhaven%201.%20Sezon%208.%20B%C3%B6l%C3%BCm%20izle%20-%20Dizibox.vtt`,
        thumbnailUrl: "https://ichef.bbci.co.uk/images/ic/976x549/p0n21r5w.jpg",
      }
    ]
  }
];

export function getEpisodeById(seriesId: string, episodeId: string): Episode | undefined {
  const series = seriesData.find(s => s.id === seriesId);
  return series?.episodes.find(e => e.id === episodeId);
}
