import { Clock, Globe, Check, Users } from "lucide-react";
import { ManaCard } from "./components/ManaCard";

export default function Card() {
  return (
    <div className="bg-background min-h-[calc(100vh-80px)] text-foreground py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left Side: 3D Animated Card */}
        <div className="w-full md:w-1/2 flex justify-center">
          <ManaCard />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
            The Mana Card
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            A virtual card you can add to Apple Pay or Google Pay and use wherever Visa is accepted.
          </p>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 border border-border">
                <Clock size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5">Ready in minutes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Virtual and ready right away — add it to Apple Pay or Google Pay and tap to pay.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 border border-border">
                <Globe size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5">Accepted wherever Visa is accepted</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Use your Mana Card at the merchants and ATMs that accept Visa.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 border border-border">
                <Check size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5">Cashback on every purchase</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Earn cashback on eligible purchases. No monthly membership fee — other fees may apply.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 border border-border">
                <Users size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5">Family cards</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Add a card for someone you support. You set the limit and see every charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
