import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Package, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import yashLogo from "@/assets/yash-logo.png";
import Testimonials from "@/components/Testimonials";
import { products } from "@/data/products";
import PageTransition from "@/components/PageTransition";

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <PageTransition>
      <div>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(237,142,39,0.3)), url(${heroImage})`,
              backgroundAttachment: "fixed",
            }}
          />

          <div className="container mx-auto px-4 relative z-10 animate-fade-in">
            <div className="max-w-4xl">
              <img
                src={yashLogo}
                alt="Yash General Hardware"
                className="w-72 mb-8 drop-shadow-2xl animate-scale-in"
              />
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Your Project, <br />
                <span className="text-primary">Our Priority</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                High-quality hardware products since 2023. We deliver value, consistency,
                and a seamless experience for builders, contractors, and businesses across Uganda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-accent text-white font-semibold text-lg px-8 py-6 shadow-industrial group"
                  >
                    Browse Products
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold text-lg px-8 py-6"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2023</div>
                  <div className="text-white/80">Established</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">9+</div>
                  <div className="text-white/80">Product Lines</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-white/80">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why Choose <span className="text-primary">Yash Hardware?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 text-center hover:shadow-industrial transition-all duration-500 group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Wide Selection</h3>
                <p className="text-sm text-muted-foreground">
                  9+ product categories with extensive size variants
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-industrial transition-all duration-500 group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Quality Assured</h3>
                <p className="text-sm text-muted-foreground">
                  Premium brands and certified materials only
                </p>
              </Card>


              <Card className="p-6 text-center hover:shadow-industrial transition-all duration-500 group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Expert Support</h3>
                <p className="text-sm text-muted-foreground">
                  Knowledgeable team ready to assist you
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Featured <span className="text-primary">Products</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Popular choices from our extensive catalog
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {featuredProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-industrial transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {product.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/products">
                <Button size="lg" className="bg-primary hover:bg-accent">
                  View All Products
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-secondary to-secondary/80">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get in touch with us today for quotes, product inquiries, or delivery information
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-accent text-white text-lg px-8 py-6">
                Contact Us Now
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
