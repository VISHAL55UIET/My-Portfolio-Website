import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[15vw] font-sans relative z-10"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Professional <span className="text-[#8245ec]">Experience</span>
        </h2>

        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-5 text-base md:text-lg font-medium max-w-3xl mx-auto leading-7">
          Hands-on experience gained through internships, practical software
          engineering work, backend development, and real-world project
          execution.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-[#8245ec]/30 ml-4 space-y-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-10">
            
            {/* Timeline Dot */}
            <div className="absolute -left-[11px] top-3 w-5 h-5 rounded-full bg-[#8245ec] shadow-[0_0_20px_rgba(130,69,236,0.7)]"></div>

            {/* Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_20px_rgba(130,69,236,0.15)] hover:shadow-[0_0_30px_rgba(130,69,236,0.25)] transition-all duration-300 hover:-translate-y-1">
              
              {/* Role */}
              <h3 className="text-xl md:text-2xl font-bold text-[#8245ec] mb-2">
                {exp.role}
              </h3>

              {/* Company */}
              <a
                href={exp.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] transition-colors duration-300 font-medium"
              >
                {exp.company}
              </a>

              {/* Period */}
              <p className="text-sm text-gray-400 italic mt-2 mb-4">
                {exp.period}
              </p>

              {/* Description */}
              <ul className="space-y-3 text-gray-300 leading-7">
                {exp.description.map((desc, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#8245ec] mt-1">▹</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;