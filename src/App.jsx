import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Mail, MessageCircle, FileText, Linkedin, CheckCircle } from 'lucide-react'
import adminImage from './assets/admin_image.png'
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
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">DocProJura</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#accueil" className="hover:text-accent-foreground transition-colors">Accueil</a>
            <a href="#services" className="hover:text-accent-foreground transition-colors">Services</a>
            <a href="#apropos" className="hover:text-accent-foreground transition-colors">À propos</a>
            <a href="#contact" className="hover:text-accent-foreground transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Section Accueil */}
      <section id="accueil" className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Je suis Saleh. J’aime évoluer, partager et rendre service. Bienvenue sur mon espace.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ce site, c’est ma façon de me faire connaître, de proposer mes services et d’apprendre des besoins des autres. Mon objectif est simple : progresser chaque jour tout en aidant les gens autour de moi, que ce soit dans l’automobile, l’administratif, la recherche de solutions pratiques (CV, lettres de motivation, assurances, offres en ligne, etc.) — et je reste ouvert à d’autres demandes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleEmailClick}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Mail className="mr-2 h-5 w-5" />
              Me contacter par email
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            <Button 
              onClick={handleLinkedInClick}
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Mes Services Administratifs
          </h2>
          <div className="grid md:grid-cols-1 gap-8 justify-center">
            {/* Aide Administrative */}
            <Card className="hover:shadow-lg transition-shadow max-w-2xl mx-auto">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-2xl text-primary">Aide Administrative</CardTitle>
                </div>
                <CardDescription>
                  <img 
                    src={adminImage} 
                    alt="Aide administrative" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Carte grise, dossiers ANTS</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Courriers et formulaires</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>CV et lettres de motivation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Ouvert à d'autres demandes administratives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section id="apropos" className="py-20 px-6 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            À propos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Je suis Saleh 😁. J’aide les particuliers à simplifier leurs démarches administratives 📝 : carte grise, dossiers ANTS, courriers, CV et lettres de motivation. Mon objectif est de vous faire gagner du temps ⏱️ et d’éviter les erreurs. Je reste également ouvert à d’autres demandes selon vos besoins 😉.
          </p>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Contact
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleEmailClick}>
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">salehateikk@gmail.com</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleWhatsAppClick}>
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground">+33 6 02 27 71 81</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleLinkedInClick}>
              <CardContent className="p-8 text-center">
                <Linkedin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-muted-foreground">Saleh Ateik</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 DocProJura. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

