import { Button } from "@/components/ui/button";
import gopalPortrait from "@/assets/gopal-portrait.png";

const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
          Meet Gopal Sharma
        </h2>
        <p className="text-primary text-center mb-8 font-medium">
          Crypto Recovery & Blockchain Forensics Specialist
        </p>

        {/* Portrait */}
        <div className="max-w-xs mx-auto mb-8">
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30">
            <img
              src={gopalPortrait}
              alt="Gopal Sharma - Crypto Recovery Specialist"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Bio */}
        <div className="max-w-lg mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Gopal Sharma leads crypto recovery operations with a deep focus on{" "}
            <span className="text-foreground font-medium">blockchain forensics, ethical recovery practices, and strict legal compliance</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            He has successfully overseen hundreds of verified recovery cases, working closely with{" "}
            <span className="text-primary font-semibold">legal advisors, exchanges, and blockchain experts</span>{" "}
            to ensure every recovery is conducted only with verified ownership, documented proof, and explicit client consent.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Gopal's approach prioritizes{" "}
            <span className="text-foreground font-medium">transparency, security, and lawful processes</span>, making him a trusted point of contact for individuals and businesses facing crypto loss or fraud.
          </p>

          {/* CTA */}
          <a href="https://forms.gle/UfjdyC4F53u6Yx5V8" target="_blank" rel="noopener noreferrer" className="block w-full max-w-sm mx-auto">
            <Button variant="cta" size="lg" className="w-full">
              Get Help From a Verified Expert
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
