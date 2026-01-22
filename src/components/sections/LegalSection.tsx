import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Lock, Globe, Wallet } from "lucide-react";

const assurances = [
  {
    icon: CheckCircle,
    text: "Proof of wallet ownership required"
  },
  {
    icon: Shield,
    text: "No unauthorized or illegal recoveries"
  },
  {
    icon: Lock,
    text: "Full confidentiality & encryption"
  },
  {
    icon: Globe,
    text: "International compliance standards"
  },
  {
    icon: Wallet,
    text: "Funds recovered only to verified wallets"
  }
];

const LegalSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
          100% Legal. 100% Ethical.
        </h2>
        <p className="text-primary text-center mb-10 font-medium">
          100% Owner-Verified.
        </p>

        {/* Security Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
            <Shield className="w-10 h-10 text-primary" />
          </div>
        </div>

        {/* Assurances List */}
        <div className="max-w-lg mx-auto space-y-3 mb-10">
          {assurances.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-card border border-border rounded-lg p-4"
            >
              <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-foreground font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a href="https://forms.gle/UfjdyC4F53u6Yx5V8" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm">
            <Button variant="cta" size="lg" className="w-full">
              Proceed With Secure Assessment
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
