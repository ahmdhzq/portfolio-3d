/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Code2, Users, Zap, Award } from 'lucide-react'

const About = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const stats = [
    { icon: Code2, value: "5+", label: "Years Experience" },
    { icon: Users, value: "50+", label: "Projects Completed" },
    { icon: Zap, value: "15+", label: "Technologies" },
    { icon: Award, value: "10+", label: "Certifications" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                Passionate Software Engineer with a Vision
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I&rsquo;m a dedicated software engineer with over 5 years of experience in building 
                scalable web applications and innovative digital solutions. My journey in tech 
                began with a curiosity about how things work, which evolved into a passion for 
                creating software that makes a difference.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in modern JavaScript frameworks, cloud architecture, and full-stack 
                development. When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>

              <div className="flex flex-wrap gap-3">
                {["React", "Node.js", "TypeScript", "AWS", "Docker", "GraphQL"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center"
                >
                  <stat.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              What Drives Me
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "Always exploring cutting-edge technologies and methodologies to solve complex problems.",
                  icon: "🚀"
                },
                {
                  title: "Quality",
                  description: "Committed to writing clean, maintainable code and delivering high-quality solutions.",
                  icon: "⭐"
                },
                {
                  title: "Growth",
                  description: "Continuously learning and helping others grow in their development journey.",
                  icon: "📈"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About