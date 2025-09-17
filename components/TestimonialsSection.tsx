import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface Testimonial {
  name: string
  rating: number
  text: string
  avatar: string
}

interface Props {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: Props) {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">
            Experience the joy and relaxation our clients discover at Bunny Massage Spa
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center items-center fade-in-up">
            <div className="relative">
              <div
                className="w-80 h-96 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full shadow-2xl overflow-hidden"
                style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
              >
                <img
                  src="/happy-spa-clients-smiling-relaxed-diverse-group.png"
                  alt="Happy spa clients"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-primary/30 rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 -left-2 w-4 h-4 bg-accent/60 rounded-full animate-pulse delay-500" />
            </div>
          </div>
          <div className="fade-in-up">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-card border-border/50">
                      <CardContent className="p-8">
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                          ))}
                        </div>
                        <blockquote className="text-lg text-card-foreground mb-6 italic leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                            <AvatarFallback>
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">Verified Client</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
