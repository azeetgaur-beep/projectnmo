import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import pacoImage from "@/imports/paco.jpg";
import akshatImage from "@/imports/akshat.jpg";

const FOUNDERS = [
  {
    name: "Paco Litonjua",
    role: "Co-Founder",
    bio: "Stanford B.S., HBS MBA. Previously built financial products at Figure Technologies, yet struggled to get a basic credit card as an immigrant.",
    image: pacoImage,
  },
  {
    name: "Akshat Parwal",
    role: "Co-Founder",
    bio: "L.E.K. Consulting, HBS MBA. Helped build India's first digital bank (slice), but watched his financial identity reset to zero upon moving to the US.",
    image: akshatImage,
  },
];

export function FoundersSection() {
  return (
    <section aria-labelledby="founders-heading" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Who we are
            </p>
            <h2
              id="founders-heading"
              className="text-3xl md:text-5xl font-bold font-serif leading-tight mb-6"
            >
              <span className="text-foreground block mb-1">Built by immigrants.</span>
              <span className="text-accent block">Banking without borders.</span>
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
              As immigrants ourselves, we know what it's like to move across the world for a better opportunity — and to watch high fees, opaque terms, and a financial life split across two countries quietly chip away at what you've earned.
            </p>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
              Mana exists to change that. We're building the financial home we wish we'd had the day we landed.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent/80 transition-colors group"
            >
              Read our story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FOUNDERS.map((founder) => (
              <article
                key={founder.name}
                className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={founder.image}
                    alt={`${founder.name}, ${founder.role}`}
                    width={280}
                    height={350}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold font-serif text-lg text-foreground">{founder.name}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3">
                    {founder.role}
                  </p>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{founder.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
