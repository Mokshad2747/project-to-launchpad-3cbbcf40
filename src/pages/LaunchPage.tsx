import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LandingPagePreview from "@/components/LandingPagePreview";
import { generateLanding, type ProjectInput, type StartupResult, type LandingResult } from "@/services/api";
import { Loader2 } from "lucide-react";

interface Props {
  projectInput: ProjectInput | null;
  startup: StartupResult | null;
}

/** Auto-generates and displays the startup landing page preview */
const LaunchPage = ({ projectInput, startup }: Props) => {
  const [landing, setLanding] = useState<LandingResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (projectInput && startup && !landing) {
      setLoading(true);
      generateLanding(projectInput, startup).then((r) => {
        setLanding(r);
        setLoading(false);
      });
    }
  }, [projectInput, startup, landing]);

  if (!projectInput || !startup) {
    return (
      <div className="py-24 text-center px-4">
        <h2 className="text-2xl font-bold mb-2">Nothing to Launch Yet</h2>
        <p className="text-muted-foreground mb-6">Generate a startup concept first.</p>
        <Link to="/upload"><Button>Start from Upload</Button></Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground">Generating your landing page...</p>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Launch Page Preview</h1>
          <p className="text-muted-foreground">Your generated startup landing page.</p>
        </div>
        {landing && <LandingPagePreview data={landing} />}
      </div>
    </div>
  );
};

export default LaunchPage;
