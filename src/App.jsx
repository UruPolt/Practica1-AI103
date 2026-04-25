import { useState } from 'react'
import PhotoUpload from './components/PhotoUpload'
import heroImage from './assets/hero.svg'
import spriteImage from './assets/sprite.svg'

const plantData = {
  title: 'Venus Atrapamoscas',
  subtitle: 'Dionaea muscipula',
  curiosities: [
    'Originaria de los pantanos de Carolina del Norte.',
    'Sus trampas se cierran en menos de un segundo.',
    'Se alimenta de insectos para obtener nutrientes.',
    'Cada trampa tiene "pelos" sensibles que detectan el movimiento.'
  ],
  information: [
    { label: 'Tipo', value: 'Planta carnivora' },
    { label: 'Luz', value: 'Luz solar directa' },
    { label: 'Riego', value: 'Moderado' },
    { label: 'Ubicación', value: 'Interior o exterior' }
  ]
}

function App() {
  const [spriteAction, setSpriteAction] = useState(false)

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="logo">Plantpedia</div>
        <nav className="nav-links">
          <a href="#">Inicio</a>
          <a href="#">Plantas</a>
          <a href="#">Blog</a>
          <a href="#">Contacto</a>
        </nav>
        <button className="login-button">Login</button>
      </header>

      <main className="content">
        <section className="hero">
          <div className="hero-image" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="hero-copy">
            <p className="hero-label">Plantpedia</p>
            <h1>{plantData.title}</h1>
            <p className="hero-subtitle">{plantData.subtitle}</p>
          </div>
        </section>

        <section className="info-grid">
          <article className="card card-curiosities">
            <h2>Datos Curiosos:</h2>
            <ul>
              {plantData.curiosities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card card-details">
            <h2>Información:</h2>
            <div className="detail-list">
              {plantData.information.map((item) => (
                <div key={item.label} className="detail-item">
                  <span className="detail-label">{item.label}:</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <div className="hero-action">
          <button className="primary-button">Prueba tu planta!</button>
        </div>

        <section className="sprite-section">
          <div className="sprite-copy">
            <h2>¡Convierte esta planta en un sprite animado de PVZ!</h2>
            <p>Selecciona una imagen para ver la previsualización local en tu navegador.</p>
            <button
              className="secondary-button"
              type="button"
              onClick={() => setSpriteAction((prev) => !prev)}
            >
              Convertir a Sprite
            </button>
            {spriteAction && <p className="sprite-message">Funcionalidad de UI activa (solo demo estática).</p>}
          </div>
          <div className="sprite-card">
            <img src={spriteImage} alt="Sprite Plantpedia" />
          </div>
        </section>

        <section className="upload-section">
          <PhotoUpload />
        </section>
      </main>

      <footer className="page-footer">
        <p>© 2024 Plantpedia - Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos y Condiciones</a>
        </div>
        <div className="social-icons">
          <span>🌿</span>
          <span>🐦</span>
          <span>📸</span>
        </div>
      </footer>
    </div>
  )
}

export default App
