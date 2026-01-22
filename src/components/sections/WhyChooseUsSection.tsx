import { Button } from "@/components/ui/button";
import { DollarSign, Users, ShieldCheck, Globe, Eye, Lock } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "No upfront fee (most services)"
  },
  {
    icon: Users,
    title: "Consent-based recovery only"
  },
  {
    icon: ShieldCheck,
    title: "Blockchain forensics + legal support"
  },
  {
    icon: Globe,
    title: "Global team (Dubai-based)"
  },
  {
    icon: Eye,
    title: "Transparent updates throughout"
  },
  {
    icon: Lock,
    title: "Confidential & encrypted process"
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
          Why Victims Choose BTC Recovery Pro
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          We combine cutting-edge blockchain technology with legal expertise
        </p>

        {/* Reasons Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 flex flex-col items-center text-center card-glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">
                {reason.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a href="https://forms.gle/UfjdyC4F53u6Yx5V8" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm">
            <Button variant="cta" size="lg" className="w-full">
              Talk to a Recovery Expert
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
