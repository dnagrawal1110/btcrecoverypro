import { useEffect, useRef } from "react";
import { Shield, Database, Scale, Globe, Award } from "lucide-react";

const partners = [
  { name: "Blockchain Analytics", icon: Database },
  { name: "Cybersecurity Partners", icon: Shield },
  { name: "Legal & Compliance", icon: Scale },
  { name: "Global Exchanges", icon: Globe },
  { name: "Verification Bodies", icon: Award },
  { name: "Forensic Experts", icon: Database },
  { name: "Security Auditors", icon: Shield },
  { name: "Regulatory Advisors", icon: Scale },
];

const TrustedNetworkSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-16 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
          Our Trusted Network & Global Connections
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          We work closely with a verified network of blockchain analysts, legal consultants, exchanges, cybersecurity professionals, and compliance partners across multiple jurisdictions.
        </p>

        {/* Auto-scrolling Partner Slider */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {/* Duplicate partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 bg-card border border-border rounded-xl p-6 flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
              >
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                  <partner.icon className="w-7 h-7 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground text-center font-medium">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          🔒 All partnerships verified • Confidential workflows • Multi-jurisdiction support
        </p>
      </div>
    </section>
  );
};

export default TrustedNetworkSection;
