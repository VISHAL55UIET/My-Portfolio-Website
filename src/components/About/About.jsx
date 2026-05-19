import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-[7vw] md:px-[10vw] lg:px-[18vw] font-sans relative z-10"
    >
      <div className="max-w-5xl text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-2">
          Hi, I’m
        </h1>

        <h2 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight mb-6">
          <span className="text-white">Vishal </span>
          <span className="text-[#8245ec] text-glow">Singh</span>
        </h2>

        {/* Typewriter */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
          <span className="text-white mr-2">I build</span>
          <span className="text-[#8245ec] font-bold">
            <Typewriter
              words={[
                "AI + Backend Systems",
                "Scalable Full Stack Applications",
                "Microservices & REST APIs",
                "Java & Golang Solutions",
                "DSA Driven Problem Solving",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1700}
            />
          </span>
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-10">
          I’m a <span className="text-white font-semibold">4th-year Computer Science Engineer</span> 
          passionate about building 
          <span className="text-[#8245ec] font-medium"> scalable AI-powered backend systems</span>, 
          solving complex algorithmic problems, and developing high-performance 
          full stack applications. Strong foundation in 
          <span className="text-white font-medium"> Data Structures & Algorithms</span> 
          with 1800+ LeetCode problems, competitive programming, and hands-on 
          experience in 
          <span className="text-[#8245ec] font-medium">
            {" "}Java, Golang, MERN Stack, Microservices, REST APIs
            and cloud-focused backend engineering.
          </span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#contact"
            className="cosmic-button text-lg px-8 py-3"
          >
            Let’s Connect
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-[#8245ec] text-[#8245ec] text-lg font-semibold hover:bg-[#8245ec]/10 transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;