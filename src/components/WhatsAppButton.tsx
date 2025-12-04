import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Hello Yash General Hardware Ltd! I have an inquiry about your products.");
    window.open(`https://wa.me/256742871233?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-industrial bg-green-600 hover:bg-green-700 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
