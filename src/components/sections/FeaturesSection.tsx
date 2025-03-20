
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { 
  Smartphone, 
  CreditCard, 
  Banknote, 
  PiggyBank, 
  Lock, 
  BarChart4 
} from "lucide-react";

export function FeaturesSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="personal" className="py-16 md:py-24 bg-gray-50">
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
            Everything you need for smarter banking
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience a comprehensive suite of tools designed to simplify your finances 
            and help you achieve your financial goals faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Smartphone}
            title="Mobile Banking"
            description="Manage your accounts, transfer money, and pay bills from anywhere with our intuitive mobile app."
            delay={100}
            variant="purple"
          />
          <FeatureCard
            icon={CreditCard}
            title="Smart Cards"
            description="Get instant notifications for all transactions and control your card settings in real-time."
            delay={200}
          />
          <FeatureCard
            icon={PiggyBank}
            title="Automated Savings"
            description="Set up rules to automatically save money based on your spending habits or income."
            delay={300}
          />
          <FeatureCard
            icon={Banknote}
            title="Instant Transfers"
            description="Send money to friends and family instantly, regardless of which bank they use."
            delay={400}
          />
          <FeatureCard
            icon={Lock}
            title="Enhanced Security"
            description="Rest easy with advanced encryption, biometric authentication, and fraud monitoring."
            delay={500}
          />
          <FeatureCard
            icon={BarChart4}
            title="Financial Insights"
            description="Gain valuable insights into your spending habits with detailed analytics and reports."
            delay={600}
            variant="purple"
          />
        </div>
      </div>
    </section>
  );
}
