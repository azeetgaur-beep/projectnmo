import { Clock, Globe, Shield } from "lucide-react";
import { Link } from "react-router";
import { ManaCard } from "./components/ManaCard";

export default function Card() {
  return (
    <div className="bg-background min-h-[calc(100vh-80px)] text-foreground py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="w-full md:w-1/2 flex justify-center">
          <ManaCard />
        </div>

        <div className="w-full md:w-1/2 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
            The Mana Card
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            A virtual card you can add to Apple Pay or Google Pay and use wherever Visa is accepted.
          </p>

          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 border border-border">
                <Clock size={18} className="text-accent" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5">Ready in minutes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Virtual and ready right away — add it to Apple Pay or Google Pay and tap to pay.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 border border-border">
                <Globe size={18} className="text-accent" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5">Accepted wherever Visa is accepted</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Use your Mana Card at merchants and ATMs that accept Visa — at home or abroad.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 border border-border">
                <Shield size={18} className="text-accent" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5">Issued by a licensed card partner</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Mana card is issued by our card partner pursuant to a license. Spend directly from your USD balance.
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/#waitlist"
            className="inline-flex items-center justify-center gap-2 mt-12 bg-accent text-white font-bold px-8 py-3.5 rounded-full hover:bg-accent/90 transition-all shadow-sm text-sm"
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </div>
  );
}
