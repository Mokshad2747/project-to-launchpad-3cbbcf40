import ProjectUploadForm from "@/components/ProjectUploadForm";
import type { ProjectInput, AnalysisResult } from "@/services/api";

interface Props {
  onAnalysisComplete: (input: ProjectInput, result: AnalysisResult) => void;
}

/** Upload page — wraps the project upload form */
const Upload = ({ onAnalysisComplete }: Props) => (
  <div className="py-16 px-4">
    <div className="container mx-auto max-w-xl">
      <h1 className="text-3xl font-bold mb-2">Upload Your Project</h1>
      <p className="text-muted-foreground mb-8">
        Tell us about your college project and we'll analyze its startup potential.
      </p>
      <div className="rounded-xl border bg-card p-6 md:p-8 shadow-elegant">
        <ProjectUploadForm onAnalysisComplete={onAnalysisComplete} />
      </div>
    </div>
  </div>
);

export default Upload;
