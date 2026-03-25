import Link from "next/link";
import "../../articles/articles.css";

export default function DiskpartArticle() {
  return (
    <div className="articles-page" style={{ paddingTop: "2rem" }}>
      <div className="articles-header">
        <h1>Guía de uso de diskpart</h1>
        <p>Comandos clave para administrar discos, particiones y volúmenes en Windows.</p>
      </div>

      <div className="article-card" style={{ margin: "0 auto", maxWidth: "900px" }}>
        <div className="article-body">
          <div className="article-meta">
            <span className="article-date">25 de Marzo, 2026</span>
            <span className="article-read-time">📖 4 min</span>
          </div>

          <h2 className="article-title">Introducción a diskpart</h2>
          <p>
            DiskPart es una utilidad de Windows para gestionar discos, particiones y
            volúmenes desde la línea de comandos. Esta guía cubre los comandos básicos
            y un flujo típico de uso.
          </p>

          <h3>1) Listar discos</h3>
          <pre style={{ background: "#f3f4f6", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>
            DISKPART&gt; list disk
          </pre>
          <p>Ejemplo de salida:</p>
          <pre style={{ background: "#f3f4f6", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>
            Núm Disco  Estado   Tamaño  Disp  Din  Gpt
            ---------  -------  ------  ----  ---  ---
            Disco 0    En línea 50 GB   1024 KB  -   -
            Disco 1    En línea 50 GB   50 GB    -   -
          </pre>

          <h3>2) Listar particiones</h3>
          <pre style={{ background: "#f3f4f6", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>
            DISKPART&gt; list partition
          </pre>
          <p>Salida típica:</p>
          <pre style={{ background: "#f3f4f6", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>
            Núm Partición  Tipo       Tamaño  Desplazamiento
            -----------    ---------  ------  ------------
            Partición 1    Principal  50 MB   1024 KB
            Partición 2    Principal  49 GB   51 MB
            Partición 3    Recuperación 559 MB 49 GB
          </pre>

          <h3>3) Crear una partición primaria</h3>
          <pre style={{ background: "#f3f4f6", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>
            DISKPART&gt; create partition primary size=20000
          </pre>

          <h3>4) Asignar letra de unidad</h3>
          <pre style={{ background: "#f3f4f6", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>
            DISKPART&gt; assign letter=R
          </pre>

          <h3>5) Formatear partición</h3>
          <pre style={{ background: "#f3f4f6", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>
            DISKPART&gt; format fs=NTFS
          </pre>
          <p>Ejemplo de salida:</p>
          <pre style={{ background: "#f3f4f6", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>
            100 por ciento completado
          </pre>

          <h3>6) Listar volúmenes</h3>
          <pre style={{ background: "#f3f4f6", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>
            DISKPART&gt; list volume
          </pre>
          <p>Ejemplo de salida:</p>
          <pre style={{ background: "#f3f4f6", padding: "1rem", borderRadius: "0.5rem", overflowX: "auto" }}>
            Núm Volumen  Ltr  Etiqueta  Fs    Tipo      Tamaño  Estado  Info
            ---------    ---  -------  ----  -------   ------  ------  ----
            Volumen 0    D    -        CD-ROM     0 B    Sin medio
            Volumen 1         Reservado NTFS  Partición 50 MB  Correcto  Sistema
            Volumen 2    C            NTFS  Partición 49 GB  Correcto  Arranque
            Volumen 3         -        NTFS  Partición 559 MB Correcto Oculto
            Volumen 4    R            NTFS  Partición 19 GB  Correcto
          </pre>

          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link href="/articles" className="btn btn-secondary">
              ← Volver a Artículos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
