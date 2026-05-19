import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { Mail, Phone, MapPin, Link } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_28co9jg",
        "template_d5hej4q",
        form.current,
        "JHGPApx_8QC88ZZUl"
      )
      .then(
        (result) => {
          console.log("SUCCESS =>", result);
          form.current.reset();

          toast.success("Message sent successfully! 🚀", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.log("EMAILJS FULL ERROR =>", error);
          alert(JSON.stringify(error));

          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[15vw] font-sans relative z-10"
    >
      <ToastContainer />

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Let’s <span className="text-[#8245ec]">Connect</span>
        </h2>

        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-5 text-base md:text-lg font-medium max-w-2xl mx-auto">
          Open to Software Engineering, AI + Backend, Full Stack, scalable
          systems, backend engineering, and SDE opportunities.
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_25px_rgba(130,69,236,0.18)]">
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          Connect With Me 🚀
        </h3>

        {/* Personal Info */}
        <div className="grid sm:grid-cols-2 gap-5 mb-8 text-left">
          <div className="flex items-center gap-3 text-gray-300">
            <Mail className="text-[#8245ec]" size={18} />
            <span>vishalsingh962849@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <Phone className="text-[#8245ec]" size={18} />
            <span>+91 9984977210</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <MapPin className="text-[#8245ec]" size={18} />
            <span>Kanpur, India</span>
          </div>

          <a
            href="https://www.linkedin.com/in/vishal-singh-5b052828a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-[#8245ec] transition duration-300"
          >
            <Link className="text-[#8245ec]" size={18} />
            <span>LinkedIn Profile</span>
          </a>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-[#8245ec]"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-[#8245ec]"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-4 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-[#8245ec]"
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            required
            className="w-full p-4 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-[#8245ec] resize-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#8245ec] to-purple-600 py-4 text-white font-semibold rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(130,69,236,0.35)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;