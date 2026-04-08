import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StartupCard from "@/components/StartupCard";
import { generateStartup, type ProjectInput, type StartupResult } from "@/services/api";
import { Loader2 } from "lucide-react";

interface Props {
  projectInput: ProjectInput | null;
  startup: StartupResult | null;
  onStartupGenerated: (s: StartupResult) => void;
}

/** Page that generates and displays a startup concept */
const StartupGenerator = ({ projectInput, startup, onStartupGenerated }: Props) => {
  const [loading, setLoading] = useState(false);

  if (!projectInput) {
    return (
      <div className="py-24 text-center px-4">
        <h2 className="text-2xl font-bold mb-2">No Project Data</h2>
        <p className="text-muted-foreground mb-6">Upload and analyze a project first.</p>
        <Link to="/upload"><Button>Upload a Project</Button></Link>
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
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Startup Generator</h1>
            <p className="text-muted-foreground">Transform your project into a startup concept.</p>
          </div>
          <div className="flex gap-2">
            {!startup && (
              <Button onClick={handleGenerate} disabled={loading} size="lg" className="gap-2 bg-gradient-to-r from-primary to-[hsl(260_70%_60%)] hover:opacity-90 transition-opacity">
                {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Generating...</> : "Generate Startup Idea ✨"}
              </Button>
            )}
            {startup && (
              <Link to="/launch"><Button className="gap-2">Launch Page →</Button></Link>
            )}
          </div>
        </div>

        {startup ? (
          <>
            <StartupCard startup={startup} />
            <div className="mt-10 text-center">
              <Link to="/launch">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-[hsl(260_70%_60%)] hover:opacity-90 transition-opacity">
                  🚀 Launch Startup Page
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="rounded-xl border bg-card p-16 text-center shadow-elegant">
            <p className="text-muted-foreground">Click "Generate Startup Idea" to create your startup concept.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartupGenerator;
