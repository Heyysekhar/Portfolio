import { useState, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { slideIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const EarthCanvas = dynamic(() => import("./canvas/Earth"), { ssr: false });

const Contact = ({ theme }) => {
  const isDark = theme === "dark";
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending (integrate EmailJS here)
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass = `py-4 px-6 placeholder:text-secondary rounded-lg outlined-none border-none font-medium text-[14px] w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#915eff]`;
  const inputStyle = {
    background: isDark ? "#151030" : "#ddd",
    color: isDark ? "white" : "#050816",
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl"
        style={{ background: isDark ? "#1d1836" : "#e0e0e8" }}
      >
        <p className={`sm:text-[18px] text-[14px] uppercase tracking-wider ${isDark ? "text-secondary" : "text-gray-500"}`}>
          Get in touch
        </p>
        <h3 className={`font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ${isDark ? "text-white" : "text-gray-900"}`}>
          Contact.
        </h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className={`font-medium mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={inputClass}
              style={inputStyle}
              required
            />
          </label>

          <label className="flex flex-col">
            <span className={`font-medium mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={inputClass}
              style={inputStyle}
              required
            />
          </label>

          <label className="flex flex-col">
            <span className={`font-medium mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className={inputClass}
              style={{ ...inputStyle, resize: "none" }}
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading || sent}
            className="py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md transition-all duration-200 hover:-translate-y-1 disabled:opacity-60"
            style={{
              background: sent ? "#00cea8" : "linear-gradient(90deg, #915eff, #00cea8)",
              color: "white",
              boxShadow: "0 0 20px rgba(145,94,255,0.4)",
            }}
          >
            {sent ? "✓ Message Sent!" : loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Quick links */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
          <a href="mailto:bsekhar441@gmail.com"
            className="text-sm font-mono transition-colors hover:text-[#915eff]"
            style={{ color: isDark ? "#aaa6c3" : "#555" }}>
            📧 bsekhar441@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/sekhar-behera" target="_blank" rel="noreferrer"
            className="text-sm font-mono transition-colors hover:text-[#56ccf2]"
            style={{ color: isDark ? "#aaa6c3" : "#555" }}>
            💼 LinkedIn
          </a>
          <a href="https://github.com/Heyysekhar" target="_blank" rel="noreferrer"
            className="text-sm font-mono transition-colors hover:text-[#915eff]"
            style={{ color: isDark ? "#aaa6c3" : "#555" }}>
            🐙 GitHub
          </a>
          <span className="text-sm font-mono" style={{ color: isDark ? "#aaa6c3" : "#555" }}>
            📍 Bhubaneswar, Odisha, India
          </span>
        </div>
      </motion.div>

      {/* 3D Earth */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
