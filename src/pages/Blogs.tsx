import { useState } from "react";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  const categories = ["All", ...Array.from(new Set(blogs.map(blog => blog.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Hardware <span className="text-primary">Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert guides, tips, and insights for your construction and hardware needs in Uganda
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredBlogs.map((blog, index) => (
                <div
                  key={blog.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  No blogs found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Blogs;