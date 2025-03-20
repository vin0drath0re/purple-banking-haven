
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, BarChart3, TrendingUp, Briefcase, LineChart, ShieldCheck } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";

const Investments = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const investmentFeatures = [
    {
      icon: TrendingUp,
      title: "Stocks & ETFs",
      description: "Trade individual stocks and ETFs with low fees and powerful research tools to make informed decisions."
    },
    {
      icon: LineChart,
      title: "Managed Portfolios",
      description: "Let our experts build and manage a diversified portfolio tailored to your risk tolerance and goals."
    },
    {
      icon: Briefcase,
      title: "Retirement Accounts",
      description: "Invest for your future with tax-advantaged IRAs and 401(k) rollover options."
    },
    {
      icon: ShieldCheck,
      title: "Digital Assets",
      description: "Safely invest in cryptocurrencies and digital assets with institutional-grade security."
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
                  Investments
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Invest with <span className="text-primary">confidence</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Build wealth for the future with our diverse investment options, expert guidance, and low fees.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-lg group">
                    Start Investing
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-lg">
                    Talk to an Advisor
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="purple-glass-card p-8 rounded-2xl relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Portfolio Performance</h3>
                    <span className="text-green-500 font-semibold flex items-center">
                      +15.7% <TrendingUp className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                  <div className="h-48 mb-6 flex items-center justify-center">
                    <BarChart3 className="h-full w-full text-purple-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Value</p>
                      <p className="text-xl font-semibold">$145,928</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">YTD Return</p>
                      <p className="text-xl font-semibold text-green-500">+$19,873</p>
                    </div>
                  </div>
                  <Button className="w-full rounded-lg">View Details</Button>
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-60 -z-10"></div>
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
                Investment Options
              </div>
              <h2 className="heading-lg text-gray-900 mb-4">
                Diverse solutions for every investor
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you're a beginner or experienced investor, we have options to help you achieve your financial goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {investmentFeatures.map((feature, index) => (
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

        {/* Investment Plans Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
                Investment Plans
              </div>
              <h2 className="heading-lg text-gray-900 mb-4">
                Choose the right approach for you
              </h2>
              <p className="text-lg text-muted-foreground">
                Compare our investment plans to find the perfect match for your financial goals and comfort level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-purple-glow hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">Self-Directed</h3>
                <p className="text-3xl font-bold mb-6">$0<span className="text-lg text-muted-foreground">/trade</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Commission-free trading</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Advanced research tools</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Real-time market data</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full rounded-lg">Get Started</Button>
              </div>

              <div className="purple-glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-purple-glow hover:-translate-y-1 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold mb-2">Managed Portfolio</h3>
                <p className="text-3xl font-bold mb-6">0.25%<span className="text-lg text-muted-foreground">/year</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Professionally managed</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Automatic rebalancing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Tax-efficient investing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Personalized portfolio</span>
                  </li>
                </ul>
                <Button className="w-full rounded-lg">Get Started</Button>
              </div>

              <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-purple-glow hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">Private Wealth</h3>
                <p className="text-3xl font-bold mb-6">0.40%<span className="text-lg text-muted-foreground">/year</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Dedicated advisor</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Comprehensive planning</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Estate planning</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Tax optimization</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full rounded-lg">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Investments;
