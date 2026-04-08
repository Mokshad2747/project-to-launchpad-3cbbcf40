import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { analyzeProject, type ProjectInput, type AnalysisResult } from "@/services/api";
import { Loader2 } from "lucide-react";

interface Props {
  onAnalysisComplete: (input: ProjectInput, result: AnalysisResult) => void;
}

/**
 * Form for uploading/describing a college project.
 * On submit, calls the mock analysis API and passes results up.
 */
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="title">Project Title</Label>
        <Input
          id="title"
          placeholder="e.g. SmartNotes AI"
          value={form.title}
          onChange={(e) => update("title", e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Project Description</Label>
        <Textarea
          id="description"
          placeholder="Describe what your project does, the problem it solves, and how it works..."
          rows={5}
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="techStack">Tech Stack</Label>
        <Input
          id="techStack"
          placeholder="e.g. React, Node.js, PostgreSQL"
          value={form.techStack}
          onChange={(e) => update("techStack", e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="github">GitHub Link (optional)</Label>
        <Input
          id="github"
          placeholder="https://github.com/..."
          value={form.githubLink}
          onChange={(e) => update("githubLink", e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Analyzing...
          </>
        ) : (
          "Analyze Project →"
        )}
      </Button>
    </form>
  );
};

export default ProjectUploadForm;
