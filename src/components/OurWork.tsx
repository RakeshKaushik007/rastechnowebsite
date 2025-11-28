import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "3D Brand Animation",
    category: "Animation & Creative Design",
    description:
      "Stunning 3D product visualization and brand storytelling for a tech startup.",
    image: "https://images.unsplash.com/photo-1644559321363-0cf2745083d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFuaW1hdGlvbiUyMHJlbmRlcnxlbnwxfHx8fDE3NjQzMjE4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["3D Animation", "Motion Graphics", "Brand Identity"],
  },
  {
    title: "Enterprise Software Platform",
    category: "IT Services & Consultancy",
    description:
      "Custom-built enterprise solution with AI-powered analytics and automation.",
    image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjQyNzQzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Software Development", "Cloud Solutions", "API Integration"],
  },
  {
    title: "AI Chatbot Integration",
    category: "AI Support & Automation",
    description:
      "Intelligent conversational AI system with natural language processing.",
    image: "https://images.unsplash.com/photo-1762330467572-5199bc772a20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0MzMxMTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["AI/ML", "Automation", "NLP"],
  },
  {
    title: "Mobile App Development",
    category: "Software Development",
    description:
      "Cross-platform mobile application with seamless UX and powerful features.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0Mjk1OTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile Development", "React Native", "UI/UX"],
  },
  {
    title: "Interactive Digital Experience",
    category: "Animation & Creative Design",
    description:
      "Award-winning interactive web experience with immersive animations.",
    image: "https://images.unsplash.com/photo-1658052408504-2ce6a8b11d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBhcnR8ZW58MXx8fHwxNzY0MzE0NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Web Development", "Animation", "Interactive Design"],
  },
  {
    title: "Process Automation Suite",
    category: "AI Support & Automation",
    description:
      "End-to-end automation solution reducing manual workflows by 80%.",
    image: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYXV0b21hdGlvbiUyMHJvYm90fGVufDF8fHx8MTc2NDMzMzk4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Automation", "RPA", "Business Intelligence"],
  },
];

export function OurWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Animation & Creative Design", "IT Services & Consultancy", "AI Support & Automation"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      ref={ref}
      id="work"
      className="relative py-24 px-4 bg-dark-bg overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
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
            Our Work
          </motion.span>
          <h2
            className="mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Portfolio of Excellence
          </h2>
          <p
            className="text-muted-foreground max-w-3xl mx-auto mb-8"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            Explore our diverse range of projects spanning animation, software
            development, and AI solutions.
          </p>

          {/* Filter buttons */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-electric-blue to-neon-purple"
                    : "bg-card border border-border hover:border-electric-blue/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-electric-blue/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  <div className="flex gap-3">
                    <motion.button
                      className="w-12 h-12 rounded-full bg-electric-blue/90 backdrop-blur-sm flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-5 h-5 text-dark-bg" />
                    </motion.button>
                    <motion.button
                      className="w-12 h-12 rounded-full bg-neon-purple/90 backdrop-blur-sm flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-sm text-electric-blue mb-2 block">
                  {project.category}
                </span>
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
