
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Home, Car, Briefcase, GraduationCap } from "lucide-react";

export function LoanSection() {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <section id="loans" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
            Loans
          </div>
          <h2 className="heading-lg text-gray-900 mb-4">
            Financial solutions for your needs
          </h2>
          <p className="text-lg text-muted-foreground">
            Get access to competitive interest rates and flexible repayment options
            designed to help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 transition-all duration-500 hover:shadow-purple-glow hover:-translate-y-1">
            <Home className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Home Loans</h3>
            <p className="text-muted-foreground mb-4">
              Competitive mortgage rates with flexible terms to help you find your dream home.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                <span className="text-sm">Fixed & variable rates</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                <span className="text-sm">No hidden fees</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                <span className="text-sm">Quick pre-approval</span>
              </li>
            </ul>
            <Button variant="outline" size="sm" className="w-full group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="purple-glass-card p-6 transition-all duration-500 hover:shadow-purple-glow hover:-translate-y-1">
            <Car className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Auto Loans</h3>
            <p className="text-muted-foreground mb-4">
              Drive away with your perfect vehicle and a payment plan that fits your budget.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                <span className="text-sm">Low interest rates</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                <span className="text-sm">Flexible terms</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                <span className="text-sm">Fast approval process</span>
              </li>
            </ul>
            <Button size="sm" className="w-full group">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="glass-card p-6 transition-all duration-500 hover:shadow-purple-glow hover:-translate-y-1">
            <Briefcase className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Business Loans</h3>
            <p className="text-muted-foreground mb-4">
              Fuel your business growth with tailored financing solutions for entrepreneurs.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                <span className="text-sm">Lines of credit</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                <span className="text-sm">Equipment financing</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                <span className="text-sm">SBA loan options</span>
              </li>
            </ul>
            <Button variant="outline" size="sm" className="w-full group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="glass-card p-6 transition-all duration-500 hover:shadow-purple-glow hover:-translate-y-1">
            <GraduationCap className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Student Loans</h3>
            <p className="text-muted-foreground mb-4">
              Invest in your education with affordable student loans and refinancing options.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                <span className="text-sm">Competitive rates</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                <span className="text-sm">Grace periods</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                <span className="text-sm">Refinancing options</span>
              </li>
            </ul>
            <Button variant="outline" size="sm" className="w-full group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 p-8 md:p-12 bg-purple-gradient rounded-2xl text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 max-w-2xl mx-auto">
            Ready to get started with your loan application?
          </h3>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Our application process is quick and easy. Get pre-approved in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-lg text-primary">
              Calculate Your Rate
            </Button>
            <Button size="lg" className="rounded-lg bg-white text-primary hover:bg-white/90">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
