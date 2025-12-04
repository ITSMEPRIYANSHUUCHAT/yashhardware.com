import { useParams, Link } from "react-router-dom";
import { getBlogBySlug, getRelatedBlogs } from "@/data/blogs";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? getBlogBySlug(slug) : undefined;
  const { toast } = useToast();

  if (!blog) {
    return (
      <PageTransition>
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <Card className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Blog Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The blog post you're looking for doesn't exist.
            </p>
            <Link to="/blogs">
              <Button className="bg-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Button>
            </Link>
          </Card>
        </div>
      </PageTransition>
    );
  }

  const relatedBlogs = getRelatedBlogs(blog.slug, blog.category);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: url,
      }).catch(() => {
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "Blog link has been copied to clipboard",
        });
      });
    } else {
      navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "Blog link has been copied to clipboard",
      });
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>{blog.seo.metaTitle}</title>
        <meta name="description" content={blog.seo.metaDescription} />
        <meta name="keywords" content={blog.seo.keywords.join(", ")} />
        <meta property="og:title" content={blog.seo.metaTitle} />
        <meta property="og:description" content={blog.seo.metaDescription} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.seo.metaTitle} />
        <meta name="twitter:description" content={blog.seo.metaDescription} />
        <meta name="twitter:image" content={blog.image} />
      </Helmet>

      <div className="pt-20">
        {/* Hero Image */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Content */}
        <article className="container mx-auto px-4 -mt-32 relative z-10 max-w-4xl">
          <Card className="p-8 md:p-12 mb-12">
            <Link to="/blogs">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Button>
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(blog.date).toLocaleDateString('en-GB', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{blog.readTime}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="ml-auto"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }}
            />
          </Card>

          {/* Related Blogs */}
          {relatedBlogs.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Related <span className="text-primary">Articles</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <BlogCard key={relatedBlog.id} blog={relatedBlog} />
                ))}
              </div>
            </section>
          )}

          {/* CTA Section */}
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Expert Advice?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Visit Yash General Hardware for personalized guidance on your project
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-accent">
                Contact Us Today
              </Button>
            </Link>
          </Card>
        </article>
      </div>
    </PageTransition>
  );
};

export default BlogPost;