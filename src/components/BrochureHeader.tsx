import { QrCode, Smartphone } from "lucide-react";

const BrochureHeader = () => {
  return (
    <header className="relative bg-pattern py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-light rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-muted rounded-full blur-2xl opacity-40" />

      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <QrCode className="w-7 h-7 text-accent-foreground" />
              </div>
              <span className="text-3xl font-display font-bold text-primary">
                QuickOrder
              </span>
            </div>

            {/* Tagline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight mb-6">
              One Scan.<br />
              <span className="text-accent">Faster Orders.</span><br />
              Smarter Service.
            </h1>

            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
              Transform your restaurant with QR-based digital ordering.
              No app downloads. No training needed.
            </p>
          </div>

          {/* Right visual */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Phone mockup */}
              <div className="relative bg-navy rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Phone screen content */}
                  <div className="p-6 min-h-[400px]">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-medium text-muted-foreground">Table 5</span>
                      <span className="bg-green-light text-green text-xs px-2 py-1 rounded-full font-medium">Connected</span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-primary mb-4">Today's Menu</h3>

                    {/* Menu items */}
                    <div className="space-y-3">
                      {["Butter Chicken", "Paneer Tikka", "Dal Makhani", "Garlic Naan"].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-muted rounded-xl">
                          <span className="font-medium text-primary">{item}</span>
                          <span className="text-accent font-semibold">₹{(i + 2) * 100 + 49}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full mt-6 bg-accent text-accent-foreground py-3 rounded-xl font-semibold">
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>

              {/* QR code floating element */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-background rounded-2xl shadow-xl p-4 animate-float">
                <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center">
                  <QrCode className="w-14 h-14 text-primary-foreground" />
                </div>
                <p className="text-xs text-center mt-2 text-muted-foreground font-medium">Scan Me!</p>
              </div>

              {/* Smartphone icon */}
              <div className="absolute -right-4 bottom-20 bg-accent rounded-full p-3 shadow-lg">
                <Smartphone className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BrochureHeader;
