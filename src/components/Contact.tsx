import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            id="contact"
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
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-3xl md:text-4xl"
                >
                    📬
                </motion.span>
                <h2 className="text-3xl font-semibold text-black">Contact</h2>
            </motion.div>

            {/* Contact Info */}
            <motion.div
                className="mt-5 bg-white p-6 rounded-2xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            >
                <p className="text-black text-lg">
                    Email:{" "}
                    <a
                        href="mailto:gamageamantha@gmail.coms"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        gamageamantha@gmail.com
                    </a>
                </p>
                <p className="mt-4 text-black text-lg">
                    GitHub:{" "}
                    <a
                        href="https://github.com/AmiChanDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        github.com/AmiChanDev
                    </a>
                </p>
            </motion.div>
        </motion.section>
    );
};

export default Contact;
