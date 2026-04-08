import type { LandingResult } from "@/services/api";
import { Brain, Rocket, BarChart3, Briefcase, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="h-6 w-6 text-primary" />,
  rocket: <Rocket className="h-6 w-6 text-primary" />,
  chart: <BarChart3 className="h-6 w-6 text-primary" />,
  briefcase: <Briefcase className="h-6 w-6 text-primary" />,
};

/** Renders a preview of the generated startup landing page */
const LandingPagePreview = ({ data }: { data: LandingResult }) => (
  <div className="space-y-12 animate-fade-in">
    {/* Hero */}
    <section className="text-center py-16 px-4 rounded-2xl bg-hero border">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.heroTitle}</h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">{data.heroSubtitle}</p>
      <Button size="lg">{data.cta}</Button>
    </section>

    {/* Description */}
    <section className="text-center max-w-2xl mx-auto">
      <p className="text-muted-foreground leading-relaxed">{data.productDescription}</p>
    </section>

    {/* Features */}
    <section className="grid gap-6 md:grid-cols-2">
      {data.features.map((f) => (
        <div key={f.title} className="rounded-xl border bg-card p-6 shadow-elegant">
          <div className="mb-3">{iconMap[f.icon] || <Rocket className="h-6 w-6 text-primary" />}</div>
          <h3 className="font-semibold mb-1">{f.title}</h3>
          <p className="text-sm text-muted-foreground">{f.description}</p>
        </div>
      ))}
    </section>

    {/* Pricing */}
    <section>
      <h2 className="text-2xl font-bold text-center mb-8">Pricing</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {data.pricing.map((p, i) => (
          <div
            key={p.plan}
            className={`rounded-xl border p-6 ${
              i === 1 ? "bg-primary text-primary-foreground shadow-glow" : "bg-card shadow-elegant"
            }`}
          >
            <h3 className="font-semibold text-lg">{p.plan}</h3>
            <p className="text-2xl font-bold mt-1 mb-4">{p.price}</p>
            <ul className="space-y-2">
              {p.features.map((feat) => (
                <li key={feat} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default LandingPagePreview;
