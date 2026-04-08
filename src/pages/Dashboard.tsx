import { Link } from "react-router-dom";
import AnalysisCard from "@/components/AnalysisCard";
import { Button } from "@/components/ui/button";
import type { AnalysisResult } from "@/services/api";

interface Props {
  analysis: AnalysisResult | null;
}

/** Dashboard displaying the AI analysis results */
const Dashboard = ({ analysis }: Props) => {
  if (!analysis) {
    return (
      <div className="py-24 text-center px-4">
        <h2 className="text-2xl font-bold mb-2">No Analysis Yet</h2>
        <p className="text-muted-foreground mb-6">Upload a project first to see your analysis.</p>
        <Link to="/upload">
          <Button>Upload a Project</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Analysis Dashboard</h1>
            <p className="text-muted-foreground">AI-powered insights on your project's potential.</p>
          </div>
          <Link to="/startup">
            <Button className="gap-2">Generate Startup →</Button>
          </Link>
        </div>
        <AnalysisCard analysis={analysis} />
      </div>
    </div>
  );
};

export default Dashboard;
