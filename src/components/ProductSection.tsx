import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import proteinImage from "@/assets/protein-red.jpg";
import preworkoutImage from "@/assets/preworkout-black.jpg";
import creatineImage from "@/assets/creatine-white.jpg";
import bcaaImage from "@/assets/bcaa-red.jpg";

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const products = [
    {
      id: "1",
      name: "Total War Pre Workout",
      image: preworkoutImage,
      price: 6980,
      originalPrice: 8500,
      rating: 5,
      reviews: 124,
      category: "Pre-Workout",
      isNew: true,
      isOnSale: true
    },
    {
      id: "2", 
      name: "Dymatize ISO 100 Whey Protein",
      image: proteinImage,
      price: 16480,
      originalPrice: 17500,
      rating: 4.8,
      reviews: 89,
      category: "Protein",
      isOnSale: true
    },
    {
      id: "3",
      name: "Creatine Monohydrate",
      image: creatineImage,
      price: 4500,
      rating: 4.9,
      reviews: 156,
      category: "Creatine",
      isNew: true
    },
    {
      id: "4",
      name: "BCAA Energy Formula",
      image: bcaaImage,
      price: 5200,
      originalPrice: 6000,
      rating: 4.7,
      reviews: 73,
      category: "BCAA",
      isOnSale: true
    },
    {
      id: "5",
      name: "GAT Testrol Fire",
      image: preworkoutImage,
      price: 7200,
      originalPrice: 8500,
      rating: 4.6,
      reviews: 45,
      category: "Testosterone",
      isOnSale: true
    },
    {
      id: "6",
      name: "Mass Gainer Extreme",
      image: proteinImage,
      price: 12500,
      rating: 4.5,
      reviews: 67,
      category: "Mass Gainer"
    }
  ];

  const categories = [
    { id: "featured", label: "Featured", count: 6 },
    { id: "whey", label: "Whey Protein", count: 45 },
    { id: "massGainer", label: "Mass Gainer", count: 23 },
    { id: "creatine", label: "Creatine", count: 18 },
    { id: "bcaa", label: "BCAA", count: 15 },
    { id: "preworkout", label: "Pre Workout", count: 12 },
    { id: "fatBurner", label: "Fat Burner", count: 8 }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            🔥 Hot Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Back In <span className="text-primary animate-glow">Stock</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium supplements are back! Get your favorite products before they sell out again.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-muted/50">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="flex flex-col py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                          transition-all duration-300 hover:bg-primary/10"
              >
                <span className="font-medium">{category.label}</span>
                <span className="text-xs opacity-70">({category.count})</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="space-y-8">
            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center pt-8">
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg
                          transition-all duration-300 hover:shadow-glow"
              >
                Load More Products
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Featured Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up">
          {[
            { number: "500+", label: "Products", icon: "🏆" },
            { number: "5000+", label: "Happy Customers", icon: "😊" },
            { number: "99%", label: "Satisfaction Rate", icon: "⭐" },
            { number: "24/7", label: "Customer Support", icon: "📞" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 
                        transition-all duration-300 hover:shadow-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;