import { ArrowRight } from "lucide-react";
import { AnchorLink } from "./AnchorLink";

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-heading"
      className="py-24 md:py-32 bg-primary text-primary-foreground scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-4">
          Launching soon
        </p>
        <h2
          id="waitlist-heading"
          className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight"
        >
          Be first to open your Mana account.
        </h2>
        <p className="text-[15px] md:text-lg text-white/75 leading-relaxed mb-10 max-w-xl mx-auto">
          Join the waitlist and we'll let you know the moment Mana is available on the App Store and Google Play.
        </p>
        <AnchorLink
          to="mailto:hello@mymana.xyz?subject=Mana%20Waitlist"
          className="inline-flex items-center justify-center gap-2 bg-accent text-white font-bold px-8 py-4 rounded-full hover:bg-accent/90 transition-all shadow-lg text-sm md:text-base"
        >
          Join the waitlist <ArrowRight size={16} aria-hidden="true" />
        </AnchorLink>
        <p className="text-[11px] text-white/50 mt-6 font-medium">
          No spam. Just a note when your account is ready.
        </p>
      </div>
    </section>
  );
}
