import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "260971716370";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'd like to place an order from Maajabu Restaurant."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient-animated" />
      <div className="absolute inset-0 overlay-gradient" />

      {/* Floating food items */}
      <div className="floating-food-item top-[10%] left-[5%] w-32 h-32">
        <img src="/src/images/chicken dish.jpeg" alt="" />
      </div>
      <div className="floating-food-item top-[60%] left-[15%] w-40 h-40">
        <img src="/src/images/fish.jpeg" alt="" />
      </div>
      <div className="floating-food-item top-[20%] right-[8%] w-36 h-36">
        <img src="/src/images/meal.jpeg" alt="" />
      </div>
      <div className="floating-food-item bottom-[15%] right-[20%] w-44 h-44">
        <img src="/src/images/meals.jpeg" alt="" />
      </div>
      <div className="floating-food-item top-[45%] right-[5%] w-28 h-28">
        <img src="/src/images/WhatsApp Image 2026-01-28 at 7.01.30 AM.jpeg" alt="" />
      </div>
      <div className="floating-food-item bottom-[40%] left-[8%] w-38 h-38">
        <img src="/src/images/WhatsApp Image 2026-01-28 at 7.01.35 AM.jpeg" alt="" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/15 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <span className="inline-block text-accent font-medium text-sm md:text-base tracking-wider uppercase mb-4">
            Welcome to Luanshya's Finest
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream-light leading-tight mb-6">
            Experience the
            <span className="block text-accent">Taste of Zambia</span>
          </h1>

          <p className="text-cream/80 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
            Discover authentic Zambian cuisine and international flavors at Maajabu Restaurant. 
            Fresh ingredients, traditional recipes, unforgettable experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="btn-accent text-base px-8 h-12 gap-2 group"
            >
              <Link to="/menu">
                View Menu
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="btn-outline-dark text-base px-8 h-12 gap-2"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cream/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
