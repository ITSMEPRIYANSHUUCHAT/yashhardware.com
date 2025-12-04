import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "James Okello",
    role: "Construction Manager",
    company: "Okello Builders Ltd",
    image: "👷",
    rating: 5,
    text: "Yash Hardware has been our go-to supplier for over a year. Their TMT bars are top quality and their delivery is always on time. Excellent service!",
  },
  {
    name: "Sarah Nakato",
    role: "Procurement Officer",
    company: "Kamuli County Projects",
    image: "👩‍💼",
    rating: 5,
    text: "The variety of products and competitive pricing makes Yash Hardware our preferred supplier. The team is knowledgeable and always helpful with product recommendations.",
  },
  {
    name: "David Musoke",
    role: "Building Contractor",
    company: "Musoke Construction",
    image: "👨‍🔧",
    rating: 5,
    text: "I've worked with many hardware suppliers, but Yash stands out for their commitment to quality and customer service. The WhatsApp ordering system is very convenient!",
  },
  {
    name: "Grace Namuli",
    role: "Project Engineer",
    company: "Eastern Development Corp",
    image: "👩‍🔬",
    rating: 5,
    text: "Reliable products, fair prices, and exceptional customer support. Yash Hardware truly lives up to their motto: 'Your Project, Our Priority.'",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from the builders, contractors, and businesses who trust Yash Hardware
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-industrial transition-all duration-500 group border-border bg-gradient-card relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Avatar */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {testimonial.image}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground mb-6 line-clamp-4 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-primary font-semibold mt-1">
                  {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
