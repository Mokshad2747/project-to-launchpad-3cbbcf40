import type { StartupResult } from "@/services/api";
import { Rocket, DollarSign, Users, Lightbulb, Target, CheckCircle2 } from "lucide-react";

const StartupCard = ({ startup }: { startup: StartupResult }) => (
  <div className="space-y-6 animate-fade-in">
    {/* Header */}
    <div className="glass-card p-10 text-center">
      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl text-3xl font-bold"
        style={{ background: "linear-gradient(135deg, hsl(22 100% 50%), hsl(340 80% 55%))" }}>
        <span className="text-primary-foreground">{startup.logo}</span>
      </div>
      <h2 className="font-display text-4xl font-extrabold text-foreground">{startup.startupName}</h2>
      <p className="text-muted-foreground mt-3 text-lg italic">{startup.tagline}</p>
    </div>

    {/* Potential Score */}
    <div className="glass-card-hover p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
          <Lightbulb className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-display font-semibold text-lg">Startup Potential Score</h3>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-6xl font-extrabold text-gradient">{startup.startupPotentialScore}</span>
        <span className="text-muted-foreground text-sm mb-3">/ 100</span>
      </div>
      <div className="mt-4 h-3 w-full rounded-full bg-secondary overflow-hidden">
        <div
          className="h-3 rounded-full transition-all duration-700"
          style={{ width: `${startup.startupPotentialScore}%`, background: "linear-gradient(90deg, hsl(22 100% 50%), hsl(340 80% 55%))" }}
        />
      </div>
    </div>

    {/* Problem & Target */}
    <div className="grid gap-4 md:grid-cols-2">
      <div className="glass-card-hover p-6">
        <div className="flex items-center gap-2 mb-3">
          <Target className="h-4 w-4 text-primary" />
          <h4 className="font-medium text-sm">Problem Solved</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{startup.problemSolved}</p>
      </div>
      <div className="glass-card-hover p-6">
        <div className="flex items-center gap-2 mb-3">
          <Users className="h-4 w-4 text-primary" />
          <h4 className="font-medium text-sm">Target Customers</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{startup.targetCustomers}</p>
      </div>
    </div>

    {/* Key Features */}
    <div className="glass-card-hover p-6">
      <div className="flex items-center gap-2 mb-4">
        <CheckCircle2 className="h-4 w-4 text-primary" />
        <h4 className="font-medium text-sm">Key Features</h4>
      </div>
      <ul className="grid gap-3 md:grid-cols-2">
        {startup.keyFeatures.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>

    {/* Business & Revenue */}
    <div className="grid gap-4 md:grid-cols-2">
      <div className="glass-card-hover p-6">
        <div className="flex items-center gap-2 mb-3">
          <Rocket className="h-4 w-4 text-primary" />
          <h4 className="font-medium text-sm">Business Model</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{startup.businessModel}</p>
      </div>
      <div className="glass-card-hover p-6">
        <div className="flex items-center gap-2 mb-3">
          <DollarSign className="h-4 w-4 text-primary" />
          <h4 className="font-medium text-sm">Revenue Model</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{startup.revenueModel}</p>
      </div>
    </div>
  </div>
);

export default StartupCard;
