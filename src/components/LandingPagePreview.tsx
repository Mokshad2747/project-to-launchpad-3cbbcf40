import type { LandingResult } from "@/services/api";
import { Check, Sparkles, ArrowRight, Star, Zap, Share2, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

/**
 * Full startup landing page — designed to look like a real product website.
 * Includes hero, product description, benefits, features, pricing, and CTA sections.
 */
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
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden rounded-2xl bg-hero border py-20 md:py-28 px-6 text-center mb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(235_65%_55%/0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(260_70%_60%/0.06),transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card/80 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6 shadow-elegant">
            <Sparkles className="h-3 w-3 text-primary" />
            AI-Generated Startup
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            {data.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            {data.heroTagline}
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-[hsl(260_70%_60%)] hover:opacity-90 transition-opacity text-base px-8">
              {data.callToAction} <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={handleShare}>
              <Share2 className="h-4 w-4" /> Share
            </Button>
          </div>
        </div>
      </section>

      {/* ── Product Description ── */}
      <section className="max-w-2xl mx-auto text-center mb-16 px-4">
        <h2 className="text-2xl font-bold mb-4">What We Do</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">{data.productDescription}</p>
      </section>

      {/* ── Key Benefits ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {data.keyBenefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl border bg-card p-5 shadow-elegant transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                <Star className="h-5 w-5 text-accent-foreground" />
              </div>
              <p className="text-sm leading-relaxed pt-2">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Feature Highlights ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Features</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {data.featureHighlights.map((feature, i) => (
            <div
              key={i}
              className="rounded-xl border bg-card p-5 shadow-elegant transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow text-center"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Zap className="h-5 w-5 text-accent-foreground" />
              </div>
              <p className="text-sm font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing Concept ── */}
      <section className="mb-16">
        <div className="rounded-2xl border bg-gradient-to-br from-card to-accent/30 p-8 md:p-12 text-center shadow-elegant">
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto text-lg">
            {data.pricingIdea}
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="rounded-2xl bg-primary p-10 md:p-16 text-center shadow-glow mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Join the next generation of student-founders turning ideas into reality.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Button
            size="lg"
            variant="secondary"
            className="gap-2 text-base px-8"
          >
            {data.callToAction} <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={handleShare}
          >
            <Copy className="h-4 w-4" /> Copy Link
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPagePreview;
