import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/30 py-10">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent">
          <Zap className="h-3 w-3 text-primary-foreground" />
        </div>
        <span className="font-display font-semibold text-sm text-foreground">ProjectPulse</span>
      </div>
      <p className="text-xs text-muted-foreground">
        Turn college projects into startups — powered by AI.
      </p>
    </div>
  </footer>
);

export default Footer;
