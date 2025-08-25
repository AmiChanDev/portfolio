import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="max-w-6xl mx-auto p-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
      >
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 15, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ fontSize: "2rem" }}
        >
          💻
        </motion.span>
        <h2 className="text-3xl font-semibold text-blue-600">About Me</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
        className="flex justify-center mt-6"
      >
      </motion.div>
      <motion.p
        className="mt-6 text-lg rounded-xl px-4 py-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        style={{
          background: "linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%)",
        }}
      >
        Hi, I'm Amantha Gamage, a 21-year-old software engineering undergraduate passionate about coding and backend development. I love working with Java and building creative projects that solve real-world problems.
        <br /><br />
        Explore my work and open-source contributions on{" "}
        <motion.a
          href="https://github.com/AmiChanDev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline font-medium"
          whileHover={{ scale: 1.1, color: "#2563eb" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          GitHub
        </motion.a>
        . Let's connect and create something amazing!
      </motion.p>
    </motion.section>
  );
};

export default About;