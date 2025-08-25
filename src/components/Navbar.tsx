import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            style={{ background: "#fff", padding: "1rem" }}
        >
            <ul style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
                <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    <motion.a
                        href="#header"
                        whileTap={{ scale: 0.98 }}
                        style={{
                            display: "inline-block",
                            padding: "0.45rem 0.9rem",
                            border: "2px solid #111",
                            borderRadius: 6,
                            textDecoration: "none",
                            color: "inherit",
                            cursor: "pointer",
                            fontWeight: 500,
                        }}
                    >
                        Home
                    </motion.a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    <motion.a
                        href="#about"
                        whileTap={{ scale: 0.98 }}
                        style={{
                            display: "inline-block",
                            padding: "0.45rem 0.9rem",
                            border: "2px solid blue",
                            borderRadius: 6,
                            textDecoration: "none",
                            color: "inherit",
                            cursor: "pointer",
                            fontWeight: 500,
                        }}
                    >
                        About
                    </motion.a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    <motion.a
                        href="#projects"
                        whileTap={{ scale: 0.98 }}
                        style={{
                            display: "inline-block",
                            padding: "0.45rem 0.9rem",
                            border: "2px solid red",
                            borderRadius: 6,
                            textDecoration: "none",
                            color: "inherit",
                            cursor: "pointer",
                            fontWeight: 500,
                        }}
                    >
                        Projects
                    </motion.a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    <motion.a
                        href="#skills"
                        whileTap={{ scale: 0.98 }}
                        style={{
                            display: "inline-block",
                            padding: "0.45rem 0.9rem",
                            border: "2px solid green",
                            borderRadius: 6,
                            textDecoration: "none",
                            color: "inherit",
                            cursor: "pointer",
                            fontWeight: 500,
                        }}
                    >
                        Skills
                    </motion.a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    <motion.a
                        href="#contact"
                        whileTap={{ scale: 0.98 }}
                        style={{
                            display: "inline-block",
                            padding: "0.45rem 0.9rem",
                            border: "2px solid #111",
                            borderRadius: 6,
                            textDecoration: "none",
                            color: "inherit",
                            cursor: "pointer",
                            fontWeight: 500,
                        }}
                    >
                        Contact
                    </motion.a>
                </motion.li>
            </ul>

        </motion.nav>
    );
}

export default Navbar;