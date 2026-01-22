import { Clock, AlertTriangle, Users, Calculator } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Slow Service",
    description: "Rush hours become chaos with long wait times",
  },
  {
    icon: AlertTriangle,
    title: "Order Mistakes",
    description: "Staff miscommunication leads to wrong orders",
  },
  {
    icon: Users,
    title: "Staff Dependency",
    description: "Too much reliance on waiters for basic tasks",
  },
  {
    icon: Calculator,
    title: "Billing Errors",
    description: "Manual calculations cause revenue leakage",
  },
];

const ProblemSection = () => {
  return (
    <section className="bg-muted py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block bg-destructive/10 text-destructive px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            The Challenge
          </span>
          <h2 className="section-title text-center">
            Problems Restaurants Face Today
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="feature-card text-center group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
