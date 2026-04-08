import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Rocket } from "lucide-react";

/** Landing page — hero + feature highlights */
const Landing = () => (
  <div className="flex flex-col">
    {/* Animated gradient background layer */}
    <div className="fixed inset-0 animated-gradient-bg pointer-events-none -z-10" />

    {/* Hero */}
    <section className="relative py-28 md:py-40 px-4 overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto text-center max-w-3xl relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 backdrop-blur-md px-5 py-2 text-xs font-medium text-muted-foreground mb-8 shadow-elegant">
          <Zap className="h-3.5 w-3.5 text-primary" />
          AI-Powered Project Analysis
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Turn College Projects into{" "}
          <span className="text-gradient">Startup Ideas</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Upload your project, get AI analysis, and generate a complete startup concept with a
          shareable landing page — in minutes.
        </p>
        <Link to="/upload">
          <button className="btn-gradient px-10 py-4 text-lg gap-2 inline-flex items-center">
            Get Started <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>
    </section>

    {/* Features */}
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-3xl font-bold text-center mb-14 text-foreground">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: <Zap className="h-6 w-6 text-primary" />, title: "Upload", desc: "Describe your college project and tech stack." },
            { icon: <Brain className="h-6 w-6 text-primary" />, title: "Analyze", desc: "AI evaluates market fit, innovation, and potential." },
            { icon: <Rocket className="h-6 w-6 text-primary" />, title: "Launch", desc: "Get a startup concept and a ready-to-share landing page." },
          ].map((f) => (
            <div key={f.title} className="glass-card-hover p-8 text-center group">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Landing;
