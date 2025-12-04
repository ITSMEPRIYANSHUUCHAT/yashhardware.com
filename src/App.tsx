import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart, { CartItem } from "./components/Cart";
import ProductDetailsModal from "./components/ProductDetailsModal";
import WhatsAppButton from "./components/WhatsAppButton";
import { Product } from "./data/products";
import { useToast } from "./hooks/use-toast";

const queryClient = new QueryClient();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (product: Product, size: string) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.productName === product.name && item.size === size
    );

    if (existingItemIndex >= 0) {
      const newItems = [...cartItems];
      newItems[existingItemIndex].quantity += 1;
      setCartItems(newItems);
    } else {
      setCartItems([...cartItems, { productName: product.name, size, quantity: 1 }]);
    }

    toast({
      title: "Added to cart",
      description: `${product.name} (${size}) added to your cart`,
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    const newItems = [...cartItems];
    newItems[index].quantity = quantity;
    setCartItems(newItems);
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setDetailsModalOpen(true);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navbar cartItemCount={cartItemCount} onCartOpen={() => setCartOpen(true)} />
            
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route 
                  path="/products" 
                  element={
                    <Products 
                      onAddToCart={handleAddToCart} 
                      onViewDetails={handleViewDetails}
                    />
                  } 
                />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>

            <Footer />

            <Cart
              open={cartOpen}
              onClose={() => setCartOpen(false)}
              items={cartItems}
              onRemoveItem={handleRemoveItem}
              onUpdateQuantity={handleUpdateQuantity}
            />

            <ProductDetailsModal
              product={selectedProduct}
              open={detailsModalOpen}
              onClose={() => setDetailsModalOpen(false)}
            />

            <WhatsAppButton />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
