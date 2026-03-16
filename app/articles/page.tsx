import Link from "next/link";
import "./articles.css";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  slug: string;
}

export default function ArticlesPage() {
  const articles: Article[] = [
    {
      id: "1",
      title: "Introducción Completa a Next.js 14",
      excerpt: "Aprende los fundamentos de Next.js, el framework de React más poderoso. Cubrimos App Router, Server Components, y más.",
      category: "Framework",
      image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&q=80",
      date: "15 de Marzo, 2026",
      author: "Carlos García",
      readTime: "12 min",
      slug: "nextjs-intro",
    },
    {
      id: "2",
      title: "Domina React Hooks: Guía Avanzada",
      excerpt: "Explora hooks avanzados como useContext, useReducer y custom hooks. Crea componentes reutilizables y eficientes.",
      category: "React",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
      date: "14 de Marzo, 2026",
      author: "María López",
      readTime: "15 min",
      slug: "react-hooks",
    },
    {
      id: "3",
      title: "Optimización de Rendimiento Web",
      excerpt: "Mejora la velocidad de tu aplicación con técnicas de optimización. Lazy loading, code splitting, y más estrategias.",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=600&q=80",
      date: "13 de Marzo, 2026",
      author: "Juan Martínez",
      readTime: "10 min",
      slug: "performance",
    },
    {
      id: "4",
      title: "TypeScript para Desarrolladores React",
      excerpt: "Integra TypeScript en tus proyectos React. Tipos, interfaces, y mejores prácticas para código más seguro.",
      category: "TypeScript",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
      date: "12 de Marzo, 2026",
      author: "Ana Rodríguez",
      readTime: "14 min",
      slug: "typescript-react",
    },
    {
      id: "5",
      title: "Tailwind CSS: Diseño Rápido y Eficiente",
      excerpt: "Crea interfaces hermosas sin escribir CSS personalizado. Aprende las utilidades de Tailwind y personalización.",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
      date: "11 de Marzo, 2026",
      author: "David Chen",
      readTime: "9 min",
      slug: "tailwind-css",
    },
    {
      id: "6",
      title: "API REST con Node.js y Express",
      excerpt: "Construye APIs escalables y seguras con Node.js. Autenticación, validación, y mejores prácticas incluidas.",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
      date: "10 de Marzo, 2026",
      author: "Miguel Sánchez",
      readTime: "16 min",
      slug: "nodejs-api",
    },
  ];

  const categories = ["Todos", ...new Set(articles.map(a => a.category))];

  return (
    <div className="articles-page">
      {/* Header */}
      <div className="articles-header">
        <h1>Todos Nuestros Artículos</h1>
        <p>Explora nuestra colección de tutoriales, guías y mejores prácticas en desarrollo web</p>
      </div>

      {/* Filter Buttons */}
      <div className="articles-filters">
        <h3>Filtrar por categoría:</h3>
        <div className="filter-buttons">
          {categories.map((category) => (
            <button key={category} className="filter-btn">
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="articles-grid">
        {articles.map((article) => (
          <article key={article.id} className="article-card">
            <div className="article-image-wrapper">
              <img
                src={article.image}
                alt={article.title}
                className="article-image"
              />
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
        ))}
      </div>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <h2>Suscríbete a Nuestro Newsletter</h2>
        <p>Recibe los últimos artículos directamente en tu bandeja de entrada</p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            required
            className="newsletter-input"
          />
          <button type="submit" className="btn btn-primary">
            Suscribirse
          </button>
        </form>
      </section>
    </div>
  );
}
