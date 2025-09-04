import React from 'react'
import { Mail, MessageCircle, Linkedin, CheckCircle, FileText, Phone, MapPin } from 'lucide-react'
import './App.css'

function App() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:salehateikk@gmail.com'
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/33602277181', '_blank')
  }

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/saleh-ateik', '_blank')
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <a href="#accueil" className="logo">DocProJura</a>
          <nav className="nav">
            <a href="#accueil" className="nav-link">Accueil</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#apropos" className="nav-link">À propos</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="hero">
        <div className="container">
          <h1 className="hero-title animate-fade-in-up">
            Je suis Saleh. J'aime évoluer, partager et rendre service. Bienvenue sur mon espace.
          </h1>
          <p className="hero-subtitle animate-fade-in-up">
            Ce site, c'est ma façon de me faire connaître, de proposer mes services et d'apprendre des besoins des autres. Mon objectif est simple : progresser chaque jour tout en aidant les gens autour de moi, que ce soit dans l'automobile, l'administratif, la recherche de solutions pratiques (CV, lettres de motivation, assurances, offres en ligne, etc.) — et je reste ouvert à d'autres demandes.
          </p>
          <div className="animate-fade-in-up">
            <button onClick={handleEmailClick} className="btn btn-primary btn-large">
              <Mail size={20} />
              Me contacter
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="text-center mb-5">Mes Services Administratifs</h2>
          <div className="grid grid-1" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card">
              <div className="card-header">
                <FileText className="card-icon" />
                <h3 className="card-title">Aide Administrative Complète</h3>
              </div>
              <div className="card-content">
                <p className="mb-3">
                  Je vous accompagne dans toutes vos démarches administratives pour vous faire gagner du temps et éviter les erreurs.
                </p>
                <ul className="service-list">
                  <li className="service-item">
                    <CheckCircle className="service-icon" />
                    <span>Carte grise et dossiers ANTS</span>
                  </li>
                  <li className="service-item">
                    <CheckCircle className="service-icon" />
                    <span>Courriers officiels et formulaires</span>
                  </li>
                  <li className="service-item">
                    <CheckCircle className="service-icon" />
                    <span>CV et lettres de motivation personnalisés</span>
                  </li>
                  <li className="service-item">
                    <CheckCircle className="service-icon" />
                    <span>Recherche d'assurances et offres en ligne</span>
                  </li>
                  <li className="service-item">
                    <CheckCircle className="service-icon" />
                    <span>Ouvert à d'autres demandes selon vos besoins</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-4">À propos</h2>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <p className="text-large mb-4">
              Je suis Saleh, passionné par l'aide aux autres et l'amélioration continue. Mon approche se base sur l'écoute, la précision et la recherche de solutions pratiques adaptées à chaque situation.
            </p>
            <p className="text-large mb-4">
              Fort de mon expérience dans le domaine administratif et automobile, je mets mes compétences au service des particuliers pour simplifier leurs démarches quotidiennes.
            </p>
            <p className="text-large mb-0">
              Mon objectif : vous faire gagner du temps tout en vous garantissant un travail de qualité, réalisé avec sérieux et transparence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="text-center mb-5">Contactez-moi</h2>
          <div className="contact-grid">
            <div className="card contact-card" onClick={handleEmailClick}>
              <Mail className="contact-icon" />
              <h3 className="contact-title">Email</h3>
              <p className="contact-info">salehateikk@gmail.com</p>
              <p className="text-muted mt-2">Réponse sous 24h</p>
            </div>
            
            <div className="card contact-card" onClick={handleWhatsAppClick}>
              <MessageCircle className="contact-icon" />
              <h3 className="contact-title">WhatsApp</h3>
              <p className="contact-info">+33 6 02 27 71 81</p>
              <p className="text-muted mt-2">Réponse rapide</p>
            </div>

            <div className="card contact-card" onClick={handleLinkedInClick}>
              <Linkedin className="contact-icon" />
              <h3 className="contact-title">LinkedIn</h3>
              <p className="contact-info">Saleh Ateik</p>
              <p className="text-muted mt-2">Profil professionnel</p>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <p className="text-large text-muted">
              N'hésitez pas à me contacter pour discuter de vos besoins. Je suis là pour vous aider !
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 DocProJura - Saleh Ateik. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

