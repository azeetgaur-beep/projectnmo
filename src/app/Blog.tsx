import { Link } from "react-router";
import { BLOG_POSTS } from "@/app/data/blog";

export default function Blog() {
  const featuredPost = BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.slice(1);

  return (
    <div className="pt-8 md:pt-20 pb-20 md:pb-36 px-5 sm:px-6 md:px-8 max-w-[72rem] mx-auto">
      <div className="mb-10 md:mb-20">
        <h1 className="text-[2.75rem] leading-[1.1] md:text-6xl lg:text-[4rem] font-bold font-serif mb-4 md:mb-5 text-foreground tracking-tight break-words">
          The Mana Blog
        </h1>
        <p className="text-[17px] md:text-xl text-muted-foreground/90 leading-relaxed max-w-2xl font-medium">
          Practical, no-jargon guides on saving in dollars, sending smarter, and building a financial cushion wherever life takes you.
        </p>
      </div>

      <Link to={`/blog/${featuredPost.slug}`} className="group block mb-12 md:mb-24 border-b border-border/40 pb-12 md:pb-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="lg:w-[55%] flex flex-col justify-center order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4 opacity-80">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{featuredPost.tag}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-xs font-medium text-muted-foreground">{featuredPost.date}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 md:mb-5 text-foreground group-hover:text-accent transition-colors leading-[1.1] tracking-tight">
              {featuredPost.title}
            </h2>
            <p className="text-[17px] md:text-[20px] text-muted-foreground/90 leading-relaxed mb-6 md:mb-8 max-w-2xl">
              {featuredPost.desc}
            </p>
            <div className="mt-auto flex items-center gap-2 text-[15px] font-bold text-foreground group-hover:text-accent transition-colors pt-2 md:pt-0">
              Read the full story <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1.5 transition-transform duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>
          <div className="lg:w-[45%] w-full aspect-video bg-secondary/40 rounded-2xl overflow-hidden relative border border-border/50 order-1 lg:order-2">
            <img
              src={featuredPost.image}
              alt={featuredPost.imageAlt}
              className="w-full h-full object-cover transition-transform duration-500"
              loading="eager"
            />
          </div>
        </div>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {regularPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group flex flex-col bg-white border border-border/40 rounded-[1.5rem] overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:border-border/80 transition-all duration-300 h-full"
          >
            <div className="w-full aspect-video bg-secondary/20 relative overflow-hidden border-b border-border/30">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-full object-cover transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-300" />
            </div>
            <div className="flex flex-col flex-1 p-5 sm:p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-3 opacity-80">
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-accent">
                  {post.tag}
                </span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="text-[10px] font-medium text-muted-foreground">
                  {post.date}
                </span>
              </div>
              <h3 className="text-[22px] md:text-[22px] font-bold font-serif mb-3 text-foreground group-hover:text-accent transition-colors leading-[1.25] tracking-tight">
                {post.title}
              </h3>
              <p className="text-[15px] text-muted-foreground/90 leading-relaxed line-clamp-3 mt-auto mb-2 md:mb-0">
                {post.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
