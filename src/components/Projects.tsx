import { motion } from "framer-motion";

const Projects = () => {
    const projectList = [
        {
            name: "REST API Project",
            link: "https://github.com/AmiChanDev/rest-api-project",
            desc: "A fully RESTful API built with Node.js, Express, and TypeScript, following a clean and scalable MVC-style architecture. It supports CRUD operations with in-memory storage and is easily extendable to real databases.",
        },
        {
            name: "Expense Tracker",
            link: "https://github.com/AmiChanDev/expense-tracker",
            desc: "Expense Tracker is a full-stack web application that helps users manage and track their daily expenses. It provides a simple yet powerful way to add, categorize, and analyze financial transactions",
        }
    ];

    return (
        <motion.section
            id="projects"
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
                className="flex items-center justify-center gap-2"
            >
                <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 15, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                    className="text-3xl md:text-4xl"
                >
                    🚀
                </motion.span>
                <h2 className="text-3xl font-semibold text-theme-primary">Projects</h2>
            </motion.div>
            <h4 className="mt-2 text-md font-semibold text-theme-primary text-center">{ /*will probably remove later*/}
                {"{More On My Github}"}
            </h4>

            {/* Project Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
                {projectList.map((proj, index) => (
                    <motion.div
                        key={proj.name}
                        className="p-6 rounded-2xl shadow-theme-lg bg-theme-primary border border-theme-primary" //project card border
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <h3 className="text-xl font-semibold text-theme-primary">{proj.name}</h3>
                        <p className="mt-2 text-theme-secondary">{proj.desc}</p>
                        <motion.a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-4 font-medium text-blue-600 underline"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            View on GitHub
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.25.8-.55v-2.05c-3.2.7-3.9-1.5-3.9-1.5-.55-1.35-1.35-1.7-1.35-1.7-1.1-.75.1-.75.1-.75 1.2.1 1.85 1.25 1.85 1.25 1.05 1.8 2.75 1.25 3.45.95.1-.75.4-1.25.7-1.55-2.55-.3-5.25-1.3-5.25-5.8 0-1.25.45-2.25 1.2-3.05-.1-.3-.55-1.5.1-3.15 0 0 .95-.3 3.15 1.2a10.9 10.9 0 015.75 0c2.2-1.5 3.15-1.2 3.15-1.2.65 1.65.2 2.85.1 3.15.75.8 1.2 1.8 1.2 3.05 0 4.5-2.7 5.5-5.25 5.8.4.35.75 1 .75 2.05v3.05c0 .3.2.65.8.55A10.52 10.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                            </svg>
                        </motion.a>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;
