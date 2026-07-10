import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background py-24 md:py-32 font-sans text-foreground">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="mb-16 border-b border-border pb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight mb-4">Privacy Notice</h1>
          <p className="text-lg md:text-xl text-muted-foreground">How we collect, share, and protect your personal information.</p>
        </div>

        <div className="space-y-12 md:space-y-16">
          
          {/* Header */}
          <div className="border-b border-border pb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Facts</h2>
            <h3 className="text-2xl md:text-3xl font-bold font-serif leading-tight">
              WHAT DOES THIRD NATIONAL (“Issuer”) DO WITH YOUR PERSONAL INFORMATION?
            </h3>
          </div>

          {/* Why, What, How */}
          <div className="space-y-8 border-b border-border pb-12">
            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8">
              <h4 className="text-lg font-bold font-serif">Why?</h4>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                Financial companies choose how they share your personal information. Federal law gives consumers the right to limit some but not all sharing. Federal law also requires us to tell you how we collect, share, and protect your personal information. Please read this notice carefully to understand what we do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8">
              <h4 className="text-lg font-bold font-serif">What?</h4>
              <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4">
                <p>
                  The types of personal information we collect and share depend on the product or service you have with us. This information can include:
                </p>
                <ul className="list-disc pl-5 space-y-2 font-medium text-foreground/80">
                  <li>Social Security number and date of birth</li>
                  <li>Account balances and payment history</li>
                  <li>Credit history and credit scores</li>
                </ul>
                <p>
                  When you are no longer our customer, we continue to share your information as described in this notice.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8">
              <h4 className="text-lg font-bold font-serif">How?</h4>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                All financial companies need to share customers’ personal information to run their everyday business. In the section below, we list the reasons financial companies can share their customers’ personal information; the reasons Issuer chooses to share; and whether you can limit this sharing.
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border-b border-border pb-12">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="py-4 pr-6 font-bold text-foreground">Reasons we can share your personal information</th>
                  <th className="py-4 px-6 font-bold text-foreground w-[150px] text-center">Does Issuer share?</th>
                  <th className="py-4 pl-6 font-bold text-foreground w-[180px] text-center">Can you limit this sharing?</th>
                </tr>
              </thead>
              <tbody className="text-[15px] text-muted-foreground divide-y divide-border/50">
                <tr>
                  <td className="py-5 pr-6 font-medium text-foreground">
                    For our everyday business purposes—<br/>
                    <span className="font-normal text-muted-foreground">such as to process your transactions, maintain your account(s), respond to court orders and legal investigations, or report to credit bureaus</span>
                  </td>
                  <td className="py-5 px-6 font-bold text-center text-foreground">YES</td>
                  <td className="py-5 pl-6 font-bold text-center text-foreground">NO</td>
                </tr>
                <tr>
                  <td className="py-5 pr-6 font-medium text-foreground">
                    For our marketing purposes—<br/>
                    <span className="font-normal text-muted-foreground">to offer our products and services to you</span>
                  </td>
                  <td className="py-5 px-6 font-bold text-center text-foreground">YES</td>
                  <td className="py-5 pl-6 font-bold text-center text-foreground">NO</td>
                </tr>
                <tr>
                  <td className="py-5 pr-6 font-medium text-foreground">For joint marketing with other financial companies</td>
                  <td className="py-5 px-6 font-bold text-center text-foreground">YES</td>
                  <td className="py-5 pl-6 font-bold text-center text-foreground">NO</td>
                </tr>
                <tr>
                  <td className="py-5 pr-6 font-medium text-foreground">
                    For our affiliates’ everyday business purposes—<br/>
                    <span className="font-normal text-muted-foreground">information about your transactions and experiences</span>
                  </td>
                  <td className="py-5 px-6 font-bold text-center text-foreground">YES</td>
                  <td className="py-5 pl-6 font-bold text-center text-foreground">NO</td>
                </tr>
                <tr>
                  <td className="py-5 pr-6 font-medium text-foreground">
                    For our affiliates’ everyday business purposes—<br/>
                    <span className="font-normal text-muted-foreground">information about your creditworthiness</span>
                  </td>
                  <td className="py-5 px-6 font-bold text-center text-muted-foreground">NO</td>
                  <td className="py-5 pl-6 font-bold text-center text-muted-foreground whitespace-nowrap">WE DON'T SHARE</td>
                </tr>
                <tr>
                  <td className="py-5 pr-6 font-medium text-foreground">For our affiliates to market to you</td>
                  <td className="py-5 px-6 font-bold text-center text-muted-foreground">NO</td>
                  <td className="py-5 pl-6 font-bold text-center text-muted-foreground whitespace-nowrap">WE DON'T SHARE</td>
                </tr>
                <tr>
                  <td className="py-5 pr-6 font-medium text-foreground">For nonaffiliates to market to you</td>
                  <td className="py-5 px-6 font-bold text-center text-muted-foreground">NO</td>
                  <td className="py-5 pl-6 font-bold text-center text-muted-foreground whitespace-nowrap">WE DON'T SHARE</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Questions */}
          <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8 pb-12 border-b border-border">
            <h4 className="text-lg font-bold font-serif">Questions?</h4>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              Call <strong className="text-foreground">+1 (857) 270-0094</strong> or go to <strong className="text-foreground">www.mymana.xyz</strong>
            </p>
          </div>

          {/* Who we are */}
          <div className="space-y-8 pb-12 border-b border-border">
            <h3 className="text-xl font-bold font-serif text-accent uppercase tracking-widest text-[13px]">Who we are</h3>
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4 md:gap-8">
              <h4 className="font-bold text-foreground">Who is providing this notice?</h4>
              <p className="text-muted-foreground text-[15px]">Issuer</p>
            </div>
          </div>

          {/* What we do */}
          <div className="space-y-8 pb-12 border-b border-border">
            <h3 className="text-xl font-bold font-serif text-accent uppercase tracking-widest text-[13px]">What we do</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4 md:gap-8">
              <h4 className="font-bold text-foreground">How does Issuer protect my personal information?</h4>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                To protect your personal information from unauthorized access and use, we use security measures that comply with federal law. These measures include computer safeguards and secured files and buildings.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4 md:gap-8">
              <h4 className="font-bold text-foreground">How does Issuer collect my personal information?</h4>
              <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4">
                <p>We collect your personal information, for example, when you:</p>
                <ul className="list-disc pl-5 space-y-2 font-medium text-foreground/80">
                  <li>open an account or perform transactions</li>
                  <li>pay your bills or reload funds</li>
                  <li>use your card</li>
                </ul>
                <p>We may also collect your personal information from others, such as credit bureaus, affiliates, and other companies.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4 md:gap-8">
              <h4 className="font-bold text-foreground">Why can’t I limit all sharing?</h4>
              <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4">
                <p>Federal law gives you the right to limit only:</p>
                <ul className="list-disc pl-5 space-y-2 font-medium text-foreground/80">
                  <li>sharing for affiliates’ everyday business purposes—information about your creditworthiness</li>
                  <li>affiliates from using your information to market to you</li>
                  <li>sharing for nonaffiliates to market to you</li>
                </ul>
                <p>State laws and individual companies may give you additional rights to limit sharing. See below for more on your rights under state law.</p>
              </div>
            </div>
          </div>

          {/* Definitions */}
          <div className="space-y-8 pb-12 border-b border-border">
            <h3 className="text-xl font-bold font-serif text-accent uppercase tracking-widest text-[13px]">Definitions</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4 md:gap-8">
              <h4 className="font-bold text-foreground">Affiliates</h4>
              <div className="text-muted-foreground leading-relaxed text-[15px] space-y-2">
                <p>Companies related by common ownership or control. They can be financial and nonfinancial companies.</p>
                <p className="italic text-foreground/80">Issuer does share with our affiliates.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4 md:gap-8">
              <h4 className="font-bold text-foreground">Nonaffiliates</h4>
              <div className="text-muted-foreground leading-relaxed text-[15px] space-y-2">
                <p>Companies not related by common ownership or control. They can be financial and nonfinancial companies.</p>
                <p className="italic text-foreground/80">Issuer does not share with nonaffiliates so they can market to you.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4 md:gap-8">
              <h4 className="font-bold text-foreground">Joint marketing</h4>
              <div className="text-muted-foreground leading-relaxed text-[15px] space-y-2">
                <p>A formal agreement between nonaffiliated financial companies that together market financial products or services to you.</p>
                <p className="italic text-foreground/80">Issuer may partner with certain non-affiliated financial companies to offer financial products and services to you.</p>
              </div>
            </div>
          </div>

          {/* Other important info */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold font-serif text-accent uppercase tracking-widest text-[13px]">Other important information</h3>
            
            <div className="space-y-6 text-[15px] text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">California and Vermont:</strong> In accordance with state law, we will not share your personal information with nonaffiliates except as permitted by law, including for example, for our own marketing purposes, for everyday business purposes, such as servicing your account, or with your consent.
              </p>
              <p>
                <strong className="text-foreground">Nevada:</strong> You are being provided this notice pursuant to Nevada law. You may be placed on our internal Do Not Call List by following the directions in the To Limit our Sharing section above. Nevada law requires that we provide you with the following contact information: Bureau of Consumer Protection, Office of the Nevada Attorney General, 555 E. Washington Ave., Suite 3900, Las Vegas, NV 89101; Phone number: 702-486-3132; email: agInfo@ag.nv.gov
              </p>
              <p>
                <strong className="text-foreground">North Dakota:</strong> In accordance with North Dakota law, we will not share information we collect about you with companies outside of our corporate family, except as permitted by law, including, for example, with your consent, to service your account. Residents of North Dakota are opted out from nonaffiliate marketing by default. We will limit sharing among our companies to the extent required by North Dakota law.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
