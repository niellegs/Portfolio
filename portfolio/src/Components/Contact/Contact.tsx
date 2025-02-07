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
    <div className="contact_container" id="contact">
      <div className="form_contact display-flex space-around align-center">
        <div className="form_text">
          <h2 className="title">Entre em contato</h2>
          <p>Tem um projeto em mente ou uma proposta para trabalharmos juntos? Me mande uma mensagem!</p>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group display-flex direction-column align-center ">
            <div>
                <div className="field display-flex direction-column">
                  <label>Nome</label>
                  <input
                  type="text"
                  className="form_input paragraph"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                </div>
                <div className="field display-flex direction-column">
                  <label>Email</label>
                  <input
                type="email"
                className="form_input paragraph"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
                </div>
                <div className="field display-flex direction-column">
                  <label>Assunto</label>
                  <input
                type="text"
                className="form_input paragraph"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
              />
                </div>
            </div>
            <div className="field display-flex direction-column">
              <label>Mensagem</label>
              <textarea
                name="message"
                className="paragraph"
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <button type="submit" disabled={formSubmitLoading}>
            {formSubmitLoading ? "Enviando..." : "Enviar"}
          </button>
          {formSubmitted && <p className="success">Mensagem enviada com sucesso!</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
