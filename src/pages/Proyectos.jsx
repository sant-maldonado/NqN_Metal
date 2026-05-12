function Proyectos() {
  return (
    <section className="projects-page">
      <div className="projects-header">
        <span>Proyectos</span>
        <h2>Proyectos reales, terminados con estilo industrial.</h2>
        <p>Mostramos ejemplos de trabajos para clientes que buscaban muebles resistentes y con personalidad.</p>
      </div>

      <div className="project-grid">
        <article className="project-card">
          <div className="project-image project-image-1" />
          <div className="project-card-body">
            <h3>Comedor Industrial</h3>
            <p>Una mesa de 2 metros con pata de hierro y tapa de madera natural para un comedor familiar.</p>
          </div>
        </article>
        <article className="project-card">
          <div className="project-image project-image-2" />
          <div className="project-card-body">
            <h3>Estantería a medida</h3>
            <p>Un módulo para oficina con estantes abiertos y base metálica de alta resistencia.</p>
          </div>
        </article>
        <article className="project-card">
          <div className="project-image project-image-3" />
          <div className="project-card-body">
            <h3>Mostrador comercial</h3>
            <p>Caja de atención con frente de chapa texturada y superficie de madera para local gastronómico.</p>
          </div>
        </article>
      </div>

      <div className="project-metrics">
        <article>
          <strong>+120</strong>
          <p>Piezas fabricadas</p>
        </article>
        <article>
          <strong>18</strong>
          <p>Proyectos entregados</p>
        </article>
        <article>
          <strong>95%</strong>
          <p>Clientes satisfechos</p>
        </article>
      </div>
    </section>
  )
}

export default Proyectos
