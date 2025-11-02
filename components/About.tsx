'use client'

import { useInView } from 'react-intersection-observer'
import { Code2, Rocket, Users, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Experienced in building end-to-end web applications with modern frameworks',
  },
  {
    icon: Rocket,
    title: 'Android Development',
    description: 'Creating native mobile applications with intuitive user experiences',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Proven ability to work effectively in team environments during internships',
  },
  {
    icon: Zap,
    title: 'Quick Learner',
    description: 'Rapidly adapting to new technologies and industry best practices',
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-container relative z-10 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
      <div ref={ref} className={`${inView ? 'animate-fade-in' : 'opacity-0'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative card-gradient rounded-2xl p-8 h-full flex items-center justify-center overflow-hidden">
                <div className="text-center space-y-6">
                  {/* Profile Picture - Add your photo to /public/images/profile.jpg */}
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-gradient-to-br from-primary-600 to-accent-600 group">
                    {/* Profile Image Container with Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600 p-1">
                      <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                        {/* Uncomment the img tag below and add your photo to /public/images/profile.jpg */}
                        <img 
                          src="/images/profile.jpg" 
                          alt="Abdullah Malik" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        
                        {/* Temporary placeholder - Remove this span when you add your photo */}
                        {/* <div className="w-full h-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
                          <span className="text-6xl font-bold text-white">AM</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <p className="text-2xl font-semibold gradient-text">
                    Full Stack & Android Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-100">
              Crafting Digital Experiences with Passion
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm an aspiring Developer and Computer Science undergraduate with a strong 
              foundation in modern web and mobile technologies. My journey in software development 
              is driven by curiosity and a commitment to excellence.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Through my internship experiences in Full Stack and Android Development, I've gained 
              hands-on expertise in building responsive, user-friendly applications that solve 
              real-world problems. I specialize in transforming ideas into functional, innovative 
              digital solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="card-gradient rounded-lg p-6 text-center">
                <p className="text-4xl font-bold gradient-text mb-2">2</p>
                <p className="text-gray-400">Internships</p>
              </div>
              <div className="card-gradient rounded-lg p-6 text-center">
                <p className="text-4xl font-bold gradient-text mb-2">15+</p>
                <p className="text-gray-400">Projects Built</p>
              </div>
            </div>
          </div>
        </div>

          {/* Highlights Grid with Enhanced Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="card-gradient rounded-xl p-6 hover:scale-110 hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up shine cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 via-accent-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-gradient glow">
                  <Icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-100 gradient-text">{item.title}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

