import { motion } from "framer-motion";
import { useTheme } from "../theme/ThemeProvider";

const Skills = () => {
  const { theme } = useTheme();

  const skills = [
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" },
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Arduino", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Prisma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
    { name: "Framer Motion", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  ];

  return (
    <motion.section
      id="skills"
      className="max-w-5xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2"
      >
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 15, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-3xl md:text-4xl"
        >
          🛠️
        </motion.span>
        <h2 className="text-3xl font-semibold text-theme-primary">Skills</h2>
      </motion.div>

      {/* Skills List */}
      <motion.div
        className={`mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-theme-primary p-4 rounded-2xl shadow-theme-lg border ${theme === 'dark' ? 'border-white' : 'border-black'}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg bg-theme-secondary shadow-theme cursor-pointer border ${theme === 'dark' ? 'border-white' : 'border-black'}`}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="h-8 w-8 object-contain"
            />
            <span className="text-theme-primary font-medium text-xs text-center">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

    </motion.section >
  );
};

export default Skills;
