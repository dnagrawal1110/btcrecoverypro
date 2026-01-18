import { Button } from "@/components/ui/button";
import { Lock, TrendingUp, Wallet, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Import recovery proof images
import seedRecovery from "@/assets/seed-recovery.jpg";
import exchangeRecovery from "@/assets/exchange-recovery.jpg";
import hardwareWallet from "@/assets/hardware-wallet.jpg";
import scamTracing from "@/assets/scam-tracing.jpg";
import networkTransfer from "@/assets/network-transfer.jpg";

const caseStudies = [
  {
    icon: Lock,
    amount: "$82,000",
    description: "Recovered from a reset Ledger wallet",
    statement: "Client accidentally reset their Ledger device. We reconstructed the seed using partial backup data.",
    image: hardwareWallet
  },
  {
    icon: Wallet,
    amount: "$34,000",
    description: "Restored from a frozen Binance account",
    statement: "Account frozen due to suspicious activity. We worked with legal team to verify ownership and restore access.",
    image: exchangeRecovery
  },
  {
    icon: TrendingUp,
    amount: "$58,000",
    description: "Seed phrase reconstructed using partial memory",
    statement: "Client remembered 20 of 24 words. Our forensic tools identified the missing words in 48 hours.",
    image: seedRecovery
  },
  {
    icon: AlertTriangle,
    amount: "$125,000",
    description: "Scam funds traced and legally pursued",
    statement: "Investment scam victim. We traced funds across 12 wallets and provided evidence for legal action.",
    image: scamTracing
  },
  {
    icon: Wallet,
    amount: "$47,000",
    description: "Wrong network transfer recovered",
    statement: "ETH sent to BSC address. We extracted private keys and recovered funds from the alternate chain.",
    image: networkTransfer
  }
];

const CaseStudiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

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

        {/* Image Slider */}
        <div className="max-w-lg mx-auto mb-8 relative">
          <div 
            ref={sliderRef}
            className="relative rounded-2xl overflow-hidden border-2 border-primary/30 bg-card"
          >
            {/* Main Image */}
            <div className="aspect-[4/3] relative">
              <img
                src={caseStudies[currentIndex].image}
                alt={caseStudies[currentIndex].description}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                    {(() => {
                      const IconComponent = caseStudies[currentIndex].icon;
                      return <IconComponent className="w-5 h-5 text-primary" />;
                    })()}
                  </div>
                  <p className="font-display font-bold text-2xl text-gradient-gold">
                    {caseStudies[currentIndex].amount}
                  </p>
                </div>
                <p className="text-foreground font-semibold mb-2">
                  {caseStudies[currentIndex].description}
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "{caseStudies[currentIndex].statement}"
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-6 bg-primary" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Verification Note */}
        <p className="text-center text-sm text-muted-foreground mb-10">
          📸 Verified recovery documentation available upon request
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <a href="https://forms.google.com/YOUR_FORM_ID" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm">
            <Button variant="cta" size="lg" className="w-full">
              Check If Your Case Is Recoverable
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
