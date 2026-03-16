export default function ArticlesPage() {
    const articles = [
      "Introducción a Next.js",
      "Cómo crear aplicaciones con React",
      "Ventajas de usar Next.js"
    ];
  
    return (
      <div>
        <h1>Artículos</h1>
  
        <ul>
          {articles.map((article, i) => (
            <li key={i}>{article}</li>
          ))}
        </ul>
      </div>
    );
  }