"use client";

import { useState } from "react";
import "./contact.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simular envío del formulario
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setLoading(false);

      // Resetear mensaje después de 5 segundos
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      id: 1,
      icon: "📍",
      title: "Ubicación",
      content: "Madrid, España",
    },
    {
      id: 2,
      icon: "📧",
      title: "Email",
      content: "info@techblog.com",
    },
    {
      id: 3,
      icon: "📱",
      title: "Teléfono",
      content: "+34 123 456 789",
    },
    {
      id: 4,
      icon: "⏰",
      title: "Horario",
      content: "Lunes - Viernes, 9:00 - 18:00",
    },
  ];

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <h1>Contacta con Nosotros</h1>
        <p>
          ¿Tienes preguntas o sugerencias? Nos encantaría escucharte. Rellena el
          formulario y nos pondremos en contacto lo antes posible.
        </p>
      </div>

      {/* Main Content */}
      <div className="contact-container">
        {/* Contact Info Cards */}
        <div className="contact-info-grid">
          {contactInfo.map((info) => (
            <div key={info.id} className="info-card">
              <div className="info-icon">{info.icon}</div>
              <h3>{info.title}</h3>
              <p>{info.content}</p>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="form-section">
          <div className="form-wrapper">
            <h2>Envíanos un Mensaje</h2>

            {submitted && (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>¡Mensaje Enviado!</h3>
                <p>Gracias por tu mensaje. Nos pondremos en contacto pronto.</p>
              </div>
            )}

            {!submitted && (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nombre *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 123 456 789"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Asunto *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="general">Consulta General</option>
                      <option value="article">Sobre un Artículo</option>
                      <option value="collaboration">Colaboración</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                    className="form-textarea"
                  />
                </div>

                <div className="form-note">
                  <p>* Campos requeridos</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-large"
                >
                  {loading ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </form>
            )}
          </div>

          {/* Additional Info */}
          <div className="faq-section">
            <h3>Preguntas Frecuentes</h3>
            <div className="faq-items">
              <details className="faq-item">
                <summary>¿Cuál es el tiempo de respuesta?</summary>
                <p>
                  Respondemos a todos los mensajes dentro de 24-48 horas hábiles. Para
                  consultas urgentes, llámanos directamente.
                </p>
              </details>

              <details className="faq-item">
                <summary>¿Puedo colaborar con TechBlog?</summary>
                <p>
                  ¡Claro! Si eres un desarrollador apasionado y quieres compartir tu
                  conocimiento, nos encantaría trabajar contigo. Contáctanos con el asunto
                  "Colaboración".
                </p>
              </details>

              <details className="faq-item">
                <summary>¿Ofrecen consultoría personalizada?</summary>
                <p>
                  Sí, ofrecemos servicios de consultoría para proyectos específicos.
                  Contáctanos para discutir tus necesidades.
                </p>
              </details>

              <details className="faq-item">
                <summary>¿Cómo puedo suscribirme al newsletter?</summary>
                <p>
                  Puedes suscribirte en la sección de newsletter en la página de artículos
                  o enviándonos un email solicitándolo.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h2>Ubicación</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.5267865024697!2d-3.7037902!3d40.4168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzAuNiJOIDPCsDQyJzEzLjQiVw!5e0!3m2!1ses!2ses!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "0.75rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de TechBlog"
          />
        </div>
      </div>
    </div>
  );
}
