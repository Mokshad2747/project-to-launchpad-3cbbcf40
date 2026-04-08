import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { analyzeProject, type ProjectInput, type AnalysisResult } from "@/services/api";
import { Loader2 } from "lucide-react";

interface Props {
  onAnalysisComplete: (input: ProjectInput, result: AnalysisResult) => void;
}

const ProjectUploadForm = ({ onAnalysisComplete }: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ProjectInput>({
    title: "",
    description: "",
    techStack: "",
    githubLink: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await analyzeProject(form);
      onAnalysisComplete(form, result);
      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  const update = (field: keyof ProjectInput, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-sm text-muted-foreground">Project Title</Label>
        <Input
          id="title"
          placeholder="e.g. SmartNotes AI"
          value={form.title}
          onChange={(e) => update("title", e.target.value)}
          required
          className="bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm text-muted-foreground">Project Description</Label>
        <Textarea
          id="description"
          placeholder="Describe what your project does, the problem it solves, and how it works..."
          rows={5}
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          required
          className="bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="techStack" className="text-sm text-muted-foreground">Tech Stack</Label>
        <Input
          id="techStack"
          placeholder="e.g. React, Node.js, PostgreSQL"
          value={form.techStack}
          onChange={(e) => update("techStack", e.target.value)}
          required
          className="bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="github" className="text-sm text-muted-foreground">GitHub Link (optional)</Label>
        <Input
          id="github"
          placeholder="https://github.com/..."
          value={form.githubLink}
          onChange={(e) => update("githubLink", e.target.value)}
          className="bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl"
        />
      </div>

      <button type="submit" className="btn-gradient w-full py-4 text-base disabled:opacity-50" disabled={loading}>
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Analyzing...
          </span>
        ) : (
          "Analyze Project →"
        )}
      </button>
    </form>
  );
};

export default ProjectUploadForm;
