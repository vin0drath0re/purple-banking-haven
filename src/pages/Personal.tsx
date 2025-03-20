
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, CreditCard, Shield, Smartphone, Users } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";

const Personal = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const personalFeatures = [
    {
      icon: CreditCard,
      title: "Banking Accounts",
      description: "Choose from a variety of checking and savings accounts with competitive interest rates and no hidden fees."
    },
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description: "Manage your accounts, deposit checks, and transfer money from anywhere with our easy-to-use mobile app."
    },
    {
      icon: Shield,
      title: "Security Protection",
      description: "Rest easy knowing your accounts are protected with advanced encryption and fraud monitoring."
    },
    {
      icon: Users,
      title: "Joint Accounts",
      description: "Share finances easily with family members or partners with our simple joint account options."
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
                  Personal Banking
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Banking that puts <span className="text-primary">you first</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Enjoy hassle-free banking with accounts designed to help you save, spend, and grow your money with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-lg group">
                    Open an Account
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-lg">
                    Compare Accounts
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="purple-glass-card p-8 rounded-2xl relative z-10">
                  <h3 className="text-xl font-semibold mb-4">PurpleBank Premium Checking</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                      <span>No monthly maintenance fees</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                      <span>No minimum balance requirements</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                      <span>Free ATM withdrawals worldwide</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                      <span>24/7 customer support</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                      <span>Cashback on all purchases</span>
                    </li>
                  </ul>
                  <Button className="w-full rounded-lg">Learn More</Button>
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
                Features
              </div>
              <h2 className="heading-lg text-gray-900 mb-4">
                Banking designed for your lifestyle
              </h2>
              <p className="text-lg text-muted-foreground">
                Our personal banking services are built to give you control, convenience, and peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {personalFeatures.map((feature, index) => (
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

        {/* Products Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
                Products
              </div>
              <h2 className="heading-lg text-gray-900 mb-4">
                Choose the right account for you
              </h2>
              <p className="text-lg text-muted-foreground">
                Compare our personal banking products to find the perfect fit for your financial needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-purple-glow hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">Basic Checking</h3>
                <p className="text-3xl font-bold mb-6">$0<span className="text-lg text-muted-foreground">/month</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>No monthly fee</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Free mobile banking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Debit card included</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full rounded-lg">Open Account</Button>
              </div>

              <div className="purple-glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-purple-glow hover:-translate-y-1 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Checking</h3>
                <p className="text-3xl font-bold mb-6">$5<span className="text-lg text-muted-foreground">/month</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>No ATM fees worldwide</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>1% cashback on purchases</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Overdraft protection</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Priority customer service</span>
                  </li>
                </ul>
                <Button className="w-full rounded-lg">Open Account</Button>
              </div>

              <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-purple-glow hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">Premium Savings</h3>
                <p className="text-3xl font-bold mb-6">2.5%<span className="text-lg text-muted-foreground"> APY</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>High-yield interest rate</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>No minimum balance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Automatic savings plans</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Goal-based savings tools</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full rounded-lg">Open Account</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Personal;
