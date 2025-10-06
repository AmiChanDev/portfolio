import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../theme/ThemeProvider";

const navLinks = [
  { href: "#header", label: "Home", border: "2px solid orange" },
  { href: "#about", label: "About", border: "2px solid blue" },
  { href: "#projects", label: "Projects", border: "2px solid red" },
  { href: "#skills", label: "Skills", border: "2px solid green" },
  { href: "#contact", label: "Contact", border: "2px solid magenta" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return;
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          style={{
            background: "var(--bg-primary)",
            padding: "1rem",
            position: "sticky",
            top: 0,
            zIndex: 50,
            borderBottom: "1px solid var(--border-secondary)",
          }}
        >
          {/* Desktop Navbar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
            className="desktop-nav"
          >
            <div style={{ flex: 1 }} />
            <ul
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                margin: 0,
                padding: 0,
                flex: 1,
              }}
            >
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.9 + idx * 0.1,
                    duration: 0.4,
                    type: "spring",
                  }}
                  style={{ listStyle: "none" }}
                >
                  <motion.a
                    href={link.href}
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.05, backgroundColor: "var(--bg-tertiary)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{
                      display: "inline-block",
                      padding: "0.45rem 0.9rem",
                      border: link.border,
                      borderRadius: 6,
                      textDecoration: "none",
                      color: "var(--text-primary)",
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

            {/* Theme Toggle Button */}
            <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  background: "transparent",
                  border: "2px solid var(--border-primary)",
                  borderRadius: "50%",
                  width: "45px",
                  height: "45px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  color: "var(--text-primary)",
                }}
                title={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === 'dark' ? "☀️" : "🌙"}
              </motion.button>
            </div>
          </div>

          {/* Mobile Hamburger */}
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
                color: "var(--text-primary)",
              }}
            >
              ☰
            </button>

            {/* Theme Toggle Button for Mobile */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                background: "transparent",
                border: "2px solid var(--border-primary)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                color: "var(--text-primary)",
              }}
              title={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === 'dark' ? "☀️" : "🌙"}
            </motion.button>
          </div>

          {/* Mobile Dropdown Menu */}
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
                      onClick={() => setIsOpen(false)}
                      style={{
                        display: "block",
                        padding: "0.5rem 0.5rem",
                        border: link.border,
                        borderRadius: 9,
                        textDecoration: "none",
                        color: "var(--text-primary)",
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

          {/* CSS (inline or external) */}
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
      )}
    </AnimatePresence>
  );
};

export default Navbar;
