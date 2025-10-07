import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      {/* Newsletter Section */}
      <div className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Stay Updated with Latest Offers
            </h3>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Subscribe to our newsletter and never miss exclusive deals on premium supplements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground 
                          placeholder:text-primary-foreground/60 focus:border-primary-foreground"
              />
              <Button 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 font-medium"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-6 animate-slide-in-left">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="FuelIron" className="h-12 w-12" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Fuel<span className="text-primary">Iron</span></h3>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Started by fitness enthusiasts in Sukkur, FuelIron delivers authentic, 
                high-quality fitness supplements from UK, USA, and Dubai to power your gains.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Youtube, href: "#" }
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="p-2 hover:bg-primary/10 hover:text-primary transition-all duration-300
                              hover:scale-110"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <h4 className="text-lg font-bold text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  "About Us", "Contact", "Shipping Info", "Return Policy", 
                  "Terms & Conditions", "Privacy Policy", "FAQ"
                ].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300
                                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                                after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h4 className="text-lg font-bold text-foreground">Categories</h4>
              <ul className="space-y-3">
                {[
                  "Whey Protein", "ISO-Lete", "Creatine", "Mass Gainer", 
                  "BCAA", "Pre Workout", "Fat Burner", "Testosterone Booster",
                  "Fish Oil", "Multi Vitamins", "Amino Acids"
                ].map((category) => (
                  <li key={category}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300
                                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                                after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-in-right">
              <h4 className="text-lg font-bold text-foreground">Contact Us</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">0327-3350722</p>
                    <p className="text-muted-foreground text-sm">Mon-Sat 9AM-8PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">sksuppliment@gmail.com</p>
                    <p className="text-muted-foreground text-sm">24/7 Support</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Sukkur, Sindh, Pakistan</p>
                    <p className="text-muted-foreground text-sm">Nationwide Delivery</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">100% Authentic</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Free Delivery Over Rs.3000</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} FuelIron. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Secure Payment</span>
              <span>•</span>
              <span>Fast Shipping</span>
              <span>•</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;