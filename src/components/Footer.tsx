import { Zap } from "lucide-react";

/** Simple footer with branding */
const Footer = () => (
  <footer className="border-t bg-secondary/50 py-8">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Zap className="h-4 w-4 text-primary" />
        <span className="font-semibold text-sm">ProjectPulse</span>
      </div>
      <p className="text-xs text-muted-foreground">
        Turn college projects into startups — powered by AI.
      </p>
    </div>
  </footer>
);

export default Footer;
