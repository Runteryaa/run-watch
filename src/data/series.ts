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
  },
  {
    id: "bridgerton",
    title: "Bridgerton",
    description: "Bridgerton ailesi, toplum hayatının yeni bir sosyal sezonuyla karşı karşıya. Anthony Bridgerton, kendine uygun bir eş arayışına girerken aşk, ailevi sorumluluklar ve tutku dolu bir hikaye onu bekliyor.",
    coverImage: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
    episodes: [
      {
        id: "s02e01",
        title: "S02E01: Hovarda",
        description: "Anthony bir eş arayışına başlar, Eloise sosyeteye girişini cesaretle gerçekleştirir ve Lady Danbury, kraliçenin sezonun yeni sosyete kızları arasından bir elmas seçmesine yardım eder.",
        videoUrl: "https://runwatch.dpdns.org/converted_1.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton1.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      },
      {
        id: "s02e02",
        title: "S02E02: Yarış Başlasın",
        description: "Sert rekabet ve zorlu bir rakiple karşı karşıya kalan Anthony, kur yapma çabalarını artırır. Bir aile üyesi geri dönerken Eloise, Lady Whistledown ile ilgili bir keşif yapar.",
        videoUrl: "https://runwatch.dpdns.org/converted_2.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton2.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      },
      {
        id: "s02e03",
        title: "S02E03: Takıntı",
        description: "Sharma ailesi, Bridgertonların kırsal malikanesine varır; burada Anthony, kötü anılar ve acımasız bir pall-mall oyunu arasında Kate’in gözüne girmeye çalışır.",
        videoUrl: "https://runwatch.dpdns.org/converted_3.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton3.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      },
      {
        id: "s02e04",
        title: "S02E04: Zafer",
        description: "Konuklar Bridgerton'ların balosuna toplanırken, Anthony ve Kate bir av gezisi sırasında çatışır, Colin geçmişle yüzleşir ve Leydi Featherington bir tuzak kurar.",
        videoUrl: "https://runwatch.dpdns.org/converted_4.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton4.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      },
      {
        id: "s02e05",
        title: "S02E05: Olmayacak İş",
        description: "Anthony'nin aceleci evlilik planları karşısında sarsılan Kate, Lady Danbury'den tavsiye alır. Eloise, yeni bir müttefikiyle atışır. Bir akşam yemeği partisi sırasında ortalık gerginleşir.",
        videoUrl: "https://runwatch.dpdns.org/converted_5.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton5.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      },
      {
        id: "s02e06",
        title: "S02E06: Tercih",
        description: "Anthony'nin ailesine karşı olan sorumluluğu, Kate'e duyduğu arzuyla çatışıyor. Edwina geleceğini düşünüyor ve kraliçeyi etkiliyor. Eloise'in randevusu şüphe uyandırıyor",
        videoUrl: "https://runwatch.dpdns.org/converted_6.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton6.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      },
      {
        id: "s02e07",
        title: "S02E07: Ahenk",
        description: "Bridgertonlar ve Sharma'lar hakkında skandal niteliğinde söylentiler dolaşıyor. Kraliçenin Lady Whistledown'a duyduğu öfke, Eloise ve Penelope'yi zor bir duruma sokuyor.",
        videoUrl: "https://runwatch.dpdns.org/converted_7.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton7.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      },
      {
        id: "s02e08",
        title: "S02E08: Beni Seven Vikont",
        description: "Anthony, Kate'den haber beklerken öfkesini dışa vururken, Eloise, Lady Whistledown'ı bulmak için Theo'dan yardım ister ve Lady Featherington ise görkemli bir balo düzenlemeyi planlar.",
        videoUrl: "https://runwatch.dpdns.org/converted_8.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton8.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      },
      {
        id: "s03e01",
        title: "S03E01",
        description: "1",
        videoUrl: "https://runwatch.qzz.io/Bridgerton.S03E01.720p.NF.WEBRip.x264-GalaxyTV.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton30.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      },
      {
        id: "s03e02",
        title: "S03E02",
        description: "2",
        videoUrl: "https://runwatch.qzz.io/Bridgerton.S03E02.720p.NF.WEBRip.x264-GalaxyTV.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton30.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      },
      {
        id: "s03e03",
        title: "S03E03",
        description: "3",
        videoUrl: "https://runwatch.qzz.io/Bridgerton.S03E03.720p.NF.WEBRip.x264-GalaxyTV.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton30.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      },
      {
        id: "s03e04",
        title: "S03E04",
        description: "4",
        videoUrl: "https://runwatch.qzz.io/Bridgerton.S03E04.720p.NF.WEBRip.x264-GalaxyTV.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton30.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      },
      {
        id: "s03e05",
        title: "S03E05",
        description: "5",
        videoUrl: "https://runwatch.qzz.io/Bridgerton.S03E05.720p.NF.WEBRip.x264-GalaxyTV.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton30.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      },
      {
        id: "s03e06",
        title: "S03E06",
        description: "6",
        videoUrl: "https://runwatch.qzz.io/Bridgerton.S03E06.720p.NF.WEBRip.x264-GalaxyTV.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton30.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      },
      {
        id: "s03e07",
        title: "S03E07",
        description: "7",
        videoUrl: "https://runwatch.qzz.io/Bridgerton.S03E07.720p.NF.WEBRip.x264-GalaxyTV.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton30.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      },
      {
        id: "s03e08",
        title: "S03E08",
        description: "8",
        videoUrl: "https://runwatch.qzz.io/Bridgerton.S03E08.720p.NF.WEBRip.x264-GalaxyTV.mp4",
        subtitleUrl: `${RAW_BASE}bridgerton30.vtt`,
        thumbnailUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/12/bridgerton-s4-poster-sophie-benedict-1.jpeg?q=70&fit=crop&w=1232&h=693&dpr=1",
      }
    ]
  }
];

export function getEpisodeById(seriesId: string, episodeId: string): Episode | undefined {
  const series = seriesData.find(s => s.id === seriesId);
  return series?.episodes.find(e => e.id === episodeId);
}
