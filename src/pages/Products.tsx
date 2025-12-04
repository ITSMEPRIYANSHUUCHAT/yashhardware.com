import ProductCatalog from "@/components/ProductCatalog";
import PageTransition from "@/components/PageTransition";
import { Product } from "@/data/products";

interface ProductsProps {
  onAddToCart: (product: Product, size: string) => void;
  onViewDetails: (product: Product) => void;
}

const Products = ({ onAddToCart, onViewDetails }: ProductsProps) => {
  return (
    <PageTransition>
      <div className="pt-20">
        <ProductCatalog onAddToCart={onAddToCart} onViewDetails={onViewDetails} />
      </div>
    </PageTransition>
  );
};

export default Products;
