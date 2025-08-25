import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="max-w-2xl mx-auto p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold text-blue-600">About Me</h2>
      <p className="mt-4 text-lg">
        I am a 21-year-old undergraduate who loves coding, Java, and building awesome projects.
      </p>
    </motion.section>
  );
};

export default About;
