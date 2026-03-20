import logoImage from '../assets/Wis_Devs_logo.jpeg'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={logoImage} alt="Wise Devs logo" className="footer-logo" />
        <div>
        <p className="footer-title">Wise Devs</p>
        <p className="footer-copy">
          MEET PEOPLE. BUILD TOGETHER
        </p>
        </div>
      </div>
      <div className="footer-stats">
        <p>Built with React + Vite</p>
        <p>Ready to connect with MERN backend APIs</p>
      </div>
    </footer>
  )
}

export default Footer
