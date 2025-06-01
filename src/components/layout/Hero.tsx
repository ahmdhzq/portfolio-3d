/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ThreeBackground from '../three/ThreeBackground'

const Hero = () => {
    const containerRef = useRef<HTMLElement>(null)

    const scrollToNext = () => {
        const nextSection = document.querySelector('#about')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.2,
                staggerChildren: 0.15
            }
        }
    }

    const slideUp = {
        hidden: { y: 60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }

    const slideRight = {
        hidden: { x: -40, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex justify-center items-center bg-black overflow-hidden"
        >
            {/* Three.js Background */}
            <ThreeBackground />

            {/* Main Content */}
            <div className="relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24"
                >
                    {/* Main Typography - CREATIVE DEVELOPER */}
                    <div className="mb-16">
                        <motion.div variants={slideUp}>
                            <h1 className="text-white font-black leading-none tracking-tight mb-4">
                                <div
                                    className="text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem]"
                                    style={{
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    CREATIVE
                                </div>
                            </h1>
                        </motion.div>

                        <motion.div variants={slideUp}>
                            <h1 className="text-gray-500 font-light leading-none tracking-tight">
                                <div
                                    className="text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] ml-8 lg:ml-16"
                                    style={{
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    DEVELOPER
                                </div>
                            </h1>
                        </motion.div>
                    </div>

                    {/* Right Side Info */}
                    <motion.div
                        variants={slideRight}
                        className="flex justify-end mb-20"
                    >
                        <div className="text-right">
                            <p className="text-gray-300 text-lg lg:text-xl tracking-wider mb-2">
                                Ahmad Haziq / Software Developer
                            </p>
                        </div>
                    </motion.div>

                    {/* Bottom Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
                        {/* Left Side - Description */}
                        <motion.div variants={slideRight} className="mb-12 lg:mb-0">
                            <div className="space-y-6">
                                <p className="text-gray-500 text-sm lg:text-base tracking-widest font-light">
                                    SCALABLE WEB SOLUTIONS.
                                </p>

                                <div className="w-20 h-px bg-gray-600"></div>
                            </div>
                        </motion.div>

                        {/* Right Side - CTA */}
                        <motion.div variants={slideUp}>
                            <motion.button
                                whileHover={{ x: 8 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={scrollToNext}
                                className="group flex items-center space-x-4 text-white text-sm lg:text-base tracking-widest font-light uppercase transition-all duration-300"
                                style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                            >
                                <span>EXPLORE MY WORK</span>
                                <motion.div
                                    className="w-12 h-px bg-white group-hover:w-16 transition-all duration-300"
                                    whileHover={{ scaleX: 1.3 }}
                                />
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px'
                }}
            />
        </section>
    )
}

export default Hero