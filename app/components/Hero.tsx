export default function Hero() {
  return (
    <section className='hero-section'>
      <div className='hero-bg'>
        <img
          src='/images/hero-bg.jpg'
          alt='Warehouse logistics'
          className='hero-bg-img'
        />
      </div>

      <div className='hero-content-wrapper'>
        <div className='hero-box'>
          <div className='hero-box-inner'>
            <h1 className='hero-title'>
              Optimizamos su
              <br />
              <span className='hero-title-accent'>Cadena Logística</span>
              <br />
              De Extremo a Extremo
            </h1>
            <p className='hero-subtitle'>
              Soluciones integrales en gestión de inventarios, automatización de
              almacenes, WMS y diseño de centros de distribución para empresas
              líderes.
            </p>
            <a href='#contacto' className='hero-cta'>
              Solicitar Consultoría
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
