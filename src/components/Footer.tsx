import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const footerLinks = {
  Company: ["About Us", "Our Work", "Services", "Contact"],
  Services: [
    "Animation & Design",
    "Software Development",
    "AI & Automation",
    "IT Consultancy",
  ],
  Resources: ["Blog", "Case Studies", "Documentation", "Support"],
};

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-dark-bg to-black border-t border-border overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center">
                <span className="text-dark-bg">RT</span>
              </div>
              <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
                RaS Techno
              </span>
            </motion.div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Animating Ideas. Engineering Solutions. Your partner in blending artistry
              with technology.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-card/50 border border-border hover:border-electric-blue/50 flex items-center justify-center group transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-electric-blue transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      className="text-muted-foreground hover:text-electric-blue transition-colors inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <motion.div
          className="p-8 rounded-2xl bg-gradient-to-r from-electric-blue/5 via-neon-purple/5 to-deep-purple/5 border border-electric-blue/20 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mail className="w-6 h-6 text-electric-blue" />
              <h3>Stay Updated</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest insights on animation,
              technology, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-input-background border border-border focus:border-electric-blue focus:outline-none transition-colors"
              />
              <motion.button
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-electric-blue to-neon-purple whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 RaS Techno. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <motion.a
              href="#"
              className="hover:text-electric-blue transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-electric-blue transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-electric-blue transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Cookie Policy
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
