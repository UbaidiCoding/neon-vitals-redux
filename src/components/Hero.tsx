import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-supplements.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-background/50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="SK Supplements Hero"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-red/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-neon-cyan/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-scale-in">
                <Shield className="h-4 w-4" />
                <span>100% Authentic Products</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">SK</span>
                <br />
                <span className="text-primary animate-glow">SUPPLEMENTS</span>
                <br />
                <span className="text-foreground text-2xl md:text-4xl lg:text-5xl">Premium Imported</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Fuel your fitness journey with 100% original supplements from UK, USA, and Dubai. 
                Shop Aminos, Whey, Creatine, Mass Gainers & more in Sukkur, Sindh.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-2">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Premium Quality</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Authentic Products</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-2">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Fast Delivery</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium 
                          shadow-glow hover:shadow-intense transition-all duration-300 group"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-medium
                          transition-all duration-300"
              >
                View Categories
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div>
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-neon rounded-3xl blur-xl opacity-20 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative bg-card/10 backdrop-blur-sm rounded-3xl p-8 border border-primary/20">
                <img 
                  src={heroImage} 
                  alt="Premium Supplements" 
                  className="w-full h-auto rounded-2xl shadow-card animate-float"
                />
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                  NEW ARRIVAL
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-neon-green text-background px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  FREE DELIVERY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;