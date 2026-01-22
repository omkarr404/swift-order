import { Check, Gift } from "lucide-react";
import { motion } from "framer-motion";

const PricingSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-orange-light text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Affordable Pricing
          </span>
          <h2 className="section-title text-center">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", damping: 20 }}
            className="relative bg-background rounded-3xl border-2 border-accent shadow-2xl shadow-accent/10 overflow-hidden"
          >
            {/* Badge */}
            <div className="absolute top-4 right-4">
              {/* <span className="price-badge flex items-center gap-1">
                <Gift className="w-4 h-4" />
                7 Days Free
              </span> */}
            </div>

            <div className="p-8">
              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-muted-foreground mb-1">Starting from</p>
                <div className="flex flex-col items-center">
                  <span className="text-xl text-muted-foreground line-through opacity-70">₹2,999</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-primary font-display">₹1,599</span>
                    <span className="text-muted-foreground">/ month</span>
                  </div>
                  <div className="mt-3">
                    <span className="bg-orange-light text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Early Bird Offer
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
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
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.05) }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-light flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green" />
                    </div>
                    <span className="text-primary">{feature}</span>
                  </motion.div>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
