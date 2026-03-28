import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("../components/canvas/Stars"), { ssr: false });

export default function Home() {
  const [theme, setTheme] = useState("dark");

  // Persist theme
  useEffect(() => {
    const saved = localStorage.getItem("sb-theme") || "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("light", saved === "light");
  }, []);

  const handleTheme = (t) => {
    setTheme(t);
    localStorage.setItem("sb-theme", t);
    document.documentElement.classList.toggle("light", t === "light");
  };

  const isDark = theme === "dark";

  return (
    <>
      <Head>
        <title>Portfolio | Sekhar Behera</title>
        <meta name="description" content="Sekhar Behera — AI/ML Engineer, Data Science, MERN Stack Developer. Building scalable intelligent systems." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤖</text></svg>" />
      </Head>

      <div className={`relative z-0 ${isDark ? "bg-primary" : "bg-gray-100"}`}>
        {/* Nav */}
        <div className={`${isDark ? "bg-hero-pattern" : ""} bg-cover bg-no-repeat bg-center`}>
          <Navbar theme={theme} setTheme={handleTheme} />
          <Hero theme={theme} />
        </div>

        {/* Sections */}
        <About theme={theme} />
        <Experience theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Education theme={theme} />

        {/* Contact + Stars BG */}
        <div className="relative z-0">
          <Contact theme={theme} />
          <StarsCanvas />
        </div>

        {/* Footer */}
        <footer
          className={`text-center py-6 text-sm font-mono border-t ${
            isDark ? "text-secondary border-white/10" : "text-gray-500 border-gray-200"
          }`}
        >
          <p>
            Made with ❤️ by{" "}
            <span style={{ color: "#915eff", fontWeight: 600 }}>Sekhar Behera</span>
            {" "}·{" "}
            <a href="https://github.com/Heyysekhar" target="_blank" rel="noreferrer"
              className="hover:text-[#915eff] transition-colors">
              GitHub
            </a>
            {" "}·{" "}
            <a href="https://www.linkedin.com/in/sekhar-behera" target="_blank" rel="noreferrer"
              className="hover:text-[#56ccf2] transition-colors">
              LinkedIn
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
