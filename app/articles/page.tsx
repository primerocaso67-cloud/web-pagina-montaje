import Link from "next/link";
import "./articles.css";

export default function ArticlesPage() {
  const article = {
    id: "diskpart",
    title: "Guía de uso de diskpart",
    excerpt: "Comandos esenciales para gestionar discos y particiones en Windows con DiskPart.",
    category: "Windows",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    date: "25 de Marzo, 2026",
    author: "TechBlog",
    readTime: "5 min",
    slug: "diskpart",
  };

  return (
    <div className="articles-page">
      <div className="articles-header">
        <h1>Artículos</h1>
        <p>Actualmente solo hay un artículo activo. Pronto llegaran más contenidos.</p>
      </div>

      <div className="articles-grid">
        <article className="article-card">
          <div className="article-image-wrapper">
            <img src={article.image} alt={article.title} className="article-image" />
            <span className="article-badge">{article.category}</span>
          </div>

          <div className="article-body">
            <div className="article-meta">
              <span className="article-date">{article.date}</span>
              <span className="article-read-time">📖 {article.readTime}</span>
            </div>

            <h2 className="article-title">{article.title}</h2>
            <p className="article-excerpt">{article.excerpt}</p>

            <div className="article-footer">
              <span className="article-author">Por {article.author}</span>
              <Link href={`/articles/${article.slug}`} className="article-link">
                Leer Artículo →
              </Link>
            </div>
          </div>
        </article>
      </div>

      <section className="newsletter-section">
        <h2>Suscríbete para más artículos</h2>
        <p>Mantente informado cuando publiquemos nuevo contenido.</p>
        <form className="newsletter-form">
          <input type="email" className="newsletter-input" placeholder="Tu correo electrónico" required />
          <button type="submit" className="btn btn-primary">
            Suscribirse
          </button>
        </form>
      </section>
    </div>
  );
}
