import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Sparkles,
  Code2,
  Bot,
  Headphones,
  Palette,
  Database,
  Zap,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Animation & Creative Design",
    description:
      "Bring your brand to life with captivating 2D/3D animations, motion graphics, and visual storytelling.",
    features: [
      "2D & 3D Animation",
      "Motion Graphics",
      "Visual Effects",
      "Brand Storytelling",
      "Character Design",
    ],
    gradient: "from-electric-blue/20 to-electric-blue/5",
    iconColor: "text-electric-blue",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs, from web applications to enterprise systems.",
    features: [
      "Web Development",
      "Mobile Apps",
      "Enterprise Software",
      "API Development",
      "Cloud Solutions",
    ],
    gradient: "from-neon-purple/20 to-neon-purple/5",
    iconColor: "text-neon-purple",
  },
  {
    icon: Bot,
    title: "AI Support & Automation",
    description:
      "Leverage cutting-edge AI and automation to streamline operations and boost productivity.",
    features: [
      "AI Integration",
      "Chatbots & Virtual Assistants",
      "Process Automation",
      "Machine Learning",
      "Intelligent Analytics",
    ],
    gradient: "from-deep-purple/20 to-deep-purple/5",
    iconColor: "text-deep-purple",
  },
  {
    icon: Headphones,
    title: "IT Services & Consultancy",
    description:
      "Comprehensive IT support and strategic consultancy to optimize your technology infrastructure.",
    features: [
      "IT Strategy & Planning",
      "System Integration",
      "Technical Support",
      "Infrastructure Management",
      "Security Consulting",
    ],
    gradient: "from-electric-blue/20 to-electric-blue/5",
    iconColor: "text-electric-blue",
  },
  {
    icon: Database,
    title: "Data Management & Analytics",
    description:
      "Transform raw data into actionable insights with advanced analytics and data engineering.",
    features: [
      "Data Engineering",
      "Business Intelligence",
      "Data Visualization",
      "Database Design",
      "Analytics Dashboards",
    ],
    gradient: "from-neon-purple/20 to-neon-purple/5",
    iconColor: "text-neon-purple",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description:
      "End-to-end digital transformation services to modernize your business and stay competitive.",
    features: [
      "Process Digitization",
      "Legacy System Modernization",
      "Cloud Migration",
      "DevOps Implementation",
      "Change Management",
    ],
    gradient: "from-deep-purple/20 to-deep-purple/5",
    iconColor: "text-deep-purple",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-24 px-4 bg-gradient-to-b from-card-bg to-dark-bg overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />

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
            Our Services
          </motion.span>
          <h2
            className="mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Comprehensive Solutions
          </h2>
          <p
            className="text-muted-foreground max-w-3xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            From creative design to technical implementation, we offer a full spectrum
            of services to power your digital success.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-electric-blue/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -8 }}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-electric-blue/10 to-neon-purple/10 mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </motion.div>

                {/* Title and description */}
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features list */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.2 + index * 0.1 + featureIndex * 0.05,
                      }}
                    >
                      <Settings className="w-3 h-3 text-electric-blue flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Learn more button */}
                <motion.button
                  className="mt-6 flex items-center gap-2 text-electric-blue group-hover:text-neon-purple transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn more</span>
                  <Sparkles className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center p-12 rounded-2xl bg-gradient-to-r from-electric-blue/5 via-neon-purple/5 to-deep-purple/5 border border-electric-blue/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3
            className="mb-4"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Don't See What You Need?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We specialize in custom solutions. Tell us about your challenge, and we'll
            create a tailored approach to solve it.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-purple rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
