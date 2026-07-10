import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Check, Clock, ChevronRight, Share, Copy } from "lucide-react";
import { ManaCard } from "./components/ManaCard";

export default function Freelancers() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 md:pt-40 md:pb-40 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-[5.5rem] font-bold font-serif leading-[1.1] mb-6 text-foreground tracking-tight">
              Build your wealth in <br />
              <span className="text-accent italic font-medium pr-4">dollars</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md font-medium">
              Stop losing up to 5% every time you convert your paycheck to pesos. Get a real USD account, protect against inflation, and build real wealth.
            </p>
            
            {submitted ? (
              <div className="bg-success/10 border border-success/20 rounded-xl px-6 py-4 inline-flex items-center gap-3">
                <Check size={20} className="text-success" />
                <span className="text-sm font-bold text-success-foreground">You're on the list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 bg-white border border-border rounded-xl px-5 py-3.5 text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button type="submit" className="bg-accent text-white font-bold px-8 py-3.5 rounded-xl hover:bg-accent/90 transition-all shadow-sm shadow-accent/20">
                  Join the waitlist
                </button>
              </form>
            )}
            <p className="text-[11px] text-muted-foreground font-medium mt-4 flex items-center gap-1.5 opacity-80">
              <Clock size={12} /> Coming soon on the App Store & Google Play
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Phone Mockup 1 */}
            <div className="w-[320px] h-[650px] bg-card border-[8px] border-foreground rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden flex flex-col pt-12 pb-6 px-5 z-10 bg-[#FAFAFA]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-b-3xl"></div>
              
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground">Diego</h2>
                <div className="w-10 h-10 rounded-full bg-muted border border-border"></div>
              </div>

              <div className="bg-[#111A2C] rounded-3xl p-6 text-white mb-6 relative overflow-hidden shadow-lg shadow-blue-900/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-wider text-white/60">USD ACCOUNT</span>
                  <span className="text-[9px] font-bold tracking-wider text-white/40 bg-white/10 px-2 py-1 rounded-full">VERIFIED</span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-serif">$8,420</span>
                  <span className="text-lg text-white/60">.00</span>
                </div>
                <p className="text-[10px] text-white/40 mb-8">acct •• 6723 · routing •• 0114</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-accent hover:bg-accent/90 text-white text-[11px] font-bold py-2.5 rounded-xl transition-colors">
                    + Add money
                  </button>
                  <button className="flex-1 bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold py-2.5 rounded-xl transition-colors">
                    Convert
                  </button>
                </div>
              </div>

              <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-4">Recent Clients</h3>
              <div className="flex gap-4 mb-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center text-sm">AB</div>
                  <span className="text-[9px] font-semibold text-foreground">Acme Co</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-sm">NV</div>
                  <span className="text-[9px] font-semibold text-foreground">Nova</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 font-bold flex items-center justify-center text-sm">LP</div>
                  <span className="text-[9px] font-semibold text-foreground">Loop</span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-1 bg-white border border-border/50 rounded-2xl p-4 shadow-sm">
                  <p className="text-[9px] font-bold text-muted-foreground uppercase mb-1">Save · 3.5%</p>
                  <p className="text-sm font-bold font-serif">$1,200.00</p>
                </div>
                <div className="flex-1 bg-white border border-border/50 rounded-2xl p-4 shadow-sm">
                  <p className="text-[9px] font-bold text-muted-foreground uppercase mb-1">Card</p>
                  <p className="text-sm font-bold font-serif">$340.20</p>
                </div>
              </div>

              <div className="mt-auto flex justify-between items-center px-4 pt-4 border-t border-border/50 text-muted-foreground">
                <div className="flex flex-col items-center gap-1 text-accent"><div className="w-5 h-5 bg-accent/20 rounded"></div><span className="text-[9px] font-bold">Home</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-[9px] font-semibold">Card</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-[9px] font-semibold">Save</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-[9px] font-semibold">Send</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-[9px] font-semibold">More</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE ZIG-ZAGS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 space-y-32">
          
          {/* Feature 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-bold text-sm mb-6">1</div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight mb-6 text-foreground">
                Get paid like a local. <br/>Anywhere you are.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
                Get a real account and routing number in your name. Hand it to your client or platform like any US payee — payments land in dollars and stay in dollars.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <Check size={16} className="text-green-500" /> ACH, wire, and payroll-direct ready
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <Check size={16} className="text-green-500" /> No more forced peso conversion
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center relative">
              {/* Phone Mockup 2 */}
              <div className="w-[280px] h-[580px] bg-card border-[8px] border-foreground rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden flex flex-col pt-12 pb-6 px-4 bg-[#FAFAFA] z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-b-3xl"></div>
                <h3 className="text-center font-bold text-foreground mb-6">Account details</h3>
                
                <div className="bg-[#111A2C] rounded-2xl p-5 text-white mb-4 relative overflow-hidden shadow-lg shadow-blue-900/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-bold tracking-wider text-white/60">USD ACCOUNT</span>
                    <span className="text-[8px] font-bold tracking-wider text-white/40 bg-white/10 px-2 py-0.5 rounded-full">VERIFIED</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-serif">$8,420</span>
                    <span className="text-sm text-white/60">.00</span>
                  </div>
                  <p className="text-[9px] text-white/40">Diego R. Santos</p>
                </div>

                <div className="bg-white border border-border rounded-2xl p-4 shadow-sm mb-3">
                  <p className="text-[9px] font-bold text-muted-foreground uppercase mb-1">Account Number</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-bold font-mono text-foreground">8800 2246 6723</p>
                    <Copy size={14} className="text-accent" />
                  </div>
                </div>

                <div className="bg-white border border-border rounded-2xl p-4 shadow-sm mb-4">
                  <p className="text-[9px] font-bold text-muted-foreground uppercase mb-1">Routing Number</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-bold font-mono text-foreground">021 000 0114</p>
                    <Copy size={14} className="text-accent" />
                  </div>
                </div>
                <button className="w-full bg-accent text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-colors hover:bg-accent/90">
                  <Share size={14} /> Share details
                </button>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 flex justify-center relative">
              {/* Phone Mockup 3 */}
              <div className="w-[280px] h-[580px] bg-card border border-border rounded-[3rem] relative overflow-hidden flex flex-col pt-12 pb-6 px-4 bg-[#FAFAFA] z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground/5 rounded-b-3xl"></div>
                <h3 className="text-center font-bold text-foreground mb-6">Save</h3>
                
                <div className="bg-[#1D9A5B] rounded-2xl p-5 text-white mb-6 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-bold tracking-wider text-white/80">SAVE BALANCE</span>
                    <span className="text-[8px] font-bold tracking-wider text-white/80 bg-black/10 px-2 py-0.5 rounded-full">3.5% APY</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-serif">$1,200</span>
                    <span className="text-sm text-white/80">.00</span>
                  </div>
                  <p className="text-[9px] text-white/80 flex items-center gap-1"><ArrowRight size={10} className="-rotate-45"/> +$3.48 earned this week</p>
                </div>

                <div className="bg-white border border-border rounded-2xl p-4 shadow-sm mb-6 flex justify-between items-center">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wide">Auto-Save</p>
                  <div className="w-10 h-6 bg-accent rounded-full relative"><div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div></div>
                </div>

                <h4 className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-3 px-1">Earned</h4>
                <div className="flex gap-3">
                  <div className="flex-1 bg-white border border-border rounded-2xl p-4 shadow-sm">
                    <p className="text-[9px] font-bold text-muted-foreground uppercase mb-1">This Month</p>
                    <p className="text-sm font-bold font-serif">$13.90</p>
                  </div>
                  <div className="flex-1 bg-white border border-border rounded-2xl p-4 shadow-sm">
                    <p className="text-[9px] font-bold text-muted-foreground uppercase mb-1">Total</p>
                    <p className="text-sm font-bold font-serif">$104.20</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-bold text-sm mb-6">2</div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight mb-6 text-foreground">
                Idle income shouldn't sit still.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
                Fund your Savings wallet and immediately earn yield on your dollars — completely liquid with no lock-up. Pull it out the second a bill or a deadline lands.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <Check size={16} className="text-green-500" /> Earns daily, paid monthly
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <Check size={16} className="text-green-500" /> No minimum, withdraw anytime
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-bold text-sm mb-6">3</div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight mb-6 text-foreground">
                Cash out to pesos. Free, instantly.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
                When you need pesos, convert at the real mid-market rate with no spread and no fee, and it lands in any PH bank or e-wallet in minutes. Only convert what you need, when you need it.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <Check size={16} className="text-green-500" /> Mid-market rate, zero markup
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <Check size={16} className="text-green-500" /> Arrives in minutes via InstaPay
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center relative">
              {/* Phone Mockup 4 */}
              <div className="w-[280px] h-[580px] bg-card border-[8px] border-foreground rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden flex flex-col pt-12 pb-6 px-4 bg-[#FAFAFA] z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-b-3xl"></div>
                <h3 className="text-center font-bold text-foreground mb-6">Convert</h3>
                
                <div className="bg-[#111A2C] rounded-2xl p-5 text-white mb-4 shadow-lg shadow-blue-900/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-bold tracking-wider text-white/60">CONVERT USD &rarr; PHP</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-serif">$500</span>
                    <span className="text-sm text-white/60">.00</span>
                  </div>
                  <p className="text-[9px] text-white/60">You'll get ₱27,870 · 1 USD = ₱55.74</p>
                </div>

                <div className="bg-white border border-border rounded-2xl p-4 shadow-sm mb-3 flex justify-between items-center">
                  <p className="text-[9px] font-bold text-muted-foreground uppercase">Conversion Fee</p>
                  <p className="text-[11px] font-bold text-green-600">FREE</p>
                </div>

                <div className="bg-white border border-border rounded-2xl p-4 shadow-sm mb-auto flex justify-between items-center">
                  <p className="text-[9px] font-bold text-muted-foreground uppercase">Arrives</p>
                  <p className="text-[11px] font-bold text-foreground">In minutes · BPI •• 4521</p>
                </div>
                
                <button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3.5 rounded-xl shadow-sm text-sm transition-colors mt-6">
                  Convert ₱27,870
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANA CARD BANNER */}
      <section className="py-24 bg-[#0A111F] border-t border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">Meet the Mana Card</h2>
            <p className="text-white/70 leading-relaxed mb-8 max-w-sm">
              A virtual card you can add to Apple Pay or Google Pay and use wherever Visa is accepted.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-white font-bold px-6 py-2.5 rounded-xl shadow-sm transition-colors flex items-center gap-2 group text-sm w-max">
              See the card <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative h-[250px] flex items-center justify-center">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-90 opacity-90 hover:opacity-100 transition-opacity">
               <ManaCard />
             </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-[2.5rem] font-bold font-serif text-foreground mb-10">
            Be first to build wealth with Mana.
          </h2>
          
          <div className="max-w-md mx-auto">
            {submitted ? (
              <div className="bg-success/10 border border-success/20 rounded-xl px-6 py-4 inline-flex items-center gap-3">
                <Check size={20} className="text-success" />
                <span className="text-sm font-bold text-success-foreground">You're on the list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 bg-white border border-border rounded-xl px-5 py-3.5 text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button type="submit" className="bg-accent text-white font-bold px-8 py-3.5 rounded-xl hover:bg-accent/90 transition-all shadow-sm shadow-accent/20 whitespace-nowrap">
                  Join the waitlist
                </button>
              </form>
            )}
            <p className="text-[11px] text-muted-foreground font-medium mt-4 flex items-center justify-center gap-1.5 opacity-80">
              <Clock size={12} /> Coming soon on the App Store & Google Play
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
