import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa"; // TikTok icon

const Contact = () => {
    const contacts = [
        {
            icon: <Mail className="w-10 h-10 text-blue-600" />,
            link: "mailto:gamageamantha@gmail.com",
        },
        {
            icon: <Github className="w-10 h-10 text-gray-800" />,
            link: "https://github.com/AmiChanDev",
        },
        {
            icon: <Linkedin className="w-10 h-10 text-blue-700" />,
            link: "https://linkedin.com/in/gamageami",
        },
        {
            icon: <Instagram className="w-10 h-10 text-pink-500" />,
            link: "https://instagram.com/amichan6.9",
        },
        {
            icon: <Facebook className="w-10 h-10 text-blue-500" />,
            link: "https://web.facebook.com/ami.gamage.69/",
        },
        {
            icon: <FaTiktok className="w-10 h-10 text-black" />, // TikTok icon added
            link: "https://www.tiktok.com/@ami_chan69",
        },
    ];

    return (
        <motion.section
            id="contact"
            className="max-w-5xl mx-auto px-4 py-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
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

            {/* Icon Cards */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
                {contacts.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-1" //border
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5, type: "spring" }}
                    >
                        {item.icon}
                    </motion.a>
                ))}
            </div>
        </motion.section>
    );
};

export default Contact;
