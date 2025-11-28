import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Lightbulb, Cpu, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Creative Vision",
    description:
      "We bring imagination to life through stunning animations and visual storytelling that captivates audiences.",
  },
  {
    icon: Cpu,
    title: "Technical Excellence",
    description:
      "Cutting-edge IT solutions powered by the latest technologies and best practices in software development.",
  },
  {
    icon: Rocket,
    title: "Innovation First",
    description:
      "We stay ahead of the curve, embracing AI, automation, and emerging technologies to solve complex problems.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our mission. We provide end-to-end support and consultancy tailored to your unique needs.",
  },
];

export function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-24 px-4 bg-gradient-to-b from-dark-bg to-card-bg overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Us
          </motion.span>
          <h2
            className="mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Where Creativity Meets Technology
          </h2>
          <p
            className="text-muted-foreground max-w-3xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            RaS Techno is a pioneering consultancy that bridges the gap between artistic
            expression and technical innovation. We're not just service providers—we're
            your partners in transformation.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-electric-blue/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-neon-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-7 h-7 text-electric-blue" />
                </motion.div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <motion.div
          className="text-center p-12 rounded-2xl bg-gradient-to-r from-electric-blue/10 via-neon-purple/10 to-deep-purple/10 border border-electric-blue/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3
            className="mb-4 bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            We Solve All Technical Software Problems
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            From concept to deployment, we provide comprehensive solutions that combine
            creative design, robust development, and ongoing support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 rounded-full bg-electric-blue/20 border border-electric-blue/40 text-electric-blue">
              AI & Automation
            </span>
            <span className="px-4 py-2 rounded-full bg-neon-purple/20 border border-neon-purple/40 text-neon-purple">
              Custom Development
            </span>
            <span className="px-4 py-2 rounded-full bg-deep-purple/20 border border-deep-purple/40 text-deep-purple">
              IT Consultancy
            </span>
            <span className="px-4 py-2 rounded-full bg-electric-blue/20 border border-electric-blue/40 text-electric-blue">
              Creative Design
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
