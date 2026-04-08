import type { StartupResult } from "@/services/api";
import { Rocket, DollarSign, Users, Lightbulb, Target, CheckCircle2, Sparkles } from "lucide-react";

const ideaColors = [
  "linear-gradient(135deg, hsl(29 100% 50%), hsl(15 100% 45%))",
  "linear-gradient(135deg, hsl(35 100% 50%), hsl(25 90% 45%))",
  "linear-gradient(135deg, hsl(20 100% 55%), hsl(10 90% 50%))",
];

interface Props {
  startup: StartupResult;
  index?: number;
  compact?: boolean;
}

const StartupCard = ({ startup, index = 0, compact = false }: Props) => {
  const gradient = ideaColors[index % ideaColors.length];

  if (compact) {
    return (
      <div className="glass-card p-6 space-y-4 h-full animate-fade-in">
        {/* Header */}
        <div className="text-center">
          <div
            className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold"
            style={{ background: gradient }}
          >
            <span className="text-primary-foreground">{startup.logo}</span>
          </div>
          <h3 className="font-display text-xl font-extrabold text-foreground">{startup.startupName}</h3>
          <p className="text-muted-foreground mt-1 text-sm italic">{startup.tagline}</p>
        </div>

        {/* Score */}
        <div className="flex items-center gap-2">
          <Lightbulb className="h-4 w-4 text-primary shrink-0" />
          <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-2 rounded-full transition-all duration-700"
              style={{ width: `${startup.startupPotentialScore}%`, background: gradient }}
            />
          </div>
          <span className="text-sm font-bold text-gradient">{startup.startupPotentialScore}</span>
        </div>

        {/* Problem */}
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <Target className="h-3.5 w-3.5 text-primary" />
            <h4 className="font-medium text-xs uppercase tracking-wide text-muted-foreground">Problem</h4>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">{startup.problemSolved}</p>
        </div>

        {/* Solution */}
        {startup.solution && (
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <h4 className="font-medium text-xs uppercase tracking-wide text-muted-foreground">Solution</h4>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">{startup.solution}</p>
          </div>
        )}

        {/* Target */}
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <Users className="h-3.5 w-3.5 text-primary" />
            <h4 className="font-medium text-xs uppercase tracking-wide text-muted-foreground">Target Users</h4>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">{startup.targetCustomers}</p>
        </div>

        {/* Monetization */}
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <DollarSign className="h-3.5 w-3.5 text-primary" />
            <h4 className="font-medium text-xs uppercase tracking-wide text-muted-foreground">Monetization</h4>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">{startup.revenueModel}</p>
        </div>

        {/* Key Features */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
            <h4 className="font-medium text-xs uppercase tracking-wide text-muted-foreground">MVP Features</h4>
          </div>
          <ul className="space-y-1.5">
            {startup.keyFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Full-size card (legacy single-idea view)
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="glass-card p-10 text-center">
        <div
          className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl text-3xl font-bold"
          style={{ background: gradient }}
        >
          <span className="text-primary-foreground">{startup.logo}</span>
        </div>
        <h2 className="font-display text-4xl font-extrabold text-foreground">{startup.startupName}</h2>
        <p className="text-muted-foreground mt-3 text-lg italic">{startup.tagline}</p>
      </div>

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
            style={{ width: `${startup.startupPotentialScore}%`, background: gradient }}
          />
        </div>
      </div>

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
};

export default StartupCard;
