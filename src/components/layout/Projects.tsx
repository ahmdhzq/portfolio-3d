/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'

const Projects = () => {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js and Node.js, featuring real-time inventory, payment processing, and admin dashboard.",
      image: "/projects/ecommerce.jpg",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com/johndoe/ecommerce",
      live: "https://ecommerce-demo.com",
      date: "2024",
      category: "Full Stack"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/projects/taskmanager.jpg",
      technologies: ["React", "Socket.io", "MongoDB", "Express", "Redux"],
      github: "https://github.com/johndoe/taskmanager",
      live: "https://taskmanager-demo.com",
      date: "2024",
      category: "Web App"
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chatbot powered by OpenAI API with context awareness, file upload support, and conversation history.",
      image: "/projects/chatbot.jpg",
      technologies: ["Python", "FastAPI", "OpenAI", "React", "WebSocket"],
      github: "https://github.com/johndoe/ai-chat",
      live: "https://ai-chat-demo.com",
      date: "2024",
      category: "AI/ML"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Real-time weather data visualization with interactive charts, forecasting, and location-based insights using modern data viz libraries.",
      image: "/projects/weather.jpg",
      technologies: ["Vue.js", "D3.js", "Node.js", "Weather API", "Chart.js"],
      github: "https://github.com/johndoe/weather-dashboard",
      live: "https://weather-dashboard-demo.com",
      date: "2023",
      category: "Data Viz"
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Cryptocurrency portfolio management with real-time price tracking, profit/loss analysis, and market insights.",
      image: "/projects/crypto.jpg",
      technologies: ["React Native", "Firebase", "CoinGecko API", "Redux"],
      github: "https://github.com/johndoe/crypto-tracker",
      live: "https://play.google.com/store/apps/crypto-tracker",
      date: "2023",
      category: "Mobile"
    },
    {
      title: "Code Snippet Manager",
      description: "Developer tool for organizing and sharing code snippets with syntax highlighting, tagging, and team collaboration.",
      image: "/projects/snippets.jpg",
      technologies: ["Svelte", "Supabase", "Prism.js", "Tailwind CSS"],
      github: "https://github.com/johndoe/snippet-manager",
      live: "https://snippet-manager-demo.com",
      date: "2023",
      category: "Developer Tool"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              A showcase of my recent work, featuring modern web applications and innovative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                  {/* Placeholder since we don't have actual images */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl opacity-20">
                      {project.category === "Full Stack" && "🛒"}
                      {project.category === "Web App" && "📋"}
                      {project.category === "AI/ML" && "🤖"}
                      {project.category === "Data Viz" && "📊"}
                      {project.category === "Mobile" && "📱"}
                      {project.category === "Developer Tool" && "⚡"}
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
                      <Tag className="w-3 h-3 mr-1" />
                      {project.category}
                    </span>
                    <span className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              View All Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects