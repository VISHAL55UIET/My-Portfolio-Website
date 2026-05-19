import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[15vw] font-sans relative z-10"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Academic <span className="text-[#8245ec]">Journey</span>
        </h2>

        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-5 text-base md:text-lg font-medium max-w-3xl mx-auto leading-7">
          My academic journey built the foundation of software engineering,
          problem solving, computer science fundamentals, and continuous
          technical growth.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 h-full w-[2px] bg-[#8245ec]/30 transform sm:-translate-x-1/2"></div>

        {/* Timeline Items */}
        <div className="space-y-14">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 sm:left-1/2 top-8 w-5 h-5 rounded-full bg-[#8245ec] shadow-[0_0_20px_rgba(130,69,236,0.8)] transform -translate-x-1/2 z-20"></div>

              {/* Card */}
              <div
                className={`ml-12 sm:ml-0 w-full sm:w-[44%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_25px_rgba(130,69,236,0.15)] hover:shadow-[0_0_35px_rgba(130,69,236,0.25)] transition-all duration-300 hover:-translate-y-1 ${
                  index % 2 === 0
                    ? "sm:mr-auto sm:pr-6"
                    : "sm:ml-auto sm:pl-6"
                }`}
              >
                {/* Top Row */}
                <div className="flex items-center gap-5">
                  {/* Logo */}
                  <div className="w-16 h-16 rounded-xl bg-white overflow-hidden flex-shrink-0 shadow-md">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Degree + School */}
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {edu.degree}
                    </h3>

                    <h4 className="text-sm md:text-base text-gray-300 font-medium">
                      {edu.school}
                    </h4>

                    <p className="text-xs md:text-sm text-gray-500 mt-1 italic">
                      {edu.date}
                    </p>
                  </div>
                </div>

                {/* Grade */}
                <p className="mt-5 text-sm md:text-base text-[#8245ec] font-semibold">
                  Grade: {edu.grade}
                </p>

                {/* Description */}
                <p className="mt-3 text-gray-300 leading-7 text-sm md:text-base text-left">
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;