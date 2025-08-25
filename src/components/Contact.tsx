import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            id="contact"
            className="max-w-2xl mx-auto p-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-semibold text-blue-600">Contact</h2>
            <p className="mt-4">
                Email:{" "}
                <a href="mailto:your@email.com" className="text-blue-500 hover:underline">
                    your@email.com
                </a>
            </p>
            <p className="mt-2">
                GitHub:{" "}
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                >
                    github.com/yourusername
                </a>
            </p>
        </motion.section>
    );
};

export default Contact;
