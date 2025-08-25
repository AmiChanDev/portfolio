import { motion } from "framer-motion";

const Header = () => {
    return (
        <motion.header
            className="bg-blue-600 text-white text-center py-10"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-4xl font-bold">Amantha Gamage</h1>
            <p className="mt-2 text-lg">Passionate Coder | Java Enthusiast</p>
            <nav className="mt-4 space-x-4">
                <a href="#about" className="hover:underline">About</a>
                <a href="#projects" className="hover:underline">Projects</a>
                <a href="#skills" className="hover:underline">Skills</a>
                <a href="#contact" className="hover:underline">Contact</a>
            </nav>
        </motion.header>
    );
};

export default Header;
