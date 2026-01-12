import { Button } from "@/components/ui/button";
import { MessageCircle, Search, FileText, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Free Consultation",
    description: "Understand how your crypto was lost and assess recovery feasibility."
  },
  {
    number: "02",
    icon: Search,
    title: "Forensic Assessment",
    description: "Deep wallet and transaction analysis to determine recovery potential."
  },
  {
    number: "03",
    icon: FileText,
    title: "Custom Recovery Plan",
    description: "Legal, secure, and consent-based recovery strategy tailored to your case."
  },
  {
    number: "04",
    icon: Wrench,
    title: "Technical Execution",
    description: "Blockchain tracing, password recovery, and technical intervention."
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Secure Return of Funds",
    description: "Recovered crypto sent directly to your verified wallet address."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
          Our Proven 5-Step Process
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          It's simple.
        </p>

        {/* Process Steps */}
        <div className="max-w-lg mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start gap-4 pl-2"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-card border border-border rounded-lg p-4 card-glow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-display font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                      STEP {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Button variant="cta" size="lg" className="w-full max-w-sm">
            Begin Step 1 – Free Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
