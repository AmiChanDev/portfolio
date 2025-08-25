import { motion } from "framer-motion";

const navLinks = [
    { href: "#header", label: "Home", border: "2px solid #111" },
    { href: "#about", label: "About", border: "2px solid blue" },
    { href: "#projects", label: "Projects", border: "2px solid red" },
    { href: "#skills", label: "Skills", border: "2px solid green" },
    { href: "#contact", label: "Contact", border: "2px solid #111" },
];

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            style={{ background: "#fff", padding: "1rem" }}
        >
            <ul style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
                {navLinks.map((link, idx) => (
                    <motion.li
                        key={link.href}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9 + idx * 0.1, duration: 0.4, type: "spring" }}
                        style={{ listStyle: "none" }}
                    >
                        <motion.a
                            href={link.href}
                            whileTap={{ scale: 0.98 }}
                            whileHover={{ scale: 1.1, backgroundColor: "#e0eafc" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            style={{
                                display: "inline-block",
                                padding: "0.45rem 0.9rem",
                                border: link.border,
                                borderRadius: 6,
                                textDecoration: "none",
                                color: "inherit",
                                cursor: "pointer",
                                fontWeight: 500,
                                background: "transparent",
                            }}
                        >
                            {link.label}
                        </motion.a>
                    </motion.li>
                ))}
            </ul>
        </motion.nav>
    );
}

export default Navbar;