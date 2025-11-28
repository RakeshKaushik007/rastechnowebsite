import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  ShieldCheck,
  Rocket,
  TrendingUp,
  Clock,
  Users,
  Target,
  CheckCircle2,
} from "lucide-react";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    description: "Battle-tested solutions with 99.9% uptime guarantee",
  },
  {
    icon: Rocket,
    title: "Speed",
    description: "Rapid development without compromising quality",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Solutions that grow with your business needs",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "10+ years of combined industry experience",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on delivering measurable outcomes",
  },
];

const problemSolutions = [
  {
    problem: "Legacy systems holding you back?",
    solution: "We modernize your infrastructure with cutting-edge technologies.",
  },
  {
    problem: "Need to automate repetitive tasks?",
    solution: "Our AI and automation solutions free up your team's valuable time.",
  },
  {
    problem: "Struggling with data management?",
    solution: "We build robust data pipelines and analytics platforms.",
  },
  {
    problem: "Want to enhance user engagement?",
    solution: "Our creative team designs captivating animations and experiences.",
  },
  {
    problem: "Looking for custom software?",
    solution: "We develop tailored solutions from scratch to fit your exact needs.",
  },
  {
    problem: "Need technical consultancy?",
    solution: "Our experts provide strategic guidance for your technology roadmap.",
  },
];

export function SolutionsHub() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="solutions"
      className="relative py-24 px-4 bg-dark-bg overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff10_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-b from-electric-blue/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Solutions Hub
          </motion.span>
          <h2
            className="mb-6 bg-gradient-to-r from-electric-blue via-neon-purple to-electric-blue bg-clip-text text-transparent"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            We Solve All Technical Software Problems
          </h2>
          <p
            className="text-muted-foreground max-w-3xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            No challenge is too complex. From concept to deployment, we provide
            end-to-end solutions that transform your vision into reality.
          </p>
        </motion.div>

        {/* Capabilities grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:border-electric-blue/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <capability.icon className="w-6 h-6 text-electric-blue" />
              </motion.div>
              <div>
                <h4 className="mb-1">{capability.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Problem-Solution pairs */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3
            className="text-center mb-12"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Common Challenges We Solve
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {problemSolutions.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-neon-purple/50 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }
                }
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-blue/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-electric-blue" />
                  </div>
                  <div className="flex-1">
                    <p className="mb-2 text-foreground/90">{item.problem}</p>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-neon-purple flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process timeline */}
        <motion.div
          className="p-12 rounded-2xl bg-gradient-to-r from-electric-blue/5 via-neon-purple/5 to-deep-purple/5 border border-electric-blue/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3
            className="text-center mb-12"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Our Proven Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs" },
              { step: "02", title: "Strategy", desc: "Crafting the solution" },
              { step: "03", title: "Development", desc: "Building with precision" },
              { step: "04", title: "Support", desc: "Ongoing optimization" },
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-electric-blue to-neon-purple" />
                )}
                <motion.div
                  className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-dark-bg">{phase.step}</span>
                </motion.div>
                <h4 className="mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
