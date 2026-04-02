import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        style={{ background: "#1d1836" }}
      >
        <div className="w-16 h-16 flex items-center justify-center text-4xl">
          {title === "AI/ML Engineer" ? "🤖" :
           title === "Data Scientist" ? "📊" :
           title === "MERN Stack Developer" ? "💻" : "🧠"}
        </div>
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`sm:text-[18px] text-[14px] uppercase tracking-wider ${isDark ? "text-secondary" : "text-gray-500"}`}>
          Introduction
        </p>
        <h2 className={`font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ${isDark ? "text-white" : "text-gray-900"}`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-[17px] max-w-3xl leading-[30px] ${isDark ? "text-secondary" : "text-gray-600"}`}
      >
        I&apos;m an aspiring AI/ML Engineer and Data Science enthusiast and MERN Stack Developer who enjoys building
        modern, responsive, and scalable web applications. Passionate about building scalable, intelligent systems
        that solve real-world problems. With a strong foundation in Python and Machine Learning, I love transforming
        ideas into real-world digital solutions using MongoDB, Express.js, React.js, and Node.js.
        <br /><br />
        I actively explore Generative AI, Large Language Models (LLMs), and AI Agent architectures. I&apos;m currently
        pursuing B.Tech in Computer Science (Data Science) at Gandhi Institute for Technological Advancement,
        Bhubaneswar, with a CGPA of <span className="text-[#915eff] font-semibold">8.00/10</span>.
        <br /><br />
        I&apos;m actively seeking internship and collaborative opportunities in AI/ML, Data Science and MERN stack.
        Let&apos;s connect and build the future with AI.
      </motion.p>

      {/* Contact links */}
      <motion.div variants={fadeIn("", "", 0.2, 1)} className="mt-4 flex flex-wrap gap-4">
        <a href="mailto:bsekhar441@gmail.com"
          className="text-[#915eff] hover:underline text-sm font-mono">
          bsekhar441@gmail.com
        </a>
        <a href="tel:+918457088439"
          className="text-[#00cea8] hover:underline text-sm font-mono">
          845-708-8439
        </a>
        <a href="https://www.linkedin.com/in/sekhar-behera" target="_blank" rel="noreferrer"
          className="text-[#56ccf2] hover:underline text-sm font-mono">
          LinkedIn
        </a>
        <a href="https://github.com/Heyysekhar" target="_blank" rel="noreferrer"
          className="text-gray-400 hover:underline text-sm font-mono">
          GitHub
        </a>
      </motion.div>

      {/* Service cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((s, i) => (
          <ServiceCard key={s.title} index={i} {...s} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
