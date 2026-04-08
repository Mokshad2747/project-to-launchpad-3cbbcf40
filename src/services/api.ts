/**
 * Mock API service — simulates backend calls with realistic delays and data.
 * In production, these would hit actual Express endpoints.
 */

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
  targetCustomers: string;
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

/** POST /api/generate-startup — returns mock startup concept */
export async function generateStartup(input: ProjectInput): Promise<StartupResult> {
  await delay(2000);
  const baseName = input.title.split(" ")[0] || "Nova";
  return {
    startupName: `${baseName}Labs`,
    tagline: `Turning ${input.techStack.split(",")[0]?.trim() || "ideas"} into impact — one project at a time.`,
    problemSolved: `Students and developers building ${input.techStack.split(",")[0]?.trim() || "tech"} projects lack a clear path from academic work to market-ready products. ${baseName}Labs bridges this gap with AI-powered analysis and launch tools.`,
    targetCustomers: "University students, bootcamp graduates, early-stage founders, and academic institutions looking to commercialize research projects.",
    keyFeatures: [
      "AI-powered project-to-startup analysis",
      "Automated business model generation",
      "One-click landing page builder",
      "Investor pitch deck export",
      "Market opportunity scoring",
    ],
    businessModel: "SaaS platform with a freemium tier for students and a premium tier for institutions. Revenue generated through subscriptions, white-label licensing, and API access for enterprise partners.",
    revenueModel: "Freemium → $0/mo (basic features), Pro → $19/mo (advanced AI analysis), Enterprise → custom pricing (API + white-label).",
    startupPotentialScore: 87,
    logo: baseName[0]?.toUpperCase() || "N",
  };
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
