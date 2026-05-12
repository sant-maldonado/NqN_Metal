function Contacto() {
  return (
    <section className="contact-page">
      <div className="contact-details">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Hablemos de tu próximo proyecto.</h2>
          <p>Estamos listos para ayudarte a definir medidas, materiales y tiempos de entrega.</p>
        </div>
        <div className="contact-info-grid">
          <div>
            <strong>Email</strong>
            <p>hola@nqnmetal.com</p>
          </div>
          <div>
            <strong>Teléfono</strong>
            <p>+54 9 11 3456 7894</p>
          </div>
          <div>
            <strong>Ubicación</strong>
            <p>Neuquén, Argentina</p>
          </div>
        </div>
      </div>

      <form className="contact-form">
        <label>
          Nombre
          <input type="text" placeholder="Tu nombre" />
        </label>
        <label>
          Email
          <input type="email" placeholder="hola@nqnmetal.com" />
        </label>
        <label>
          Mensaje
          <textarea placeholder="Contanos tu proyecto" rows="5" />
        </label>
        <button type="submit" className="button primary">Enviar mensaje</button>
      </form>
    </section>
  )
}

export default Contacto
