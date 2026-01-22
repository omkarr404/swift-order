import BrochureHeader from "@/components/BrochureHeader";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <BrochureHeader />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <CTASection />
    </main>
  );
};

export default Index;
