'use client'

import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'FAST-NUCES',
    location: 'Lahore, Pakistan',
    period: '2022 - Present',
    description: 'Currently pursuing undergraduate degree with focus on software engineering, data structures, algorithms, and full stack development.',
    achievements: [
      'Completed internships in Full Stack and Android Development',
      'Active participant in coding competitions and hackathons',
      'Member of SOFTEC',
    ],
  },
  {
    degree: 'Higher Secondary Education (FSc/A-Levels)',
    institution: 'Government College University',
    location: 'Lahore, Pakistan',
    period: '2020 - 2022',
    description: 'Specialized in Pre-Engineering/Computer Science with strong foundation in Mathematics and Physics.',
    achievements: [
      'Strong academic performance',
      'Active participant of YRC (Young Ravians Club)',
    ],
  },
]

const certifications = [
  {
    title: 'Full Stack Development Internship',
    issuer: 'Core Edge Solutions',
    year: 'July 2025 - Present',
  },
  {
    title: 'Android Development Internship',
    issuer: 'Analyzinn Solutions',
    year: 'July 2024 - November 2024',
  },
  {
    title: '"Leran Kotlin" Course',
    issuer: 'CodeAcademy',
    year: '2024',
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="section-container bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
      <div ref={ref} className={`${inView ? 'animate-fade-in' : 'opacity-0'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span> & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl p-8 hover:border-primary-500/50 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-600/10 to-accent-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mb-4">
                    <GraduationCap size={28} className="text-white" />
                  </div>

                  {/* Period */}
                  <span className="inline-block px-4 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-4">
                    {edu.period}
                  </span>

                  {/* Degree */}
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">{edu.degree}</h3>

                  {/* Institution */}
                  <p className="text-xl text-primary-400 mb-1">{edu.institution}</p>
                  <p className="text-gray-500 mb-4">{edu.location}</p>

                  {/* Description */}
                  <p className="text-gray-400 mb-4">{edu.description}</p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-gray-300 flex items-center gap-2">
                      <Award size={18} className="text-accent-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1 ml-6">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 flex items-start">
                          <span className="text-primary-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Sidebar */}
          <div className="lg:col-span-1">
            <div className="card-gradient rounded-xl p-8 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                  <BookOpen size={20} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-primary-500/50 pl-4 py-2 hover:border-primary-500 transition-colors"
                  >
                    <h4 className="font-semibold text-gray-200 mb-1">{cert.title}</h4>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                    <p className="text-xs text-primary-400 mt-1">{cert.year}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Continuously learning and updating skills to stay current with the latest technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

