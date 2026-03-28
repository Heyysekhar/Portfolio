import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";
import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("./canvas/Stars"), { ssr: false });

const Hero = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden ${isDark ? "" : "bg-gray-100"}`}>
      {/* Hero background */}
      <div
        className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5"
      >
        {/* Left accent line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text */}
        <div>
          <h1
            className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Hi, I'm <span className="text-[#915eff]">Sekhar</span>
          </h1>

          {/* Type animation - same as Shivam's */}
          <div className={`mt-2 text-[20px] sm:text-[26px] font-medium ${isDark ? "text-white-100" : "text-gray-700"}`}>
            <TypeAnimation
              sequence={[
                "AI/ML Engineer",
                2000,
                "Data Science Enthusiast",
                2000,
                "MERN Stack Developer",
                2000,
                "Generative AI Builder",
                2000,
                "LLM Application Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>

      {/* Blur layer (same as Shivam's) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(to top, #050816 0%, transparent 100%)"
            : "linear-gradient(to top, #f0f0f0 0%, transparent 100%)"
        }}
      />

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      <StarsCanvas />
    </section>
  );
};

export default Hero;
