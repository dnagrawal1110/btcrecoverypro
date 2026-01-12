import { Button } from "@/components/ui/button";
import { Lock, TrendingUp, Wallet, AlertTriangle } from "lucide-react";

const caseStudies = [
  {
    icon: Lock,
    amount: "$82,000",
    description: "Recovered from a reset Ledger wallet"
  },
  {
    icon: Wallet,
    amount: "$34,000",
    description: "Restored from a frozen Binance account"
  },
  {
    icon: TrendingUp,
    amount: "$58,000",
    description: "Seed phrase reconstructed using partial memory"
  },
  {
    icon: AlertTriangle,
    amount: "$125,000",
    description: "Scam funds traced and legally pursued"
  }
];

const CaseStudiesSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
          Real Recoveries. Real Proof.
        </h2>
        <p className="text-primary text-center mb-10 font-medium">
          Real Results.
        </p>

        {/* Case Studies Slider Placeholder */}
        <div className="max-w-lg mx-auto mb-8">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center mb-4 border border-dashed border-border">
              <div className="text-center p-4">
                <p className="text-muted-foreground text-sm mb-2">📸 Case Study Evidence</p>
                <p className="text-xs text-muted-foreground">Wallet screenshots • Transaction explorer • Before/after balances</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Verified recovery documentation available upon request
            </p>
          </div>
        </div>

        {/* Case Study Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 card-glow transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <study.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg text-gradient-gold">
                    {study.amount}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {study.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button variant="cta" size="lg" className="w-full max-w-sm">
            Check If Your Case Is Recoverable
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
