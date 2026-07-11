import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { FAQS } from "@/app/data/faqs";

type FaqSectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
};

export function FaqSection({
  id = "faq",
  title = "Frequently asked questions",
  subtitle = "Everything you need to know about Mana. Can't find an answer? Reach out and we'll help.",
}: FaqSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="py-24 md:py-32 border-t border-border bg-background scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Got questions?
          </p>
          <h2
            id={`${id}-heading`}
            className="text-3xl md:text-5xl font-bold text-foreground font-serif mb-4"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-[15px] text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <Accordion type="single" collapsible className="max-w-2xl mx-auto w-full space-y-4">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`item-${i}`}
              className="bg-white border border-border rounded-2xl px-6 py-2 shadow-sm border-b"
            >
              <AccordionTrigger className="text-[15px] font-bold text-foreground hover:no-underline hover:text-accent transition-colors text-left py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-muted-foreground leading-relaxed pr-8 pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
