import { ArrowRight, Check } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Visual flow */}
          <div className="flex-1">
            <div className="relative">
              {/* Flow diagram */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                {[
                  { step: "1", label: "Customer Scans QR" },
                  { step: "2", label: "Views Digital Menu" },
                  { step: "3", label: "Places Order" },
                  { step: "4", label: "Kitchen Receives" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl shadow-lg">
                        {item.step}
                      </div>
                      <span className="mt-3 text-sm font-medium text-primary text-center max-w-[100px]">
                        {item.label}
                      </span>
                    </div>
                    {index < 3 && (
                      <ArrowRight className="w-8 h-8 text-accent mx-2 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <span className="inline-block bg-green-light text-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              The Solution
            </span>
            <h2 className="section-title">
              Simplify Your Operations
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Customers scan a QR code at their table, browse your beautiful digital menu, 
              and place orders directly. Orders go straight to the kitchen or counter — 
              <span className="text-primary font-semibold"> reducing errors and speeding up service by 40%.</span>
            </p>
            
            <div className="space-y-4">
              {[
                "No app download required for customers",
                "Works on any smartphone",
                "Setup in under 30 minutes",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-light flex items-center justify-center">
                    <Check className="w-4 h-4 text-green" />
                  </div>
                  <span className="text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
