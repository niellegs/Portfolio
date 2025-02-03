import { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmitLoading, setFormSubmitLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setFormSubmitLoading(true);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            access_key: "64b4a9c9-3c53-4f30-bfb1-5ce13a3dd578",
          }),
        });

        if (response.ok) {
          setFormSubmitted(true);
        } else {
          alert("Erro ao enviar!");
        }
      } catch (e) {
        alert("Erro: " + e);
      } finally {
        setFormSubmitLoading(false);
      }
    }
  };

  useEffect(() => {
    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const isValid =
      formData.name.trim() &&
      formData.email.trim() &&
      isValidEmail(formData.email) &&
      formData.message.trim();

    setIsFormValid(!!isValid);
  }, [formData]);

  return (
    <div className="container_contact">
      <div className="form_contact display-flex">
        <div className="form_text">
          <h2>Entre em contato</h2>
          <p>Tem um projeto em mente ou uma proposta para trabalharmos juntos? Me mande uma mensagem!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group display-flex direction-column">
            <div>
              <input
                type="text"
                className="form_input"
                name="name"
                id="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                className="form_input"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                className="form_input"
                name="subject"
                id="subject"
                placeholder="Assunto"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Mensagem"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <button type="submit" disabled={formSubmitLoading}>
            {formSubmitLoading ? "Enviando..." : "Enviar"}
          </button>
          {formSubmitted && <p>Mensagem enviada com sucesso!</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
