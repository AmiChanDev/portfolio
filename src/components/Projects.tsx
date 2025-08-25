import { motion } from "framer-motion";

const Projects = () => {
    const projectList = [
        { name: "Project 1", link: "#" },
        { name: "Project 2", link: "#" },
        { name: "Project 3", link: "#" },
    ];

    return (
        <motion.section
            id="projects"
            className="max-w-2xl mx-auto p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-semibold text-blue-600">Projects</h2>
            <ul className="mt-4 space-y-3">
                {projectList.map((proj, index) => (
                    <motion.li
                        key={proj.name}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        {proj.name} -{" "}
                        <a href={proj.link} className="text-blue-500 hover:underline">
                            View
                        </a>
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    );
};

export default Projects;
