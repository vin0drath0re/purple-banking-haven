
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Wallet, Repeat } from "lucide-react";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2"></span>
              Banking reimagined for you
            </div>
            <h1 className="heading-xl text-gray-900 mb-6">
              <span className="text-primary">Banking</span> that puts you in control
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Experience seamless financial management with tools designed to help you save, invest, and grow your wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-lg group">
                Open an Account
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg">
                Learn More
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-purple-700" />
                </div>
                <span className="text-sm font-medium">Secure Banking</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                  <Wallet className="h-6 w-6 text-purple-700" />
                </div>
                <span className="text-sm font-medium">Smart Investments</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                  <Repeat className="h-6 w-6 text-purple-700" />
                </div>
                <span className="text-sm font-medium">Easy Transfers</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-x-8'}`}>
            <div className="relative z-10">
              <div className="purple-glass-card p-6 shadow-purple-glow animate-float">
                <img 
                  src="https://placehold.co/600x400/0A0047/FFFFFF?text=Banking+App+UI" 
                  alt="PurpleBank dashboard" 
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-purple-500/20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
