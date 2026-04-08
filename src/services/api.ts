/**
 * API service — uses Lovable AI via edge functions for startup generation,
 * with mock fallbacks for analysis and landing page content.
 */

import { supabase } from "@/integrations/supabase/client";

export interface ProjectInput {
  title: string;
  description: string;
  techStack: string;
  githubLink?: string;
}

export interface AnalysisResult {
  problemSummary: string;
  targetUsers: string[];
  innovationScore: number;
  marketOpportunity: string;
  competitors: string[];
  strengths: string[];
  improvements: string[];
}

export interface StartupResult {
  startupName: string;
  tagline: string;
  problemSolved: string;
  solution: string;
  targetCustomers: string;
  uniqueness: string;
  keyFeatures: string[];
  businessModel: string;
  revenueModel: string;
  startupPotentialScore: number;
  logo: string;
}

export interface LandingResult {
  heroTitle: string;
  heroTagline: string;
  productDescription: string;
  keyBenefits: string[];
  featureHighlights: string[];
  pricingIdea: string;
  callToAction: string;
}

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** POST /api/analyze-project — returns mock AI analysis */
export async function analyzeProject(input: ProjectInput): Promise<AnalysisResult> {
  await delay(1500);
  return {
    problemSummary: `"${input.title}" addresses a clear gap in how ${input.techStack.split(",")[0]?.trim() || "technology"} users interact with modern tools. The project demonstrates strong problem-solution fit with room for commercial scale.`,
    targetUsers: ["University students", "Early-career developers", "EdTech companies", "Startup founders"],
    innovationScore: 78,
    marketOpportunity: "The addressable market for this solution is estimated at $2.4B globally, growing at 18% CAGR. There's a notable gap between academic projects and market-ready products that this idea can exploit.",
    strengths: [
      "Clear value proposition",
      "Uses trending tech stack",
      "Solves a real pain point",
      "Low barrier to entry for users",
    ],
    competitors: ["EduLaunch AI", "ProjectToStartup", "IdeaForge", "LaunchPad Academy"],
    improvements: [
      "Add monetization strategy",
      "Consider mobile-first approach",
      "Build community features",
      "Add analytics dashboard",
    ],
  };
}

/** Calls Lovable AI edge function to generate 3 unique startup ideas */
export async function generateStartups(input: ProjectInput): Promise<StartupResult[]> {
  const { data, error } = await supabase.functions.invoke("generate-startup", {
    body: {
      title: input.title,
      description: input.description,
      techStack: input.techStack,
      githubLink: input.githubLink,
    },
  });

  if (error) throw new Error(error.message || "Failed to generate startup ideas");
  if (data?.error) throw new Error(data.error);

  return data.ideas as StartupResult[];
}

/** POST /api/generate-landing — returns mock landing page content */
export async function generateLanding(input: ProjectInput, startup: StartupResult): Promise<LandingResult> {
  await delay(1800);
  return {
    heroTitle: startup.startupName,
    heroTagline: startup.tagline,
    productDescription: `${startup.startupName} leverages cutting-edge ${input.techStack.split(",")[0]?.trim() || "technology"} to deliver a seamless experience. We combine intelligent automation with intuitive design to solve real problems for real users. Built by innovators, for innovators.`,
    keyBenefits: [
      "Save hours of manual work with AI automation",
      "Launch your idea in minutes, not months",
      "Data-driven insights for smarter decisions",
      "Scale effortlessly from MVP to enterprise",
    ],
    featureHighlights: [
      "AI-powered project analysis engine",
      "One-click startup landing page generator",
      "Smart business model recommendations",
      "Investor-ready pitch deck export",
      "Real-time market opportunity scoring",
      "Collaborative team workspace",
    ],
    pricingIdea: "Freemium model — free for students, $19/mo Pro plan with advanced AI features, and custom Enterprise pricing for institutions and accelerators.",
    callToAction: "Start Building Your Startup Today →",
  };
}
