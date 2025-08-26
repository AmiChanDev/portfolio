import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHideOnScroll } from "../hooks/useHideOnScroll";

const navLinks = [
  { href: "#header", label: "Home", border: "2px solid #111" },
  { href: "#about", label: "About", border: "2px solid blue" },
  { href: "#projects", label: "Projects", border: "2px solid red" },
  { href: "#skills", label: "Skills", border: "2px solid green" },
  { href: "#contact", label: "Contact", border: "2px solid purple" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hidden = useHideOnScroll(); // 👈 use hook

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const yOffset = -80; // offset for sticky nav
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }} // 👈 hide/show on scroll
      transition={{ duration: 0.3 }}
      style={{
        background: "#fff",
        padding: "1rem",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Desktop Nav */}
      <ul
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
        className="desktop-nav"
      >
        {navLinks.map((link, idx) => (
          <motion.li
            key={link.href}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2 + idx * 0.1,
              duration: 0.4,
              type: "spring",
            }}
            style={{ listStyle: "none" }}
          >
            <motion.a
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.05, backgroundColor: "#e0eafc" }}
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
                minWidth: "120px",
                textAlign: "center",
              }}
            >
              {link.label}
            </motion.a>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Nav Toggle */}
      <div
        className="mobile-nav"
        style={{
          display: "none",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "transparent",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.7rem",
              marginTop: "1rem",
              alignItems: "center",
              width: "100%",
            }}
            className="mobile-menu"
          >
            {navLinks.map((link) => (
              <li
                key={link.href}
                style={{ listStyle: "none", width: "100%", maxWidth: "250px" }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  style={{
                    display: "block",
                    padding: "0.5rem 0.5rem",
                    border: link.border,
                    borderRadius: 9,
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                    fontWeight: 500,
                    background: "transparent",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-nav {
              display: flex !important;
            }
          }
          @media (min-width: 769px) {
            .mobile-nav, .mobile-menu {
              display: none !important;
            }
          }
        `}
      </style>
    </motion.nav>
  );
};

export default Navbar;
