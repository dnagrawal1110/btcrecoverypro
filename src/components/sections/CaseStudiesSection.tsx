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
    amount: "$80,000",
    description: "Ledger Wallet S2 Hardware Recovery",
    statement: "80,000$ worth XRP recovered from Ledger hardware wallet with missing seed phrase.",
    image: hardwareWallet
  },
  {
    icon: AlertTriangle,
    amount: "$10,000",
    description: "Wrong Transaction Recovery",
    statement: "10,000$ worth altcoins recovered from a wrong transaction sent to incorrect address.",
    image: networkTransfer
  },
  {
    icon: Wallet,
    amount: "BTC Recovered",
    description: "Blockchain.com Password Recovery",
    statement: "Blockchain.com wallet password recovered and Bitcoin restored through the JSON file backup.",
    image: exchangeRecovery
  },
  {
    icon: TrendingUp,
    amount: "12.47 BTC",
    description: "2016 Blockchain.com Wallet",
    statement: "Main password recovered for Blockchain.com wallet containing 12.47 BTC from 2016.",
    image: seedRecovery
  },
  {
    icon: Wallet,
    amount: "0.54 BTC",
    description: "SafePal Wallet 2016 Recovery",
    statement: "0.54 BTC recovered from SafePal wallet dating back to 2016.",
    image: scamTracing
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
          {/* Main Image - 9:16 aspect ratio */}
            <div className="aspect-[9/16] relative">
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
          <a href="https://forms.gle/UfjdyC4F53u6Yx5V8" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm">
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
