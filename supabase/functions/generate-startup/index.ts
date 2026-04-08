import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { title, description, techStack, githubLink } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are a world-class startup mentor, venture capitalist, and product strategist with 20+ years of experience launching successful startups.

Your task: Generate exactly 3 innovative, unique, and completely different startup ideas based on a student's college project.

RULES:
- Each idea must explore a DIFFERENT approach, business model, and target market
- Avoid generic ideas like food delivery, fitness tracking, simple marketplaces, or todo apps
- Ideas must be creative yet realistic enough to build as an MVP
- Use modern technologies: AI, automation, data platforms, IoT, blockchain (where relevant)
- Each idea must feel like a real startup that could get funded
- Do NOT repeat common startup ideas
- Provide detailed, substantive answers — not short bullet points

Return ONLY valid JSON with this exact structure (no markdown, no code fences):
{
  "ideas": [
    {
      "startupName": "Creative unique name",
      "tagline": "One compelling sentence pitch",
      "problemSolved": "Detailed explanation of the real-world problem (3-4 sentences)",
      "solution": "Detailed description of the product/platform that solves the problem (3-4 sentences)",
      "targetCustomers": "Specific description of who will use this product and why",
      "uniqueness": "What makes this different from existing startups (2-3 sentences)",
      "businessModel": "Detailed business model and monetization strategy (2-3 sentences)",
      "revenueModel": "Specific pricing tiers and revenue streams",
      "keyFeatures": ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
      "startupPotentialScore": 85,
      "logo": "X"
    }
  ]
}

The logo field should be a single uppercase letter (the first letter of the startup name).
startupPotentialScore should be between 70-95, reflecting realistic assessment.
Each idea MUST be fundamentally different in approach.`;

    const userPrompt = `Student Project Details:
- Title: ${title}
- Description: ${description}
- Tech Stack: ${techStack}
${githubLink ? `- GitHub: ${githubLink}` : ""}

Generate 3 completely different, innovative startup ideas inspired by this project. Each should take a unique angle — different target market, different business model, different technology approach.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited — please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Add funds in Settings → Workspace → Usage." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errText = await response.text();
      console.error("AI gateway error:", response.status, errText);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const raw = data.choices?.[0]?.message?.content ?? "";

    // Strip markdown code fences if present
    const cleaned = raw.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
    const parsed = JSON.parse(cleaned);

    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-startup error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
