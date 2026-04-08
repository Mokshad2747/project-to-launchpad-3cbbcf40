import type { StartupResult } from "@/services/api";
import { Rocket, DollarSign, Users, Lightbulb, Target, CheckCircle2 } from "lucide-react";

/** Displays the generated startup concept with rich cards and visual score */
const StartupCard = ({ startup }: { startup: StartupResult }) => (
  <div className="space-y-6 animate-fade-in">
    {/* Header — startup name & tagline */}
    <div className="rounded-xl border bg-card p-8 shadow-elegant text-center transition-shadow hover:shadow-glow">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-2xl font-bold">
        {startup.logo}
      </div>
      <h2 className="text-3xl font-extrabold">{startup.startupName}</h2>
      <p className="text-muted-foreground mt-2 text-lg italic">{startup.tagline}</p>
    </div>

    {/* Startup Potential Score */}
    <div className="rounded-xl border bg-card p-6 shadow-elegant transition-shadow hover:shadow-glow">
      <div className="flex items-center gap-3 mb-3">
        <Lightbulb className="h-5 w-5 text-primary" />
        <h3 className="font-semibold">Startup Potential Score</h3>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-5xl font-bold text-gradient">{startup.startupPotentialScore}</span>
        <span className="text-muted-foreground text-sm mb-2">/ 100</span>
      </div>
      <div className="mt-3 h-2.5 w-full rounded-full bg-secondary">
        <div
          className="h-2.5 rounded-full bg-primary transition-all duration-700"
          style={{ width: `${startup.startupPotentialScore}%` }}
        />
      </div>
    </div>

    {/* Problem & Target */}
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border bg-card p-5 shadow-elegant transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow">
        <div className="flex items-center gap-2 mb-2">
          <Target className="h-4 w-4 text-primary" />
          <h4 className="font-medium text-sm">Problem Solved</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{startup.problemSolved}</p>
      </div>
      <div className="rounded-xl border bg-card p-5 shadow-elegant transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow">
        <div className="flex items-center gap-2 mb-2">
          <Users className="h-4 w-4 text-primary" />
          <h4 className="font-medium text-sm">Target Customers</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{startup.targetCustomers}</p>
      </div>
    </div>

    {/* Key Features */}
    <div className="rounded-xl border bg-card p-5 shadow-elegant transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow">
      <div className="flex items-center gap-2 mb-3">
        <CheckCircle2 className="h-4 w-4 text-primary" />
        <h4 className="font-medium text-sm">Key Features</h4>
      </div>
      <ul className="grid gap-2 md:grid-cols-2">
        {startup.keyFeatures.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>

    {/* Business & Revenue Model */}
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border bg-card p-5 shadow-elegant transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow">
        <div className="flex items-center gap-2 mb-2">
          <Rocket className="h-4 w-4 text-primary" />
          <h4 className="font-medium text-sm">Business Model</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{startup.businessModel}</p>
      </div>
      <div className="rounded-xl border bg-card p-5 shadow-elegant transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow">
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="h-4 w-4 text-primary" />
          <h4 className="font-medium text-sm">Revenue Model</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{startup.revenueModel}</p>
      </div>
    </div>
  </div>
);

export default StartupCard;
