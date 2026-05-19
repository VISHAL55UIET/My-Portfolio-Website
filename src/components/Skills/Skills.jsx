import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[15vw] font-sans relative z-10"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Technical <span className="text-[#8245ec]">Skills</span>
        </h2>

        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-5 text-base md:text-lg font-medium max-w-3xl mx-auto leading-7">
          A strong collection of technical skills built through software
          engineering, backend systems, full stack development, AI-focused
          learning, and competitive programming.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1000}
            scale={1.02}
            transitionSpeed={800}
            gyroscope={true}
          >
            <div className="bg-white/5 backdrop-blur-xl px-6 sm:px-8 py-8 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(130,69,236,0.18)] hover:shadow-[0_0_35px_rgba(130,69,236,0.28)] transition-all duration-300 h-full">
              
              {/* Category Title */}
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center gap-2 border border-gray-700 rounded-2xl py-4 px-3 text-center bg-transparent hover:border-[#8245ec] hover:bg-[#8245ec]/10 transition-all duration-300 hover:scale-105"
                  >
                    {/* Logo */}
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-7 h-7 sm:w-9 sm:h-9 object-contain transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Skill Name */}
                    <span className="text-xs sm:text-sm text-gray-300 font-medium leading-5">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;