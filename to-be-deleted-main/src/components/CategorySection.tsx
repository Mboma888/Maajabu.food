import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface FeatureCard {
  id: string;
  title: string;
  buttonText: string;
  link: string;
  bgColor: string;
  image: string;
}

const featureCards: FeatureCard[] = [
  {
    id: "traditional",
    title: "Taste of Zambia",
    buttonText: "Traditional",
    link: "/menu?category=traditional",
    bgColor: "from-primary/90 to-primary",
    image: "/src/images/meals.jpeg",
  },
  {
    id: "grills",
    title: "Fire & Smoke",
    buttonText: "Grills & BBQ",
    link: "/menu?category=grills",
    bgColor: "from-secondary/90 to-secondary",
    image: "/src/images/meal.jpeg",
  },
  {
    id: "specials",
    title: "Chef's Creations",
    buttonText: "Specials",
    link: "/menu?category=specials",
    bgColor: "from-accent/90 to-accent",
    image: "/src/images/clean look.jpeg",
  },
];

const quickLinks: { id: string; title: string; link: string; image: string }[] = [
  { id: "chicken", title: "Chicken Dishes", link: "/menu?category=chicken", image: "/src/images/image.jpeg" },
  { id: "fish", title: "Fish & Seafood", link: "/menu?category=fish", image: "/src/images/WhatsApp Image 2026-01-28 at 7.01.28 AM.jpeg" },
];

const CategorySection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Main Feature Cards - 3 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          {featureCards.map((card, index) => (
            <Link
              key={card.id}
              to={card.link}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background image */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.bgColor} opacity-70 group-hover:opacity-50 transition-opacity duration-300`} />
              
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-24 h-24 border-2 border-current rounded-full" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-current rounded-full" />
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  {card.title}
                </h3>
                <Button 
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6"
                  size="sm"
                >
                  {card.buttonText}
                </Button>
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary Cards - 2 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={link.id}
              to={link.link}
              className="group relative aspect-[2/1] rounded-xl overflow-hidden animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Background image */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={link.image} 
                  alt={link.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-secondary/60 to-secondary/70 group-hover:from-secondary/50 group-hover:via-secondary/40 group-hover:to-secondary/50 transition-all duration-300" />
              
              {/* Decorative elements */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-primary/10" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-secondary-foreground mb-3">
                  {link.title}
                </h3>
                <Button 
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6"
                  size="sm"
                >
                  Order Now
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
