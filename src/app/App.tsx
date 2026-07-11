import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import {
  ArrowRight,
  Loader2,
  Send,
  TrendingUp,
  Users,
  Star,
  Menu,
  X,
  Check,
  Heart,
  Zap,
  Globe,
  Shield,
  Sparkles,
  ChevronRight,
  Briefcase,
  ShieldAlert
} from "lucide-react";
import { Link } from "react-router";






const INVESTORS = ["Sequoia SEA", "Insignia Ventures", "Plug & Play", "Y-Space Angels"];

const FAQS = [
  {
    q: "Who is Mana for?",
    a: "A Mana account is a real US dollar account built for Filipinos earning or living abroad.",
  },
  {
    q: "Which countries does MANA support?",
    a: "We currently support sending money from the USA directly to the Philippines. We are expanding to the UAE, Saudi Arabia, Singapore, UK, and Australia soon.",
  },
  {
    q: "Is Mana a bank?",
    a: "Mana is a financial technology company, not a bank. Banking services are provided by SSB, Member FDIC.",
  },
  {
    q: "How does the 3.5% savings work?",
    a: "Save is a yield feature on your USD wallet that earns 3.5% APY. The rate is current, may change over time, and is not guaranteed.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ANNOUNCEMENT BAR */}
      <div className="bg-primary text-white text-center py-2.5 px-4">
        <p className="text-xs md:text-sm font-semibold flex items-center justify-center gap-2">
          <Sparkles size={13} className="text-accent" />
          MANA is now live in the US and Philippines.
          <a href="#open-account" className="underline underline-offset-2 hover:text-accent transition-colors ml-1">
            Open your account today →
          </a>
        </p>
      </div>



      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-40 md:pb-40">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-foreground max-w-4xl mx-auto font-serif tracking-tight">
            Earn in dollars. Send in pesos. <br />
            <span className="text-accent">Manage your cross-border income.</span>
          </h1>

          <p className="text-[17px] md:text-[22px] text-muted-foreground/90 leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
            A real US dollar account to hold your earnings, earn high yield, and send money home. Build your financial life across borders.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-muted-foreground mb-16">
            <div className="flex items-center gap-2 text-foreground font-bold bg-[#FAFAFA] border border-border px-4 py-2 rounded-full shadow-sm">
              <span className="text-xs">Built for Filipinos abroad</span>
            </div>
            <div className="flex items-center gap-2 text-foreground font-bold bg-white border border-border px-4 py-2 rounded-full shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              <span className="text-xs">Earn 3.5% APY</span>
            </div>
          </div>

          {/* CONCRETE MONEY MOVEMENT FLOW */}
          <div className="max-w-4xl mx-auto mb-24 hidden md:flex items-center justify-center gap-4">
             <div className="bg-white border border-border rounded-2xl p-5 flex flex-col items-center shadow-sm w-56 relative overflow-hidden">
               <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Incoming ACH</span>
               <span className="text-2xl font-bold font-serif text-foreground">+$3,450.00</span>
               <span className="text-[11px] text-muted-foreground font-medium mt-1">from Upwork</span>
             </div>
             <ArrowRight className="text-muted-foreground/30 flex-shrink-0" size={24} />
             <div className="bg-white border border-border rounded-2xl p-5 flex flex-col items-center shadow-sm w-56 relative overflow-hidden">
               <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Mana USD Wallet</span>
               <span className="text-2xl font-bold font-serif text-foreground">$3,450.00</span>
               <span className="text-[11px] text-accent font-bold mt-1 bg-accent/10 px-2 py-0.5 rounded-full">Earning 3.5% APY</span>
             </div>
             <ArrowRight className="text-muted-foreground/30 flex-shrink-0" size={24} />
             <div className="bg-white border border-border rounded-2xl p-5 flex flex-col items-center shadow-md w-56 text-foreground relative overflow-hidden">
               <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-3 relative z-10">Sent to Philippines</span>
               <span className="text-2xl font-bold font-serif relative z-10 tracking-tight">₱192,300</span>
               <span className="text-[11px] text-[#1D9A5B] font-bold mt-1 relative z-10">Transparent flat fee</span>
             </div>
          </div>

          <div id="open-account" className="max-w-3xl mx-auto scroll-mt-24">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8 text-center">
              Tell us who you are
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Freelancer Card */}
              <Link to="/freelancers" className="h-full group text-left bg-white border border-border/60 hover:border-border rounded-[1.5rem] p-8 md:p-10 flex flex-col relative overflow-hidden transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold font-serif text-foreground group-hover:text-accent transition-colors leading-snug">I'm a freelancer</h3>
                  <div className="w-10 h-10 rounded-full bg-secondary/50 text-foreground flex items-center justify-center border border-border/50">
                    <Briefcase size={16} />
                  </div>
                </div>
                
                <h4 className="text-sm font-bold text-foreground mb-2">How it works</h4>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-6">Receive USD via ACH or wire with zero inbound fees. Hold your balance in dollars until you decide to convert.</p>
                
                <div className="bg-[#FAFAFA] border border-border rounded-xl p-4 mb-6 mt-4 relative overflow-hidden flex flex-col gap-2 shadow-inner">
                   <div className="flex justify-between items-center">
                     <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">USD Routing</span>
                     <span className="text-[9px] font-bold text-[#1D9A5B] bg-[#1D9A5B]/10 px-2 py-0.5 rounded-full">3.5% APY</span>
                   </div>
                   <div className="text-2xl font-bold font-serif">$2,450.00</div>
                   <div className="flex justify-between items-center mt-2 border-t border-border/60 pt-3">
                     <span className="text-[10px] font-semibold text-muted-foreground">Current Rate</span>
                     <span className="text-[10px] font-bold text-foreground">1 USD = ₱55.74</span>
                   </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-accent transition-colors mt-auto pt-4 border-t border-border/30">
                  View US Accounts <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* OFW Card */}
              <Link to="/ofws" className="h-full group text-left bg-white border border-border/60 hover:border-border rounded-[1.5rem] p-8 md:p-10 flex flex-col relative overflow-hidden transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold font-serif text-foreground group-hover:text-accent transition-colors leading-snug">I'm working abroad</h3>
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                    <ShieldAlert size={16} />
                  </div>
                </div>
                
                <div className="bg-[#FAFAFA] border border-border rounded-xl p-4 mb-6 mt-4 relative overflow-hidden flex flex-col gap-2 shadow-inner">
                   <div className="flex justify-between items-center">
                     <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Send to Maria</span>
                     <span className="text-[9px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">Transparent Fee</span>
                   </div>
                   <div className="flex items-baseline gap-2">
                     <span className="text-2xl font-bold font-serif text-foreground">₱16,722</span>
                     <span className="text-[11px] text-muted-foreground font-medium">for $300</span>
                   </div>
                   <div className="flex justify-between items-center mt-2 border-t border-border/60 pt-3">
                     <span className="text-[10px] font-semibold text-muted-foreground">Delivery</span>
                     <span className="text-[10px] font-bold text-[#1D9A5B] flex items-center gap-1"><Zap size={10} /> Fast transfers</span>
                   </div>
                </div>
                
                <div className="mb-8 flex-1">
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    Send money directly to the Philippines with clear, upfront pricing. Enjoy fast transfers to major banks and wallets.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-accent transition-colors mt-auto pt-4 border-t border-border/30">
                  View Remittance Rates <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
            
            <div className="mt-16 pt-10 border-t border-border/40 flex flex-col items-center">
              <div className="bg-white border border-border/60 shadow-sm px-6 py-5 rounded-2xl mb-8 max-w-2xl text-center relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></div>
                <p className="text-[14px] font-medium text-foreground leading-relaxed">
                  <span className="font-bold">Transparent transfers.</span> Mana sends with clear, upfront pricing — what you see is what your family gets.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight mb-8">
              <span className="text-foreground block mb-1">Built by immigrants.</span>
              <span className="text-accent block">Backed by US-regulated security.</span>
            </h2>
            
            <div className="space-y-6 text-[15px] leading-relaxed text-muted-foreground mb-10">
              <p>
                As immigrants, we experienced firsthand how high fees and opaque exchange rates affect cross-border financial lives.
              </p>
              <p>
                Mana was built to provide a secure, transparent alternative for managing USD income and sending money to the Philippines, backed by US-regulated banking infrastructure.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-accent" />
                <span className="text-sm font-medium text-foreground">FDIC-insured partner banks</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-accent" />
                <span className="text-sm font-medium text-foreground">Bank-level encryption</span>
              </div>
            </div>

            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent/80 transition-colors group">
              Read our story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col justify-center gap-12 lg:border-l lg:border-border/60 lg:pl-16">
            <div>
              <h3 className="font-bold text-foreground font-serif text-2xl md:text-3xl mb-2">Paco Litonjua</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4">Co-Founder</p>
              <p className="text-[14px] leading-relaxed text-muted-foreground max-w-sm">
                Stanford B.S., HBS MBA. Previously built financial products at Figure Technologies, yet struggled to get a basic credit card as an immigrant.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground font-serif text-2xl md:text-3xl mb-2">Akshat Parwal</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4">Co-Founder</p>
              <p className="text-[14px] leading-relaxed text-muted-foreground max-w-sm">
                L.E.K. Consulting, HBS MBA. Helped build India's first digital bank (slice), but watched his financial identity reset to zero upon moving to the US.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-serif">
              Questions we get asked.
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-border rounded-2xl px-6 py-2 shadow-sm">
                  <AccordionTrigger className="text-[15px] font-bold text-foreground hover:no-underline hover:text-accent transition-colors text-left py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] text-muted-foreground leading-relaxed pr-8 pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

    </div>
  );
}
