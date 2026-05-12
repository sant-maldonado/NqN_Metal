import { useState } from 'react'

const products = [
  {
    title: 'Mesa Norden',
    subtitle: 'Comedor industrial',
    price: '$185.000 ARS',
    description: 'Base de hierro 2mm y tapa de petiribí macizo de 30mm con acabado natural.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Estantería Loft',
    subtitle: 'Mueble modular',
    price: '$98.000 ARS',
    description: 'Paneles metálicos y tablas de madera para un soporte fuerte y estético.',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Barra Metro',
    subtitle: 'Mostrador comercial',
    price: '$132.000 ARS',
    description: 'Frente texturado en chapa y tapa de pino con altura de barra funcional.',
    image: 'https://images.unsplash.com/photo-1537031299144-0b9888d8d476?auto=format&fit=crop&w=900&q=80',
  },
]

function Productos() {
  const [activeProduct, setActiveProduct] = useState(products[0])
  const [activeImage, setActiveImage] = useState(0)

  const gallery = [
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1537031299144-0b9888d8d476?auto=format&fit=crop&w=1000&q=80',
  ]

  return (
    <section className="product-page">
      <div className="section-intro">
        <p className="eyebrow">Productos</p>
        <h2>Productos industriales listos para tu proyecto.</h2>
        <p>
          Explora piezas diseñadas para durar, con materiales sólidos y terminaciones pensadas para ambientes modernos.
        </p>
      </div>

      <div className="product-list-grid">
        {products.map((product) => (
          <article key={product.title} className="product-card" onClick={() => setActiveProduct(product)}>
            <img src={product.image} alt={product.title} />
            <div className="product-card-body">
              <span className="eyebrow">{product.subtitle}</span>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <strong>{product.price}</strong>
            </div>
          </article>
        ))}
      </div>

      <div className="product-detail-layout">
        <div className="product-gallery-detail">
          <div className="hero-image">
            <img src={gallery[activeImage]} alt={activeProduct.title} />
          </div>
          <div className="thumb-row">
            {gallery.map((src, index) => (
              <button
                key={src}
                type="button"
                className={`thumb-button ${activeImage === index ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={src} alt={`Detalle ${index + 1}`} />
                <span>{index + 1}</span>
              </button>
            ))}
          </div>
        </div>

        <aside className="product-panel">
          <div className="badge">Selección destacada</div>
          <div className="product-header">
            <div>
              <p className="product-title">{activeProduct.title}</p>
              <span className="product-subtitle">{activeProduct.subtitle}</span>
            </div>
            <strong className="price">{activeProduct.price}</strong>
          </div>
          <p className="product-description">{activeProduct.description}</p>
          <ul className="product-specs">
            <li>Material: hierro y madera maciza</li>
            <li>Altura estándar: 75 cm</li>
            <li>Tiempo de entrega: 18-22 días</li>
          </ul>
          <button className="button add-cart" type="button">
            Consultar disponibilidad
          </button>
        </aside>
      </div>
    </section>
  )
}

export default Productos
