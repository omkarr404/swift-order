import { Check, Gift } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-light text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Affordable Pricing
          </span>
          <h2 className="section-title text-center">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="relative bg-background rounded-3xl border-2 border-accent shadow-2xl shadow-accent/10 overflow-hidden">
            {/* Badge */}
            <div className="absolute top-4 right-4">
              <span className="price-badge flex items-center gap-1">
                <Gift className="w-4 h-4" />
                7 Days Free
              </span>
            </div>
            
            <div className="p-8">
              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-muted-foreground mb-2">Starting from</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-primary font-display">₹999</span>
                  <span className="text-muted-foreground">/ month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Per restaurant location
                </p>
              </div>
              
              {/* Features list */}
              <div className="space-y-4 mb-8">
                {[
                  "Unlimited orders",
                  "Unlimited menu items",
                  "QR codes for all tables",
                  "Kitchen display system",
                  "Real-time analytics",
                  "WhatsApp support",
                  "One-time setup assistance",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-light flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green" />
                    </div>
                    <span className="text-primary">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Guarantees */}
              <div className="flex flex-wrap gap-3 justify-center text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green" /> No contract
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green" /> Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
