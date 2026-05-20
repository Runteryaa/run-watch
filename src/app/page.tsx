import Link from "next/link";
import { seriesData } from "@/data/series";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <Link href="/" className="nav-logo">RunWatch</Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/series" className="nav-link">Series</Link>
        </div>
      </nav>

      <main className="main-content">
        {seriesData.map((series) => (
          <section key={series.id} style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">{series.title}</h2>
            
            <div className="series-grid">
              {series.episodes.map((episode) => (
                <Link 
                  href={`/watch/${series.id}/${episode.id}`} 
                  key={episode.id}
                  className="ep-card"
                >
                  <div className="ep-image-container">
                    {episode.thumbnailUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
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
          </section>
        ))}
      </main>
    </>
  );
}
