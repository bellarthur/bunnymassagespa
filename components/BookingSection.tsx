import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface Service {
  name: string
  price: string
}

interface Props {
  services: Service[]
}

export default function BookingSection({ services }: Props) {
  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Book Your Experience</h2>
            <p className="text-lg text-muted-foreground">
              Ready to indulge? Contact us to schedule your perfect spa day
            </p>
          </div>
          <Card className="bg-card border-border/50">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Full Name</label>
                    <Input placeholder="Your name" className="bg-input border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Phone Number</label>
                    <Input placeholder="Your phone" className="bg-input border-border" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Email Address</label>
                  <Input type="email" placeholder="your.email@example.com" className="bg-input border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Preferred Service</label>
                  <select className="w-full p-3 border border-border rounded-md bg-input text-foreground">
                    <option>Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index}>
                        {service.name} - {service.price}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Special Requests</label>
                  <Textarea
                    placeholder="Any special requests or preferences..."
                    className="bg-input border-border min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
