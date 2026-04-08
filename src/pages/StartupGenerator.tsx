import { useState } from "react";
import { Link } from "react-router-dom";
import StartupCard from "@/components/StartupCard";
import { generateStartups, type ProjectInput, type StartupResult } from "@/services/api";
import { Loader2, ArrowRight, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface Props {
  projectInput: ProjectInput | null;
  startups: StartupResult[];
  onStartupsGenerated: (s: StartupResult[]) => void;
  onSelectStartup: (s: StartupResult) => void;
  selectedStartup: StartupResult | null;
}

const StartupGenerator = ({ projectInput, startups, onStartupsGenerated, onSelectStartup, selectedStartup }: Props) => {
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
      const results = await generateStartups(projectInput);
      onStartupsGenerated(results);
      toast.success("3 startup ideas generated!");
    } catch (err: any) {
      toast.error(err.message || "Failed to generate ideas. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 px-4 relative">
      <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">Startup Generator</h1>
            <p className="text-muted-foreground">AI generates 3 unique startup concepts from your project.</p>
          </div>
          <div className="flex gap-3">
            {startups.length === 0 ? (
              <button onClick={handleGenerate} disabled={loading} className="btn-gradient px-8 py-3 text-sm gap-2 inline-flex items-center disabled:opacity-50">
                {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Generating...</> : "Generate Startup Ideas ✨"}
              </button>
            ) : (
              <>
                <button onClick={handleGenerate} disabled={loading} className="glass-card px-6 py-3 text-sm gap-2 inline-flex items-center hover:border-primary/40 transition-colors disabled:opacity-50">
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
                  Regenerate
                </button>
                {selectedStartup && (
                  <Link to="/launch">
                    <button className="btn-gradient px-8 py-3 text-sm gap-2 inline-flex items-center">
                      Launch Page <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>

        {loading && startups.length === 0 && (
          <div className="glass-card p-20 text-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Our AI is crafting 3 unique startup concepts...</p>
            <p className="text-muted-foreground/60 text-sm mt-2">This may take 10-15 seconds</p>
          </div>
        )}

        {!loading && startups.length === 0 && (
          <div className="glass-card p-20 text-center">
            <p className="text-muted-foreground">Click "Generate Startup Ideas" to create 3 unique concepts.</p>
          </div>
        )}

        {startups.length > 0 && (
          <>
            <p className="text-sm text-muted-foreground mb-6">
              {selectedStartup ? "✅ Idea selected — click \"Launch Page\" to build the landing page." : "👇 Click on an idea to select it for the Launch Page."}
            </p>
            <div className="grid gap-6 lg:grid-cols-3">
              {startups.map((s, i) => (
                <div
                  key={`${s.startupName}-${i}`}
                  onClick={() => onSelectStartup(s)}
                  className={`cursor-pointer transition-all duration-300 rounded-2xl ${
                    selectedStartup?.startupName === s.startupName
                      ? "ring-2 ring-primary shadow-[0_0_30px_hsl(var(--primary)/0.3)] scale-[1.02]"
                      : "hover:scale-[1.01] hover:shadow-lg"
                  }`}
                >
                  <StartupCard startup={s} index={i} compact />
                </div>
              ))}
            </div>

            {selectedStartup && (
              <div className="mt-12 text-center">
                <Link to="/launch">
                  <button className="btn-gradient px-10 py-4 text-base gap-2 inline-flex items-center">
                    🚀 Launch Startup Page
                  </button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default StartupGenerator;
