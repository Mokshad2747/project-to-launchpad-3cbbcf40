import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Landing from "@/pages/Landing";
import Upload from "@/pages/Upload";
import Dashboard from "@/pages/Dashboard";
import StartupGenerator from "@/pages/StartupGenerator";
import LaunchPage from "@/pages/LaunchPage";
import NotFound from "@/pages/NotFound";
import type { ProjectInput, AnalysisResult, StartupResult } from "@/services/api";

const queryClient = new QueryClient();

/**
 * Root app component — manages shared state across pages
 * and provides routing with persistent navbar/footer layout.
 */
const App = () => {
  const [projectInput, setProjectInput] = useState<ProjectInput | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [startups, setStartups] = useState<StartupResult[]>([]);
  const [selectedStartup, setSelectedStartup] = useState<StartupResult | null>(null);

  const handleAnalysis = (input: ProjectInput, result: AnalysisResult) => {
    setProjectInput(input);
    setAnalysis(result);
    setStartups([]); // Reset downstream state
    setSelectedStartup(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/upload" element={<Upload onAnalysisComplete={handleAnalysis} />} />
                <Route path="/dashboard" element={<Dashboard analysis={analysis} />} />
                <Route
                  path="/startup"
                  element={
                    <StartupGenerator
                      projectInput={projectInput}
                      startups={startups}
                      onStartupsGenerated={setStartups}
                      onSelectStartup={setSelectedStartup}
                      selectedStartup={selectedStartup}
                    />
                  }
                />
                <Route path="/launch" element={<LaunchPage projectInput={projectInput} startup={selectedStartup} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
