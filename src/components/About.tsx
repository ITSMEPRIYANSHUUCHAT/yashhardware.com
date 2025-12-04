import { Target, Eye, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Yash Enterprise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Established in 2023, owned and managed by Vijaykumar Patel, Yash General Hardware Ltd 
            is dedicated to supplying high-quality building materials supported by expert knowledge 
            and reliable customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center hover:shadow-industrial transition-all duration-500 group bg-gradient-card border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              Provide dependable hardware solutions that empower builders, contractors, SMEs, 
              and businesses with the materials they need to grow.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-industrial transition-all duration-500 group bg-gradient-card border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              Become the most trusted and innovative hardware supplier in the region — 
              shaping stronger communities and a stronger future.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-industrial transition-all duration-500 group bg-gradient-card border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Motto</h3>
            <p className="text-muted-foreground text-xl font-semibold">
              "Your Project, <span className="text-primary">Our Priority</span>"
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
