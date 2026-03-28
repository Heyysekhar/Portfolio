import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const BallCanvas = dynamic(() => import("./canvas/Ball"), {
  ssr: false,
  loading: () => (
    <div className="w-28 h-28 flex items-center justify-center">
      <span className="canvas-loader" />
    </div>
  ),
});

const Skills = ({ theme }) => {
  const isDark = theme === "dark";
  const categories = Object.keys(technologies);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`sm:text-[18px] text-[14px] uppercase tracking-wider ${isDark ? "text-secondary" : "text-gray-500"}`}>
          What I have learnt so far
        </p>
        <h2 className={`font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ${isDark ? "text-white" : "text-gray-900"}`}>
          Skills.
        </h2>
      </motion.div>

      {/* Tab bar - same scrollable horizontal style as Shivam's */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide flex-wrap"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
              activeTab === cat
                ? "bg-[#915eff] text-white border-[#915eff]"
                : isDark
                ? "bg-[#1d1836] text-secondary border-[#232631] hover:border-[#915eff] hover:text-[#915eff]"
                : "bg-white text-gray-600 border-gray-300 hover:border-[#915eff] hover:text-[#915eff]"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* 3D Ball grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-10 flex flex-row flex-wrap justify-center gap-10"
      >
        {technologies[activeTab].map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-2">
            <div className="w-28 h-28">
              <BallCanvas icon={tech.icon} />
            </div>
            <p className={`text-center text-xs font-medium ${isDark ? "text-secondary" : "text-gray-600"}`}>
              {tech.name}
            </p>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
