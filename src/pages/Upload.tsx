import ProjectUploadForm from "@/components/ProjectUploadForm";
import type { ProjectInput, AnalysisResult } from "@/services/api";

interface Props {
  onAnalysisComplete: (input: ProjectInput, result: AnalysisResult) => void;
}

const Upload = ({ onAnalysisComplete }: Props) => (
  <div className="py-20 px-4 relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
    <div className="container mx-auto max-w-xl relative z-10">
      <h1 className="font-display text-3xl font-bold mb-2 text-foreground">Upload Your Project</h1>
      <p className="text-muted-foreground mb-10">
        Tell us about your college project and we'll analyze its startup potential.
      </p>
      <div className="glass-card p-8 md:p-10">
        <ProjectUploadForm onAnalysisComplete={onAnalysisComplete} />
      </div>
    </div>
  </div>
);

export default Upload;
