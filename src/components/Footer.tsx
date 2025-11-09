import { Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-charcoal text-warm-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-3 text-golden">Banian Pottery</h3>
            <p className="text-warm-cream/80 text-sm">
              Where roots meet clay. A gathering place for creativity, community, and healing through pottery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-golden">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-warm-cream/80 hover:text-golden text-sm transition-smooth">
                About Sakshi
              </Link>
              <Link to="/gallery" className="text-warm-cream/80 hover:text-golden text-sm transition-smooth">
                Gallery
              </Link>
              <Link to="/workshops" className="text-warm-cream/80 hover:text-golden text-sm transition-smooth">
                Workshops
              </Link>
              <Link to="/custom" className="text-warm-cream/80 hover:text-golden text-sm transition-smooth">
                Custom Orders
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-3 text-golden">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@banianpottery.com"
                className="flex items-center gap-2 text-warm-cream/80 hover:text-golden text-sm transition-smooth"
              >
                <Mail className="h-4 w-4" />
                hello@banianpottery.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-warm-cream/80 hover:text-golden text-sm transition-smooth"
              >
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </a>
              <a
                href="https://instagram.com/banianpottery"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-warm-cream/80 hover:text-golden text-sm transition-smooth"
              >
                <Instagram className="h-4 w-4" />
                @banianpottery
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-cream/20 pt-6 text-center text-sm text-warm-cream/60">
          <p>© {new Date().getFullYear()} Banian Pottery. Handcrafted with love by Sakshi Borana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
