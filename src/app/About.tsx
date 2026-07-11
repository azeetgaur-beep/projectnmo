import { Link } from "react-router";
import { Linkedin } from "lucide-react";
import pacoImage from "@/imports/paco.jpg";
import akshatImage from "@/imports/akshat.jpg";
import hbsLogo from "@/imports/HBS-styleguide-primary-logo-3.png";
import stanfordLogo from "@/imports/stanford.png";
import iitLogo from "@/imports/iit-bombay.png";
import figureLogo from "@/imports/figure.png";
import sliceLogo from "@/imports/slice.png";
import lekLogo from "@/imports/lek.jpg";


export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-serif leading-[1.1] mb-6 text-foreground max-w-2xl">
            Built by immigrants.<br />
            <span className="text-muted-foreground">Banking without borders.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            As immigrants ourselves, we know the realities of life take you far from home in search of better opportunities — and that the move too often comes with high fees, opaque terms, and a financial life split across two countries. Mana exists to change that, so the money you work so hard for is no longer lost to the gaps in between.
          </p>
        </div>

        {/* Co-founders Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-10 text-foreground">Meet the co-founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Paco Card */}
            <div className="bg-white border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden flex flex-col group max-w-[340px] w-full mx-auto">
              <div className="w-full aspect-square relative overflow-hidden bg-muted">
                <img
                  src={pacoImage}
                  alt="Paco Litonjua"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold font-serif text-foreground">Paco Litonjua</h3>
                  <a href="https://www.linkedin.com/in/paco-litonjua-2b4431153/" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:opacity-80 transition-opacity">
                    <Linkedin size={20} fill="currentColor" />
                  </a>
                </div>
                
                <div className="space-y-4 text-muted-foreground text-[13px] leading-relaxed mb-6 flex-1">
                  <p>
                    Paco came to the U.S. from the Philippines over a decade ago. Despite a Stanford degree and a fintech career in San Francisco, he couldn't get approved for a basic credit card.
                  </p>
                  <p>
                    He'd spent his career building financial products for others, yet building wealth in America as an immigrant was harder than it ever should have been. Mana is the company he wishes had existed the day he landed.
                  </p>
                </div>
                
                <div className="pt-5 mt-auto border-t border-border/60">
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                    HBS MBA 2027 · Figure Technologies · Stanford B.S.
                  </p>
                </div>
              </div>
            </div>

            {/* Akshat Card */}
            <div className="bg-white border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden flex flex-col group max-w-[340px] w-full mx-auto">
              <div className="w-full aspect-square relative overflow-hidden bg-muted">
                <img
                  src={akshatImage}
                  alt="Akshat Parwal"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold font-serif text-foreground">Akshat Parwal</h3>
                  <a href="https://www.linkedin.com/in/akshatparwal/" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:opacity-80 transition-opacity">
                    <Linkedin size={20} fill="currentColor" />
                  </a>
                </div>
                
                <div className="space-y-4 text-muted-foreground text-[13px] leading-relaxed mb-6 flex-1">
                  <p>
                    Akshat moved to the U.S. from India and ran straight into the same broken system — a financial identity that reset to zero the moment he crossed a border, no matter what he'd built before.
                  </p>
                  <p>
                    Having helped set up India's first digital bank, he knew the technology to fix it already existed. At HBS, he and Paco realized millions of immigrants live this story every single day — and decided to build the answer together.
                  </p>
                </div>
                
                <div className="pt-5 mt-auto border-t border-border/60">
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                    HBS MBA 2027 · slice (India's first digital bank) · L.E.K. Consulting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institutions Section */}
        <div className="py-16 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 leading-tight max-w-2xl text-foreground">
            A team forged at the world's most respected institutions and companies.
          </h2>
          <p className="text-muted-foreground mb-16 max-w-2xl leading-relaxed text-[15px]">
            We've studied and built at the places that set the standard in finance and technology — and we're channeling all of it into a fairer financial home for immigrants everywhere.
          </p>

          {/* Where we studied */}
          <div className="w-full mb-12">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6 text-center">Where we studied</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white border border-border shadow-sm rounded-2xl h-28 flex items-center justify-center p-6 hover:shadow-md transition-shadow">
                <img src={hbsLogo} alt="Harvard Business School" className="max-w-[160px] max-h-full object-contain" />
              </div>
              <div className="bg-white border border-border shadow-sm rounded-2xl h-28 flex items-center justify-center p-6 hover:shadow-md transition-shadow">
                <img src={stanfordLogo} alt="Stanford University" className="max-w-[160px] max-h-full object-contain" />
              </div>
              <div className="bg-white border border-border shadow-sm rounded-2xl h-28 flex items-center justify-center p-6 hover:shadow-md transition-shadow">
                <img src={iitLogo} alt="IIT Bombay" className="max-w-[120px] max-h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Where we built */}
          <div className="w-full">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6 text-center">Where we built</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white border border-border shadow-sm rounded-2xl h-28 flex items-center justify-center p-6 hover:shadow-md transition-shadow">
                <img src={figureLogo} alt="Figure Technologies" className="max-w-[160px] max-h-full object-contain" />
              </div>
              <div className="bg-white border border-border shadow-sm rounded-2xl h-28 flex items-center justify-center p-6 hover:shadow-md transition-shadow">
                <img src={sliceLogo} alt="slice" className="max-w-[100px] max-h-full object-contain" />
              </div>
              <div className="bg-white border border-border shadow-sm rounded-2xl h-28 flex items-center justify-center p-6 hover:shadow-md transition-shadow">
                <img src={lekLogo} alt="L.E.K. Consulting" className="max-w-[140px] max-h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
