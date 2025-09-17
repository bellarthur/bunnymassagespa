import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"

interface Props {
  isScrolled: boolean
  scrollToSection: (sectionId: string) => void
}

export default function StickyNav({ isScrolled, scrollToSection }: Props) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/70 backdrop-blur-sm shadow-s" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-24 md:w-32 h-auto overflow-hidden">
              <img
                src={isScrolled ? "/BUNNY MASSAGE LOGO (2).png" : "/BUNNY MASSAGE LOGO (1).png"}
                alt="Relaxing spa massage"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex space-x-6 font-semibold uppercase">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="cursor-pointer hover:text-primary transition-colors"
                    onClick={() => scrollToSection("home")}
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="cursor-pointer hover:text-primary transition-colors"
                    onClick={() => scrollToSection("services")}
                  >
                    Services
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="cursor-pointer hover:text-primary transition-colors"
                    onClick={() => scrollToSection("testimonials")}
                  >
                    Reviews
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="cursor-pointer hover:text-primary transition-colors"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div>
                {/* <Button
                onClick={() => scrollToSection("booking")}
                className="hidden md:block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 uppercase"
                >
                Book Now
                </Button> */}
                <div className="md:hidde ml-4">
                    {isScrolled ? <Menu className="h-8 w-8 text-accent" /> : <Menu className="h-8 w-8 text-primary" />}
                </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
