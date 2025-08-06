import { useState } from "react";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isOnSale?: boolean;
}

const ProductCard = ({ 
  name, 
  image, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  category,
  isNew = false,
  isOnSale = false 
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div 
      className="group relative bg-card rounded-2xl border border-border overflow-hidden 
                 transition-all duration-500 hover:shadow-glow hover:border-primary/50 hover:-translate-y-2
                 animate-fade-in-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {isNew && (
          <Badge className="bg-neon-green text-background font-bold animate-pulse">NEW</Badge>
        )}
        {isOnSale && discountPercentage > 0 && (
          <Badge className="bg-primary text-primary-foreground font-bold animate-neon-pulse">
            -{discountPercentage}%
          </Badge>
        )}
      </div>

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="sm"
        className={`absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-sm transition-all duration-300
                   ${isWishlisted ? 'bg-primary text-primary-foreground' : 'bg-background/80 text-muted-foreground hover:text-primary'}`}
        onClick={() => setIsWishlisted(!isWishlisted)}
      >
        <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
      </Button>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className={`w-full h-full object-cover transition-all duration-700 
                     ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Overlay with Quick Actions */}
        <div className={`absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-3
                        transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Category */}
        <div className="text-sm text-primary font-medium uppercase tracking-wide">
          {category}
        </div>

        {/* Product Name */}
        <h3 className="font-bold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) 
                    ? 'text-neon-green fill-current' 
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-foreground">
            Rs.{price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              Rs.{originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium
                     transition-all duration-300 group-hover:shadow-glow"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>

      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-neon-cyan/20 
                      transition-opacity duration-500 pointer-events-none
                      ${isHovered ? 'opacity-20' : 'opacity-0'}`} />
    </div>
  );
};

export default ProductCard;