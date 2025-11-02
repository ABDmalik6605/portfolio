'use client'

import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/ABDmalik6605', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/abdullah-malik-7r3/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/abdullahmalik', label: 'Twitter' },
  { icon: Mail, href: 'mailto:Abdullahmalik4641@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Abdullah Malik</h3>
            <p className="text-gray-400">Full Stack Developer & Software Engineer</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <Icon size={24} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Abdullah Malik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

