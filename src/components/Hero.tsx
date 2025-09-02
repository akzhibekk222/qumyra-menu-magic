import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import qumyraLogo from "@/assets/qumyra-logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={restaurantInterior}
          alt="Qumyra Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/70 via-accent/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <img src={qumyraLogo} alt="Qumyra Logo" className="h-24 w-24 mx-auto mb-6" />
          <h1 className="font-elegant text-5xl md:text-7xl font-bold mb-4 text-shadow-lg">
            Qumyra
          </h1>
          <p className="text-xl md:text-2xl mb-2 opacity-90">
            Премиальный ресторан
          </p>
          <p className="text-lg md:text-xl opacity-80 mb-8">
            Атырау, Казахстан
          </p>
        </div>

        <div className="mb-12">
          <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
            Добро пожаловать в Qumyra, где кулинарное мастерство встречается с элегантной атмосферой. 
            Насладитесь изысканными вкусами, приготовленными с страстью и поданными с отличием 
            в самом сердце Атырау.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="premium" 
            size="lg" 
            className="text-lg px-8 py-3"
            onClick={() => window.open('https://wa.me/77757732004?text=Привет, хочу забронировать стол в ресторане Qumyra', '_blank')}
          >
            <MessageCircle className="h-5 w-5" />
            Забронировать стол
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;