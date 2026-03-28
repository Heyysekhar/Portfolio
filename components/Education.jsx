import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science (Data Science)",
    school: "Gandhi Institute for Technological Advancement",
    dates: "September 2023 – March 2027",
    location: "Bhubaneswar, Odisha",
    cgpa: "8.00/10",
    icon: "🎓",
    color: "#915eff",
  },
  {
    degree: "12th Science",
    field: "Science Stream",
    school: "Kendrapara Autonomous College",
    dates: "June 2021 – March 2023",
    location: "Kendrapara, Odisha",
    icon: "📚",
    color: "#00cea8",
  },
];

const Education = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`sm:text-[18px] text-[14px] uppercase tracking-wider ${isDark ? "text-secondary" : "text-gray-500"}`}>
          Academic background
        </p>
        <h2 className={`font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ${isDark ? "text-white" : "text-gray-900"}`}>
          Education.
        </h2>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {educationData.map((edu, i) => (
          <motion.div
            key={edu.school}
            variants={fadeIn("up", "spring", i * 0.3, 0.75)}
            className="relative rounded-2xl p-7 overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            style={{
              background: isDark ? "#1d1836" : "#e8e8f0",
              border: `1px solid ${edu.color}25`,
              boxShadow: `0 10px 40px ${edu.color}10`,
            }}
          >
            {/* Glow corner */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle at top right, ${edu.color}15, transparent 70%)`,
              }}
            />

            <div className="text-4xl mb-4">{edu.icon}</div>
            <h3 className={`font-bold text-[20px] mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
              {edu.degree}
            </h3>
            <p className="font-semibold text-[15px] mb-2" style={{ color: edu.color }}>
              {edu.school}
            </p>
            <p className={`text-[14px] mb-3 ${isDark ? "text-secondary" : "text-gray-600"}`}>{edu.field}</p>

            <div className="flex flex-wrap gap-3 text-xs font-mono">
              <span className={isDark ? "text-secondary" : "text-gray-500"}>📅 {edu.dates}</span>
              <span className={isDark ? "text-secondary" : "text-gray-500"}>📍 {edu.location}</span>
            </div>

            {edu.cgpa && (
              <div
                className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono"
                style={{
                  background: `${edu.color}15`,
                  border: `1px solid ${edu.color}30`,
                  color: edu.color,
                }}
              >
                ⭐ CGPA: {edu.cgpa}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
