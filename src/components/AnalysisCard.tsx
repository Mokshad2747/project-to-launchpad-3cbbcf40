import type { AnalysisResult } from "@/services/api";
import { TrendingUp, Users, Lightbulb, Target, Swords } from "lucide-react";

const AnalysisCard = ({ analysis }: { analysis: AnalysisResult }) => {
  const cards = [
    { icon: <Target className="h-5 w-5 text-primary" />, title: "Problem Summary", content: analysis.problemSummary },
    { icon: <Users className="h-5 w-5 text-primary" />, title: "Target Users", content: analysis.targetUsers.join(" · ") },
    { icon: <TrendingUp className="h-5 w-5 text-primary" />, title: "Market Opportunity", content: analysis.marketOpportunity },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Innovation score */}
      <div className="glass-card-hover p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
            <Lightbulb className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-display font-semibold text-lg">Innovation Score</h3>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-6xl font-extrabold text-gradient">{analysis.innovationScore}</span>
          <span className="text-muted-foreground text-sm mb-3">/ 100</span>
        </div>
        <div className="mt-4 h-3 w-full rounded-full bg-secondary overflow-hidden">
          <div
            className="h-3 rounded-full transition-all duration-700"
            style={{
              width: `${analysis.innovationScore}%`,
              background: "linear-gradient(90deg, hsl(22 100% 50%), hsl(340 80% 55%))",
            }}
          />
        </div>
      </div>

      {/* Info cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="glass-card-hover p-6">
            <div className="flex items-center gap-2 mb-3">
              {c.icon}
              <h4 className="font-medium text-sm text-foreground">{c.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.content}</p>
          </div>
        ))}
      </div>

      {/* Competitors */}
      <div className="glass-card-hover p-6">
        <div className="flex items-center gap-2 mb-4">
          <Swords className="h-5 w-5 text-primary" />
          <h4 className="font-display font-medium">Competitors</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {analysis.competitors.map((c) => (
            <span key={c} className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-medium text-primary">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Strengths & improvements */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass-card-hover p-6">
          <h4 className="font-display font-medium mb-4">✅ Strengths</h4>
          <ul className="space-y-2">
            {analysis.strengths.map((s) => (
              <li key={s} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-card-hover p-6">
          <h4 className="font-display font-medium mb-4">💡 Improvements</h4>
          <ul className="space-y-2">
            {analysis.improvements.map((s) => (
              <li key={s} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalysisCard;
