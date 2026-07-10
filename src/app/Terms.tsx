import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background py-24 md:py-32 font-sans text-foreground">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight mb-4">Terms</h1>
          <p className="text-lg md:text-xl text-muted-foreground">The terms governing your Mana products.</p>
        </div>

        <div className="space-y-24">
          
          <div id="us-consumer" className="space-y-8 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Card Terms — U.S. Consumer Program</h2>
            
            <div>
              <h3 className="text-lg font-bold font-serif mb-4">Mana CREDIT CARD ACCOUNT OPENING DISCLOSURES – SET CREDIT LIMIT</h3>
              
              <div className="overflow-x-auto mb-8 border border-border rounded-xl">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead className="bg-muted">
                    <tr>
                      <th className="py-4 px-6 font-bold text-foreground border-b border-border" colSpan={2}>INTEREST RATE AND INTEREST CHARGES</th>
                    </tr>
                  </thead>
                  <tbody className="text-[15px] text-muted-foreground divide-y divide-border">
                    <tr>
                      <td className="py-4 px-6 font-medium text-foreground w-1/2">Annual Percentage Rate (APR) for Purchases</td>
                      <td className="py-4 px-6 font-bold text-foreground">0.00%</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-foreground">APR for Balance Transfers</td>
                      <td className="py-4 px-6 font-medium">N/A</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-foreground">APR for Cash Advances</td>
                      <td className="py-4 px-6 font-medium">N/A</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-foreground">Paying Interest</td>
                      <td className="py-4 px-6 leading-relaxed">You will not be charged interest on purchases. Your due date for payment of amounts owed on your Card is 21 days after the close of each billing cycle.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-foreground">Minimum Interest Charge</td>
                      <td className="py-4 px-6 leading-relaxed">There is no interest chargeable to this Credit Card.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-foreground">For Credit Card Tips from the Consumer Financial Protection Bureau</td>
                      <td className="py-4 px-6 leading-relaxed">To learn more about factors to consider when applying for or using a credit card, visit the website of the Consumer Financial Protection Bureau at: <a href="http://www.consumerfinance.gov/learnmore" className="text-[#0A66C2] hover:underline" target="_blank" rel="noopener noreferrer">http://www.consumerfinance.gov/learnmore</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto mb-8 border border-border rounded-xl">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead className="bg-muted">
                    <tr>
                      <th className="py-4 px-6 font-bold text-foreground border-b border-border" colSpan={2}>FEES</th>
                    </tr>
                  </thead>
                  <tbody className="text-[15px] text-muted-foreground divide-y divide-border">
                    <tr>
                      <td className="py-4 px-6 font-medium text-foreground w-1/2">Annual Fees</td>
                      <td className="py-4 px-6 font-bold text-foreground">None</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-foreground">Transaction Fees</td>
                      <td className="py-4 px-6">
                        <ul className="space-y-2">
                          <li><strong>Balance Transfer:</strong> N/A</li>
                          <li><strong>Cash Advance:</strong> None</li>
                          <li><strong>International Transaction:</strong> 1% of each transaction in U.S. dollars.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-foreground">Penalty Fees</td>
                      <td className="py-4 px-6">
                        <ul className="space-y-2">
                          <li><strong>Late Payment:</strong> None</li>
                          <li><strong>Over the Credit Line:</strong> None</li>
                          <li><strong>Returned Payment:</strong> None</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-6 text-[15px] text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">How We Will Calculate Your Balance:</strong> We use a method called "average daily balance". See your Cardholder Agreement for more details.
                </p>
                <p>
                  <strong className="text-foreground">Billing Rights:</strong> Information on your rights to dispute transactions and how to exercise those rights is provided in your Card Regulations.
                </p>
                <p>
                  <strong className="text-foreground">Military Lending Act Disclosure:</strong> The following disclosure applies to persons covered by the Military Lending Act – other governmental programs and laws may also govern or apply to this transaction but are not described in the following disclosure. The following disclosure is required by the Military Lending Act. Federal law provides important protections to members of the Armed Forces and their dependents relating to extensions of consumer credit. In general, the cost of consumer credit to a member of the Armed Forces and his or her dependent may not exceed an annual percentage rate of 36 percent. This rate must include, as applicable to the credit transaction or account: the costs associated with credit insurance premiums; fees for ancillary products sold in connection with the credit transaction; any application fee charged (other than certain application fees for specified credit transactions or accounts); and any participation fee charged (other than certain participation fees for a credit card account). To learn if you are covered by the Military Lending Act or about the applicable rate, call us at +1 (857) 270-0094. The Arbitration and Class Waiver sections of your Agreement will not apply to you if you are covered by the Military Lending Act nor do any provisions of the Agreement that waive any right to legal recourse under any state or federal law to the extent required by the Military Lending Act.
                </p>
              </div>
            </div>

            <div className="pt-12 border-t border-border mt-12">
              <h3 className="text-2xl font-bold font-serif mb-2">Mana CARDHOLDER AGREEMENT – SET LINE OF CREDIT</h3>
              <p className="text-sm font-semibold text-muted-foreground mb-8">Last Updated: 06/06/2026</p>

              <div className="space-y-8 text-[15px] text-muted-foreground leading-relaxed">
                <p className="font-bold text-foreground">
                  Arbitration Clause; Notices: PLEASE REVIEW THE ARBITRATION CLAUSE AND NOTICES SET FORTH BELOW IN THE SECTION TITLED DISPUTE RESOLUTION AND ARBITRATION. BY USING THE Mana CARD, YOU ARE AGREEING TO THE ARBITRATION CLAUSE AND NOTICES SET FORTH IN THAT SECTION. THE ARBITRATION CLAUSE WILL HAVE A SUBSTANTIAL EFFECT ON YOUR RIGHTS IN THE EVENT OF A DISPUTE, INCLUDING YOUR RIGHT TO BRING OR PARTICIPATE IN A CLASS PROCEEDING.
                </p>
                
                <p>
                  This Mana Cardholder Agreement (“Agreement”) is a binding agreement between you (“you” or “your”) and the Issuer (“we”, “us,” or “our”) that governs your use of the card account (“Account”) and Mana card (“Mana Card” or “Card”). The Mana Card is provided to you on behalf of Mana in connection with your status as Mana customer and pursuant to your separate User Agreement between you and Mana (the “User Terms”). We are not a party to the User Terms and disclaim any liability for the performance of services covered therein. In the event of any conflict between this Agreement and the User Terms, this Agreement shall be controlling.
                </p>

                <div>
                  <h4 className="text-lg font-bold font-serif text-foreground mb-3">Additional Definitions</h4>
                  <p className="mb-4">
                    The term “Card” means any card we issue associated with your Account, including renewal and substitute cards. The term “Card” also means any other access device that allows you to obtain Account credit from us, including your Account number. Other capitalized terms that are not defined here are generally defined the first time we use those terms. The term “Issuer” refers to Third National, including its affiliates, successors, and assigns. The term “Supported Blockchain” means the Ethereum Blockchain, Polygon Blockchain, Optimism Blockchain, Arbitrum Blockchain and other blockchain networks. We may update this list of Supported Blockchains at any time and at our sole discretion.
                  </p>
                  <p>
                    The terms "you" and "your" mean each and all of the persons who are granted, accept or use the Account and any person who has guaranteed payment of the Account.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold font-serif text-foreground mb-3">Overview of Account Agreement</h4>
                  <p className="mb-4">
                    We reserve the right to amend this Agreement or impose additional obligations or restrictions on you at any time with or without notice to you, except where required by applicable law. By continuing to use the Cards, you agree to be bound by such amendments or additional obligations or restrictions. We will notify you of any amendment to this Agreement by email and notification on your application. If any amendment to this Agreement allows you to reject such amendment, and if you reject the amendment in the manner described in such amendment, we may terminate your Account. If an amendment to this Agreement increases the applicable Interest Charges applicable to your Account, any existing unpaid balances may be subject to such increase to the Interest Charges.
                  </p>
                  <p className="mb-4">
                    You agree that this Agreement becomes effective the first time you use any Card or the Account. You agree that you were not solicited for this product. You also agree that we may keep and use an image or copy of the Agreement to enforce its terms against you. When the Agreement states we “may” take an action, it means we are authorized to take that action in our sole discretion, subject only to any limitations or requirements established by law and the express terms of the Agreement. Please read this Agreement carefully and keep them for future reference. We may make new offers to you in the future or forward offers from others that may interest you. If these offers have new or different terms, those terms will be provided with the offer. If you accept the offer, the previously disclosed terms in the Agreement will still apply, except as modified by the offer.
                  </p>
                  <p className="mb-4">
                    Mana provides technology services in connection with the Mana Card, and is not a bank, or credit union and does not itself extend credit, set interest rates, determine repayment terms or hold Collateral. Nothing in this Agreement shall be construed as creating a lender-borrower relationship between you and Mana.
                  </p>
                  <p className="mb-2">You acknowledge and agree that Mana:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>is an express third-party beneficiary of this Agreement, with the limited right to enforce obligations that directly relate to its role;</li>
                    <li>is not responsible for any decisions by the Issuer to approve, decline, suspend or close your Card account. Mana may, at the request of the Issuer, the payment network or a regulatory authority, suspend or restrict your access to the Mana platform or certain features, to protect against fraud, comply with applicable laws or manage program risk;</li>
                    <li>does not control and is not responsible for the operation, security, or performance of the smart contracts used to hold your Collateral; and</li>
                    <li>is not responsible for merchant acceptance of your Mana Card or for resolving disputes about goods or services purchased with the Mana Card.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold font-serif text-foreground mb-3">Account Information We Need</h4>
                  <p className="mb-4">
                    We need and will request complete, current and valid information about you to manage your Account. Such information may include but is not limited to: your legal name; your address(es); your telephone number(s); your date(s) of birth; your employment and income information; and your Social Security number(s); or other government identification number(s). You must tell us when this information changes, and, if we agree to issue additional Cards, you must notify us of any changes to this information for each additional cardholder. You may update your address as described on your most recent Statement, through the website we maintain for your Account, or by calling us at the telephone number shown on your most recent Statement or the back of your Card. We may require that you provide additional documents that are acceptable to us so that we can verify this information and any changes. We may restrict or close your Account if we are unable to verify your information or if you do not provide the additional information we request, at our sole discretion.
                  </p>
                  <p className="font-bold text-foreground">
                    TO HELP THE GOVERNMENT FIGHT THE FUNDING OF TERRORISM AND MONEY LAUNDERING ACTIVITIES, FEDERAL LAW REQUIRES US TO OBTAIN, VERIFY, AND RECORD INFORMATION THAT IDENTIFIES EACH PERSON WHO OPENS AN ACCOUNT. WHAT THESE MEANS FOR YOU: WHEN YOU OPEN AN ACCOUNT, WE WILL ASK FOR THE NAME, ADDRESS, EMPLOYER IDENTIFICATION NUMBER AND ORGANIZATIONAL DOCUMENTS OF THE ACCOUNT OWNER AND THE NAMES, ADDRESSES, DATES OF BIRTH, AND OTHER INFORMATION CONCERNING EACH PRINCIPAL OWNER THAT WILL ALLOW US TO IDENTIFY THE ACCOUNT OWNER AND ITS PRINCIPAL OWNERS. WE MAY ALSO ASK TO SEE A COPY OF EACH PRINCIPAL OWNERS' DRIVER'S LICENSES OR OTHER IDENTIFICATION DOCUMENTS.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold font-serif text-foreground mb-3">Balance Categories of Your Account</h4>
                  <p className="mb-4">
                    “Balance Categories” are the different Account segments we may establish with unique pricing, grace periods or other terms. The Balance Categories of your Account may include Purchases, Cash Advances, and Special Offers. We reserve the right to decide which Balance Category applies for each Account transaction and our decision will be final.
                  </p>
                  <p className="mb-4">
                    A “Purchase” means the property, rights, goods and services we allow you to purchase, rent, or otherwise obtain directly from merchants and vendors by using your Card.
                  </p>
                  <p>
                    A “Special Offer” means transactions and balances that post to your Account, subject to unique pricing, grace periods, or other terms we disclose from time to time for promotional and other reasons. Our Special Offer disclosures, if any, will explain when any unpaid Special Offer balances may be transferred to and combined with a different Balance Category after any temporary rate period ends.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold font-serif text-foreground mb-3">Your Promises To Us</h4>
                  <p>
                    You promise to do everything the Agreement requires of you, as long as your Account has a balance or remains open. Each of you and all of you promise, individually and together, to pay us all amounts due on your Account, now and in the future. This includes amounts where you did not sign a purchase slip or other documents for the transaction. If you use your Card number without presenting your actual Card (such as for mail, telephone or Internet purchases), these transactions will be treated as if you used the Card in person. The amounts due on your Account include all transactions in each Balance Category made by any of you, plus all Fees and all Interest Charges, as described in this Agreement. Your “Interest Charges” are the charges we add to your Account based on the Annual Percentage Rates we apply to your Account balances. Your “Fees” are the charges we add to your Account that are not based on the Annual Percentage Rates, if any. If you allow someone else to use your Card, you are responsible for all transactions made by that person and all associated Fees and Interest Charges. If you die, your promise to pay us will apply to your estate, as permitted by law.
                  </p>
                </div>

                <div className="p-6 bg-white border border-border text-muted-foreground italic rounded-xl text-sm mt-8">
                  [Note: Additional terms were truncated. Please provide the remaining terms if you would like them included.]
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
