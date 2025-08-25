import { motion } from "framer-motion";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];

const Header = () => {
    return (
        <motion.header
            className="text-black py-10 shadow-md"
            initial={{ y: -100, opacity: 0, rotate: -5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{
                background: "white",
            }}
        >
            <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2rem",
                }}
            >
                <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 20, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    style={{ fontSize: "2rem", display: "inline-block" }}
                >
                    👋
                </motion.span>
                <img
                    src="/portfolio/src/assets/me-circle.png"
                    alt="Amantha Gamage"
                    style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.70)",
                        objectFit: "cover",
                    }}
                />
                <div style={{ textAlign: "left" }}>
                    <motion.h1
                        className="text-4xl font-bold"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                    >
                        Amantha Indrajith Gamage
                    </motion.h1>
                    <motion.p
                        className="mt-2 text-lg"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        Passionate Coder | Backend Enthusiast | SE Undergraduate
                    </motion.p>
                </div>
            </motion.div>
        </motion.header>
    );
};

export default Header;