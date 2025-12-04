import { ArrowRight, Wrench, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";
import yashLogo from "@/assets/yash-logo.png";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(237,142,39,0.3)), url(${heroImage})`,
          backgroundAttachment: "fixed",
        }}
      />
      
      {/* Animated Tool Icons */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Wrench className="w-24 h-24 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <HardHat className="w-24 h-24 text-primary" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-4xl">
          <img 
            src={yashLogo} 
            alt="Yash General Hardware" 
            className="w-72 mb-8 drop-shadow-2xl animate-scale-in"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Project, <br />
            <span className="text-primary">Our Priority</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            High-quality hardware products since 2023. We deliver value, consistency, 
            and a seamless experience for builders, contractors, and businesses across Uganda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToProducts}
              className="bg-primary hover:bg-accent text-white font-semibold text-lg px-8 py-6 shadow-industrial group"
            >
              Browse Products
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold text-lg px-8 py-6"
            >
              Contact Us
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2023</div>
              <div className="text-white/80">Established</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">9+</div>
              <div className="text-white/80">Product Lines</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-white/80">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
