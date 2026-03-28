import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const github = "https://github.com/Heyysekhar";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link, theme, onClick }) => {
  const isDark = theme === "dark";

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} onClick={onClick}>
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="cursor-pointer"
      >
        <div
          className={`p-5 rounded-2xl w-full sm:w-[360px] transition-all duration-300 hover:shadow-2xl`}
          style={{
            background: isDark ? "#1d1836" : "#e8e8f0",
            boxShadow: isDark ? "0px 35px 120px -15px #211e35" : "0px 8px 30px rgba(0,0,0,0.1)",
          }}
        >
          {/* Image */}
          <div className="relative w-full h-[230px]">
            <div
              className="w-full h-full rounded-2xl flex items-center justify-center text-6xl"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, #1a0533 0%, #0a2040 100%)"
                  : "linear-gradient(135deg, #ddd 0%, #ccc 100%)",
              }}
            >
              {name.includes("Medical") ? "🏥" :
               name.includes("Spam") ? "🛡️" :
               name.includes("ShopEase") ? "🛒" : "🌍"}
            </div>

            {/* GitHub icon overlay */}
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank"); }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                title="View Code"
              >
                <span className="text-white text-lg">⌨️</span>
              </div>
              {live_link && (
                <div
                  onClick={(e) => { e.stopPropagation(); window.open(live_link, "_blank"); }}
                  className="ml-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  style={{ background: "#915eff" }}
                  title="Live Demo"
                >
                  <span className="text-white text-sm">🔗</span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="mt-5">
            <h3 className={`font-bold text-[24px] ${isDark ? "text-white" : "text-gray-900"}`}>
              {name}
            </h3>
            <p className={`mt-2 text-[14px] leading-[22px] ${isDark ? "text-secondary" : "text-gray-600"}`}>
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>

          {/* Click hint */}
          <p className="mt-3 text-xs text-[#915eff] opacity-60">Click for details →</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

/* ── Modal ── */
const ProjectModal = ({ project, onClose, theme }) => {
  if (!project) return null;
  const isDark = theme === "dark";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(5,8,22,0.85)", backdropFilter: "blur(10px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="w-full max-w-lg rounded-2xl overflow-hidden relative"
          style={{
            background: isDark ? "#1d1836" : "#f0f0f8",
            border: "1px solid rgba(145,94,255,0.3)",
            boxShadow: "0 25px 80px rgba(145,94,255,0.2)",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top accent */}
          <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #915eff, #00cea8, #f12711)" }} />

          <div className="p-7">
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: "rgba(145,94,255,0.15)", border: "1px solid rgba(145,94,255,0.25)" }}
                >
                  {project.name.includes("Medical") ? "🏥" :
                   project.name.includes("Spam") ? "🛡️" :
                   project.name.includes("ShopEase") ? "🛒" : "🌍"}
                </div>
                <div>
                  <h3 className={`font-bold text-xl ${isDark ? "text-white" : "text-gray-900"}`}>
                    {project.name}
                  </h3>
                  <p className="text-sm font-mono" style={{ color: "#915eff" }}>
                    {project.tags.map(t => `#${t.name}`).join("  ")}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all hover:bg-white/10"
                style={{ color: isDark ? "#aaa6c3" : "#666" }}
              >
                ✕
              </button>
            </div>

            {/* Full description */}
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-secondary" : "text-gray-600"}`}>
              {project.description}
            </p>

            {/* Tags full */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`text-xs px-3 py-1 rounded-full font-mono ${tag.color}`}
                  style={{
                    background: "rgba(145,94,255,0.1)",
                    border: "1px solid rgba(145,94,255,0.2)",
                  }}
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5"
                style={{
                  background: "rgba(145,94,255,0.15)",
                  border: "1px solid rgba(145,94,255,0.3)",
                  color: "#915eff",
                }}
              >
                ⌨️ View Code
              </a>
              {project.live_link && (
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                  style={{ background: "#915eff" }}
                >
                  🔗 Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects = ({ theme }) => {
  const isDark = theme === "dark";
  const [selected, setSelected] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`sm:text-[18px] text-[14px] uppercase tracking-wider ${isDark ? "text-secondary" : "text-gray-500"}`}>
          My work
        </p>
        <h2 className={`font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ${isDark ? "text-white" : "text-gray-900"}`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-3 text-[17px] max-w-3xl leading-[30px] ${isDark ? "text-secondary" : "text-gray-600"}`}
        >
          These projects showcase my practical skills and experience, each with descriptions and links to code
          repositories. They demonstrate my ability to handle complex challenges, adapt to different technologies,
          and oversee projects from start to finish.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.name}
            index={i}
            {...p}
            theme={theme}
            onClick={() => setSelected(p)}
          />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} theme={theme} />
    </>
  );
};

export default SectionWrapper(Projects, "projects");
