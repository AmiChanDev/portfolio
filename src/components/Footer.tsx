import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="mt-5 text-center p-4 bg-white shadow-inner border-t border-gray-200 font-medium text-sm md:text-base"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="inline-block"
      >
        <span className="text-blue-600 font-semibold">Amantha Gamage (AmiChanDev)</span> — All rights reserved.
        &copy; 2025{" "}
      </motion.span>
    </motion.footer>
  );
};

export default Footer;
