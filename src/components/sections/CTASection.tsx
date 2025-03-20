
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div 
        className="container mx-auto px-4 sm:px-6"
        ref={ref}
      >
        <div className={`purple-glass-card p-8 md:p-12 transition-all duration-700 ${
          isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-gray-900 mb-6">
              Ready to transform your financial future?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of satisfied customers who have taken control of their finances with PurpleBank. 
              Get started today with no hidden fees.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-lg group">
                Open an Account
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg">
                Talk to an Advisor
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground">
              No credit check required. Open your account in less than 5 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
