import { motion } from "framer-motion";
import me from "../assets/me.png";

const Header = () => {
    return (
        <motion.header
            id="header"
            className="py-10 shadow-theme bg-theme-primary text-theme-primary"
            initial={{ y: -100, opacity: 0, rotate: -5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
        >
            <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-4 text-center md:text-left"
            >
                {/* Profile Image */}
                <img
                    src={me}
                    alt="Amantha Gamage"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg object-cover border-1"
                />

                {/* Text Content */}
                <div>
                    <motion.h1
                        className="text-2xl md:text-4xl font-bold"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                    >
                        Amantha Indrajith Gamage
                    </motion.h1>
                    <motion.p
                        className="mt-2 text-base md:text-lg text-theme-secondary"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        Full-Stack Developer | AI Enthusiast | SE Undergraduate
                    </motion.p>

                </div>
            </motion.div>
        </motion.header>
    );
};

export default Header;
