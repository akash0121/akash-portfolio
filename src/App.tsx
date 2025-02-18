import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { User as UserIcon } from "lucide-react";
import Akash from "./assets/Akash.jpg";

import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Code,
  Award,
  Briefcase,
  GraduationCap,
  Star,
  Trophy,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "src/assets/Akash.pdf"; // Update with the correct CV file path
    link.download = "Akash.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#011627]" : "bg-gray-50"}`}>
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#011627] via-[#00B4D8] to-[#E31B6D] opacity-5 animate-gradient"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="container mx-auto px-6 py-4 backdrop-blur-sm bg-opacity-80"
      >
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className={darkMode ? "text-white" : "text-gray-900"}>
              Port
            </span>
            <span className="text-[#00B4D8]">folio</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-[#00B4D8]">
              Home
            </a>
            <a
              href="#about"
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } hover:text-[#00B4D8] transition-colors`}
            >
              About
            </a>

            <a
              href="#experience"
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } hover:text-[#00B4D8] transition-colors`}
            >
              Experience
            </a>
            <a
              href="#projects"
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } hover:text-[#00B4D8] transition-colors`}
            >
              Projects
            </a>
            <a
              href="#achievements"
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } hover:text-[#00B4D8] transition-colors`}
            >
              Achievements
            </a>
            <a
              href="#contact"
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } hover:text-[#00B4D8] transition-colors`}
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-[#00B4D8] text-white"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-[#E31B6D] text-white rounded-md flex items-center space-x-2 hover:bg-[#c0165d] transition-colors"
              onClick={handleDownloadCV}
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Animation */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container mx-auto px-6 py-20"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-80 h-80 rounded-full bg-[#00B4D8] bg-opacity-20 absolute -left-10 -top-10 animate-pulse"></div>
            <img
              src={Akash}
              alt="Description"
              className="w-80 h-80 object-cover rounded-full relative z-10"
            />
          </motion.div>

          <motion.div className="md:w-1/2 mt-10 md:mt-0" variants={fadeInUp}>
            <motion.h2
              variants={fadeInUp}
              className={`${
                darkMode ? "text-gray-300" : "text-gray-700"
              } text-xl`}
            >
              Hello, I'm
            </motion.h2>
            <motion.h1
              variants={fadeInUp}
              className={`${
                darkMode ? "text-white" : "text-gray-900"
              } text-5xl font-bold mt-2`}
            >
              Akash Patel
            </motion.h1>
            <motion.h2 variants={fadeInUp} className="text-2xl mt-2">
              And I'm a{" "}
              <span className="text-[#00B4D8]">Full Stack Developer</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className={`${
                darkMode ? "text-gray-400" : "text-gray-600"
              } mt-6 max-w-lg`}
            >
              Results-driven Full Stack Developer with expertise in web
              development, cloud computing, and data structures. Passionate
              about building scalable applications and solving complex problems.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mt-8"
            >
              <div className="flex items-center space-x-2 text-[#00B4D8]">
                <Mail size={20} />
                <span>akashpatel79872@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-[#00B4D8]">
                <Phone size={20} />
                <span>7987273854</span>
              </div>
              <div className="flex items-center space-x-2 text-[#00B4D8]">
                <MapPin size={20} />
                <span>Bhopal, India</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex space-x-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#00B4D8] text-white rounded-md hover:bg-[#0090a8] transition-colors"
                onClick={() =>
                  window.open("https://wa.me/917987273854", "_blank")
                }
              >
                Hire Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-[#00B4D8] text-[#00B4D8] rounded-md hover:bg-[#00B4D8] hover:text-white transition-colors"
                onClick={() =>
                  window.open("https://wa.me/917987273854", "_blank")
                }
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "8.2", label: "CGPA" },
            { value: "1+", label: "Years Experience" },
            { value: "500+", label: "Users Impacted" },
            { value: "2", label: "Oracle Certifications" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1,
                }}
                className={`text-4xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {stat.value}
              </motion.h3>
              <p className="text-[#00B4D8] mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      {/* <section id="education" className="container mx-auto px-6 py-20">
        <h2
          className={`text-3xl font-bold mb-10 ${
            darkMode ? "text-white" : "text-gray-900"
          } flex items-center gap-2`}
        >
          <GraduationCap className="text-[#00B4D8]" />
          Education
        </h2>
        <div className="space-y-8">
          <div className="bg-white/5 p-6 rounded-lg border border-[#00B4D8]/20">
            <h3
              className={`text-xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Bachelor of Technology (B.Tech), Computer Science
            </h3>
            <p className="text-[#00B4D8]">
              Technocrats Institute of Technology (Excellence), Bhopal
            </p>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              2021 – 2025
            </p>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              CGPA: 8.16/10.0
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-[#00B4D8]/20">
            <h3
              className={`text-xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Higher Secondary Education (12th)
            </h3>
            <p className="text-[#00B4D8]">
              Gurukul Gyan Mandir Higher Secondary School, Narsinghpur
            </p>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              2019 – 2020
            </p>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Percentage: 71.4%
            </p>
          </div>
        </div>
      </section> */}

      {/* Skills Section */}

      <motion.section
        id="skills"
        className="container mx-auto px-6 py-20"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <h2
          className={`text-3xl font-bold mb-10 ${
            darkMode ? "text-white" : "text-gray-900"
          } flex items-center gap-2`}
        >
          <Code className="text-[#00B4D8]" />
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/** Skill Categories */}
          {[
            {
              title: "Programming Languages",
              skills: ["Java", "C++", "JavaScript", "Python"],
            },
            {
              title: "Frameworks & Tools",
              skills: [
                "NodeJS",
                "ExpressJS",
                "ReactJS",
                "MongoDB",
                "MySQL",
                "REST APIs",
                "TailwindCSS",
              ],
            },
            {
              title: "Cloud Technologies",
              skills: ["Oracle Cloud", "MongoDB Atlas"],
            },
            {
              title: "Other Skills",
              skills: ["Agile Development", "Git", "TDD", "Vercel", "Render"],
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 p-6 rounded-lg border border-[#00B4D8]/20 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-[#00B4D8] font-bold mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-[#00B4D8]/10 text-[#00B4D8] rounded transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* <section id="skills" className="container mx-auto px-6 py-20">
        <h2
          className={`text-3xl font-bold mb-10 ${
            darkMode ? "text-white" : "text-gray-900"
          } flex items-center gap-2`}
        >
          <Code className="text-[#00B4D8]" />
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-lg border border-[#00B4D8]/20">
            <h3 className="text-[#00B4D8] font-bold mb-4">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "C++", "JavaScript", "Python"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#00B4D8]/10 text-[#00B4D8] rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-[#00B4D8]/20">
            <h3 className="text-[#00B4D8] font-bold mb-4">
              Frameworks & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "NodeJS",
                "ExpressJS",
                "ReactJS",
                "MongoDB",
                "MySQL",
                "REST APIs",
                "TailwindCSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#00B4D8]/10 text-[#00B4D8] rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-[#00B4D8]/20">
            <h3 className="text-[#00B4D8] font-bold mb-4">
              Cloud Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Oracle Cloud", "MongoDB Atlas"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#00B4D8]/10 text-[#00B4D8] rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-[#00B4D8]/20">
            <h3 className="text-[#00B4D8] font-bold mb-4">Other Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Agile Development", "Git", "TDD", "Vercel", "Render"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#00B4D8]/10 text-[#00B4D8] rounded"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section> */}

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="container mx-auto px-6 py-20"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <h2
          className={`text-3xl font-bold mb-10 ${
            darkMode ? "text-white" : "text-gray-900"
          } flex items-center gap-2`}
        >
          <Briefcase className="text-[#00B4D8]" />
          Work Experience
        </h2>

        <div className="space-y-8">
          {[
            {
              title: "Full Stack Development Intern",
              company: "Bharat Intern",
              date: "Feb. 2023 – Mar. 2023",
              responsibilities: [
                "Designed and implemented a responsive blog application using the MERN stack",
                "Achieved 30% improvement in back-end performance",
                "Collaborated with a team of 5 to integrate REST APIs",
              ],
            },
            {
              title: "CPP Programmer",
              company: "Ramraj Tech",
              date: "Apr. 2022 – Jun. 2022",
              responsibilities: [
                "Developed algorithms for efficient data processing, reducing computation time by 20%",
                "Worked collaboratively to deliver solutions for complex technical problems",
              ],
            },
          ].map((experience, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 p-6 rounded-lg border border-[#00B4D8]/20 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3
                    className={`text-xl font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {experience.title}
                  </h3>
                  <p className="text-[#00B4D8]">{experience.company}</p>
                </div>
                <p
                  className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  {experience.date}
                </p>
              </div>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400">
                {experience.responsibilities.map((task, i) => (
                  <motion.li key={i} whileHover={{ scale: 1.05 }}>
                    {task}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="container mx-auto px-6 py-20"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <h2
          className={`text-3xl font-bold mb-10 ${
            darkMode ? "text-white" : "text-gray-900"
          } flex items-center gap-2`}
        >
          <BookOpen className="text-[#00B4D8]" />
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "StudyNotion - Ed-Tech Platform",
              tech: "MERN Stack",
              details: [
                "Built a full-stack MERN application for course management",
                "Enhanced user engagement by 25% with intuitive UI/UX",
                "Deployed on Vercel (frontend) and Render (backend)",
              ],
              link: "#",
            },
            {
              title: "AI Chatbot using LLM Models",
              tech: "Python, NLP",
              details: [
                "Implemented AI chatbot using pre-trained models (GPT, BERT)",
                "Integrated NLP algorithms for enhanced user interaction",
              ],
              link: "#",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 p-6 rounded-lg border border-[#00B4D8]/20 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <h3
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {project.title}
              </h3>
              <p className="text-[#00B4D8] mt-2">{project.tech}</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400">
                {project.details.map((detail, i) => (
                  <motion.li key={i} whileHover={{ scale: 1.05 }}>
                    {detail}
                  </motion.li>
                ))}
              </ul>
              <a
                href={project.link}
                className="inline-block mt-4 text-[#00B4D8] hover:text-[#E31B6D] transition-all duration-200"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        id="achievements"
        className="container mx-auto px-6 py-20"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <h2
          className={`text-3xl font-bold mb-10 ${
            darkMode ? "text-white" : "text-gray-900"
          } flex items-center gap-2`}
        >
          <Trophy className="text-[#00B4D8]" />
          Achievements & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Certifications",
              items: [
                {
                  name: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
                  id: "100752454OCI2024FNDCFA",
                },
                {
                  name: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
                  id: "100752454OCI23AIFCA",
                },
              ],
            },
            {
              title: "Achievements",
              items: [
                {
                  icon: (
                    <Star
                      className="text-[#00B4D8] mt-1 flex-shrink-0"
                      size={20}
                    />
                  ),
                  text: "Gold Badge in C++ on HackerEarth and 2-Star Rating on CodeChef",
                },
                {
                  icon: (
                    <Trophy
                      className="text-[#00B4D8] mt-1 flex-shrink-0"
                      size={20}
                    />
                  ),
                  text: "1st place in college-level tech symposium for StudyNotion project",
                },
                {
                  icon: (
                    <Award
                      className="text-[#00B4D8] mt-1 flex-shrink-0"
                      size={20}
                    />
                  ),
                  text: "Developed ed-tech platform with 500+ active users",
                },
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 p-6 rounded-lg border border-[#00B4D8]/20 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-[#00B4D8] font-bold mb-4">{section.title}</h3>
              <ul className="space-y-4 text-gray-400">
                {section.items.map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start gap-2"
                  >
                    {item.icon ? item.icon : null}
                    <div>
                      <div
                        className={`font-semibold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.name || item.text}
                      </div>
                      {item.id && (
                        <p className="text-gray-400">
                          Certificate ID: {item.id}
                        </p>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer Section */}
      <motion.footer
        className={`${
          darkMode ? "bg-[#011627] text-white" : "bg-gray-100 text-gray-900"
        } py-20 relative overflow-hidden transition-all duration-300`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00B4D8] via-transparent to-transparent opacity-10"></div>

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12"
          >
            {/* About Section */}
            <motion.div whileHover={{ scale: 1.05 }} className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">About Me</h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Passionate Full Stack Developer dedicated to creating innovative
                solutions and delivering exceptional user experiences.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div whileHover={{ scale: 1.05 }} className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: "Home", link: "/" },
                  { name: "About", link: "/about" },
                  { name: "Projects", link: "/projects" },
                  { name: "Contact", link: "/contact" },
                ].map((item, index) => (
                  <motion.li key={index} whileHover={{ scale: 1.1 }}>
                    <a
                      href={item.link}
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      } hover:text-[#00B4D8] transition-colors`}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div whileHover={{ scale: 1.05 }} className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                {[
                  {
                    icon: <Mail size={16} className="text-[#00B4D8]" />,
                    text: "akashpatel79872@gmail.com",
                  },
                  {
                    icon: <Phone size={16} className="text-[#00B4D8]" />,
                    text: "7987273854",
                  },
                  {
                    icon: <MapPin size={16} className="text-[#00B4D8]" />,
                    text: "Bhopal, India",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-2"
                  >
                    {item.icon}
                    <span
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div whileHover={{ scale: 1.05 }} className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {[
                  {
                    icon: <Linkedin size={24} />,
                    link: "https://www.linkedin.com/in/akash-patel-28441722a",
                  },
                  {
                    icon: <Github size={24} />,
                    link: "https://github.com/akash0121",
                  },
                  { icon: <Twitter size={24} />, link: "https://twitter.com" },
                  {
                    icon: <Instagram size={24} />,
                    link: "https://www.instagram.com/akash_ezi/",
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00B4D8] hover:text-[#E31B6D] transition-colors"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12 pt-8 border-t border-gray-800"
          >
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              © {new Date().getFullYear()} Akash Patel. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>

    </div>
  );
}

export default App;
