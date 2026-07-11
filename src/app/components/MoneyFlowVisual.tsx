import { ArrowRight } from "lucide-react";

type MoneyFlowStepProps = {
  label: string;
  amount: string;
  detail: string;
  highlight?: string;
  highlightClass?: string;
};

function MoneyFlowStep({ label, amount, detail, highlight, highlightClass }: MoneyFlowStepProps) {
  return (
    <div className="bg-white border border-border rounded-2xl p-5 flex flex-col items-center shadow-sm w-full max-w-[14rem] mx-auto">
      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-3">
        {label}
      </span>
      <span className="text-2xl font-bold font-serif text-foreground">{amount}</span>
      <span className="text-[11px] text-muted-foreground font-medium mt-1">{detail}</span>
      {highlight && (
        <span className={`text-[11px] font-bold mt-1 px-2 py-0.5 rounded-full ${highlightClass}`}>
          {highlight}
        </span>
      )}
    </div>
  );
}

export function MoneyFlowVisual() {
  return (
    <div aria-label="Example money flow from USD earnings to Philippines transfer">
      {/* Desktop */}
      <div className="hidden md:flex max-w-4xl mx-auto mb-24 items-center justify-center gap-4">
        <MoneyFlowStep label="Incoming ACH" amount="+$3,450.00" detail="from Upwork" />
        <ArrowRight className="text-muted-foreground/30 flex-shrink-0" size={24} aria-hidden="true" />
        <MoneyFlowStep
          label="Mana USD Wallet"
          amount="$3,450.00"
          detail=""
          highlight="Earning 3.5% APY"
          highlightClass="text-accent bg-accent/10"
        />
        <ArrowRight className="text-muted-foreground/30 flex-shrink-0" size={24} aria-hidden="true" />
        <MoneyFlowStep
          label="Sent to Philippines"
          amount="₱192,300"
          detail=""
          highlight="Real mid-market rate"
          highlightClass="text-[#1D9A5B]"
        />
      </div>

      {/* Mobile */}
      <div className="md:hidden max-w-xs mx-auto mb-16 flex flex-col items-center gap-3">
        <MoneyFlowStep label="Incoming ACH" amount="+$3,450.00" detail="from Upwork" />
        <ArrowRight className="text-muted-foreground/30 rotate-90" size={20} aria-hidden="true" />
        <MoneyFlowStep
          label="Mana USD Wallet"
          amount="$3,450.00"
          detail=""
          highlight="Earning 3.5% APY"
          highlightClass="text-accent bg-accent/10"
        />
        <ArrowRight className="text-muted-foreground/30 rotate-90" size={20} aria-hidden="true" />
        <MoneyFlowStep
          label="Sent to Philippines"
          amount="₱192,300"
          detail=""
          highlight="Real mid-market rate"
          highlightClass="text-[#1D9A5B]"
        />
      </div>
    </div>
  );
}
