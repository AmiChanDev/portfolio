import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, background: "linear-gradient(90deg, #e0eafc, #cfdef3)" }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{
                textAlign: "center",
                padding: "0.5rem",
                background: "white",
                fontWeight: 500,
                borderTop: "1px solid #0074D9",
                fontSize: "1.1rem",
                letterSpacing: "1px",
            }}
        >
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
                style={{ display: "inline-block" }}
            >
                &copy; 2025 Amantha Gamage (AmiChanDev) &mdash; All rights reserved.
            </motion.span>
        </motion.footer>
    );
}

export default Footer;