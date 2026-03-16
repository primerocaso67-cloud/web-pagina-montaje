import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <nav style={{ padding: "20px", background: "#eee" }}>
          <Link href="/" style={{ marginRight: 20 }}>Inicio</Link>
          <Link href="/articles" style={{ marginRight: 20 }}>Artículos</Link>
          <Link href="/contact">Contacto</Link>
        </nav>

        <main style={{ padding: "20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}