import { Link } from "react-router-dom";
import AnalysisCard from "@/components/AnalysisCard";
import type { AnalysisResult } from "@/services/api";

interface Props {
  analysis: AnalysisResult | null;
}

const Dashboard = ({ analysis }: Props) => {
  if (!analysis) {
    return (
      <div className="py-28 text-center px-4">
        <h2 className="font-display text-2xl font-bold mb-2">No Analysis Yet</h2>
        <p className="text-muted-foreground mb-8">Upload a project first to see your analysis.</p>
        <Link to="/upload">
          <button className="btn-gradient px-8 py-3">Upload a Project</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">Analysis Dashboard</h1>
            <p className="text-muted-foreground">AI-powered insights on your project's potential.</p>
          </div>
          <Link to="/startup">
            <button className="btn-gradient px-8 py-3 text-sm gap-2 inline-flex items-center">
              Generate Startup Idea ✨
            </button>
          </Link>
        </div>
        <AnalysisCard analysis={analysis} />
      </div>
    </div>
  );
};

export default Dashboard;
