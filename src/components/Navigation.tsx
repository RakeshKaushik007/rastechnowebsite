import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-bg/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center">
                <span className="text-dark-bg">RT</span>
              </div>
              <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
                RaS Techno
              </span>
            </motion.a>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/80 hover:text-electric-blue transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-purple group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-electric-blue to-neon-purple"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-electric-blue" />
              ) : (
                <Menu className="w-6 h-6 text-electric-blue" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute inset-0 bg-dark-bg/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <motion.div
          className="relative h-full flex flex-col items-center justify-center gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: isMobileMenuOpen ? 0 : 50,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-foreground/80 hover:text-electric-blue transition-colors"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -50,
              }}
              transition={{ duration: 0.3, delay: isMobileMenuOpen ? 0.1 + index * 0.1 : 0 }}
              whileHover={{ scale: 1.05, x: 10 }}
            >
              {link.name}
            </motion.button>
          ))}
          <motion.button
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-electric-blue to-neon-purple"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 50,
            }}
            transition={{ duration: 0.3, delay: isMobileMenuOpen ? 0.6 : 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}
