
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoanApplicationForm } from "@/components/forms/LoanApplicationForm";
import { ShieldCheck } from "lucide-react";

const LoanApplication = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-8 md:py-12 bg-purple-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
                Loan Application
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Apply for Your <span className="text-primary">Loan</span> Today
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Complete the form below to apply for your loan. We'll review your application and get back to you within 1-2 business days.
              </p>
              <div className="flex items-center justify-center text-sm font-medium text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-primary mr-2" />
                <span>Your information is secure and encrypted</span>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <LoanApplicationForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LoanApplication;
