import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@rastechno.com",
    link: "mailto:hello@rastechno.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    link: "#",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
      }, 3000);
    }, 500);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 px-4 bg-gradient-to-b from-card-bg to-dark-bg overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl" />

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
            Get in Touch
          </motion.span>
          <h2
            className="mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Let's Build Something Amazing
          </h2>
          <p
            className="text-muted-foreground max-w-3xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            Ready to transform your ideas into reality? Reach out and let's start a
            conversation about your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <h3 className="mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-electric-blue/50 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-5 h-5 text-electric-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      <p className="text-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-electric-blue/10 to-neon-purple/10 border border-electric-blue/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h4 className="mb-4">Why Choose RaS Techno?</h4>
              <ul className="space-y-3">
                {[
                  "Proven track record",
                  "Expert team",
                  "Custom solutions",
                  "24/7 support",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-electric-blue flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label htmlFor="name" className="block mb-2 text-sm text-foreground/90">
                    Full Name *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:border-electric-blue focus:outline-none transition-colors"
                    animate={{
                      scale: focusedField === "name" ? 1.02 : 1,
                      borderColor:
                        focusedField === "name" ? "#00d4ff" : "rgba(168, 85, 247, 0.2)",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                >
                  <label htmlFor="email" className="block mb-2 text-sm text-foreground/90">
                    Email Address *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:border-electric-blue focus:outline-none transition-colors"
                    animate={{
                      scale: focusedField === "email" ? 1.02 : 1,
                      borderColor:
                        focusedField === "email" ? "#00d4ff" : "rgba(168, 85, 247, 0.2)",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label htmlFor="company" className="block mb-2 text-sm text-foreground/90">
                    Company
                  </label>
                  <motion.input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("company")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:border-electric-blue focus:outline-none transition-colors"
                    animate={{
                      scale: focusedField === "company" ? 1.02 : 1,
                      borderColor:
                        focusedField === "company" ? "#00d4ff" : "rgba(168, 85, 247, 0.2)",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.65 }}
                >
                  <label htmlFor="service" className="block mb-2 text-sm text-foreground/90">
                    Service Interested In
                  </label>
                  <motion.select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("service")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:border-electric-blue focus:outline-none transition-colors"
                    animate={{
                      scale: focusedField === "service" ? 1.02 : 1,
                      borderColor:
                        focusedField === "service" ? "#00d4ff" : "rgba(168, 85, 247, 0.2)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <option value="">Select a service</option>
                    <option value="animation">Animation & Creative Design</option>
                    <option value="software">Software Development</option>
                    <option value="ai">AI Support & Automation</option>
                    <option value="it">IT Services & Consultancy</option>
                    <option value="other">Other</option>
                  </motion.select>
                </motion.div>
              </div>

              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label htmlFor="message" className="block mb-2 text-sm text-foreground/90">
                  Message *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:border-electric-blue focus:outline-none transition-colors resize-none"
                  animate={{
                    scale: focusedField === "message" ? 1.02 : 1,
                    borderColor:
                      focusedField === "message" ? "#00d4ff" : "rgba(168, 85, 247, 0.2)",
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-electric-blue to-neon-purple relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitted ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitted ? 1 : 0.98 }}
                disabled={isSubmitted}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.75 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
