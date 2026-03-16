import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Tech Blog - Artículos sobre Desarrollo Web",
  description: "Descubre artículos sobre Next.js, React y desarrollo web moderno",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header className="header">
          <div className="header-container">
            <div className="logo">
              <h1>TechBlog</h1>
              <p className="tagline">Artículos sobre Desarrollo Web</p>
            </div>
            <nav className="nav">
              <Link href="/" className="nav-link">Inicio</Link>
              <Link href="/articles" className="nav-link">Artículos</Link>
              <Link href="/contact" className="nav-link">Contacto</Link>
            </nav>
          </div>
        </header>

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Sobre TechBlog</h3>
              <p>Tu fuente de conocimiento en desarrollo web y tecnología moderna.</p>
            </div>
            <div className="footer-section">
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/articles">Artículos</Link></li>
                <li><Link href="/contact">Contacto</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contacto</h3>
              <p>Email: info@techblog.com</p>
              <p>Tel: +34 123 456 789</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 TechBlog. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
