import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="work"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[15vw] font-sans relative z-10"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Featured <span className="text-[#8245ec]">Projects</span>
        </h2>

        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-5 text-base md:text-lg max-w-2xl mx-auto">
          A collection of full stack, backend, scalable system, and
          problem-solving focused projects reflecting my software engineering
          journey.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(130,69,236,0.3)] transition-all duration-300"
          >
            {/* Image */}
            <div className="p-4 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5 line-clamp-3 leading-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="bg-[#0f0b1f] border border-white/10 rounded-2xl shadow-2xl w-full max-w-4xl relative overflow-hidden max-h-[90vh] overflow-y-auto">

            {/* Close */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-5 z-20 text-white text-4xl font-bold hover:text-[#8245ec] transition-colors"
            >
              &times;
            </button>

            {/* Image */}
            <div className="w-full bg-[#0f0b1f] p-5">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 text-left">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-7">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#251f38] text-sm font-semibold text-purple-400 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 bg-[#1b1530] hover:bg-[#2a2148] text-white px-6 py-3 rounded-xl text-center font-semibold transition-all duration-300"
                >
                  View Code
                </a>

                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 bg-[#8245ec] hover:bg-[#6f39cf] text-white px-6 py-3 rounded-xl text-center font-semibold transition-all duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;