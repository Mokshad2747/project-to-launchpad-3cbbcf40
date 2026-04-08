import { Link } from "react-router-dom";
import { ArrowRight, Upload, Brain, Rocket, Lightbulb, BarChart3, Sparkles, Globe, Zap, Target, Clock, Share2, Layout, LineChart, FileText } from "lucide-react";

const steps = [
  { icon: <Upload className="h-6 w-6" />, title: "Upload Project", desc: "Describe your college project with its tech stack and details." },
  { icon: <Brain className="h-6 w-6" />, title: "AI Analyzes Idea", desc: "Our AI evaluates feasibility, innovation, and market fit." },
  { icon: <Lightbulb className="h-6 w-6" />, title: "Generate Startup", desc: "Get a full startup concept with business model and features." },
  { icon: <Rocket className="h-6 w-6" />, title: "Launch Page", desc: "Instantly create a shareable startup landing page." },
];

const features = [
  { icon: <BarChart3 className="h-7 w-7" />, title: "AI Project Analyzer", desc: "Deep analysis of feasibility, scalability, and market potential using AI." },
  { icon: <Sparkles className="h-7 w-7" />, title: "Startup Idea Generator", desc: "Transform any project into a complete startup concept with revenue models." },
  { icon: <Target className="h-7 w-7" />, title: "Market Opportunity Insights", desc: "Discover target customers, competitors, and market gaps instantly." },
  { icon: <Globe className="h-7 w-7" />, title: "Instant Landing Page Builder", desc: "Generate a polished marketing page ready to share with the world." },
];

const benefits = [
  { icon: <Clock className="h-6 w-6" />, title: "Launch Faster", desc: "Go from college project to startup concept in under 5 minutes." },
  { icon: <Zap className="h-6 w-6" />, title: "AI-Powered Validation", desc: "Get data-driven insights on your idea's real-world potential." },
  { icon: <Share2 className="h-6 w-6" />, title: "Share Instantly", desc: "Create professional startup pages you can share with anyone." },
];

const previews = [
  { icon: <LineChart className="h-8 w-8" />, title: "Analysis Dashboard", desc: "Visual scores for feasibility, innovation, and market fit with detailed breakdowns." },
  { icon: <FileText className="h-8 w-8" />, title: "Startup Generator", desc: "Complete startup concept with business model, target customers, and key features." },
  { icon: <Layout className="h-8 w-8" />, title: "Generated Landing Page", desc: "A full marketing website with hero section, features, pricing, and call-to-action." },
];

const Landing = () => (
  <div className="flex flex-col">
    {/* Animated background */}
    <div className="fixed inset-0 animated-gradient-bg pointer-events-none -z-10" />

    {/* ── 1. HERO ── */}
    <section className="relative py-32 md:py-44 px-4 overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md px-5 py-2 text-xs font-medium text-primary mb-8">
          <Zap className="h-3.5 w-3.5" />
          AI-Powered Project Analysis
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6">
          Turn Your College Project{" "}
          <span className="text-gradient">Into a Startup</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Upload your project, get instant AI analysis, and generate a complete startup concept
          with a shareable landing page — all in minutes.
        </p>

        <Link to="/upload">
          <button className="btn-gradient px-12 py-4 text-lg gap-2 inline-flex items-center">
            Analyze Your Project <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>
    </section>

    {/* ── 2. HOW IT WORKS ── */}
    <section className="py-28 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase text-center mb-3">Process</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
          How It Works
        </h2>

        <div className="grid gap-6 md:grid-cols-4 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />

          {steps.map((s, i) => (
            <div key={s.title} className="glass-card-hover p-8 text-center relative group">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                {s.icon}
              </div>
              <span className="absolute top-4 right-4 text-xs font-bold text-primary/40">0{i + 1}</span>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── 3. PLATFORM FEATURES ── */}
    <section className="py-28 px-4 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase text-center mb-3">Features</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Everything You Need
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          From idea validation to launch — one platform handles it all.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="glass-card-hover p-8 flex gap-5 items-start group">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                {f.icon}
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── 4. VISUAL FLOWCHART ── */}
    <section className="py-28 px-4">
      <div className="container mx-auto max-w-4xl">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase text-center mb-3">Journey</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
          From Project to Product
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {[
            { label: "Student Project", icon: <FileText className="h-5 w-5" /> },
            { label: "AI Analysis", icon: <Brain className="h-5 w-5" /> },
            { label: "Startup Idea", icon: <Lightbulb className="h-5 w-5" /> },
            { label: "Product Launch", icon: <Rocket className="h-5 w-5" /> },
          ].map((node, i, arr) => (
            <div key={node.label} className="flex items-center">
              <div className="flex flex-col items-center gap-3 px-6 py-5 rounded-2xl border border-primary/30 bg-card/60 backdrop-blur-sm min-w-[160px] hover:border-primary/60 hover:shadow-glow transition-all duration-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {node.icon}
                </div>
                <span className="text-sm font-semibold text-foreground">{node.label}</span>
              </div>
              {i < arr.length - 1 && (
                <ArrowRight className="h-5 w-5 text-primary/40 mx-3 hidden md:block" />
              )}
              {i < arr.length - 1 && (
                <div className="h-6 w-px bg-primary/30 md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── 5. PRODUCT PREVIEW ── */}
    <section className="py-28 px-4 relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase text-center mb-3">Preview</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
          See What You'll Get
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Three powerful outputs from a single project upload.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {previews.map((p) => (
            <div key={p.title} className="glass-card-hover p-8 text-center group">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                {p.icon}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── 6. BENEFITS ── */}
    <section className="py-28 px-4">
      <div className="container mx-auto max-w-5xl">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase text-center mb-3">Benefits</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Why ProjectPulse?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="glass-card-hover p-8 text-center group">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                {b.icon}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── 7. FINAL CTA ── */}
    <section className="py-28 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="relative rounded-3xl overflow-hidden p-14 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
          <div className="absolute inset-0 border border-primary/20 rounded-3xl" />
          <div className="absolute top-0 left-1/3 w-[300px] h-[200px] rounded-full bg-primary/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-5 text-foreground leading-tight">
              Your Next Startup Might Already Be a{" "}
              <span className="text-gradient">College Project</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Stop letting great ideas sit in your assignments folder. Turn them into real startups today.
            </p>
            <Link to="/upload">
              <button className="btn-gradient px-12 py-4 text-lg gap-2 inline-flex items-center">
                Start Building <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Landing;
