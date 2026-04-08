import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Rocket } from "lucide-react";

/** Landing page — hero + feature highlights */
const Landing = () => (
  <div className="flex flex-col">
    {/* Hero */}
    <section className="bg-hero py-24 md:py-32 px-4">
      <div className="container mx-auto text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6 shadow-elegant">
          <Zap className="h-3 w-3 text-primary" />
          AI-Powered Project Analysis
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Turn College Projects into{" "}
          <span className="text-gradient">Startup Ideas</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          Upload your project, get AI analysis, and generate a complete startup concept with a
          shareable landing page — in minutes.
        </p>
        <Link to="/upload">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: <Zap className="h-6 w-6 text-primary" />, title: "Upload", desc: "Describe your college project and tech stack." },
            { icon: <Brain className="h-6 w-6 text-primary" />, title: "Analyze", desc: "AI evaluates market fit, innovation, and potential." },
            { icon: <Rocket className="h-6 w-6 text-primary" />, title: "Launch", desc: "Get a startup concept and a ready-to-share landing page." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border bg-card p-6 shadow-elegant text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                {f.icon}
              </div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Landing;
