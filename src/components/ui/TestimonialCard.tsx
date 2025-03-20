
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  rating?: number;
  delay?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  rating = 5,
  delay = 0,
}: TestimonialCardProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`glass-card p-6 transition-all duration-500 h-full ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-purple-500 text-purple-500" />
        ))}
      </div>
      <blockquote className="mb-4 text-gray-700">"{quote}"</blockquote>
      <div className="flex items-center gap-3">
        {avatar ? (
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img src={avatar} alt={author} className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-semibold">
            {author[0]}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
