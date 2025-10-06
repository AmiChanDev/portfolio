import { motion } from "framer-motion";
import CV from "../files/Amantha_Gamage_Professional_CV.pdf";
import { useTheme } from "../theme/ThemeProvider";

const About = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      id="about"
      className="max-w-5xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3, type: "spring" }}
        className="flex items-center justify-center gap-2"
      >
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 15, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-3xl md:text-4xl"
        >
          💻
        </motion.span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-theme-primary">
          About Me
        </h2>
      </motion.div>

      {/* Content */}
      <motion.p
        className="mt-8 text-base sm:text-lg md:text-xl leading-relaxed rounded-xl px-6 py-5 shadow-theme-lg text-theme-primary text-center bg-theme-primary border border-theme-secondary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Hi, I'm <span className="font-semibold">Amantha Gamage</span>, a{" "}
        <span className="font-semibold">22-year-old software engineering undergraduate</span>{" "}
        proficient in MERN stack and full-stack development. I love{" "}
        <span className="font-semibold text-green-600">coding</span> to build creative
        projects that solve real world problems.
        <br />
        <br />
        Explore my work and open-source contributions on{" "}
        <motion.a
          href="https://github.com/AmiChanDev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          GitHub
        </motion.a>
        . Let’s connect and create something amazing!
      </motion.p>

      {/* Download CV Button */}
      <motion.div
        className="mt-6 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.1 }}
      >
        <motion.a
          href={CV}
          download
          style={{
            backgroundColor: theme === 'dark' ? '#ffffff' : '#000000',
            color: theme === 'dark' ? '#000000' : '#ffffff',
            border: `2px solid ${theme === 'dark' ? '#ffffff' : '#000000'}`
          }}
          className="px-8 py-3 rounded-full font-semibold shadow-theme-lg text-lg"
          whileHover={{
            scale: 1.08,
            backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
            color: theme === 'dark' ? '#ffffff' : '#000000',
            border: `2px solid ${theme === 'dark' ? '#000000' : '#ffffff'}`,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          📄 Download CV
        </motion.a>

      </motion.div>
    </motion.section>
  );

};

export default About;
