import yashLogo from "@/assets/yash-logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={yashLogo} alt="Yash General Hardware" className="w-48 mb-4" />
            <p className="text-sm opacity-80">
              Quality hardware products since 2023. Your trusted partner for all construction needs.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/products" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/blogs" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <a href="tel:+256742871233" className="opacity-80 hover:opacity-100 block">
                    (+256) 742-871233
                  </a>
                  <a href="tel:+256763510825" className="opacity-80 hover:opacity-100 block">
                    (+256) 763-510825
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:yashptl1612@gmail.com" className="opacity-80 hover:opacity-100 break-all">
                  yashptl1612@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="opacity-80">
                  Plot 7 Mutekanga Road, Kamuli, Uganda
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-6 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} Yash General Hardware Ltd. All rights reserved.</p>
          <p className="mt-1">Owned and managed by Vijaykumar Patel</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
