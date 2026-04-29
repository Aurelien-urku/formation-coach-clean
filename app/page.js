export default function HomePage() {
  return (
    <main style={{ padding: '40px 20px' }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '20px',
        fontFamily: 'Playfair Display, serif'
      }}>
        Formation Attitude de Coach
      </h1>
      
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
        5 sessions de 2 heures · du 22 au 26 juin 2026 · En ligne et en direct (Zoom)
      </p>

      <div style={{ marginTop: '40px' }}>
        <p style={{ lineHeight: '1.8' }}>
          Dans un monde en profonde transformation, marqué par la digitalisation,
          l'accélération et l'automatisation, les interactions humaines deviennent
          plus rapides, plus fonctionnelles, mais aussi plus superficielles.
        </p>
        
        <p style={{ lineHeight: '1.8', marginTop: '20px' }}>
          Cette formation permet de restaurer des espaces de dialogue authentique,
          de confiance et de responsabilité.
        </p>
      </div>

      <div style={{ marginTop: '40px' }}>
        <button style={{
          padding: '15px 30px',
          fontSize: '1.2rem',
          backgroundColor: '#2C5F2D',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginRight: '10px'
        }}>
          S'inscrire
        </button>
        
        <button style={{
          padding: '15px 30px',
          fontSize: '1.2rem',
          backgroundColor: 'white',
          color: '#2C5F2D',
          border: '2px solid #2C5F2D',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          En savoir plus
        </button>
      </div>
    </main>
  );
}
