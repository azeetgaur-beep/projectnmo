import remittanceGuideImage from "@/imports/remittance_guide.png";
import freelancerUsdImage from "@/imports/freelancer_usd.png";
import ofwBankingImage from "@/imports/ofw_banking.png";
import nurseGuideImage from "@/imports/nurse_guide.png";

export type BlogPost = {
  title: string;
  date: string;
  tag: string;
  desc: string;
  slug: string;
  image: string;
  imageAlt: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Best Way to Send Money to Philippines 2026: Top 6 Services Ranked",
    date: "Jul 07, 2026",
    tag: "Guide",
    desc: "Get the best way to send money to Philippines in 2026. Compare fees, exchange rates, and speed for Wise, Remitly, Western Union, and Mana.",
    slug: "best-way-to-send-money-to-philippines",
    image: remittanceGuideImage,
    imageAlt: "Filipino professional reviewing remittance options on a laptop",
  },
  {
    title: "Cheapest Way to Send Money to Philippines: Full Guide",
    date: "Jul 03, 2026",
    tag: "Guide",
    desc: "Get the complete guide to the cheapest way to send money to Philippines. Compare fees, hidden FX markups, and transfer speeds across top services to save more.",
    slug: "cheapest-way-to-send-money-to-philippines",
    image: remittanceGuideImage,
    imageAlt: "Guide to lowering remittance costs for families abroad",
  },
  {
    title: "How to Get the Best PHP Exchange Rate & Avoid Fees",
    date: "Jul 03, 2026",
    tag: "Guide",
    desc: "Learn how to get the best PHP exchange rate and avoid hidden fees when sending money home. Simple tips help you keep more of your hard-earned money.",
    slug: "how-to-get-best-php-exchange-rate",
    image: remittanceGuideImage,
    imageAlt: "Understanding PHP exchange rates and transfer fees",
  },
  {
    title: "How to Send Money from US to the Philippines: Clear, Upfront Pricing",
    date: "Jul 03, 2026",
    tag: "Guide",
    desc: "Get your family more pesos when you learn how to send money from the US to the Philippines. Mana delivers reliable transfers with clear, upfront pricing.",
    slug: "how-to-send-money-to-gcash",
    image: ofwBankingImage,
    imageAlt: "Sending money from the US to the Philippines with transparent pricing",
  },
  {
    title: "How to Open a US Bank Account and Receive Payments for Filipino Freelancers",
    date: "Jul 02, 2026",
    tag: "Guide",
    desc: "Get your own US dollar account for Filipino freelancers with Mana. Avoid high fees, hold USD, earn 3.5% APY, and transfer home with transparent pricing.",
    slug: "open-us-bank-account-filipino-freelancers",
    image: freelancerUsdImage,
    imageAlt: "Filipino freelancer receiving USD client payments",
  },
  {
    title: "Your Guide to the 6 Best US Banks for OFWs",
    date: "Jul 01, 2026",
    tag: "Guide",
    desc: "Find the best US bank for OFW needs with this practical guide to top accounts, low fees, easy transfers, and secure banking for Filipinos working abroad.",
    slug: "6-best-us-banks-for-ofws",
    image: ofwBankingImage,
    imageAlt: "OFW comparing US banking options for cross-border finances",
  },
  {
    title: "The Best App to Send Money to PH for Free (No Hidden Fees)",
    date: "Jun 30, 2026",
    tag: "Guide",
    desc: "Find the best app to send money to Philippines for free with no hidden fees. Compare top apps, real exchange rates, and tips for secure, fast transfers.",
    slug: "best-app-send-money-ph-free",
    image: remittanceGuideImage,
    imageAlt: "Comparing remittance apps for sending money to the Philippines",
  },
  {
    title: "How to Open Your First US Bank Account (Even With No Credit History)",
    date: "Jun 21, 2026",
    tag: "Guide",
    desc: "You don't need credit to open a bank account — just the right documents. Here's exactly what to bring and how the system really works.",
    slug: "open-first-us-bank-account-no-credit",
    image: ofwBankingImage,
    imageAlt: "Guide to opening a first US bank account",
  },
  {
    title: "Money in America: A Starter Guide for New Filipino Nurses",
    date: "Jun 16, 2026",
    tag: "Guide",
    desc: "How money really works in the US — paychecks, credit, taxes, and sending padala home — mapped out for nurses who just arrived.",
    slug: "money-america-starter-guide-nurses",
    image: nurseGuideImage,
    imageAlt: "Financial starter guide for Filipino nurses in the United States",
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug) ?? BLOG_POSTS[0];
}
