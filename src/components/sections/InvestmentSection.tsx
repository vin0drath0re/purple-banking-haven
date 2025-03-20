
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { 
  TrendingUp, 
  BarChart, 
  Library, 
  Lightbulb, 
  CheckCircle,
  ArrowRight 
} from "lucide-react";

export function InvestmentSection() {
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation();
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation();
  
  return (
    <section id="investments" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          ref={sectionRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            sectionInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
            Investments
          </div>
          <h2 className="heading-lg text-gray-900 mb-4">
            Build your wealth with smart investments
          </h2>
          <p className="text-lg text-muted-foreground">
            Access a range of investment options tailored to your financial goals and risk appetite.
            Start your journey to financial freedom today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <div className="inline-flex items-center mb-4">
                <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                <span className="font-semibold text-gray-900">Investment Portfolio</span>
              </div>
              <h3 className="heading-md text-gray-900 mb-4">
                Diversify your investments with expert guidance
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you're a beginner or an experienced investor, our platform offers diverse
                investment options with personalized recommendations based on your goals.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Stocks and ETFs with zero commission",
                  "Curated investment portfolios",
                  "Retirement planning options",
                  "Automatic rebalancing and dividend reinvestment",
                  "Real-time market insights and analysis"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button size="lg" className="rounded-lg group">
                Start Investing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="purple-glass-card p-6 shadow-purple-glow">
              <img 
                src="https://placehold.co/600x400/0A0047/FFFFFF?text=Investment+Dashboard" 
                alt="Investment Dashboard" 
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>
        
        {/* Stats */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
            statsInView ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-xl shadow-soft p-6 text-center">
            <div className="text-primary text-4xl font-bold mb-2">
              {statsInView && <AnimatedNumber value={5.2} suffix="%" className="text-4xl font-bold" />}
            </div>
            <p className="text-muted-foreground">Average Annual Return</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-soft p-6 text-center">
            <div className="text-primary text-4xl font-bold mb-2">
              {statsInView && <AnimatedNumber value={1000} prefix="$" className="text-4xl font-bold" />}
            </div>
            <p className="text-muted-foreground">Minimum Investment</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-soft p-6 text-center">
            <div className="text-primary text-4xl font-bold mb-2">
              {statsInView && <AnimatedNumber value={500000} prefix="$" className="text-4xl font-bold" />}
            </div>
            <p className="text-muted-foreground">Assets Under Management</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-soft p-6 text-center">
            <div className="text-primary text-4xl font-bold mb-2">
              {statsInView && <AnimatedNumber value={24} suffix="/7" className="text-4xl font-bold" />}
            </div>
            <p className="text-muted-foreground">Expert Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
