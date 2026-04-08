import type { LandingResult } from "@/services/api";
import { Check, Sparkles, ArrowRight, Star, Zap, Share2, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const LandingPagePreview = ({ data }: { data: LandingResult }) => {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "The startup page URL has been copied to your clipboard.",
    });
  };

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border/50 py-24 md:py-32 px-8 text-center mb-16">
        {/* Glow effects */}
        <div className="absolute inset-0 bg-card/80" />
        <div className="absolute top-0 left-1/3 w-[400px] h-[300px] rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[250px] rounded-full bg-accent/6 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur px-5 py-2 text-xs font-medium text-primary mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            AI-Generated Startup
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight mb-5 text-foreground">
            {data.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            {data.heroTagline}
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="btn-gradient px-10 py-4 text-base gap-2 inline-flex items-center">
              {data.callToAction} <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 backdrop-blur px-8 py-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
            >
              <Share2 className="h-4 w-4" /> Share
            </button>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="max-w-2xl mx-auto text-center mb-16 px-4">
        <h2 className="font-display text-2xl font-bold mb-5 text-foreground">What We Do</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">{data.productDescription}</p>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-center mb-10 text-foreground">Why Choose Us</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {data.keyBenefits.map((benefit, i) => (
            <div key={i} className="glass-card-hover flex items-start gap-4 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm leading-relaxed pt-2 text-muted-foreground">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-center mb-10 text-foreground">Features</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {data.featureHighlights.map((feature, i) => (
            <div key={i} className="glass-card-hover p-6 text-center">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-16">
        <div className="glass-card p-10 md:p-14 text-center">
          <h2 className="font-display text-2xl font-bold mb-5 text-foreground">Pricing</h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto text-lg">
            {data.pricingIdea}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="rounded-3xl p-12 md:p-20 text-center mb-8 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(22 100% 50%), hsl(340 80% 55%))" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,hsl(0_0%_0%/0.3)_100%)]" />
        <div className="relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/70 mb-10 max-w-lg mx-auto">
            Join the next generation of student-founders turning ideas into reality.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-10 py-4 text-base font-semibold text-background hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105">
              {data.callToAction} <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <Copy className="h-4 w-4" /> Copy Link
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPagePreview;
