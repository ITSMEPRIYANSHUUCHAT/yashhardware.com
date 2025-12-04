import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { Package } from "lucide-react";

interface ProductDetailsModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const ProductDetailsModal = ({ product, open, onClose }: ProductDetailsModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">{product.name}</DialogTitle>
          <DialogDescription>
            <Badge className="mt-2 bg-primary/10 text-primary border-primary/20">
              {product.category}
            </Badge>
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              Description
            </h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Available Sizes / Specifications</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <Badge 
                  key={size} 
                  variant="outline" 
                  className="px-4 py-2 text-sm border-2 hover:bg-primary hover:text-white hover:border-primary transition-all cursor-default"
                >
                  {size}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsModal;
