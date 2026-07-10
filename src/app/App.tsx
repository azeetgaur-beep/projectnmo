import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import manaLogo from "@/imports/mymana_logo.png";
import pacoImage from "@/imports/paco.jpg";
import akshatImage from "@/imports/akshat.jpg";
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
} from "lucide-react";
import { Link } from "react-router";




const FEATURES = [
  {
    icon: Send,
    title: "Send money home in minutes",
    desc: "Real exchange rates. No hidden markups. Your family gets more — every single time.",
    tag: "Remittance",
  },
  {
    icon: TrendingUp,
    title: "Save together, grow together",
    desc: "Set savings goals for tuition, a house, emergencies — and watch them grow from anywhere in the world.",
    tag: "Savings",
  },
  {
    icon: Users,
    title: "A wallet your family can use",
    desc: "Give your loved ones back home a linked wallet. You load it, they spend it. You both see everything.",
    tag: "Family",
  },
  {
    icon: Globe,
    title: "Built for where you actually are",
    desc: "Funding from US, UK, UAE, Singapore, Saudi, Australia — wherever OFWs go, MANA follows.",
    tag: "Global",
  },
];

const TEAM = [
  {
    name: "Isabel Reyes",
    role: "Co-founder & CEO",
    bio: "Former OFW. Spent 8 years in Dubai watching her remittance fees drain her savings. Built MANA so others don't have to.",
    initials: "IR",
    bg: "bg-primary",
  },
  {
    name: "Marco Santos",
    role: "Co-founder & CTO",
    bio: "Previously built payments infra at Grab. Knows exactly how broken cross-border money movement is — and how to fix it.",
    initials: "MS",
    bg: "bg-accent",
  },
  {
    name: "Joy Villanueva",
    role: "Head of Growth",
    bio: "Grew up watching her mother send balikbayan boxes because wire transfers cost too much. That ends with MANA.",
    initials: "JV",
    bg: "bg-secondary text-secondary-foreground",
  },
];

const INVESTORS = ["Sequoia SEA", "Insignia Ventures", "Plug & Play", "Y-Space Angels"];

const FAQS = [
  {
    q: "When does MANA launch?",
    a: "We're targeting a closed beta in Q4 2026. Waitlist members get first access — and a lifetime rate guarantee once we go live.",
  },
  {
    q: "Which countries will MANA support at launch?",
    a: "We're starting with the top 6 OFW corridors: UAE, Saudi Arabia, Singapore, USA, UK, and Australia — all sending to the Philippines.",
  },
  {
    q: "Is my money safe?",
    a: "Yes. We are applying for BSP registration and money transmission licenses in every country we operate. Your funds are held in regulated, segregated accounts — not our operating capital.",
  },
  {
    q: "Will MANA really charge zero markup?",
    a: "We use the real mid-market rate. We make a small flat fee per transfer, never a percentage — so whether you send ₱5,000 or ₱500,000, you pay the same flat amount.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [waitlistCount] = useState(2847);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1500);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ANNOUNCEMENT BAR */}
      <div className="bg-primary text-white text-center py-2.5 px-4">
        <p className="text-xs md:text-sm font-semibold flex items-center justify-center gap-2">
          <Sparkles size={13} className="text-accent" />
          MANA just closed its seed round — we&apos;re building the financial home for Filipinos abroad.
          <a href="#waitlist" className="underline underline-offset-2 hover:text-accent transition-colors ml-1">
            Join the waitlist →
          </a>
        </p>
      </div>



      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-40 md:pb-40">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-foreground max-w-4xl mx-auto font-serif">
            The financial app built for <br />
            <span className="text-accent">Filipinos everywhere.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-20 font-medium">
            Real US dollar accounts, high yield savings, a visa card that works globally. Welcome to Mana, your financial home.
          </p>

          <div id="waitlist" className="max-w-3xl mx-auto scroll-mt-24">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8 text-center">
              Tell us who you are
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Freelancer Card */}
              <Link to="/freelancers" className="group text-left bg-white border border-border/60 hover:border-border rounded-[1.5rem] p-8 md:p-10 flex flex-col relative overflow-hidden transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-secondary/50 text-foreground flex items-center justify-center mb-8 border border-border/50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <h3 className="text-2xl font-bold font-serif text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">I'm a freelancer</h3>
                <p className="text-[15px] text-muted-foreground/90 leading-relaxed mb-10 flex-1">
                  You're a Filipino earning from clients and companies around the world, paid in dollars.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-accent transition-colors mt-auto pt-4 border-t border-border/30">
                  Explore for freelancers <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* OFW Card */}
              <Link to="/ofws" className="group text-left bg-white border border-border/60 hover:border-border rounded-[1.5rem] p-8 md:p-10 flex flex-col relative overflow-hidden transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-secondary/50 text-foreground flex items-center justify-center mb-8 border border-border/50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="text-2xl font-bold font-serif text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">I'm working abroad</h3>
                <p className="text-[15px] text-muted-foreground/90 leading-relaxed mb-10 flex-1">
                  You're a Filipino living and working overseas, supporting family back home.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-accent transition-colors mt-auto pt-4 border-t border-border/30">
                  Explore for OFWs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
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
              <span className="text-accent block">Banking without borders.</span>
            </h2>
            
            <div className="space-y-6 text-[15px] leading-relaxed text-muted-foreground mb-10">
              <p>
                As immigrants ourselves, we know what it's like to move across the world for a better opportunity — and to watch high fees, opaque terms, and a financial life split across two countries quietly chip away at what you've earned.
              </p>
              <p>
                Mana exists to change that. We're building the financial home we wish we'd had the day we landed, so the money you work so hard for is no longer lost to the gaps in between.
              </p>
            </div>

            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent/80 transition-colors group">
              Read our story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Paco Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border flex flex-col">
              <div className="aspect-[4/5] relative bg-muted">
                <ImageWithFallback
                  src={pacoImage}
                  alt="Paco Litonjua"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5 md:p-6 bg-white flex flex-col items-start text-left">
                <h3 className="font-bold text-foreground font-serif text-lg mb-1">Paco Litonjua</h3>
                <p className="text-[11px] font-medium text-muted-foreground">Co-Founder</p>
              </div>
            </div>

            {/* Akshat Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border flex flex-col">
              <div className="aspect-[4/5] relative bg-muted">
                <ImageWithFallback
                  src={akshatImage}
                  alt="Akshat Parwal"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5 md:p-6 bg-white flex flex-col items-start text-left">
                <h3 className="font-bold text-foreground font-serif text-lg mb-1">Akshat Parwal</h3>
                <p className="text-[11px] font-medium text-muted-foreground">Co-Founder</p>
              </div>
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
