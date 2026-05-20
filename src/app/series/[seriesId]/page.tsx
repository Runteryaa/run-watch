import Link from "next/link";
import { notFound } from "next/navigation";
import { seriesData } from "@/data/series";

export const runtime = 'edge';

interface PageProps {
  params: Promise<{
    seriesId: string;
  }>;
}

export default async function SeriesDetailPage({ params }: PageProps) {
  const { seriesId } = await params;
  const series = seriesData.find((s) => s.id === seriesId);

  if (!series) {
    notFound();
  }

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="nav-logo">RunWatch</Link>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/series" className="nav-link">Series</Link>
          <div className="heart-container" style={{ position: 'relative', marginLeft: '10px' }}>
            <span className="heart-icon">❤</span>
            <div className="easter-egg-text">Dilediğin kadar izle, her zaman yanındayım ❤️</div>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Link href="/series" className="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Series List
        </Link>

        <section className="hero" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 300px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              {series.coverImage ? (
                <img src={series.coverImage} alt={series.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
              ) : (
                <div className="placeholder-thumb" style={{ height: '450px' }}>NO COVER</div>
              )}
            </div>
            <div style={{ flex: '1' }}>
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{series.title}</h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>{series.description}</p>
              <div className="player-meta">
                <span>{series.episodes.length} Episodes</span>
                <span>•</span>
                <span>Full Season 1</span>
                <span>•</span>
                <span>HD Available</span>
              </div>
            </div>
          </div>
        </section>

        <h2 className="section-title">Episodes</h2>
        <div className="series-grid">
          {series.episodes.map((episode) => (
            <Link 
              href={`/watch/${series.id}/${episode.id}`} 
              key={episode.id}
              className="ep-card"
            >
              <div className="ep-image-container">
                {episode.thumbnailUrl ? (
                  <img src={episode.thumbnailUrl} alt={episode.title} />
                ) : (
                  <div className="placeholder-thumb">NO THUMBNAIL</div>
                )}
                <div className="play-overlay">
                  <div className="play-button-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="ep-content">
                <h3 className="ep-title">{episode.title}</h3>
                <p className="ep-desc">{episode.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
