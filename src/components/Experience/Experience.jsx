import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Experience</h2>
      <div className="flex flex-col space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-[#0d081f] p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-purple-500">{exp.role}</h3>
            <a
              href={exp.companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500"
            >
              {exp.company}
            </a>
            <p className="text-gray-400 italic mt-1">{exp.period}</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              {exp.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
