import Link from "next/link";
import { seriesData } from "@/data/series";

export default function SeriesPage() {
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
        <h2 className="section-title">All Series</h2>
        <div className="series-grid">
          {seriesData.map((series) => (
            <Link href={`/series/${series.id}`} key={series.id} className="ep-card">
              <div className="ep-image-container">
                {series.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={series.coverImage} alt={series.title} />
                ) : (
                  <div className="placeholder-thumb">NO COVER</div>
                )}
                <div className="play-overlay">
                    <div className="play-button-icon" style={{ borderRadius: '8px', width: 'auto', padding: '0 20px', height: '45px' }}>
                        <span style={{ fontWeight: 'bold', color: 'white' }}>View Episodes</span>
                    </div>
                </div>
              </div>
              <div className="ep-content">
                <h3 className="ep-title">{series.title}</h3>
                <p className="ep-desc">{series.description}</p>
                <div style={{ marginTop: '1.5rem' }}>
                    {series.episodes.slice(0, 3).map(ep => (
                        <div key={ep.id} style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent)', marginBottom: '5px' }}>
                            • {ep.title}
                        </div>
                    ))}
                    {series.episodes.length > 3 && (
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>+ {series.episodes.length - 3} more episodes</span>
                    )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
