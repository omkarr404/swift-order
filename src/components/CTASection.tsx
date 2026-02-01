import { QrCode, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const CTASection = () => {
  return (
    <section className="pt-16 pb-8 bg-muted">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="section-title mb-4">
                Ready to Transform Your Restaurant?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Early-access onboarding is now open for select restaurants.
                Get started with launch-phase pricing today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={siteConfig.contact.whatsapp}
                  className="cta-button inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Started
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="cta-button-outline inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Talk to Sales
                </a>
              </div>

              {/* Contact info */}
              <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-muted-foreground">
                <a href={siteConfig.contact.whatsapp} className="flex items-center gap-2 hover:text-accent transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>

            {/* QR Code placeholder */}
            <div className="flex-shrink-0">
              <motion.div
                initial={{ rotate: -10, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring" }}
                className="bg-muted rounded-2xl p-6 text-center"
              >
                <div className="w-40 h-40 bg-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <QrCode className="w-28 h-28 text-primary-foreground" />
                </div>
                <p className="text-sm font-medium text-primary">Smart QR Ordering</p>
                <p className="text-xs text-muted-foreground mt-1">
                  The future of restaurant management
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <QrCode className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-xl font-display font-bold text-primary">{siteConfig.name}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for Indian Restaurants
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
