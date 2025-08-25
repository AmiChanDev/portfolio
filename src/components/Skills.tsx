import { motion } from "framer-motion";

const Skills = () => {
  const skills = ["Java", "JavaScript", "TypeScript", "React", "Node.js", "HTML", "CSS"];

  return (
    <motion.section
      id="skills"
      className="max-w-2xl mx-auto p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold text-blue-600">Skills</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
