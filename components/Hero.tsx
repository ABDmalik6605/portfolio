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
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const currentFullText = titles[currentTitle]
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.substring(0, displayedText.length + 1))
          setTypingSpeed(100)
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentFullText.substring(0, displayedText.length - 1))
          setTypingSpeed(50)
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false)
          setCurrentTitle((prev) => (prev + 1) % titles.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentTitle, titles, typingSpeed])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced animated background with more vibrant colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-teal-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* Visible grid background with green tint */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,.06)_1px,transparent_1px),linear-gradient(to_right,rgba(16,185,129,.06)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative section-container text-center z-10">
        <div className={`space-y-6 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Greeting with animation */}
          <p className="text-primary-400 text-xl md:text-2xl font-semibold animate-slide-down">
            Hello, I'm
          </p>

          {/* Name with enhanced gradient */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold animate-scale-in">
            <span className="text-white">Abdullah Malik</span>
          </h1>

          {/* Dynamic Title with typewriter effect */}
          <div className="h-14 md:h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-cyan-400 font-medium">
              {displayedText}
              <span className="animate-pulse text-emerald-400">|</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            A motivated and results-driven Computer Science professional with a strong passion for IT and software 
            development. Seeking opportunities to contribute to impactful projects and drive 
            innovation in the tech industry
          </p>

          {/* CTA Buttons with enhanced animations */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2 group">
              <Mail size={20} className="group-hover:rotate-12 transition-transform" />
              Get In Touch
            </a>
            <a
              href="/Abdullah_Malik_Resume.pdf"
              download
              className="btn-outline inline-flex items-center gap-2 group"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download CV
            </a>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-400 transition-all duration-300 animate-bounce group"
        >
          <div className="relative">
            <ArrowDown size={32} className="relative z-10" />
            <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl group-hover:bg-primary-500/40 transition-all"></div>
          </div>
        </a>
      </div>
    </section>
  )
}

