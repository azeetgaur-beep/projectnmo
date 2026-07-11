import { Check, X } from "lucide-react";
import { Link } from "react-router";

const PROBLEMS = [
  {
    bad: "Marked-up exchange rates",
    good: "Real mid-market rate",
    icon: "₱",
    description: "For decades, traditional remittance services have hidden their true costs in marked-up exchange rates. We believe you should get exactly what you pay for."
  },
  {
    bad: "Slow, opaque transfers",
    good: "Clear, upfront pricing",
    icon: "⏱",
    description: "Emergencies don't wait for business days. With modern infrastructure, your money moves as fast as a text message, directly to your family when they need it most."
  },
  {
    bad: "Financial life split across borders",
    good: "One app for USD and PHP",
    icon: "👁",
    description: "Money sent shouldn't just disappear into a black box. MANA gives you and your family shared visibility, letting you build towards common goals together."
  },
];

export default function Story() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-12 pb-24 md:pt-20 md:pb-36">
      <div className="max-w-4xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
            Our Story
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight font-serif mb-6">
            OFWs work hard.{" "}
            <span className="text-primary italic block md:inline">The system works against them.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Every year, Filipinos abroad send over $36 billion home. Banks and remittance services quietly take a cut — through inflated exchange rates, hidden fees, and days of waiting. 
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
            We experienced this firsthand. We watched our families wait in line, and we watched our hard-earned money drain away in fees. We decided it was time to build a financial home that actually respects the people who fund the nation. MANA is built to end the old way of doing things.
          </p>
        </div>

        <div className="space-y-8">
          {PROBLEMS.map((p) => (
            <div key={p.bad} className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] rounded-bl-full bg-accent pointer-events-none"
              />
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-3xl flex-shrink-0">
                  {p.icon}
                </div>
                
                <div className="flex-1">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* The Old Way */}
                    <div className="flex flex-col gap-3 p-5 rounded-xl bg-destructive/5 border border-destructive/10">
                      <p className="text-xs font-bold uppercase tracking-widest text-destructive/70 mb-1">The Old Way</p>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X size={12} className="text-destructive stroke-[3]" />
                        </div>
                        <p className="text-base text-muted-foreground line-through decoration-destructive/30">{p.bad}</p>
                      </div>
                    </div>
                    
                    {/* The MANA Way */}
                    <div className="flex flex-col gap-3 p-5 rounded-xl bg-success/10 border border-success/20">
                      <p className="text-xs font-bold uppercase tracking-widest text-success/70 mb-1">The MANA Way</p>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                          <Check size={12} className="text-white stroke-[3]" />
                        </div>
                        <p className="text-base font-bold text-foreground">{p.good}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {p.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/#waitlist" className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
            Join the waitlist today
          </Link>
        </div>
      </div>
    </div>
  );
}
