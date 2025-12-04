import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Blog } from "@/data/blogs";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link to={`/blogs/${blog.slug}`}>
      <Card className="overflow-hidden hover:shadow-industrial transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
            {blog.category}
          </Badge>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 hover:text-primary transition-colors">
            {blog.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
            {blog.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;