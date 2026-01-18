import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import stressedPerson from "@/assets/stressed-person.jpg";

const problems = [
  {
    text: "Lost access to your",
    highlight: "Ledger, Trezor, or SafePal",
    rest: "wallet"
  },
  {
    text: "Forgot",
    highlight: "Blockchain.com password or 2FA",
    rest: "authentication"
  },
  {
    text: "Sent funds",
    highlight: "(like USDT/ETH/BTC)",
    rest: "to the wrong blockchain (e.g., ERC20 → BEP20)"
  },
  {
    text: "",
    highlight: "Fell victim to fake crypto investment",
    rest: "platforms or phishing sites"
  },
  {
    text: "Lost money in",
    highlight: "MLM/Ponzi-based crypto",
    rest: "schemes"
  },
  {
    text: "",
    highlight: "Non-tech-savvy",
    rest: "or stored wallets on broken/insecure devices"
  }
];

const IsThisYouSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          Is This You?
        </h2>

        {/* Image */}
        <div className="relative max-w-md mx-auto mb-8 rounded-xl overflow-hidden">
          <img
            src={stressedPerson}
            alt="Stressed person looking at crypto losses"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Problem List */}
        <div className="max-w-lg mx-auto space-y-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">
                  {problem.text}{" "}
                  <span className="text-destructive font-medium">{problem.highlight}</span>{" "}
                  {problem.rest}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-8 mb-8 max-w-lg mx-auto">
          <p className="text-foreground">
            You're <span className="text-destructive font-semibold">Not Alone</span>.{" "}
            <span className="underline">Every Week, We Help People Just Like You</span>{" "}
            <span className="text-destructive font-semibold">Recover Their Lost Crypto</span> — And Their Peace Of Mind.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a href="https://forms.google.com/YOUR_FORM_ID" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm">
            <Button variant="cta" size="lg" className="w-full">
              Start Free Recovery Assessment
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default IsThisYouSection;
