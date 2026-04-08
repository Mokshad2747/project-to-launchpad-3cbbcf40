import type { AnalysisResult } from "@/services/api";
import { TrendingUp, Users, Lightbulb, Target } from "lucide-react";

/** Displays AI analysis results as a set of styled cards */
const AnalysisCard = ({ analysis }: { analysis: AnalysisResult }) => {
  const cards = [
    {
      icon: <Target className="h-5 w-5 text-primary" />,
      title: "Problem Summary",
      content: analysis.problemSummary,
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: "Target Users",
      content: analysis.targetUsers.join(" · "),
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: "Market Opportunity",
      content: analysis.marketOpportunity,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Innovation score */}
      <div className="rounded-xl border bg-card p-6 shadow-elegant">
        <div className="flex items-center gap-3 mb-3">
          <Lightbulb className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Innovation Score</h3>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-5xl font-bold text-gradient">{analysis.innovationScore}</span>
          <span className="text-muted-foreground text-sm mb-2">/ 100</span>
        </div>
        <div className="mt-3 h-2 w-full rounded-full bg-secondary">
          <div
            className="h-2 rounded-full bg-primary transition-all duration-700"
            style={{ width: `${analysis.innovationScore}%` }}
          />
        </div>
      </div>

      {/* Info cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="rounded-xl border bg-card p-5 shadow-elegant">
            <div className="flex items-center gap-2 mb-2">
              {c.icon}
              <h4 className="font-medium text-sm">{c.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.content}</p>
          </div>
        ))}
      </div>

      {/* Strengths & improvements */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-5 shadow-elegant">
          <h4 className="font-medium mb-3">✅ Strengths</h4>
          <ul className="space-y-1.5">
            {analysis.strengths.map((s) => (
              <li key={s} className="text-sm text-muted-foreground">• {s}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border bg-card p-5 shadow-elegant">
          <h4 className="font-medium mb-3">💡 Improvements</h4>
          <ul className="space-y-1.5">
            {analysis.improvements.map((s) => (
              <li key={s} className="text-sm text-muted-foreground">• {s}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalysisCard;
