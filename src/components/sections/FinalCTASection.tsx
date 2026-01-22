import { Button } from "@/components/ui/button";
import recoverySuccess from "@/assets/recovery-success.jpg";

const FinalCTASection = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={recoverySuccess}
          alt="Successful recovery"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Content */}
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Your Crypto May Still Be <span className="text-gradient-primary">Recoverable</span>
          </h2>
          
          <p className="text-muted-foreground mb-2">
            The longer you wait, the harder recovery becomes.
          </p>
          <p className="text-foreground font-medium mb-8">
            Start with a free, confidential assessment today.
          </p>

          {/* Primary CTA */}
          <a href="https://forms.gle/UfjdyC4F53u6Yx5V8" target="_blank" rel="noopener noreferrer" className="block w-full max-w-sm mx-auto mb-4">
            <Button variant="cta" size="xl" className="w-full">
              Get a Free Recovery Assessment Now
            </Button>
          </a>

          {/* Subtext */}
          <p className="text-sm text-muted-foreground">
            No contracts • No obligation • No upfront payment
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
