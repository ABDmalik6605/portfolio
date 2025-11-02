'use client'

import { useInView } from 'react-intersection-observer'
import { Code, Database, Layers, Server, Smartphone, Wrench } from 'lucide-react'

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Bootstrap', level: 85 },
    ],
  },
  {
    icon: Server,
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'RESTful APIs', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'Java', level: 75 },
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    skills: [
      { name: 'Android (Java/Kotlin)', level: 80 },
      { name: 'XML', level: 85 },
      { name: 'Firebase', level: 75 },
      { name: 'Material Design', level: 80 },
    ],
  },
  {
    icon: Database,
    title: 'Database',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Firebase', level: 80 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    icon: Layers,
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Android Studio', level: 85 },
      { name: 'Postman', level: 80 },
    ],
  },
  {
    icon: Wrench,
    title: 'Core Skills',
    skills: [
      { name: 'Problem Solving', level: 85 },
      { name: 'Data Structures', level: 80 },
      { name: 'Algorithms', level: 75 },
      { name: 'Team Collaboration', level: 85 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-container bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent">
      <div ref={ref} className={`${inView ? 'animate-fade-in' : 'opacity-0'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="card-gradient rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-primary-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-600 to-accent-600 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: inView ? `${skill.level}%` : '0%',
                            transitionDelay: `${i * 0.1}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 card-gradient rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-100 mb-4">
            Always Learning, Always Growing
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            As a Computer Science undergraduate, I'm committed to continuous learning and staying
            up-to-date with the latest industry trends and best practices. Through my coursework and 
            internship experiences, I'm constantly expanding my skill set in both web and mobile development.
            Currently exploring advanced topics in system design, cloud technologies, and modern development practices.
          </p>
        </div>
      </div>
    </section>
  )
}

