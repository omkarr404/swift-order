import { QrCode, MessageCircle, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="section-container">
        <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="section-title mb-4">
                Ready to Transform Your Restaurant?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join 500+ restaurants in India already using ScanOrder. 
                Start your free 7-day trial today — no credit card required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="cta-button inline-flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Try Free Demo
                </button>
                <button className="cta-button-outline inline-flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Talk to Sales
                </button>
              </div>
              
              {/* Contact info */}
              <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-muted-foreground">
                <a href="https://wa.me/919876543210" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:hello@scanorder.in" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <span>hello@scanorder.in</span>
                </a>
              </div>
            </div>
            
            {/* QR Code placeholder */}
            <div className="flex-shrink-0">
              <div className="bg-muted rounded-2xl p-6 text-center">
                <div className="w-40 h-40 bg-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <QrCode className="w-28 h-28 text-primary-foreground" />
                </div>
                <p className="text-sm font-medium text-primary">Scan for Live Demo</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Experience ScanOrder yourself
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <QrCode className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-xl font-display font-bold text-primary">ScanOrder</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for Indian Restaurants
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 ScanOrder. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
