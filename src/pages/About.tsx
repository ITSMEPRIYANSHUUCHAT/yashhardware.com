import { Target, Eye, Award, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                About <span className="text-primary">Yash Enterprise</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Established in 2023, owned and managed by Vijaykumar Patel, Yash General Hardware Ltd
                is dedicated to supplying high-quality building materials supported by expert knowledge
                and reliable customer service.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Motto */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 text-center hover:shadow-industrial transition-all duration-500 group bg-gradient-card border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Provide dependable hardware solutions that empower builders, contractors, SMEs,
                  and businesses with the materials they need to grow and succeed.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-industrial transition-all duration-500 group bg-gradient-card border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Become the most trusted and innovative hardware supplier in the region —
                  shaping stronger communities and building a stronger future together.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-industrial transition-all duration-500 group bg-gradient-card border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Motto</h3>
                <p className="text-muted-foreground text-2xl font-semibold mt-4">
                  "Your Project, <br />
                  <span className="text-primary">Our Priority</span>"
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                Our <span className="text-primary">Story</span>
              </h2>
              <Card className="p-8 md:p-12 bg-gradient-card border-border">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2023, Yash General Hardware Ltd emerged from a clear vision: to provide
                  the construction industry in Uganda with reliable, high-quality building materials
                  backed by exceptional customer service.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Under the dedicated leadership of Vijaykumar Patel, we've quickly established
                  ourselves as a trusted partner for builders, contractors, and businesses throughout
                  the Kamuli region and beyond. Our commitment to quality, consistency, and customer
                  satisfaction sets us apart.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We offer high-quality hardware products including TMT bars, cement, steel pipes,
                  water tanks, and more — ensuring that every client receives the exact materials
                  they need, when they need them. Our motto, "Your Project, Our Priority," isn't just
                  a slogan — it's the foundation of everything we do.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Meet Our <span className="text-primary">Leadership</span>
              </h2>
            </div>

            <div className="max-w-md mx-auto">
              <Card className="p-8 text-center hover:shadow-industrial transition-all duration-500 bg-gradient-card border-border">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Vijaykumar Patel</h3>
                <p className="text-primary font-semibold mb-4">Owner & Managing Director</p>
                <p className="text-muted-foreground leading-relaxed">
                  With a passion for quality and customer service, Vijaykumar leads Yash Hardware
                  with a commitment to excellence and innovation in the building materials industry.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Core Values</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Quality First", description: "We never compromise on the quality of our products" },
                { title: "Customer Focus", description: "Your project success is our primary goal" },
                { title: "Reliability", description: "Consistent supply and dependable delivery every time" },
                { title: "Integrity", description: "Honest dealings and transparent business practices" },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-industrial transition-all duration-500 hover:-translate-y-2"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
