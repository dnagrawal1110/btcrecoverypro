import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-lg font-display font-bold text-primary">BTC</span>
              <span className="text-lg font-display font-bold text-foreground">RECOVERYPRO</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-muted-foreground">
          © 2024 BTC Recovery Pro. All rights reserved.
        </p>
        <p className="text-center text-xs text-muted-foreground mt-2">
          We only recover crypto with verified owner consent.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
