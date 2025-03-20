
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Calculator, Clock, Percent, Shield } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";

const Loans = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const loanFeatures = [
    {
      icon: Percent,
      title: "Competitive Rates",
      description: "Get some of the lowest rates on the market, with transparent terms and no hidden fees."
    },
    {
      icon: Clock,
      title: "Quick Approval",
      description: "Apply online and get pre-approved in minutes with our streamlined application process."
    },
    {
      icon: Shield,
      title: "Payment Protection",
      description: "Optional payment protection to safeguard your loan in case of unexpected life events."
    },
    {
      icon: Calculator,
      title: "Flexible Terms",
      description: "Choose payment terms that fit your budget with options from 12 to 84 months."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-purple-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
                  Loans
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Flexible financing for <span className="text-primary">your goals</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  From home purchases to education expenses, we offer competitive rates and flexible terms to help you achieve your dreams.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-lg group">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-lg">
                    Calculate Payments
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="purple-glass-card p-8 rounded-2xl relative z-10">
                  <h3 className="text-xl font-semibold mb-4">Loan Calculator</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm mb-1">Loan Amount</label>
                      <div className="flex items-center border border-purple-200 rounded-lg p-2 bg-white">
                        <span className="text-gray-500 mr-2">$</span>
                        <input type="text" value="25,000" className="w-full focus:outline-none" readOnly />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Interest Rate</label>
                      <div className="flex items-center border border-purple-200 rounded-lg p-2 bg-white">
                        <input type="text" value="4.5" className="w-full focus:outline-none" readOnly />
                        <span className="text-gray-500 ml-2">%</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Term (Years)</label>
                      <div className="flex items-center border border-purple-200 rounded-lg p-2 bg-white">
                        <input type="text" value="5" className="w-full focus:outline-none" readOnly />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-purple-100 rounded-lg mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Monthly Payment:</span>
                      <span className="text-xl font-bold">$466.08</span>
                    </div>
                  </div>
                  <Button className="w-full rounded-lg">Get Your Rate</Button>
                </div>
                <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-60 -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div
              ref={ref}
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
                isInView ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
                Benefits
              </div>
              <h2 className="heading-lg text-gray-900 mb-4">
                Why choose PurpleBank for your loan
              </h2>
              <p className="text-lg text-muted-foreground">
                We make borrowing simple, transparent, and tailored to your needs with competitive rates and excellent service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {loanFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 100}
                  variant={index % 2 === 1 ? "purple" : "default"}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Loan Types Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
                Loan Options
              </div>
              <h2 className="heading-lg text-gray-900 mb-4">
                Find the right loan for your needs
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you're buying a home, a car, or funding education, we offer competitive loans for every purpose.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-purple-glow hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">Home Loans</h3>
                <p className="text-lg text-muted-foreground mb-4">Make your dream home a reality with competitive mortgage rates and flexible terms.</p>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Interest rates from</span>
                    <span className="font-semibold">3.25%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-purple-500 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span className="text-sm">Fixed & adjustable rates</span>
                  </div>
                  <div className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span className="text-sm">First-time homebuyer programs</span>
                  </div>
                  <div className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span className="text-sm">Low down payment options</span>
                  </div>
                </div>
                <Button className="w-full rounded-lg">Apply Now</Button>
              </div>
              
              <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-purple-glow hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">Auto Loans</h3>
                <p className="text-lg text-muted-foreground mb-4">Drive your perfect vehicle with affordable financing options for new and used cars.</p>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Interest rates from</span>
                    <span className="font-semibold">2.99%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-purple-500 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span className="text-sm">New and used vehicles</span>
                  </div>
                  <div className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span className="text-sm">Terms up to 72 months</span>
                  </div>
                  <div className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span className="text-sm">Pre-approval available</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full rounded-lg">Learn More</Button>
              </div>
              
              <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-purple-glow hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">Personal Loans</h3>
                <p className="text-lg text-muted-foreground mb-4">Get the funds you need for major expenses, debt consolidation, or unexpected costs.</p>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Interest rates from</span>
                    <span className="font-semibold">5.99%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-purple-500 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span className="text-sm">Fixed monthly payments</span>
                  </div>
                  <div className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span className="text-sm">No collateral required</span>
                  </div>
                  <div className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span className="text-sm">Funds as soon as same day</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full rounded-lg">Learn More</Button>
              </div>
              
              <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-purple-glow hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">Student Loans</h3>
                <p className="text-lg text-muted-foreground mb-4">Invest in your education with flexible repayment options for tuition and expenses.</p>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Interest rates from</span>
                    <span className="font-semibold">3.50%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-purple-500 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span className="text-sm">Undergraduate & graduate loans</span>
                  </div>
                  <div className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span className="text-sm">Deferred payment options</span>
                  </div>
                  <div className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span className="text-sm">Refinancing available</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full rounded-lg">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Loans;
