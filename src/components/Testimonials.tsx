import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Faizan",
      location: "Sukkur",
      rating: 5,
      text: "I gained 6kg lean mass in 8 weeks using their Mass Gainer. Real results.",
      product: "Mass Gainer"
    },
    {
      id: 2,
      name: "Zohaib",
      location: "Hyderabad",
      rating: 5,
      text: "Finally, a trustworthy supplement store in Sindh!",
      product: "Whey Protein"
    },
    {
      id: 3,
      name: "Umar",
      location: "Dubai (Online Order)",
      rating: 5,
      text: "Original products. My strength doubled after using their Pre Workout.",
      product: "Pre Workout"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⭐ Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real <span className="text-primary animate-glow">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers are saying about their transformation with FuelIron.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-card border border-border hover:border-primary/50 transition-all duration-300 
                        hover:shadow-glow animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-primary font-medium">{testimonial.product}</p>
                      <p className="text-xs text-muted-foreground">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground mb-4">Join thousands of satisfied customers</p>
          <div className="inline-flex items-center space-x-2 bg-neon-green/10 text-neon-green px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span>100% Authentic Products Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;