import { Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-crypto.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-grid-pattern overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Crypto Recovery"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-8 pb-24">
        {/* Top Banner */}
        <div className="bg-primary text-primary-foreground text-center py-3 px-4 rounded-lg mb-8 font-display font-semibold">
          Lost Access to Your Crypto?
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center">
              <span className="text-2xl font-display font-bold text-primary">BTC</span>
              <span className="text-2xl font-display font-bold text-foreground">RECOVERYPRO</span>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
            We Help You <span className="text-gradient-primary">Recover Your Crypto</span> — Safely, Legally, and Without Upfront Fees.
          </h1>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto mb-8">
          {[
            "No Upfront Payment",
            "$2M+ Recovered",
            "90% Hardware Wallet Success",
            "Legal & Forensic Experts"
          ].map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-3"
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{badge}</span>
            </div>
          ))}
        </div>

        {/* Hero Description */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Are your valuable <span className="text-primary font-semibold">cryptocurrency assets</span> missing — or worse, have you been locked out with no way back in?
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Whether <span className="italic">you've been scammed, forgotten your password or seed phrase</span>, or sent funds to the wrong wallet — our expert recovery team has helped over 100 clients reclaim more than <span className="text-gradient-gold font-semibold">$2.1 million</span> in lost crypto.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-6">
          <Button variant="cta" size="xl" className="w-full max-w-sm">
            Get a Free Recovery Assessment Now
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          No obligation • Ownership verification required
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
