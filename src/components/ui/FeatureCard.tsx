
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  variant?: "default" | "purple" | "outline";
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  variant = "default",
}: FeatureCardProps) {
  const { ref, isInView } = useScrollAnimation();

  const variants = {
    default: "bg-white shadow-soft",
    purple: "purple-glass-card",
    outline: "bg-transparent border border-purple-300",
  };

  return (
    <div
      ref={ref}
      className={`${variants[variant]} rounded-2xl p-6 transition-all duration-500 h-full ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
