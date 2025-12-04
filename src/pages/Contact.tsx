import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello Yash General Hardware Ltd! I have an inquiry about your products.");
    window.open(`https://wa.me/256742871233?text=${message}`, "_blank");
  };

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Visit us, call us, or send us a message. We're here to help with all your hardware needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
              <Card className="p-8 text-center hover:shadow-industrial transition-all duration-500 group border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Location</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Opposite Kamuli Main Post Office<br />
                  Mandwa Ward<br />
                  Plot 7 Mutekanga Road<br />
                  Kamuli, Uganda
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-industrial transition-all duration-500 group border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Phone</h3>
                <a href="tel:+256742871233" className="text-muted-foreground hover:text-primary transition-colors block mb-2 text-sm">
                  (+256) 742-871233
                </a>
                <a href="tel:+256763510825" className="text-muted-foreground hover:text-primary transition-colors block text-sm">
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
                  className="text-muted-foreground hover:text-primary transition-colors break-all text-sm"
                >
                  yashptl1612@gmail.com
                </a>
              </Card>

              <Card className="p-8 text-center hover:shadow-industrial transition-all duration-500 group border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Business Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Monday - Friday<br />
                  8:00 AM - 6:00 PM<br />
                  Saturday<br />
                  8:00 AM - 2:00 PM
                </p>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <div className="text-center">
              <Card className="p-12 max-w-3xl mx-auto bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
                <MessageCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Quick Order via WhatsApp
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get instant responses and place orders directly through WhatsApp
                </p>
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Visit Our <span className="text-primary">Store</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Find us opposite Kamuli Main Post Office on Mutekanga Road
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden border-border">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground mb-4">
                      Plot 7 Mutekanga Road, Mandwa Ward<br />
                      Kamuli, Uganda
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Opposite Kamuli Main Post Office
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
