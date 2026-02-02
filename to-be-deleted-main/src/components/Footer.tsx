import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-cream">
              Maajabu
            </h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              Experience the finest flavors of Zambia at Maajabu Restaurant. 
              Where tradition meets culinary excellence in the heart of Luanshya.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-cream text-lg">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-cream/70 hover:text-accent transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="text-cream/70 hover:text-accent transition-colors text-sm"
              >
                Our Menu
              </Link>
              <Link
                to="/about"
                className="text-cream/70 hover:text-accent transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-cream/70 hover:text-accent transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-cream text-lg">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+260971716370"
                className="flex items-center gap-3 text-cream/70 hover:text-accent transition-colors text-sm"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                +260 971 716 370
              </a>
              <a
                href="mailto:info@maajabu.co.zm"
                className="flex items-center gap-3 text-cream/70 hover:text-accent transition-colors text-sm"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                info@maajabu.co.zm
              </a>
              <div className="flex items-start gap-3 text-cream/70 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Central Business District,<br />Luanshya, Zambia</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-cream text-lg">
              Opening Hours
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3 text-cream/70">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Mon - Thu: 10:00 - 22:00</span>
              </div>
              <div className="flex items-center gap-3 text-cream/70">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Fri - Sat: 10:00 - 23:00</span>
              </div>
              <div className="flex items-center gap-3 text-cream/70">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Sunday: 11:00 - 21:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 mt-10 pt-6 text-center">
          <p className="text-cream/50 text-sm">
            © {currentYear} Maajabu Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
