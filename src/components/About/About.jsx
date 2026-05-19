import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-[7vw] md:px-[10vw] lg:px-[20vw] font-sans"
    >
      {/* Center Content */}
      <div className="max-w-4xl text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">
          Hi, I am
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Vishal Singh
        </h2>

        {/* Typewriter */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] mb-6">
          <span className="text-white mr-2">I am a</span>
          <span className="text-[#8245ec]">
            <Typewriter
              words={[
                "Software Engineer",
                "AI + Backend Developer",
                "Full Stack Developer",
                "DSA Enthusiast",
                "Golang & Java Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1800}
            />
          </span>
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-10">
          Passionate Computer Science student focused on building scalable
          backend systems, solving complex problems, and developing efficient
          full stack applications using Java, Golang, MERN stack, REST APIs,
          microservices, and modern databases.
        </p>

        {/* Button */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
          style={{
            background: "linear-gradient(90deg,#8245ec,#a855f7)",
            boxShadow:
              "0 0 2px #8245ec, 0 0 10px #8245ec, 0 0 30px #8245ec",
          }}
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </section>
  );
};

export default About;