import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm animate-neon-pulse">
        <p className="font-medium">MuscleFuel, GainPro, PurePower Nutrition | Call 0327-3350722</p>
      </div>

      {/* Main Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-lg bg-card/95">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-2 animate-slide-in-left">
              <img src={logo} alt="SK Supplements" className="h-12 w-12 md:h-16 md:w-16 animate-glow" />
              <div className="hidden md:block">
                <h1 className="text-xl md:text-2xl font-bold text-foreground">
                  SK <span className="text-primary">SUPPLEMENTS</span>
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
            {["Home", "Whey Protein", "Mass Gainer", "Creatine", "BCAA", "Pre Workout", "Fat Burner"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium
                           relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                           after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search supplements..."
                  className="pl-10 bg-input border-border focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">
                <User className="h-5 w-5" />
                <span className="hidden md:inline ml-2">Account</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden md:inline ml-2">Cart</span>
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  0
                </span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search supplements..."
                className="pl-10 bg-input border-border focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in-up">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {["Home", "Whey Protein", "Mass Gainer", "Creatine", "BCAA", "Pre Workout", "Fat Burner"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;