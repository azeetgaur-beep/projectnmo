import { Link } from "react-router";

const POSTS = [
  {
    title: "Best Way to Send Money to Philippines 2026: Top 6 Services Ranked",
    date: "Jul 07, 2026",
    tag: "Guide",
    desc: "Get the best way to send money to Philippines in 2026. Compare fees, exchange rates, and speed for Wise, Remitly, Western Union, and Mana.",
    slug: "best-way-to-send-money-to-philippines"
  },
  {
    title: "Cheapest Way to Send Money to Philippines: Full Guide",
    date: "Jul 03, 2026",
    tag: "Guide",
    desc: "Get the complete guide to the cheapest way to send money to Philippines. Compare fees, hidden FX markups, and transfer speeds across top services to save more.",
    slug: "cheapest-way-to-send-money-to-philippines"
  },
  {
    title: "How to Get the Best PHP Exchange Rate & Avoid Fees",
    date: "Jul 03, 2026",
    tag: "Guide",
    desc: "Learn how to get the best PHP exchange rate and avoid hidden fees when sending money home. Simple tips help you keep more of your hard-earned money.",
    slug: "how-to-get-best-php-exchange-rate"
  },
  {
    title: "How to Send Money from US to the Philippines: Clear, Upfront Pricing",
    date: "Jul 03, 2026",
    tag: "Guide",
    desc: "Get your family more pesos when you learn how to send money from the US to the Philippines. Mana delivers reliable transfers with clear, upfront pricing.",
    slug: "how-to-send-money-to-gcash"
  },
  {
    title: "How to Open a US Bank Account and Receive Payments for Filipino Freelancers",
    date: "Jul 02, 2026",
    tag: "Guide",
    desc: "Get your own US dollar account for Filipino freelancers with Mana. Avoid high fees, hold USD, earn 3.5% APY, and transfer home with transparent pricing.",
    slug: "open-us-bank-account-filipino-freelancers"
  },
  {
    title: "Your Guide to the 6 Best US Banks for OFWs",
    date: "Jul 01, 2026",
    tag: "Guide",
    desc: "Find the best US bank for OFW needs with this practical guide to top accounts, low fees, easy transfers, and secure banking for Filipinos working abroad.",
    slug: "6-best-us-banks-for-ofws"
  },
  {
    title: "The Best App to Send Money to PH for Free (No Hidden Fees)",
    date: "Jun 30, 2026",
    tag: "Guide",
    desc: "Find the best app to send money to Philippines for free with no hidden fees. Compare top apps, real exchange rates, and tips for secure, fast transfers.",
    slug: "best-app-send-money-ph-free"
  },
  {
    title: "How to Open Your First US Bank Account (Even With No Credit History)",
    date: "Jun 21, 2026",
    tag: "Guide",
    desc: "You don't need credit to open a bank account — just the right documents. Here's exactly what to bring and how the system really works.",
    slug: "open-first-us-bank-account-no-credit"
  },
  {
    title: "Money in America: A Starter Guide for New Filipino Nurses",
    date: "Jun 16, 2026",
    tag: "Guide",
    desc: "How money really works in the US — paychecks, credit, taxes, and sending padala home — mapped out for nurses who just arrived.",
    slug: "money-america-starter-guide-nurses"
  },
];

export default function Blog() {
  const featuredPost = POSTS[0];
  const regularPosts = POSTS.slice(1);

  return (
    <div className="pt-8 md:pt-20 pb-20 md:pb-36 px-5 sm:px-6 md:px-8 max-w-[72rem] mx-auto">
      {/* Compact Hero */}
      <div className="mb-10 md:mb-20">
        <h1 className="text-[2.75rem] leading-[1.1] md:text-6xl lg:text-[4rem] font-bold font-serif mb-4 md:mb-5 text-foreground tracking-tight break-words">
          The Mana Blog
        </h1>
        <p className="text-[17px] md:text-xl text-muted-foreground/90 leading-relaxed max-w-2xl font-medium">
          Practical, no-jargon guides on saving in dollars, sending smarter, and building a financial cushion wherever life takes you.
        </p>
      </div>

      {/* Featured Post */}
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
          <div className="lg:w-[45%] w-full aspect-[4/3] bg-secondary/40 rounded-2xl overflow-hidden relative border border-border/50 order-1 lg:order-2 flex items-center justify-center">
             <div className="text-muted-foreground/30 font-serif italic text-xl md:text-2xl">Featured Story</div>
          </div>
        </div>
      </Link>

      {/* Grid of Remaining Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {regularPosts.map((post, index) => (
          <Link 
            key={index} 
            to={`/blog/${post.slug}`}
            className="group flex flex-col bg-white border border-border/40 rounded-[1.5rem] overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:border-border/80 transition-all duration-300 h-full"
          >
            <div className="w-full aspect-[1.6/1] bg-secondary/20 relative flex items-center justify-center border-b border-border/30">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-300" />
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
