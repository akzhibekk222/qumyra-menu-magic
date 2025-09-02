import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, Instagram } from "lucide-react";
import qumyraLogo from "@/assets/qumyra-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Главная", href: "#home" },
    { label: "Меню", href: "#menu" },
    { label: "О нас", href: "#about" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-warm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={qumyraLogo} alt="Qumyra Restaurant" className="h-10 w-10" />
            <span className="font-elegant text-xl font-semibold text-accent">Qumyra</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="premium" 
              size="sm"
              onClick={() => window.open('https://wa.me/77757732004?text=Привет, хочу забронировать стол в ресторане Qumyra', '_blank')}
            >
              <MessageCircle className="h-4 w-4" />
              Забронировать стол
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-3">
                <Button 
                  variant="premium" 
                  size="sm"
                  onClick={() => window.open('https://wa.me/77757732004?text=Привет, хочу забронировать стол в ресторане Qumyra', '_blank')}
                >
                  <MessageCircle className="h-4 w-4" />
                  Забронировать стол
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;