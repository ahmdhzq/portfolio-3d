"use client"

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { MapPin, Calendar, Briefcase } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications using modern JavaScript frameworks. Mentoring junior developers and implementing best practices for code quality and performance optimization.",
      achievements: [
        "Architected and built 3+ major features that increased user engagement by 40%",
        "Reduced application load time by 60% through performance optimization",
        "Led a team of 5 developers in migrating legacy systems to modern stack",
        "Implemented CI/CD pipelines that reduced deployment time by 80%"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "TypeScript"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained multiple client-facing applications from conception to deployment. Collaborated closely with design and product teams to deliver exceptional user experiences.",
      achievements: [
        "Built 5+ full-stack applications serving 10,000+ daily active users",
        "Integrated third-party APIs and payment systems (Stripe, PayPal)",
        "Developed responsive designs that improved mobile user experience by 35%",
        "Contributed to open-source projects used by 1000+ developers"
      ],
      technologies: ["Vue.js", "Python", "MongoDB", "Redis", "GraphQL", "Firebase"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Austin, TX",
      period: "2019 - 2020",
      type: "Contract",
      description: "Created responsive and interactive web interfaces for various client projects. Focused on delivering pixel-perfect designs with smooth animations and optimal performance.",
      achievements: [
        "Delivered 15+ client projects with 100% on-time completion rate",
        "Improved website performance scores by average of 45%",
        "Collaborated with UX designers to create intuitive user interfaces",
        "Mentored 2 junior developers in modern frontend practices"
      ],
      technologies: ["React", "Sass", "Webpack", "jQuery", "Bootstrap", "Figma"]
    },
    {
      title: "Junior Web Developer",
      company: "WebDev Studio",
      location: "Remote",
      period: "2018 - 2019",
      type: "Full-time",
      description: "Started my professional journey focusing on frontend development and learning full-stack technologies. Worked on various small to medium-sized projects while building foundational skills.",
      achievements: [
        "Completed 20+ small business websites and landing pages",
        "Learned and implemented modern development workflows",
        "Achieved 95% client satisfaction rate",
        "Contributed to team knowledge sharing sessions"
      ],
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "WordPress", "Git"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              My professional journey in software development, highlighting key roles and achievements
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block"></div>

                  {/* Content Card */}
                  <div className="md:ml-20 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium mb-2">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center mb-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-gray-600 dark:text-gray-300 text-sm">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Resume Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center mx-auto"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Full Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience