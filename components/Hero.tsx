'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Download, Mail } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const titles = ['Hands-on developer', 'Full Stack Developer', 'Android Developer', 'Problem Solver', 'Consistent learner', 'Adaptive & Innovative']
  const [currentTitle, setCurrentTitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative section-container text-center z-10">
        <div className={`space-y-6 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Greeting */}
          <p className="text-primary-400 text-lg md:text-xl font-medium">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="gradient-text">Abdullah Malik</span>
          </h1>

          {/* Dynamic Title */}
          <div className="h-12 md:h-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
              {titles[currentTitle]}
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A motivated and results-driven Computer Science professional with a strong passion for IT and software 
            development. Seeking opportunities to contribute to impactful projects and drive 
            innovation in the tech industry
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="/Abdullah_Malik_Resume.pdf"
              download
              className="btn-outline inline-flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-400 transition-colors animate-bounce"
        >
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  )
}

