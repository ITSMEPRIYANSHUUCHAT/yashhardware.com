import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, ShoppingCart, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export interface CartItem {
  productName: string;
  size: string;
  quantity: number;
}

interface CartProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (index: number) => void;
  onUpdateQuantity: (index: number, quantity: number) => void;
}

const Cart = ({ open, onClose, items, onRemoveItem, onUpdateQuantity }: CartProps) => {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const { toast } = useToast();

  const handleCheckout = () => {
    if (!customerName || !phone || !location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all contact details",
        variant: "destructive",
      });
      return;
    }

    if (items.length === 0) {
      toast({
        title: "Empty Cart",
        description: "Please add items to your cart first",
        variant: "destructive",
      });
      return;
    }

    // Format cart items for WhatsApp message
    const itemsList = items
      .map((item) => `• ${item.productName} - ${item.size} (Qty: ${item.quantity})`)
      .join("\n");

    const message = `Hello Yash General Hardware Ltd 👋

I want to place an order / request a quote.

Customer: ${customerName}
Phone: ${phone}
Location: ${location}

Order Details:
${itemsList}

Please confirm availability & delivery. Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/256742871233?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            Your Cart
          </SheetTitle>
          <SheetDescription>
            Review your items and send your order via WhatsApp
          </SheetDescription>
        </SheetHeader>

        <div className="py-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              Your cart is empty
            </div>
          ) : (
            items.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{item.productName}</h4>
                  <Badge variant="outline" className="mt-1">
                    {item.size}
                  </Badge>
                </div>
                <Input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => onUpdateQuantity(index, parseInt(e.target.value) || 1)}
                  className="w-20"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemoveItem(index)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))
          )}
        </div>

        <div className="space-y-4 border-t border-border pt-6">
          <div>
            <Label htmlFor="name">Your Name *</Label>
            <Input
              id="name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="John Doe"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+256 XXX XXX XXX"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="location">Delivery Location *</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Your address"
              className="mt-1"
            />
          </div>
        </div>

        <SheetFooter className="mt-6">
          <Button 
            onClick={handleCheckout} 
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            size="lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Checkout via WhatsApp
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
