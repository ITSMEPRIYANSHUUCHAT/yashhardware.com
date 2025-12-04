import { MapPin, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us, call us, or send us a message. We're here to help with all your hardware needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center hover:shadow-industrial transition-all duration-500 group border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Location</h3>
            <p className="text-muted-foreground text-sm">
              Opposite Kamuli Main Post Office<br />
              Mandwa Ward, Plot 7 Mutekanga Road<br />
              Kamuli, Uganda, Africa
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-industrial transition-all duration-500 group border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Phone</h3>
            <a href="tel:+256742871233" className="text-muted-foreground hover:text-primary transition-colors block mb-1">
              (+256) 742-871233
            </a>
            <a href="tel:+256763510825" className="text-muted-foreground hover:text-primary transition-colors block">
              (+256) 763-510825
            </a>
          </Card>

          <Card className="p-8 text-center hover:shadow-industrial transition-all duration-500 group border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Email</h3>
            <a 
              href="mailto:yashptl1612@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors break-all"
            >
              yashptl1612@gmail.com
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
