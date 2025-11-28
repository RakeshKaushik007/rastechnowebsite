import { motion } from "motion/react";
import { Sparkles, Code, Palette, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingIcons = [
    { Icon: Code, delay: 0, duration: 3 },
    { Icon: Palette, delay: 0.5, duration: 4 },
    { Icon: Sparkles, delay: 1, duration: 3.5 },
    { Icon: Zap, delay: 1.5, duration: 4.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-bg via-card-bg to-dark-bg">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f720_1px,transparent_1px),linear-gradient(to_bottom,#a855f720_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
          scale: [1, 1.2, 1],
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 0.1 },
          y: { duration: 0.1 },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
          scale: [1, 1.3, 1],
        }}
        transition={{
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 0.1 },
          y: { duration: 0.1 },
        }}
      />

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, delay, duration }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + (index % 2) * 40}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-12 h-12 text-electric-blue/40" />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-electric-blue" />
            <span className="text-electric-blue">Innovation Meets Creativity</span>
          </motion.div>

          <motion.h1
            className="mb-6 bg-gradient-to-r from-electric-blue via-neon-purple to-electric-blue bg-clip-text text-transparent"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            RaS Techno
          </motion.h1>

          <motion.p
            className="mb-4 text-foreground/90"
            style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Animating Ideas. Engineering Solutions.
          </motion.p>

          <motion.p
            className="mb-8 text-muted-foreground max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Your partner in blending artistry with technology. We transform ideas into
            stunning animations and deliver cutting-edge IT solutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-purple rounded-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Our Work</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-electric-blue/50 rounded-lg hover:bg-electric-blue/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-electric-blue/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-electric-blue rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
