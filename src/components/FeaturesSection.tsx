import { 
  QrCode, 
  BookOpen, 
  ShoppingCart, 
  ChefHat, 
  Receipt, 
  LayoutDashboard 
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR Code Per Table",
    description: "Unique QR for each table, auto-assigns orders",
  },
  {
    icon: BookOpen,
    title: "Digital Menu",
    description: "Beautiful menu with photos, prices & descriptions",
  },
  {
    icon: ShoppingCart,
    title: "Self-Ordering",
    description: "Customers order directly, no waiter needed",
  },
  {
    icon: ChefHat,
    title: "Direct to Kitchen",
    description: "Orders appear instantly on kitchen display",
  },
  {
    icon: Receipt,
    title: "Auto Billing",
    description: "Bills generated automatically, no errors",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description: "Manage menu, orders & analytics in one place",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-light text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Powerful Features
          </span>
          <h2 className="section-title text-center">
            Everything You Need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete solution designed specifically for Indian restaurants, cafés, and hotels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="flex items-start gap-4">
                <div className="icon-box group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
