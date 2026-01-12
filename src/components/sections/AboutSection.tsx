import { Button } from "@/components/ui/button";
import expertPortrait from "@/assets/expert-portrait.jpg";

const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
          Meet Gopal Bhai
        </h2>
        <p className="text-primary text-center mb-8 font-medium">
          Crypto Recovery Specialist
        </p>

        {/* Portrait */}
        <div className="max-w-xs mx-auto mb-8">
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30">
            <img
              src={expertPortrait}
              alt="Gopal Bhai - Crypto Recovery Specialist"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Bio */}
        <div className="max-w-lg mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Gopal Bhai leads crypto recovery operations with a strong focus on{" "}
            <span className="text-foreground font-medium">ethical hacking, blockchain forensics, and legal compliance</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            He has personally overseen hundreds of recovery cases, ensuring every recovery is done{" "}
            <span className="text-primary font-semibold">only with owner consent and proof</span>.
          </p>

          {/* CTA */}
          <Button variant="cta" size="lg" className="w-full max-w-sm">
            Get Help From a Verified Expert
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
