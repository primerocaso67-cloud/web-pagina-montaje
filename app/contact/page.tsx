export default function ContactPage() {
    return (
      <div>
        <h1>Contacto</h1>
  
        <form style={{ display: "flex", flexDirection: "column", maxWidth: 300 }}>
          <label>Nombre</label>
          <input type="text" />
  
          <label>Email</label>
          <input type="email" />
  
          <label>Mensaje</label>
          <textarea />
  
          <button type="submit" style={{ marginTop: 10 }}>
            Enviar
          </button>
        </form>
      </div>
    );
  }