import { useState } from "react";
import { Link } from "react-router-dom";
import StartupCard from "@/components/StartupCard";
import { generateStartup, type ProjectInput, type StartupResult } from "@/services/api";
import { Loader2, ArrowRight } from "lucide-react";

interface Props {
  projectInput: ProjectInput | null;
  startup: StartupResult | null;
  onStartupGenerated: (s: StartupResult) => void;
}

const StartupGenerator = ({ projectInput, startup, onStartupGenerated }: Props) => {
  const [loading, setLoading] = useState(false);

  if (!projectInput) {
    return (
      <div className="py-28 text-center px-4">
        <h2 className="font-display text-2xl font-bold mb-2">No Project Data</h2>
        <p className="text-muted-foreground mb-8">Upload and analyze a project first.</p>
        <Link to="/upload"><button className="btn-gradient px-8 py-3">Upload a Project</button></Link>
      </div>
    );
  }

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateStartup(projectInput);
      onStartupGenerated(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 px-4 relative">
      <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">Startup Generator</h1>
            <p className="text-muted-foreground">Transform your project into a startup concept.</p>
          </div>
          <div className="flex gap-3">
            {!startup && (
              <button onClick={handleGenerate} disabled={loading} className="btn-gradient px-8 py-3 text-sm gap-2 inline-flex items-center disabled:opacity-50">
                {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Generating...</> : "Generate Startup Idea ✨"}
              </button>
            )}
            {startup && (
              <Link to="/launch">
                <button className="btn-gradient px-8 py-3 text-sm gap-2 inline-flex items-center">
                  Launch Page <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            )}
          </div>
        </div>

        {startup ? (
          <>
            <StartupCard startup={startup} />
            <div className="mt-12 text-center">
              <Link to="/launch">
                <button className="btn-gradient px-10 py-4 text-base gap-2 inline-flex items-center">
                  🚀 Launch Startup Page
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="glass-card p-20 text-center">
            <p className="text-muted-foreground">Click "Generate Startup Idea" to create your startup concept.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartupGenerator;
