
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function TestimonialSection() {
  const { ref, isInView } = useScrollAnimation();
  
  const testimonials = [
    {
      quote: "Switching to PurpleBank was the best financial decision I've made. Their investment options have helped me grow my savings by 15% in just one year.",
      author: "Sarah Johnson",
      role: "Small Business Owner",
      rating: 5,
    },
    {
      quote: "The mortgage process was so smooth. Their team guided me through every step, and I got a better rate than I expected.",
      author: "Michael Chen",
      role: "First-time Homebuyer",
      rating: 5,
    },
    {
      quote: "I've been able to save for my daughter's education while also investing for my retirement. Their financial advisors really understand my goals.",
      author: "Lisa Rodriguez",
      role: "Healthcare Professional",
      rating: 4,
    },
    {
      quote: "The mobile app is incredible! I can manage all my accounts, investments, and loan payments in one place. It's changed how I handle my finances.",
      author: "David Williams",
      role: "Tech Consultant",
      rating: 5,
    }
  ];
  
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
            Testimonials
          </div>
          <h2 className="heading-lg text-gray-900 mb-4">
            What our customers are saying
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Hear from customers who have transformed their financial future with PurpleBank.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
