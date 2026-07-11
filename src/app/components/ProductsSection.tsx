import { ArrowRight, CreditCard, DollarSign, PiggyBank, Send } from "lucide-react";
import { Link } from "react-router";

const PRODUCTS = [
  {
    icon: DollarSign,
    title: "US dollar account",
    description:
      "A real USD account to receive ACH and wire payments. Hold your earnings in dollars until you're ready to convert.",
    href: "/freelancers",
    cta: "For freelancers",
  },
  {
    icon: PiggyBank,
    title: "High-yield Save",
    description:
      "Earn 3.5% APY on dollars in your Save balance. Fully liquid with no lock-up — withdraw anytime.",
    href: "/freelancers",
    cta: "See how Save works",
  },
  {
    icon: Send,
    title: "Send to the Philippines",
    description:
      "Transfer home at the real mid-market exchange rate with clear, upfront pricing — no hidden FX markup.",
    href: "/ofws",
    cta: "View remittance",
  },
  {
    icon: CreditCard,
    title: "Mana Visa card",
    description:
      "A virtual card for Apple Pay or Google Pay. Spend your USD balance wherever Visa is accepted.",
    href: "/card",
    cta: "Explore the card",
  },
];

export function ProductsSection() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="py-24 md:py-32 bg-[#FAFAFA] border-y border-border/60"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            One app, four ways to manage your money
          </p>
          <h2
            id="products-heading"
            className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-4"
          >
            Everything you need across borders.
          </h2>
          <p className="text-[15px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hold dollars, earn yield, send money home, and spend with a Visa card — all from one app built for Filipinos everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {PRODUCTS.map((product) => (
            <Link
              key={product.title}
              to={product.href}
              className="group bg-white border border-border/60 hover:border-border rounded-2xl p-6 md:p-7 flex flex-col transition-all duration-300 hover:shadow-md"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 border border-accent/10">
                <product.icon size={20} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold font-serif text-foreground mb-2 group-hover:text-accent transition-colors">
                {product.title}
              </h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed mb-6 flex-1">
                {product.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                {product.cta}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
