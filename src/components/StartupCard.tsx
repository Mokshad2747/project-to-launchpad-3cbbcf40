import type { StartupResult } from "@/services/api";
import { Rocket, DollarSign, MessageSquare } from "lucide-react";

/** Displays the generated startup concept */
const StartupCard = ({ startup }: { startup: StartupResult }) => (
  <div className="space-y-6 animate-fade-in">
    {/* Header */}
    <div className="rounded-xl border bg-card p-8 shadow-elegant text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-2xl font-bold">
        {startup.logo}
      </div>
      <h2 className="text-2xl font-bold">{startup.name}</h2>
      <p className="text-muted-foreground mt-1">{startup.tagline}</p>
    </div>

    {/* Details */}
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-xl border bg-card p-5 shadow-elegant">
        <div className="flex items-center gap-2 mb-2">
          <Rocket className="h-4 w-4 text-primary" />
          <h4 className="font-medium text-sm">Business Model</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{startup.businessModel}</p>
      </div>
      <div className="rounded-xl border bg-card p-5 shadow-elegant">
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="h-4 w-4 text-primary" />
          <h4 className="font-medium text-sm">Revenue Model</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{startup.revenueModel}</p>
      </div>
      <div className="rounded-xl border bg-card p-5 shadow-elegant">
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="h-4 w-4 text-primary" />
          <h4 className="font-medium text-sm">Elevator Pitch</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{startup.elevatorPitch}</p>
      </div>
    </div>
  </div>
);

export default StartupCard;
