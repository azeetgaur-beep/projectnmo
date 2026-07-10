import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Check, Clock, Building, Smartphone, FileText } from "lucide-react";
import { ManaCard } from "./components/ManaCard";

export default function OFWs() {
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
              The money app for the <br />
              <span className="text-accent">global Filipino</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md font-medium">
              One app for the way you support family — free remittances and earn 3.5% on your dollars.
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
                <h2 className="text-2xl font-bold font-serif text-foreground">Maria</h2>
                <div className="w-10 h-10 rounded-full bg-muted border border-border"></div>
              </div>

              <div className="bg-[#111A2C] rounded-3xl p-6 text-white mb-6 relative overflow-hidden shadow-lg shadow-blue-900/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-wider text-white/60">USD WALLET</span>
                  <span className="text-[9px] font-bold tracking-wider text-white/40 bg-white/10 px-2 py-1 rounded-full">VERIFIED</span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-serif">$1,247</span>
                  <span className="text-lg text-white/60">.50</span>
                </div>
                <p className="text-[10px] text-white/40 mb-8">≈ ₱69,520 · 1 USD = ₱55.74</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-accent hover:bg-accent/90 text-white text-[11px] font-bold py-2.5 rounded-xl transition-colors">
                    + Add money
                  </button>
                  <button className="flex-1 bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold py-2.5 rounded-xl transition-colors">
                    Send home
                  </button>
                </div>
              </div>

              <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-4">People you send to</h3>
              <div className="flex gap-4 mb-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center text-sm">LM</div>
                  <span className="text-[9px] font-semibold text-foreground">Mom</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-sm">JS</div>
                  <span className="text-[9px] font-semibold text-foreground">Kuya Jay</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 font-bold flex items-center justify-center text-sm">TR</div>
                  <span className="text-[9px] font-semibold text-foreground">Tita Rose</span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-1 bg-white border border-border/50 rounded-2xl p-4 shadow-sm">
                  <p className="text-[9px] font-bold text-muted-foreground uppercase mb-1">Save · 3.5%</p>
                  <p className="text-sm font-bold font-serif">$520.00</p>
                </div>
                <div className="flex-1 bg-white border border-border/50 rounded-2xl p-4 shadow-sm">
                  <p className="text-[9px] font-bold text-muted-foreground uppercase mb-1">Card</p>
                  <p className="text-sm font-bold font-serif">$84.20</p>
                </div>
              </div>

              <div className="mt-auto flex justify-between items-center px-4 pt-4 border-t border-border/50 text-muted-foreground">
                <div className="flex flex-col items-center gap-1 text-accent"><div className="w-5 h-5 bg-accent/20 rounded"></div><span className="text-[9px] font-bold">Home</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-[9px] font-semibold">Send</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-[9px] font-semibold">Card</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-[9px] font-semibold">Save</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-[9px] font-semibold">More</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REMITTANCE SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight mb-6 text-foreground">
              Free & instant remittances.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl text-lg">
              Most apps quote a low fee, then hide a markup in the exchange rate. Mana sends at the real mid-market rate with no spread — what you see is what your family gets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 items-stretch">
            {/* Typical App */}
            <div className="bg-[#111A2C] rounded-3xl p-8 text-white flex flex-col">
              <h3 className="text-lg font-bold mb-8">Typical remittance app</h3>
              <div className="space-y-6 flex-1 text-sm font-medium">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white/60">You send</span>
                  <span>$200.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white/60">Advertised fee</span>
                  <span>$1.99</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4 text-[#FF5A5F]">
                  <span>Hidden FX markup</span>
                  <span>~$5.40</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white/60">Mom receives</span>
                  <span className="font-bold text-base font-serif">₱10,847</span>
                </div>
                <div className="flex justify-between items-center text-[#FF5A5F]">
                  <span>Arrives in</span>
                  <span>1-3 days</span>
                </div>
              </div>
            </div>

            {/* Mana App */}
            <div className="bg-[#FAF9F5] border border-[#F2EFE8] rounded-3xl p-8 flex flex-col shadow-sm">
              <h3 className="text-lg font-bold mb-8 text-foreground">Mana</h3>
              <div className="space-y-6 flex-1 text-sm font-medium">
                <div className="flex justify-between items-center border-b border-border/50 pb-4">
                  <span className="text-muted-foreground">You send</span>
                  <span className="text-foreground">$200.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/50 pb-4 text-[#1D9A5B]">
                  <span>Send fee</span>
                  <span className="font-bold">FREE</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/50 pb-4 text-[#1D9A5B]">
                  <span>FX markup</span>
                  <span>None · mid-market</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/50 pb-4 text-[#1D9A5B]">
                  <span>Mom receives</span>
                  <span className="font-bold text-base font-serif">₱11,148</span>
                </div>
                <div className="flex justify-between items-center text-[#1D9A5B]">
                  <span>Arrives in</span>
                  <span>Minutes · instant</span>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center relative">
              <div className="w-[300px] h-full min-h-[500px] bg-card border border-border rounded-[3rem] relative overflow-hidden flex flex-col pt-12 pb-6 px-5 bg-[#FAFAFA]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-b-3xl"></div>
                
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#E8F5EE] text-[#1D9A5B] flex items-center justify-center mb-6">
                    <Check size={28} strokeWidth={3} />
                  </div>
                  <h3 className="text-3xl font-bold font-serif text-foreground mb-2">Sent to Mom</h3>
                  <p className="text-muted-foreground text-xs mb-8">Arrived in 38 seconds</p>
                  
                  <h1 className="text-5xl font-bold font-serif text-foreground mb-2 tracking-tight">₱11,148</h1>
                  <p className="text-muted-foreground text-[10px] mb-10">You paid $200.00 - no fee</p>

                  <div className="w-full bg-white border border-border rounded-2xl p-4 flex items-center gap-4 text-left shadow-sm mb-8">
                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center text-xs">LM</div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Lourdes Manalo</p>
                      <p className="text-[10px] text-muted-foreground">BPI<br/>•••• 4521<br/>Cebu City</p>
                    </div>
                    <div className="ml-auto text-[9px] font-bold text-[#1D9A5B] bg-[#E8F5EE] px-2 py-1 rounded-full">Received</div>
                  </div>

                  <div className="w-full flex gap-3">
                    <button className="flex-1 bg-white border border-border hover:bg-gray-50 text-foreground text-xs font-bold py-3.5 rounded-xl transition-colors shadow-sm">
                      Share receipt
                    </button>
                    <button className="flex-1 bg-accent hover:bg-accent/90 text-white text-xs font-bold py-3.5 rounded-xl transition-colors shadow-sm">
                      Send again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold font-serif text-foreground mb-6">Payout coverage nationwide</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Building size={20} />
              </div>
              <h4 className="font-bold text-foreground mb-2">Any PH bank</h4>
              <p className="text-sm text-muted-foreground">BPI, BDO, Metrobank, UnionBank — direct to their account.</p>
            </div>
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-accent flex items-center justify-center mb-4">
                <Smartphone size={20} />
              </div>
              <h4 className="font-bold text-foreground mb-2">GCash & Maya</h4>
              <p className="text-sm text-muted-foreground">Straight to the e-wallets your family already uses every day.</p>
            </div>
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
                <FileText size={20} />
              </div>
              <h4 className="font-bold text-foreground mb-2">Pay bills directly</h4>
              <p className="text-sm text-muted-foreground mb-3">Meralco, Globe, PLDT, SSS & more — no cash run to the payment center.</p>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-accent bg-accent/10 px-2 py-1 rounded-md">
                <Clock size={10} /> Coming soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SAVE SECTION */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            {/* Phone Mockup 4 */}
            <div className="w-[320px] h-[650px] bg-card border border-border rounded-[3rem] relative overflow-hidden flex flex-col pt-12 pb-6 px-5 bg-[#FAFAFA]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-b-3xl"></div>
              <h3 className="text-xl font-bold text-foreground mb-6">Save</h3>
              
              <div className="bg-[#1D9A5B] rounded-2xl p-6 text-white mb-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold tracking-wider text-white/80">SAVE BALANCE</span>
                  <span className="text-[9px] font-bold tracking-wider text-white/80 bg-black/10 px-2 py-1 rounded-full">3.5% APY</span>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-serif">$320</span>
                  <span className="text-lg text-white/80">.00</span>
                </div>
                <p className="text-[10px] text-white/80 flex items-center gap-1"><ArrowRight size={12} className="-rotate-45"/> +$0.93 earned this week</p>
              </div>

              <div className="bg-white border border-border rounded-2xl p-5 shadow-sm mb-6 flex justify-between items-center">
                <p className="text-sm font-bold text-foreground uppercase tracking-wide">Auto-Save</p>
                <div className="w-12 h-7 bg-[#1D9A5B] rounded-full relative"><div className="w-6 h-6 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div></div>
              </div>

              <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3 px-1">Earned</h4>
              <div className="flex gap-3">
                <div className="flex-1 bg-white border border-border rounded-2xl p-5 shadow-sm">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase mb-1">This Month</p>
                  <p className="text-xl font-bold font-serif">$3.71</p>
                </div>
                <div className="flex-1 bg-white border border-border rounded-2xl p-5 shadow-sm">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Total</p>
                  <p className="text-xl font-bold font-serif">$28.40</p>
                </div>
              </div>
              
              <div className="mt-auto flex justify-between items-center px-4 pt-4 border-t border-border/50 text-muted-foreground">
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-[9px] font-semibold">Home</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-[9px] font-semibold">Send</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-[9px] font-semibold">Card</span></div>
                <div className="flex flex-col items-center gap-1 text-accent"><div className="w-5 h-5 bg-accent/20 rounded"></div><span className="text-[9px] font-bold">Save</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-[9px] font-semibold">More</span></div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight mb-8 text-foreground">
              Your dollars earning. <span className="text-accent">Always.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Check size={20} className="text-[#1D9A5B]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground mb-1">Yield immediately</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Fund your savings wallet and collect yield immediately. No max caps.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Check size={20} className="text-[#1D9A5B]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground mb-1">As good as cash</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">No lock-up and no minimum. Send or spend the moment your family needs you.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Check size={20} className="text-[#1D9A5B]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground mb-1">Plain-language terms</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">We explain exactly how the yield works and where it comes from. No fine-print surprises.</p>
                </div>
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
