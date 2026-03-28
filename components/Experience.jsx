import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences, certifications } from "../constants";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[60%] h-[60%] flex items-center justify-center text-2xl">
          {experience.company_name.includes("OCAC") ? "🏛️" : "📊"}
        </div>
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold m-0" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, i) => (
        <li
          key={i}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`sm:text-[18px] text-[14px] uppercase tracking-wider ${isDark ? "text-secondary" : "text-gray-500"}`}>
          What I have done so far
        </p>
        <h2 className={`font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ${isDark ? "text-white" : "text-gray-900"}`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>

      {/* Certifications sub-section */}
      <motion.div className="mt-20">
        <h3 className={`font-bold text-[28px] mb-8 ${isDark ? "text-white" : "text-gray-900"}`}>
          Certifications & Achievements
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-5 overflow-hidden"
              style={{
                background: isDark ? "#1d1836" : "#e8e8f0",
                border: `1px solid ${cert.color}30`,
                boxShadow: `0 4px 30px ${cert.color}12`,
              }}
            >
              {/* Number watermark */}
              <div
                className="absolute top-2 right-3 font-black text-5xl select-none"
                style={{ color: `${cert.color}10`, fontFamily: "Poppins" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                className="w-8 h-8 rounded-full mb-3 flex items-center justify-center text-lg"
                style={{ background: `${cert.color}20` }}
              >
                🏆
              </div>
              <h4 className={`font-bold text-[15px] mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                {cert.title}
              </h4>
              <p className="text-sm font-medium mb-1" style={{ color: cert.color }}>
                {cert.org}
              </p>
              <p className={`text-xs font-mono ${isDark ? "text-secondary" : "text-gray-500"}`}>
                {cert.date}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
