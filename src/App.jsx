import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MessageCircle, Linkedin, CheckCircle, FileText, Phone, MapPin, ArrowRight, Star, Shield, Clock, Users, Sparkles } from 'lucide-react'
import './App.css'

// Composant pour les particules flottantes
const FloatingParticles = () => {
  const particles = Array.from({ length: 6 }, (_, i) => i)
  
  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="particle"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'fixed',
            width: '4px',
            height: '4px',
            background: 'linear-gradient(45deg, #007BFF, #0056B3)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      ))}
    </div>
  )
}

// Composant pour les animations d'apparition
const FadeInUp = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

// Composant pour les cartes avec effet hover avancé et micro-interactions
const ServiceCard = ({ icon: Icon, title, description, features, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  return (
    <FadeInUp delay={delay}>
      <motion.div
        ref={cardRef}
        className="service-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        whileHover={{ 
          y: -12,
          transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
          borderRadius: '24px',
          padding: '2.5rem',
          boxShadow: isHovered 
            ? '0 32px 64px rgba(0, 86, 179, 0.15)' 
            : '0 12px 32px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(222, 226, 230, 0.3)',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          backdropFilter: 'blur(20px)'
        }}
        className="card-ultra crystal-effect gpu-accelerated"
      >
        {/* Effet de suivi de souris */}
        <motion.div
          className="mouse-follower"
          animate={isHovered ? {
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
            opacity: 0.1
          } : { opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, var(--accent), transparent)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
        />

        {/* Effet de brillance au hover */}
        <motion.div
          className="card-shine"
          initial={{ x: '-100%', opacity: 0 }}
          animate={isHovered ? { x: '100%', opacity: 1 } : { x: '-100%', opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(0, 123, 255, 0.1), transparent)',
            pointerEvents: 'none'
          }}
        />

        <div className="card-header">
          <motion.div
            animate={isHovered ? { 
              scale: 1.15, 
              rotate: 8,
              filter: 'drop-shadow(0 4px 8px rgba(0, 123, 255, 0.3))'
            } : { 
              scale: 1, 
              rotate: 0,
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Icon className="card-icon" size={48} />
          </motion.div>
          <motion.h3 
            className="card-title"
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
        </div>
        
        <motion.p 
          className="card-description"
          animate={isHovered ? { opacity: 0.9 } : { opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
        
        <ul className="service-list">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="service-item"
              initial={{ opacity: 0, x: -20 }}
              animate={isHovered ? { 
                opacity: 1, 
                x: 0,
                transition: { delay: index * 0.1 }
              } : { 
                opacity: 0.8, 
                x: 0 
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ x: 5, color: 'var(--accent)' }}
            >
              <motion.div
                animate={isHovered ? { scale: 1.1, rotate: 360 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <CheckCircle className="service-icon" size={16} />
              </motion.div>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="card-arrow"
          animate={isHovered ? { 
            x: 8, 
            opacity: 1,
            scale: 1.1
          } : { 
            x: 0, 
            opacity: 0.5,
            scale: 1
          }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            right: '1.5rem',
            color: 'var(--accent)',
            filter: 'drop-shadow(0 2px 4px rgba(0, 123, 255, 0.2))'
          }}
        >
          <ArrowRight size={24} />
        </motion.div>

        {/* Icône sparkles pour l'effet premium */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isHovered ? { 
            opacity: 1, 
            scale: 1,
            rotate: [0, 180, 360]
          } : { 
            opacity: 0, 
            scale: 0 
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            color: 'var(--accent)'
          }}
        >
          <Sparkles size={20} />
        </motion.div>
      </motion.div>
    </FadeInUp>
  )
}

// Composant pour les cartes de contact avec animations
const ContactCard = ({ icon: Icon, title, info, subtitle, onClick, delay = 0 }) => {
  return (
    <FadeInUp delay={delay}>
      <motion.div
        className="contact-card"
        onClick={onClick}
        whileHover={{ 
          scale: 1.05,
          y: -5,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          borderRadius: '16px',
          padding: '2rem',
          textAlign: 'center',
          cursor: 'pointer',
          border: '1px solid rgba(189, 195, 199, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="contact-icon" size={48} />
        </motion.div>
        <h3 className="contact-title">{title}</h3>
        <p className="contact-info">{info}</p>
        <p className="text-muted mt-2">{subtitle}</p>
      </motion.div>
    </FadeInUp>
  )
}

// Composant principal
function App() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -25])

  const handleEmailClick = () => {
    window.location.href = 'mailto:salehateikk@gmail.com'
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/33602277181', '_blank')
  }

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/saleh-ateik', '_blank')
  }

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <FloatingParticles />
      
      {/* Header avec effet de transparence au scroll */}
      <motion.header 
        className="header morphing-background crystal-effect gpu-accelerated"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container header-content">
          <motion.a 
            href="#accueil" 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="logo-container"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.6 }
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles size={28} style={{ color: '#FFD700' }} />
              </motion.div>
              <motion.span
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6B6B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '0.05em'
                }}
              >
                S
              </motion.span>
            </motion.div>
          </motion.a>
          <nav className="nav">
            {['Accueil', 'Services', 'À propos', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace('à ', '').replace(' ', '')}`}
                className="nav-link"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, color: 'var(--accent)' }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero Section avec parallaxe */}
      <section id="accueil" className="hero hero-ultra gpu-accelerated page-transition">
        <div className="container">
          <motion.div style={{ y: y1 }}>
            <FadeInUp>
              <h1 className="hero-title holographic-text" data-text="Je suis Saleh. J'aime évoluer, partager et rendre service.">
                Je suis Saleh. J'aime évoluer, partager et rendre service. 
                <motion.span
                  className="hero-highlight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Bienvenue sur mon espace.
                </motion.span>
              </h1>
            </FadeInUp>
          </motion.div>

          <motion.div style={{ y: y2 }}>
            <FadeInUp delay={0.2}>
              <p className="hero-subtitle">
                Ce site, c'est ma façon de me faire connaître, de proposer mes services et d'apprendre des besoins des autres. Mon objectif est simple : progresser chaque jour tout en aidant les gens autour de moi, que ce soit dans l'automobile, l'administratif, la recherche de solutions pratiques (CV, lettres de motivation, assurances, offres en ligne, etc.) — et je reste ouvert à d'autres demandes.
              </p>
            </FadeInUp>
          </motion.div>

          {/* Image avec effet parallaxe et bouton superposé */}
          <FadeInUp delay={0.4}>
            <div className="hero-image-container">
              <motion.div
                className="hero-image-wrapper"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/src/assets/H97gqeWRJ2kJ.jpg" 
                  alt="Bureau professionnel moderne"
                  className="hero-image"
                />
                <motion.button
                  className="contact-overlay-btn"
                  onClick={scrollToContact}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 10px 25px rgba(231, 76, 60, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Contactez
                </motion.button>
              </motion.div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <motion.button 
              onClick={handleEmailClick} 
              className="btn btn-primary btn-large btn-quantum neon-glow gpu-accelerated"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 15px 35px rgba(44, 62, 80, 0.2)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={20} />
              Me contacter
            </motion.button>
          </FadeInUp>
        </div>
      </section>

      {/* Section Services avec animations en cascade */}
      <section id="services" className="section">
        <div className="container">
          <FadeInUp>
            <h2 className="text-center mb-5">Mes Services Administratifs</h2>
          </FadeInUp>
          
          <div className="services-grid">
            <ServiceCard
              icon={FileText}
              title="Aide Administrative Complète"
              description="Je vous accompagne dans toutes vos démarches administratives pour vous faire gagner du temps et éviter les erreurs."
              features={[
                "Carte grise et dossiers ANTS",
                "Courriers officiels et formulaires",
                "CV et lettres de motivation personnalisés",
                "Recherche d'assurances et offres en ligne",
                "Ouvert à d'autres demandes selon vos besoins"
              ]}
              delay={0.2}
            />
          </div>

          {/* Section des avantages */}
          <FadeInUp delay={0.4}>
            <div className="benefits-section">
              <h3 className="benefits-title">Pourquoi me choisir ?</h3>
              <div className="benefits-grid">
                {[
                  { icon: Shield, title: "Fiabilité", desc: "Service sérieux et transparent" },
                  { icon: Clock, title: "Rapidité", desc: "Réponse sous 24h garantie" },
                  { icon: Users, title: "Personnalisé", desc: "Solutions adaptées à vos besoins" },
                  { icon: Star, title: "Qualité", desc: "Travail soigné et professionnel" }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="benefit-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <benefit.icon className="benefit-icon" size={32} />
                    <h4>{benefit.title}</h4>
                    <p>{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Section À propos avec effet de révélation */}
      <section id="apropos" className="section section-alt">
        <div className="container">
          <FadeInUp>
            <h2 className="text-center mb-4">À propos</h2>
          </FadeInUp>
          
          <div className="about-content">
            <FadeInUp delay={0.2}>
              <p className="text-large mb-4">
                Je suis Saleh, passionné par l'aide aux autres et l'amélioration continue. Mon approche se base sur l'écoute, la précision et la recherche de solutions pratiques adaptées à chaque situation.
              </p>
            </FadeInUp>
            
            <FadeInUp delay={0.4}>
              <p className="text-large mb-4">
                Fort de mon expérience dans le domaine administratif et automobile, je mets mes compétences au service des particuliers pour simplifier leurs démarches quotidiennes.
              </p>
            </FadeInUp>
            
            <FadeInUp delay={0.6}>
              <p className="text-large mb-0">
                Mon objectif : vous faire gagner du temps tout en vous garantissant un travail de qualité, réalisé avec sérieux et transparence.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Section Contact avec animations interactives */}
      <section id="contact" className="section">
        <div className="container">
          <FadeInUp>
            <h2 className="text-center mb-5">Contactez-moi</h2>
          </FadeInUp>
          
          <div className="contact-grid">
            <ContactCard
              icon={Mail}
              title="Email"
              info="salehateikk@gmail.com"
              subtitle="Réponse sous 24h"
              onClick={handleEmailClick}
              delay={0.1}
            />
            
            <ContactCard
              icon={MessageCircle}
              title="WhatsApp"
              info="+33 6 02 27 71 81"
              subtitle="Réponse rapide"
              onClick={handleWhatsAppClick}
              delay={0.2}
            />

            <ContactCard
              icon={Linkedin}
              title="LinkedIn"
              info="Saleh Ateik"
              subtitle="Profil professionnel"
              onClick={handleLinkedInClick}
              delay={0.3}
            />
          </div>
          
          <FadeInUp delay={0.5}>
            <div className="text-center mt-5">
              <p className="text-large text-muted">
                N'hésitez pas à me contacter pour discuter de vos besoins. Je suis là pour vous aider !
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Footer avec animation */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <p>&copy; 2024 DocProJura - Saleh Ateik. Tous droits réservés.</p>
        </div>
      </motion.footer>
    </div>
  )
}

export default App

