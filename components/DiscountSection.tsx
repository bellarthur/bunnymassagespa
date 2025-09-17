import { Button } from "@/components/ui/button"

export default function DiscountSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/massagespa-pouring-oil.avif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="md:flex justify-between items-center max-w- mx-auto fade-in-up">
          <h2 className="font-serif text-2xl md:text-4xl md:text-left max-w-4xl font-semibold text-primary-foreground mb-6">
            WE HAVE SPECIAL DISCOUNTS FOR NEW CUSTOMERS
          </h2>
          {/* <p className="text-xl text-primary-foreground/90 mb-8">
            Experience luxury at an unbeatable value. New clients enjoy exclusive savings on their first visit.
          </p> */}
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90 font-semibold px-8 py-4 text-lg"
          >
            READ MORE
          </Button>
        </div>
      </div>
    </section>
  )
}
