import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Check, Clock, Building, Smartphone, FileText, Lock, Shield } from "lucide-react";
import { ManaCard } from "./components/ManaCard";

export default function OFWs() {

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 md:pt-40 md:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-24 items-center">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold font-serif leading-[1.1] mb-8 text-foreground tracking-tight">
              Direct transfers <br />
              <span className="text-accent">at the real exchange rate.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
              Send USD to the Philippines at the true mid-market rate with a transparent flat fee. Keep your savings in US dollars until the exact moment you need to transfer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <button className="bg-accent text-white font-bold px-8 py-3.5 rounded-xl hover:bg-accent/90 transition-all shadow-sm flex-1 text-center">
                Open your account
              </button>
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
            {/* Phone Mockup 1 (Restored & Cleaned) */}
            <div className="w-[320px] h-[650px] bg-white border-[8px] border-foreground rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col pt-12 pb-6 px-5 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-3xl"></div>
              
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground">Maria</h2>
                <div className="w-10 h-10 rounded-full bg-muted border border-border"></div>
              </div>

              <div className="bg-white border border-border rounded-2xl p-6 text-foreground mb-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-wider text-muted-foreground">USD WALLET</span>
                  <span className="text-xs font-bold tracking-wider text-[#1D9A5B] bg-[#1D9A5B]/10 px-2 py-1 rounded-full border border-[#1D9A5B]/20">VERIFIED</span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-serif">$1,247</span>
                  <span className="text-lg text-muted-foreground">.50</span>
                </div>
                <p className="text-xs text-muted-foreground mb-8">≈ ₱69,520 · 1 USD = ₱55.74</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-accent hover:bg-accent/90 text-white text-xs font-bold py-2.5 rounded-xl shadow-sm transition-colors">
                    + Add money
                  </button>
                  <button className="flex-1 bg-[#FAFAFA] border border-border hover:bg-white text-foreground text-xs font-bold py-2.5 rounded-xl shadow-sm transition-colors">
                    Send home
                  </button>
                </div>
              </div>

              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">People you send to</h3>
              <div className="flex gap-4 mb-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center text-sm">LM</div>
                  <span className="text-xs font-semibold text-foreground">Mom</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-sm">JS</div>
                  <span className="text-xs font-semibold text-foreground">Kuya Jay</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 font-bold flex items-center justify-center text-sm">TR</div>
                  <span className="text-xs font-semibold text-foreground">Tita Rose</span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-1 bg-white border border-border rounded-2xl p-4 shadow-sm">
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Save · 3.5%</p>
                  <p className="text-sm font-bold font-serif">$520.00</p>
                </div>
                <div className="flex-1 bg-white border border-border rounded-2xl p-4 shadow-sm">
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Card</p>
                  <p className="text-sm font-bold font-serif">$84.20</p>
                </div>
              </div>

              <div className="mt-auto flex justify-between items-center px-4 pt-4 border-t border-border/50 text-muted-foreground">
                <div className="flex flex-col items-center gap-1 text-accent"><div className="w-5 h-5 bg-accent/20 rounded"></div><span className="text-xs font-bold">Home</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-xs font-semibold">Send</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-xs font-semibold">Card</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-xs font-semibold">Save</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-xs font-semibold">More</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRUTALIST SPLIT-SCREEN REMITTANCE */}
      <section className="bg-background pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-border">
            {/* The Trap (Left) */}
            <div className="flex-1 p-10 md:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-border/60 flex flex-col justify-center">
              <h3 className="text-muted-foreground text-xs font-bold uppercase tracking-[0.2em] mb-4">The Trap</h3>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-12">Typical apps quote a low fee, then hide their cut in the exchange rate.</h2>
              
              <div className="space-y-6 text-sm font-medium">
                <div className="flex justify-between items-center border-b border-border/40 pb-4">
                  <span className="text-muted-foreground">You send</span>
                  <span className="text-foreground">$200.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/40 pb-4 text-red-600">
                  <span>Hidden FX markup (estimated)</span>
                  <span>~$5.40</span>
                </div>
                <div className="flex justify-between items-center pb-4 opacity-70">
                  <span className="text-muted-foreground">Mom receives</span>
                  <span className="text-foreground">₱10,847</span>
                </div>
              </div>
            </div>

            {/* The Truth (Right) */}
            <div className="flex-1 p-10 md:p-16 lg:p-20 bg-[#FAFAFA] flex flex-col justify-center relative overflow-hidden">
              <h3 className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 relative z-10">The Truth</h3>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-12 relative z-10">Mana sends at the exact mid-market rate. What you see is what lands.</h2>
              
              <div className="space-y-6 text-sm font-medium relative z-10">
                <div className="flex justify-between items-center border-b border-border/40 pb-4">
                  <span className="text-muted-foreground">You send</span>
                  <span className="text-foreground">$200.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/40 pb-4 text-[#1D9A5B]">
                  <span>Hidden FX markup</span>
                  <span className="font-bold">ZERO</span>
                </div>
                <div className="flex flex-col mt-8">
                  <span className="text-muted-foreground mb-2">Mom receives exactly</span>
                  <span className="text-[4rem] md:text-[5.5rem] font-bold font-serif leading-none tracking-tight text-[#1D9A5B]">₱11,148</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">

          <h3 className="text-lg font-bold font-serif text-foreground mb-6">Real payouts. Real speed.</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-border shadow-sm rounded-2xl p-5 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-foreground">BPI</span>
                <span className="text-xs font-bold text-[#1D9A5B] bg-[#1D9A5B]/10 px-2 py-1 rounded-full">Delivered</span>
              </div>
              <p className="text-[13px] font-medium text-muted-foreground">Arrived in 14 seconds</p>
            </div>
            <div className="bg-white border border-border shadow-sm rounded-2xl p-5 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-blue-500">GCash</span>
                <span className="text-xs font-bold text-[#1D9A5B] bg-[#1D9A5B]/10 px-2 py-1 rounded-full">Delivered</span>
              </div>
              <p className="text-[13px] font-medium text-muted-foreground">Arrived in 3 seconds</p>
            </div>
            <div className="bg-white border border-border shadow-sm rounded-2xl p-5 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-emerald-500">Maya</span>
                <span className="text-xs font-bold text-[#1D9A5B] bg-[#1D9A5B]/10 px-2 py-1 rounded-full">Delivered</span>
              </div>
              <p className="text-[13px] font-medium text-muted-foreground">Arrived in 8 seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* SAVE SECTION */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            {/* Phone Mockup (Restored & Cleaned) */}
            <div className="w-[320px] h-[650px] bg-white border-[8px] border-foreground rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col pt-12 pb-6 px-5">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-3xl"></div>
              <h3 className="text-xl font-bold text-foreground mb-6">Save</h3>
              
              <div className="bg-white border border-border rounded-2xl p-6 text-foreground mb-6 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold tracking-wider text-muted-foreground">SAVE BALANCE</span>
                  <span className="text-xs font-bold tracking-wider text-[#1D9A5B] bg-[#1D9A5B]/10 border border-[#1D9A5B]/20 px-2 py-1 rounded-full">3.5% APY</span>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-serif">$320</span>
                  <span className="text-lg text-muted-foreground">.00</span>
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1"><ArrowRight size={12} className="-rotate-45 text-[#1D9A5B]"/> <span className="text-[#1D9A5B]">+$0.93</span> earned this week</p>
              </div>

              <div className="bg-[#FAFAFA] border border-border rounded-2xl p-5 shadow-sm mb-6 flex justify-between items-center">
                <p className="text-sm font-bold text-foreground uppercase tracking-wide">Auto-Save</p>
                <div className="w-12 h-7 bg-accent rounded-full relative"><div className="w-6 h-6 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div></div>
              </div>

              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 px-1">Earned</h4>
              <div className="flex gap-3">
                <div className="flex-1 bg-white border border-border rounded-2xl p-5 shadow-sm">
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-1">This Month</p>
                  <p className="text-xl font-bold font-serif">$3.71</p>
                </div>
                <div className="flex-1 bg-white border border-border rounded-2xl p-5 shadow-sm">
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Total</p>
                  <p className="text-xl font-bold font-serif">$28.40</p>
                </div>
              </div>
              
              <div className="mt-auto flex justify-between items-center px-4 pt-4 border-t border-border/50 text-muted-foreground">
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-xs font-semibold">Home</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-xs font-semibold">Send</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-xs font-semibold">Card</span></div>
                <div className="flex flex-col items-center gap-1 text-accent"><div className="w-5 h-5 bg-accent/20 rounded"></div><span className="text-xs font-bold">Save</span></div>
                <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-border rounded"></div><span className="text-xs font-semibold">More</span></div>
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

            <div className="mt-12 bg-white border border-border rounded-xl p-5 shadow-sm">
              <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2"><Shield size={16} className="text-accent" /> Security & Compliance</h4>
              <p className="text-[13px] text-muted-foreground leading-relaxed">Funds are held in sweep networks of FDIC-insured partner banks. We never invest your money in crypto or volatile assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MANA CARD BANNER */}
      <section className="py-24 bg-[#0A111F] border-t border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">Give your family direct purchasing power</h2>
            <p className="text-white/70 leading-relaxed mb-8 max-w-sm">
              Issue virtual Mana Visa® cards to family members in the Philippines. Set exact limits for groceries or tuition, and track every peso in real-time from your app.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-white font-bold px-6 py-2.5 rounded-xl shadow-sm transition-colors flex items-center gap-2 group text-sm w-max">
              See the card <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative h-[250px] flex items-center justify-center">
             <div className="scale-90">
               <ManaCard />
             </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-[2.5rem] font-bold font-serif text-foreground mb-10">
            Control your cross-border transfers. Open your US account today.
          </h2>
          
          <div className="relative max-w-sm mx-auto">
            <button className="w-full bg-accent text-white font-bold px-8 py-3.5 rounded-xl hover:bg-accent/90 transition-all shadow-sm">
              Open your account
            </button>
            <div className="flex flex-col items-center mt-6">
              <p className="text-[12px] font-medium text-muted-foreground mb-4">
                Most apps quote a low fee, then hide a markup in the exchange rate. Mana sends at the real mid-market rate.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-foreground">
                <div className="flex items-center gap-1.5 bg-[#FAFAFA] border border-border px-3 py-1.5 rounded-full">
                  <span>No SSN required. Open with PH Passport.</span>
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
