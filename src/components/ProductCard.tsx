import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Info } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onViewDetails }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-industrial transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-card to-background border-border">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Button
          size="sm"
          variant="secondary"
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          onClick={() => onViewDetails(product)}
        >
          <Info className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="p-6">
        <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
          {product.category}
        </Badge>
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-4">
          {product.sizes.slice(0, 3).map((size) => (
            <Badge key={size} variant="outline" className="text-xs">
              {size}
            </Badge>
          ))}
          {product.sizes.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{product.sizes.length - 3} more
            </Badge>
          )}
        </div>
        <Button 
          className="w-full bg-primary hover:bg-accent group/btn"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
