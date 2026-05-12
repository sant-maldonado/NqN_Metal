import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home-page">
      <div className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Inicio</p>
          <h1>Tu taller de muebles industriales con diseños únicos.</h1>
          <p className="hero-text">
            Creamos mesas, estanterías y muebles a medida con metal estructural, maderas nobles y terminaciones artesanales.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/contacto">
              Cotizar proyecto
            </Link>
            <Link className="button secondary" to="/productos">
              Ver productos
            </Link>
          </div>
        </div>
        <div className="hero-image-banner">
          <div className="hero-image-overlay">
            <strong>Mesa “Norden”</strong>
            <span>Comedor industrial premium</span>
          </div>
        </div>
      </div>

      <section className="section-block">
        <div className="section-intro">
          <p className="eyebrow">Lo que ofrecemos</p>
          <h2>Diseño, fabricación y entrega en una sola experiencia.</h2>
          <p>
            Desde conceptualización hasta montaje, desarrollamos muebles con carácter industrial para casas, locales y oficinas.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>Diseños a medida</h3>
            <p>Realizamos estructuras y tablas adaptadas a tu espacio, estilo y uso diario.</p>
          </article>
          <article className="feature-card">
            <h3>Materiales premium</h3>
            <p>Acero, hierro, madera maciza y chapas texturadas combinadas con acabados duraderos.</p>
          </article>
          <article className="feature-card">
            <h3>Producción local</h3>
            <p>Fabricamos en nuestra planta con controles de calidad y entrega en tiempo estimado.</p>
          </article>
        </div>
      </section>

      <section className="section-block">
        <div className="section-intro">
          <p className="eyebrow">Productos destacados</p>
          <h2>Mesas, estanterías y muebles que transforman espacios.</h2>
        </div>
        <div className="product-preview-grid">
          <article className="preview-card">
            <strong>Mesa de comedor</strong>
            <p>Base de hierro minimalista con tapa de petiribí macizo de 30mm.</p>
          </article>
          <article className="preview-card">
            <strong>Estantería modular</strong>
            <p>Uniones expuestas y tablas flotantes para oficinas y talleres.</p>
          </article>
          <article className="preview-card">
            <strong>Barra de recepción</strong>
            <p>Frente texturado en chapa y tapas de madera natural para locales comerciales.</p>
          </article>
        </div>
      </section>
    </section>
  )
}

export default Home
