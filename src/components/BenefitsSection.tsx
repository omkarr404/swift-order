import { Zap, UserMinus, CheckCircle, RefreshCcw, Ban } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Zap,
    title: "Faster Service",
    description: "Serve 40% more customers during peak hours",
  },
  {
    icon: UserMinus,
    title: "Fewer Staff Required",
    description: "Reduce dependency on waiters by 50%",
  },
  {
    icon: CheckCircle,
    title: "No Order Confusion",
    description: "100% accurate orders, every time",
  },
  {
    icon: RefreshCcw,
    title: "Increased Turnover",
    description: "Higher table turnover, more revenue",
  },
  {
    icon: Ban,
    title: "No Commission",
    description: "Unlike aggregators, we take zero commission",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-navy text-primary-foreground">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Benefits That Matter
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Real results for real restaurants across India
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur px-5 py-4 rounded-2xl hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <benefit.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="text-xs text-primary-foreground/60">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
