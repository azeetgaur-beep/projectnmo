import { ArrowRight, Briefcase, Check, ShieldAlert, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router";
import { AnchorLink } from "@/app/components/AnchorLink";
import { FaqSection } from "@/app/components/FaqSection";
import { FoundersSection } from "@/app/components/FoundersSection";
import { MoneyFlowVisual } from "@/app/components/MoneyFlowVisual";
import { ProductsSection } from "@/app/components/ProductsSection";
import { WaitlistSection } from "@/app/components/WaitlistSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ANNOUNCEMENT BAR */}
      <div className="bg-primary text-white text-center py-2.5 px-4">
        <p className="text-xs md:text-sm font-semibold flex items-center justify-center gap-2 flex-wrap">
          <Sparkles size={13} className="text-accent shrink-0" aria-hidden="true" />
          Mana is launching soon in the US and Philippines.
          <AnchorLink
            to="#waitlist"
            className="underline underline-offset-2 hover:text-accent transition-colors"
          >
            Join the waitlist →
          </AnchorLink>
        </p>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-5">
            Financial services built for Filipinos everywhere
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-foreground max-w-4xl mx-auto font-serif tracking-tight">
            Earn in dollars. Send in pesos.{" "}
            <span className="text-accent">Manage your cross-border income.</span>
          </h1>

          <p className="text-[17px] md:text-[22px] text-muted-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8 font-medium">
            A real US dollar account to hold your earnings, earn high yield, and send money home. Built for Filipinos everywhere.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <AnchorLink
              to="#waitlist"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-bold px-8 py-3.5 rounded-full hover:bg-foreground/90 transition-all shadow-sm text-sm md:text-base w-full sm:w-auto"
            >
              Join the waitlist <ArrowRight size={16} aria-hidden="true" />
            </AnchorLink>
            <AnchorLink
              to="#open-account"
              className="inline-flex items-center justify-center gap-2 bg-white border border-border text-foreground font-bold px-8 py-3.5 rounded-full hover:bg-[#FAFAFA] transition-all text-sm md:text-base w-full sm:w-auto"
            >
              See how it works
            </AnchorLink>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-muted-foreground mb-12 md:mb-16">
            <div className="flex items-center gap-2 text-foreground font-bold bg-[#FAFAFA] border border-border px-4 py-2 rounded-full shadow-sm">
              <span className="text-xs">Built for Filipinos abroad</span>
            </div>
            <div className="flex items-center gap-2 text-foreground font-bold bg-white border border-border px-4 py-2 rounded-full shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
                aria-hidden="true"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <span className="text-xs">Earn 3.5% APY</span>
            </div>
            <div className="flex items-center gap-2 text-foreground font-bold bg-white border border-border px-4 py-2 rounded-full shadow-sm">
              <Check size={12} className="text-accent" aria-hidden="true" />
              <span className="text-xs">Visa card included</span>
            </div>
          </div>

          <MoneyFlowVisual />

          <div id="open-account" className="max-w-3xl mx-auto scroll-mt-24">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8 text-center">
              Tell us who you are
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Link
                to="/freelancers"
                className="h-full group text-left bg-white border border-border/60 hover:border-border rounded-[1.5rem] p-8 md:p-10 flex flex-col transition-all duration-300 hover:shadow-md"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold font-serif text-foreground group-hover:text-accent transition-colors leading-snug">
                    I'm a freelancer
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-secondary/50 text-foreground flex items-center justify-center border border-border/50">
                    <Briefcase size={16} aria-hidden="true" />
                  </div>
                </div>

                <h4 className="text-sm font-bold text-foreground mb-2">How it works</h4>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-6">
                  Receive USD via ACH or wire. Hold your balance in dollars until you decide to convert.
                </p>

                <div className="bg-[#FAFAFA] border border-border rounded-xl p-4 mb-6 mt-4 flex flex-col gap-2 shadow-inner">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      USD Routing
                    </span>
                    <span className="text-[9px] font-bold text-[#1D9A5B] bg-[#1D9A5B]/10 px-2 py-0.5 rounded-full">
                      3.5% APY
                    </span>
                  </div>
                  <div className="text-2xl font-bold font-serif">$2,450.00</div>
                  <div className="flex justify-between items-center mt-2 border-t border-border/60 pt-3">
                    <span className="text-[10px] font-semibold text-muted-foreground">Current Rate</span>
                    <span className="text-[10px] font-bold text-foreground">1 USD = ₱55.74</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-accent transition-colors mt-auto pt-4 border-t border-border/30">
                  View US Accounts <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </Link>

              <Link
                to="/ofws"
                className="h-full group text-left bg-white border border-border/60 hover:border-border rounded-[1.5rem] p-8 md:p-10 flex flex-col transition-all duration-300 hover:shadow-md"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold font-serif text-foreground group-hover:text-accent transition-colors leading-snug">
                    I'm working abroad
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                    <ShieldAlert size={16} aria-hidden="true" />
                  </div>
                </div>

                <div className="bg-[#FAFAFA] border border-border rounded-xl p-4 mb-6 mt-4 flex flex-col gap-2 shadow-inner">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      Send to Maria
                    </span>
                    <span className="text-[9px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                      Transparent pricing
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-serif text-foreground">₱16,722</span>
                    <span className="text-[11px] text-muted-foreground font-medium">for $300</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 border-t border-border/60 pt-3">
                    <span className="text-[10px] font-semibold text-muted-foreground">Delivery</span>
                    <span className="text-[10px] font-bold text-[#1D9A5B] flex items-center gap-1">
                      <Zap size={10} aria-hidden="true" /> Fast transfers
                    </span>
                  </div>
                </div>

                <p className="text-[13px] text-muted-foreground leading-relaxed mb-8 flex-1">
                  Send money directly to the Philippines with clear, upfront pricing — no hidden FX markup.
                </p>

                <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-accent transition-colors mt-auto pt-4 border-t border-border/30">
                  View Remittance Rates <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </Link>
            </div>

            <div className="mt-16 pt-10 border-t border-border/40 flex flex-col items-center">
              <div className="bg-white border border-border/60 shadow-sm px-6 py-5 rounded-2xl max-w-2xl text-center relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" aria-hidden="true" />
                <p className="text-[14px] font-medium text-foreground leading-relaxed">
                  <span className="font-bold">Transparent transfers.</span> Mana sends at the real mid-market exchange rate — what you see is what your family receives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductsSection />
      <FoundersSection />
      <WaitlistSection />
      <FaqSection />
    </div>
  );
}
