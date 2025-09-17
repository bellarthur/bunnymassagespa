import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xl">🐰</span>
              </div>
              <span className="font-serif text-2xl font-bold text-foreground">BunnyMassageSpa</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your sanctuary for luxury, relaxation, and playful elegance. Experience the perfect blend of
              professional therapy and whimsical charm.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">hello@bunnymassagespa.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Accra, Ghana</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-muted-foreground">Mon - Sat: 9:00 AM - 10:00 PM</div>
                  <div className="text-muted-foreground">Sunday: 10:00 AM - 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Bunny Massage Spa. All rights reserved. | Designed with 🐰 and ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
