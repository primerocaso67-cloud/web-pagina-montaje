import Link from "next/link";
import "./home.css";

export default function HomePage() {
  const features = [
    {
      id: 1,
      icon: "📚",
      title: "Artículos Detallados",
      description: "Guías completas y tutoriales sobre desarrollo web moderno",
    },
    {
      id: 2,
      icon: "⚡",
      title: "Contenido Actualizado",
      description: "Siempre al día con las últimas tecnologías y mejores prácticas",
    },
    {
      id: 3,
      icon: "🤝",
      title: "Comunidad Activa",
      description: "Conecta con otros desarrolladores y comparte tu conocimiento",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenido a TechBlog</h1>
          <p className="hero-subtitle">
            Tu fuente de conocimiento en desarrollo web, React, Next.js y tecnologías modernas
          </p>
          <div className="hero-buttons">
            <Link href="/articles" className="btn btn-primary">
              Explorar Artículos
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contactar
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
            alt="Desarrollo web moderno"
            className="hero-img"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">¿Por qué elegirnos?</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Articles Preview */}
      <section className="latest-articles">
        <h2 className="section-title">Artículo Destacado</h2>
        <div className="articles-preview">
          <article className="article-preview-card" style={{ margin: "0 auto", maxWidth: "950px" }}>
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
              alt="Guía de uso de diskpart"
              className="article-preview-img"
            />
            <div className="article-preview-content">
              <span className="article-category">Windows</span>
              <h3>Guía de uso de diskpart</h3>
              <p>Comandos esenciales para gestionar discos, particiones y volúmenes en Windows desde la consola.</p>
              <Link href="/articles/diskpart" className="read-more">
                Leer más →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>¿Listo para aprender?</h2>
        <p>Únete a nuestra comunidad de desarrolladores y accede a contenido exclusivo</p>
        <Link href="/contact" className="btn btn-primary">
          Contactar Ahora
        </Link>
      </section>
    </div>
  );
}
