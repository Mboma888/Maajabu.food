import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "260971716370";
const PHONE_NUMBER = "+260971716370";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'd like to place an order from Maajabu Restaurant."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-charcoal/30" />

      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-accent/15 rounded-full blur-3xl" />

      <div className="relative z-10 container-custom text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream-light mb-4">
          Ready to Order?
        </h2>
        <p className="text-cream/80 text-lg max-w-lg mx-auto mb-8">
          Place your order now via WhatsApp or give us a call. 
          We're ready to serve you!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="btn-accent text-base px-8 h-12 gap-2"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="h-5 w-5" />
            Order on WhatsApp
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 h-12 gap-2"
            asChild
          >
            <a href={`tel:${PHONE_NUMBER}`}>
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
