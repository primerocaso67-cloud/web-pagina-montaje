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
        <h2 className="section-title">Últimos Artículos</h2>
        <div className="articles-preview">
          <article className="article-preview-card">
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&q=80"
              alt="Introducción a Next.js"
              className="article-preview-img"
            />
            <div className="article-preview-content">
              <span className="article-category">Framework</span>
              <h3>Introducción a Next.js</h3>
              <p>Aprende los fundamentos de Next.js, el framework de React más poderoso para producción.</p>
              <Link href="/articles/nextjs-intro" className="read-more">
                Leer más →
              </Link>
            </div>
          </article>

          <article className="article-preview-card">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80"
              alt="React Hooks avanzados"
              className="article-preview-img"
            />
            <div className="article-preview-content">
              <span className="article-category">React</span>
              <h3>React Hooks Avanzados</h3>
              <p>Domina los hooks más poderosos de React y crea componentes reutilizables y eficientes.</p>
              <Link href="/articles/react-hooks" className="read-more">
                Leer más →
              </Link>
            </div>
          </article>

          <article className="article-preview-card">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80"
              alt="Optimización de rendimiento"
              className="article-preview-img"
            />
            <div className="article-preview-content">
              <span className="article-category">Performance</span>
              <h3>Optimización de Rendimiento</h3>
              <p>Mejora la velocidad de tu aplicación web con técnicas de optimización probadas.</p>
              <Link href="/articles/performance" className="read-more">
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
