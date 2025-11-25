import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL;

const NotifyMe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [ip, setIp] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // Fetch visitor IP
    useEffect(() => {
        const fetchIP = async () => {
            try {
                const res = await fetch("https://api.ipify.org?format=json");
                const data = await res.json();
                setIp(data.ip);
            } catch (err) {
                console.error("Failed to fetch IP:", err);
            }
        };
        fetchIP();
    }, []);

    const handleSubmit = async () => {
        if (!message.trim()) return;

        const payload = {
            content: `
📬 **New Message From Portfolio**

**Name:** ${name || "Anonymous"}
**Email:** ${email || "N/A"}
**Message:** ${message}

**IP:** ${ip || "N/A"}
**Sent At:** ${new Date().toLocaleString()}
-----------------------------------`
        };

        try {
            await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            setSubmitted(true);
            setName("");
            setEmail("");
            setMessage("");
            setTimeout(() => setSubmitted(false), 4000);
        } catch (err) {
            console.error("Failed to send message:", err);
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <motion.div
            className="max-w-3xl mx-auto p-6 bg-theme-primary rounded-2xl shadow-theme-lg border border-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
        >
            <motion.div
                className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-12 px-4 text-center md:text-left"
            >
                {/* Form Inputs */}
                <div className="flex-1 flex flex-col gap-3 w-full">
                    <h3 className="text-center text-2xl md:text-3xl font-semibold text-theme-primary">Send a Message</h3>

                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-black bg-theme-secondary text-theme-primary focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-black bg-theme-secondary text-theme-primary focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                    <textarea
                        placeholder="Enter your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-black bg-theme-secondary text-theme-primary focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
                        rows={3}
                    />

                    <motion.button
                        onClick={handleSubmit}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-2 w-full px-3 py-2 bg-green-600 text-white rounded-lg font-medium shadow-md hover:bg-green-700 transition"
                    >
                        Send
                    </motion.button>

                    {submitted && (
                        <motion.p
                            className="mt-3 text-green-600 font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            Message sent! ✅
                        </motion.p>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default NotifyMe;
