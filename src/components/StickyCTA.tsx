import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border py-3 px-4 md:hidden">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-xs text-primary font-semibold">
            <span className="line-through text-muted-foreground">₹1,999/-</span> FREE
          </p>
          <p className="text-sm font-medium text-foreground">
            HURRY! Recover Your Crypto — Safely
          </p>
        </div>
        <a href="https://forms.google.com/YOUR_FORM_ID" target="_blank" rel="noopener noreferrer">
          <Button variant="sticky" size="default" className="flex-shrink-0">
            Get Assessment Now
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
