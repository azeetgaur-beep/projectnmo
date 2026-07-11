import { Link } from "react-router";
import { ArrowRight, Check, Clock, ChevronRight, Share, Copy, Lock, Shield, Building } from "lucide-react";
import { ManaCard } from "./components/ManaCard";
import { AnchorLink } from "./components/AnchorLink";

export default function Freelancers() {

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 md:pt-40 md:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-24 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold font-serif leading-[1.1] mb-8 text-foreground tracking-tight">
              Your global career. <br />
              <span className="text-accent">Your US stack.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
              Stop losing 3-5% to Upwork and PayPal conversions. Get paid directly into a US account, earn yield on your balance, and send money to the Philippines with clear, upfront pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <AnchorLink to="/#waitlist" className="bg-accent text-white font-bold px-8 py-3.5 rounded-xl hover:bg-accent/90 transition-all shadow-sm flex-1 text-center inline-block">
                Join the waitlist
              </AnchorLink>
            </div>
            <div className="flex items-center gap-4 mt-5 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Lock size={12} className="text-accent" />
                <span>Bank-level encryption</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield size={12} className="text-accent" />
                <span>Member FDIC</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Phone Mockup 1 */}
            <div className="w-[320px] h-[650px] bg-white border-[8px] border-foreground rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col pt-12 pb-6 px-5 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-3xl"></div>
              
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground">Diego</h2>
                <div className="w-10 h-10 rounded-full bg-muted border border-border"></div>
              </div>

              <div className="bg-white border border-border rounded-2xl p-6 text-foreground mb-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-wider text-muted-foreground">USD ACCOUNT</span>
                  <span className="text-xs font-bold tracking-wider text-[#1D9A5B] bg-[#1D9A5B]/10 px-2 py-1 rounded-full border border-[#1D9A5B]/20">VERIFIED</span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-serif">$8,420</span>
                  <span className="text-lg text-muted-foreground">.00</span>
                </div>
                <p className="text-xs text-muted-foreground mb-8">acct •• 6723 · routing •• 0114</p>
                <div className="flex gap-2">
                  <AnchorLink to="/#waitlist" className="flex-1 bg-accent hover:bg-accent/90 text-white text-xs font-bold py-2.5 rounded-xl transition-colors shadow-sm text-center">
                    + Add money
                  </AnchorLink>
                  <AnchorLink to="/ofws#remittance" className="flex-1 bg-[#FAFAFA] border border-border hover:bg-white text-foreground text-xs font-bold py-2.5 rounded-xl transition-colors shadow-sm text-center">
                    Convert
                  </AnchorLink>
                </div>
              </div>

              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Recent Clients</h3>
              <div className="flex gap-4 mb-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center text-sm">AB</div>
                  <span className="text-xs font-semibold text-foreground">Acme Co</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-sm">NV</div>
                  <span className="text-xs font-semibold text-foreground">Nova</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 font-bold flex items-center justify-center text-sm">LP</div>
                  <span className="text-xs font-semibold text-foreground">Loop</span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-1 bg-white border border-border/50 rounded-2xl p-4 shadow-sm">
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Save · 3.5%</p>
                  <p className="text-sm font-bold font-serif">$1,200.00</p>
                </div>
                <div className="flex-1 bg-white border border-border/50 rounded-2xl p-4 shadow-sm">
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Card</p>
                  <p className="text-sm font-bold font-serif">$340.20</p>
                </div>
              </div>

              <div className="mt-auto flex justify-between items-center px-4 pt-4 border-t border-border/50 text-muted-foreground">
                <div className="flex flex-col items-center gap-1 text-accent"><div className="w-5 h-5 bg-accent/20 rounded"></div><span className="text-xs font-bold">Home</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-xs font-semibold">Card</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-xs font-semibold">Save</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-xs font-semibold">Send</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-xs font-semibold">More</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL ASYMMETRICAL SCROLL */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 relative flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column (Sticky) */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 lg:h-[calc(100vh-12rem)] flex flex-col pt-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
              The Full Stack
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold font-serif leading-[1.1] text-foreground mb-8 tracking-tight">
              Your financial life, <br/><span className="text-accent">untangled.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-sm">
              We stripped out the intermediaries, the currency conversion markups, and the wait times so you can build wealth seamlessly without the standard cross-border tax.
            </p>
          </div>

          {/* Right Column (Scrolling features) */}
          <div className="lg:w-7/12 flex flex-col gap-16">
            
            {/* Feature 1 */}
            <div id="us-account" className="bg-[#FAFAFA] border border-border/60 rounded-[2rem] p-10 lg:p-12 overflow-hidden relative flex flex-col scroll-mt-28">
              <div className="max-w-md relative z-20">
                <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-bold text-sm mb-6">1</div>
                <h3 className="text-3xl font-bold font-serif leading-tight mb-4 text-foreground">
                  Your own US routing number.
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-[15px]">
                  Give clients your personal US account details. Receive ACH and wire transfers with $0 inbound fees, completely bypassing Upwork and PayPal conversion traps.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <Check size={16} className="text-green-500" /> ACH, wire, and payroll-direct ready
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <Check size={16} className="text-green-500" /> $0 inbound transfer fees
                  </li>
                </ul>

                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-6 border-l-2 border-border pl-3">
                  <div className="flex items-center gap-1.5"><Building size={14} className="text-accent" /> Standard US Bank Format</div>
                </div>
                
                <div className="bg-white border border-border rounded-xl p-4 shadow-sm flex flex-col gap-1">
                  <span className="text-xs font-bold text-foreground">Verified accounts</span>
                  <span className="text-[13px] text-muted-foreground leading-relaxed">These are real US routing and account numbers under your own name. Connect them to Upwork, Deel, PayPal, or give them directly to clients for seamless invoicing.</span>
                </div>
              </div>
              
              <div className="flex justify-center mt-12 relative z-10 transition-transform duration-500 ">
                <div className="w-[300px] h-[580px] bg-white border-[8px] border-foreground rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col pt-12 pb-6 px-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-b-3xl"></div>
                  <h3 className="text-center font-bold text-foreground mb-6">Account details</h3>
                  
                  <div className="bg-white border border-border rounded-2xl p-5 text-foreground mb-4 shadow-sm relative overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold tracking-wider text-muted-foreground">USD ACCOUNT</span>
                      <span className="text-[8px] font-bold tracking-wider text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">VERIFIED</span>
                    </div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-3xl font-serif">$8,420</span>
                      <span className="text-sm text-muted-foreground">.00</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Diego R. Santos</p>
                  </div>

                  <div className="bg-[#FAFAFA] border border-border rounded-2xl p-4 shadow-sm mb-3">
                    <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Account Number</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-bold font-mono text-foreground">8800 2246 6723</p>
                      <Copy size={14} className="text-accent" />
                    </div>
                  </div>

                  <div className="bg-[#FAFAFA] border border-border rounded-2xl p-4 shadow-sm mb-4">
                    <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Routing Number</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-bold font-mono text-foreground">021 000 0114</p>
                      <Copy size={14} className="text-accent" />
                    </div>
                  </div>
                  <AnchorLink to="/#waitlist" className="w-full bg-accent text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm">
                    <Share size={14} aria-hidden="true" /> Share details
                  </AnchorLink>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div id="save" className="bg-[#FAFAFA] border border-border/60 rounded-[2rem] p-10 lg:p-12 shadow-sm flex flex-col justify-center min-h-[600px] mb-8 relative overflow-hidden scroll-mt-28">
              <div className="max-w-md relative z-20">
                <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-bold text-sm mb-6">2</div>
                <h3 className="text-3xl font-bold font-serif leading-tight mb-4 text-foreground">
                  Earn 3.5% APY on your idle dollars.
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-[15px]">
                  Dollars you keep in Save earn 3.5% APY while remaining fully liquid. Save is a yield feature on your USD wallet — not a deposit account, and not FDIC-insured. The rate may change and is not guaranteed.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <Check size={16} className="text-green-500" aria-hidden="true" /> Fully liquid — withdraw anytime
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <Check size={16} className="text-green-500" aria-hidden="true" /> No lock-up and no minimum
                  </li>
                </ul>
                
                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-6 border-l-2 border-border pl-3">
                  <div className="flex items-center gap-1.5"><Lock size={14} className="text-accent" /> Bank-level security</div>
                </div>
                
                <div className="bg-white border border-border rounded-xl p-4 shadow-sm flex flex-col gap-1">
                  <span className="text-xs font-bold text-foreground">How yield works</span>
                  <span className="text-[13px] text-muted-foreground leading-relaxed">Banking services are provided by SSB, Member FDIC. Funds deposited at SSB are eligible for FDIC insurance up to $250,000 per depositor, per insured bank.</span>
                </div>
              </div>
              
              <div className="flex justify-center mt-12 relative z-10 transition-transform duration-500 ">
                <div className="w-[300px] h-[580px] bg-white border-[8px] border-foreground rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col pt-12 pb-6 px-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-3xl"></div>
                  <h3 className="text-center font-bold text-foreground mb-6">Save</h3>
                  
                  <div className="bg-white border border-border rounded-2xl p-5 text-foreground mb-6 shadow-sm relative overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold tracking-wider text-muted-foreground">SAVE BALANCE</span>
                      <span className="text-[8px] font-bold tracking-wider text-[#1D9A5B] border border-[#1D9A5B]/20 bg-[#1D9A5B]/10 px-2 py-0.5 rounded-full">3.5% APY</span>
                    </div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl font-serif">$1,200</span>
                      <span className="text-sm text-muted-foreground">.00</span>
                    </div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1"><ArrowRight size={10} className="-rotate-45 text-[#1D9A5B]"/> <span className="text-[#1D9A5B]">+$3.48</span> earned this week</p>
                  </div>

                  <div className="bg-[#FAFAFA] border border-border rounded-2xl p-4 shadow-sm mb-6 flex justify-between items-center">
                    <p className="text-xs font-bold text-foreground uppercase tracking-wide">Auto-Save</p>
                    <div className="w-10 h-6 bg-accent rounded-full relative"><div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div></div>
                  </div>

                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 px-1">Earned</h4>
                  <div className="flex gap-3">
                    <div className="flex-1 bg-[#FAFAFA] border border-border rounded-2xl p-4 shadow-sm">
                      <p className="text-xs font-bold text-muted-foreground uppercase mb-1">This Month</p>
                      <p className="text-sm font-bold font-serif">$13.90</p>
                    </div>
                    <div className="flex-1 bg-[#FAFAFA] border border-border rounded-2xl p-4 shadow-sm">
                      <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Total</p>
                      <p className="text-sm font-bold font-serif">$104.20</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div id="send" className="bg-[#FAFAFA] border border-border/60 rounded-[2rem] p-10 lg:p-12 shadow-sm flex flex-col justify-center min-h-[600px] relative overflow-hidden scroll-mt-28">
              <div className="max-w-md relative z-20">
                <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-bold text-sm mb-6">3</div>
                <h3 className="text-3xl font-bold font-serif leading-tight mb-4 text-foreground">
                  Send to the Philippines with transparent, upfront pricing.
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-[15px]">
                  Convert only what you need. Send money home with clear, upfront pricing and no opaque terms.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <Check size={16} className="text-green-500" /> Transparent pricing
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <Check size={16} className="text-green-500" /> Reliable transfers to major banks
                  </li>
                </ul>

                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-6 border-l-2 border-border pl-3">
                  <div className="flex items-center gap-1.5"><Shield size={14} className="text-accent" /> Licensed Partners</div>
                  <div className="flex items-center gap-1.5"><Clock size={14} className="text-accent" /> Fast transfers</div>
                </div>
                
                <div className="bg-white border border-border rounded-xl p-4 shadow-sm flex flex-col gap-1">
                  <span className="text-xs font-bold text-foreground">The Mana Promise</span>
                  <span className="text-[13px] text-muted-foreground leading-relaxed">Send money home with clear, upfront pricing. No opaque terms or hidden fees.</span>
                </div>
              </div>
              
              <div className="flex justify-center mt-12 relative z-10 transition-transform duration-500 ">
                <div className="w-[300px] h-[580px] bg-white border-[8px] border-foreground rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col pt-12 pb-6 px-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-3xl"></div>
                  <h3 className="text-center font-bold text-foreground mb-6">Convert</h3>
                  
                  <div className="bg-white border border-border rounded-2xl p-5 text-foreground mb-4 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold tracking-wider text-muted-foreground">CONVERT USD &rarr; PHP</span>
                    </div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl font-serif">$500</span>
                      <span className="text-sm text-muted-foreground">.00</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">You'll get ₱27,870 · <span className="text-accent">1 USD = ₱55.74</span></p>
                  </div>

                  <div className="bg-[#FAFAFA] border border-border rounded-2xl p-4 shadow-sm mb-3 flex justify-between items-center">
                    <p className="text-xs font-bold text-muted-foreground uppercase">Conversion Fee</p>
                    <p className="text-xs font-bold text-foreground">At mid-market rate</p>
                  </div>

                  <div className="bg-[#FAFAFA] border border-border rounded-2xl p-4 shadow-sm mb-auto flex justify-between items-center">
                    <p className="text-xs font-bold text-muted-foreground uppercase">Arrives</p>
                    <p className="text-xs font-bold text-foreground">In minutes · BPI •• 4521</p>
                  </div>
                  
                  <AnchorLink to="/ofws#remittance" className="w-full bg-accent text-white font-bold py-3.5 rounded-xl shadow-sm text-sm text-center">
                    Convert ₱27,870
                  </AnchorLink>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MANA CARD BANNER */}
      <section className="py-24 bg-[#0A111F] border-t border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col justify-center">
            <h3 className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">The Mana Card</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white leading-[1.1] mb-6">
              Spend globally with your Mana Visa card.
            </h2>
            <p className="text-white/70 leading-relaxed md:text-lg mb-8 max-w-md">
              A virtual card you can add to Apple Pay or Google Pay and use wherever Visa is accepted.
            </p>
            <Link to="/card" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-6 py-2.5 rounded-xl shadow-sm transition-colors text-sm w-max">
              See the card <ArrowRight size={14} aria-hidden="true" />
            </Link>
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
            Join the waitlist for your US dollar account.
          </h2>

          <div className="max-w-md mx-auto">
            <AnchorLink to="/#waitlist" className="block w-full bg-accent text-white font-bold px-8 py-3.5 rounded-xl hover:bg-accent/90 transition-all shadow-sm text-center">
              Join the waitlist
            </AnchorLink>
            <div className="flex flex-col items-center mt-6">
              <p className="text-[12px] font-medium text-muted-foreground mb-4">
                Mana sends at the real mid-market exchange rate — what you see is what your family receives.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-foreground">
                <div className="flex items-center gap-1.5 bg-[#FAFAFA] border border-border px-3 py-1.5 rounded-full">
                  <span>Built for Filipinos abroad</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#FAFAFA] border border-border px-3 py-1.5 rounded-full">
                  <Shield size={12} className="text-accent" />
                  <span>Member FDIC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
