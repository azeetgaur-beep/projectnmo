import { Link } from "react-router";
import { Shield, Lock, CreditCard } from "lucide-react";
import manaLogo from "@/imports/mymanafooter_logo.png";
import { AnchorLink } from "./AnchorLink";

export function Footer() {
  return (
    <footer className="bg-background py-16 md:py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12 mb-20">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-12 lg:col-span-4 flex flex-col gap-6 lg:pr-12">
            <Link to="/" className="flex items-center group -ml-1">
              <img
                src={manaLogo}
                alt=""
                width={32}
                height={32}
                className="h-8 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
              />
              <span className="ml-2.5 font-serif font-bold text-2xl tracking-tight text-foreground group-hover:text-accent transition-colors mt-0.5">Mana</span>
            </Link>
            <p className="text-[13px] text-muted-foreground leading-relaxed max-w-[280px]">
              Mana is a financial technology company and not a bank. Banking without borders for Filipinos everywhere.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <div className="flex items-center gap-1.5 border border-border/60 bg-white px-2.5 py-1.5 rounded-lg text-muted-foreground">
                <Shield size={12} className="text-foreground" />
                <span className="text-[10px] font-bold">Member FDIC</span>
              </div>
              <div className="flex items-center gap-1.5 border border-border/60 bg-white px-2.5 py-1.5 rounded-lg text-muted-foreground">
                <Lock size={12} className="text-foreground" />
                <span className="text-[10px] font-bold">Bank-grade Security</span>
              </div>
              <div className="flex items-center gap-1.5 border border-border/60 bg-white px-2.5 py-1.5 rounded-lg text-muted-foreground">
                <CreditCard size={12} className="text-foreground" />
                <span className="text-[10px] font-bold">Visa® Partner</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col gap-1">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50 mb-3 md:mb-1">Product</h4>
            <Link to="/freelancers" className="text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 md:py-1">For freelancers</Link>
            <Link to="/ofws" className="text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 md:py-1">For OFWs</Link>
            <Link to="/card" className="text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 md:py-1">The Mana Card</Link>
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col gap-1">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50 mb-3 md:mb-1">Company</h4>
            <Link to="/about" className="text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 md:py-1">About us</Link>
            <Link to="/blog" className="text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 md:py-1">Blog</Link>
            <AnchorLink to="/#faq" className="text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 md:py-1">FAQs</AnchorLink>
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col gap-1">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50 mb-3 md:mb-1">Contact</h4>
            <a href="mailto:hello@mymana.xyz" className="text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 md:py-1">General inquiries</a>
            <a href="mailto:support@mymana.xyz" className="text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 md:py-1">Support</a>
            <a href="mailto:press@mymana.xyz" className="text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 md:py-1">Press</a>
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col gap-1">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50 mb-3 md:mb-1">Legal</h4>
            <Link to="/privacy" className="text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 md:py-1">Privacy Policy</Link>
            <Link to="/terms" className="text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 md:py-1">Terms of Service</Link>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-[11px] text-muted-foreground leading-relaxed font-medium">
            <div>
              <p className="font-bold text-muted-foreground mb-1.5 uppercase tracking-[0.1em] text-[10px]">Banking Services</p>
              <p>Mana is a financial technology company, not a bank. Banking services are provided by SSB, Member FDIC. Funds deposited at SSB are eligible for FDIC insurance up to $250,000 per depositor, per insured bank.</p>
            </div>
            <div>
              <p className="font-bold text-muted-foreground mb-1.5 uppercase tracking-[0.1em] text-[10px]">Yield & Savings</p>
              <p>Save is a yield feature on your USD wallet. It is not a deposit account and is not FDIC-insured. The APY rate is current, may change over time, and is not guaranteed.</p>
            </div>
            <div>
              <p className="font-bold text-muted-foreground mb-1.5 uppercase tracking-[0.1em] text-[10px]">Transfers & Cards</p>
              <p>The Mana card is issued by our card partner pursuant to a license. Sending and FX services are provided under applicable money-transmitter licenses across all operating regions.</p>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-[11px] text-muted-foreground font-medium">
            <p>© 2026 Mana, Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
