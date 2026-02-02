import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "260971716370";
const PHONE_NUMBER = "+260971716370";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'd like to make an inquiry about Maajabu Restaurant."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-cream-light mb-3">
            Contact Us
          </h1>
          <p className="text-cream/80 text-lg max-w-lg mx-auto">
            We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello!
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our menu, want to make a reservation, or need directions? 
                  We're here to help!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="card-elevated p-5 flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      +260 971 716 370
                    </p>
                  </div>
                </a>

                <button
                  onClick={handleWhatsAppClick}
                  className="card-elevated p-5 flex items-start gap-4 group text-left w-full"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Chat with us
                    </p>
                  </div>
                </button>

                <a
                  href="mailto:info@maajabu.co.zm"
                  className="card-elevated p-5 flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      info@maajabu.co.zm
                    </p>
                  </div>
                </a>

                <div className="card-elevated p-5 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Central Business District<br />
                      Luanshya, Zambia
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    Opening Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Monday - Thursday</span>
                    <span className="font-medium text-foreground">10:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Friday - Saturday</span>
                    <span className="font-medium text-foreground">10:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-foreground">11:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-primary gap-2"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="h-5 w-5" />
                  Order via WhatsApp
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:${PHONE_NUMBER}`} className="gap-2">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-elevated">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61917.82772075088!2d28.37!3d-13.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408ce8b0d4b4e5%3A0x6c7c1c0c7c7c7c7c!2sLuanshya%2C%20Zambia!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maajabu Restaurant Location"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
