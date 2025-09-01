import { Phone, MapPin, Instagram, Clock } from "lucide-react";
import qumyraLogo from "@/assets/qumyra-logo.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img src={qumyraLogo} alt="Qumyra Restaurant" className="h-8 w-8" />
              <span className="font-elegant text-2xl font-bold">Qumyra</span>
            </div>
            <p className="text-accent-foreground/80 leading-relaxed">
              Premium dining experience in the heart of Atyrau. 
              Where culinary excellence meets elegant ambiance.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-accent-foreground/80">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Atyrau, Kazakhstan</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="h-4 w-4" />
                <span>+7 (7122) 50-XX-XX</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Instagram className="h-4 w-4" />
                <span>@qumyra_atyrau</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Opening Hours</h3>
            <div className="space-y-2 text-accent-foreground/80">
              <div className="flex justify-between">
                <span>Mon - Thu:</span>
                <span>12:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat:</span>
                <span>12:00 - 01:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>12:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-6 text-center">
          <p className="text-accent-foreground/60">
            © 2024 Qumyra Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;