import Link from "next/link";
import { notFound } from "next/navigation";
import { seriesData } from "@/data/series";
import RomanticMessage from "./RomanticMessage";

export const runtime = 'edge';

interface PageProps {
  params: Promise<{
    seriesId: string;
    episodeId: string;
  }>;
}

export default async function WatchPage({ params }: PageProps) {
  const { seriesId, episodeId } = await params;
  
  const series = seriesData.find(s => s.id === seriesId);
  if (!series) notFound();

  const episodeIndex = series.episodes.findIndex(e => e.id === episodeId);
  const episode = series.episodes[episodeIndex];

  if (!episode) notFound();

  const prevEpisode = series.episodes[episodeIndex - 1];
  const nextEpisode = series.episodes[episodeIndex + 1];

  const englishTitles: Record<string, string> = {
    "s01e01": "Word to the Wise",
    "s01e02": "The Break-In",
    "s01e03": "Full Disclosure",
    "s01e04": "The Crooked Network",
    "s01e05": "The Shilling Test",
    "s01e06": "Crooxeat",
    "s01e07": "The Trials",
    "s01e08": "Masquerade"
  };

  const englishTitle = englishTitles[episode.id] || "";

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="nav-logo">RunWatch</Link>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/series" className="nav-link">Series</Link>
          <div className="heart-container" style={{ position: 'relative', marginLeft: '10px' }}>
            <span className="heart-icon">❤</span>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className="player-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <Link href="/" className="back-btn" style={{ marginBottom: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Library
            </Link>

            <div style={{ display: 'flex', gap: '1rem' }}>
              {prevEpisode && (
                <Link href={`/watch/${seriesId}/${prevEpisode.id}`} className="nav-btn">
                  ← Previous Episode
                </Link>
              )}
              {nextEpisode && (
                <Link href={`/watch/${seriesId}/${nextEpisode.id}`} className="nav-btn">
                  Next Episode →
                </Link>
              )}
            </div>
          </div>
          
          <div className="video-container">
            <video 
              controls 
              crossOrigin="anonymous" 
              poster={episode.thumbnailUrl}
              preload="metadata"
            >
              <source src={episode.videoUrl} type="video/mp4" />
              <track
                key={episode.subtitleUrl}
                src={episode.subtitleUrl}
                kind="subtitles"
                srcLang="tr"
                label="Turkish"
                default
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="player-info">
            <div className="player-meta">
              <span>{series.title}</span>
              <span>•</span>
              <span>Episode {episodeIndex + 1}</span>
            </div>
            <h1>
                {episode.title} 
                <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '400', marginLeft: '10px' }}>
                    ({englishTitle})
                </span>
            </h1>
            
            {/* Dynamic Randomized Romantic Message */}
            <RomanticMessage />

            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px' }}>
              {episode.description}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
