'use client'

import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Full Stack Development Intern',
    company: 'Core Edge Solutions',
    location: 'Lahore, Pakistan',
    period: 'July 2025 - Present',
    type: 'Internship',
    description: 'Worked on developing and maintaining full-stack web applications using modern technologies.',
    responsibilities: [
      'Developed responsive web applications using React.js and Node.js',
      'Collaborated with team members using Git for version control',
      'Implemented RESTful APIs and integrated with databases',
      'Participated in code reviews and agile development practices',
      'Debugged and optimized application performance',
    ],
    technologies: ['React','Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Git'],
  },
  {
    title: 'Android Development Intern',
    company: 'Analyzinn Solutions',
    location: 'Lahore, Pakistan',
    period: 'July 2024 - November 2024',
    type: 'Internship',
    description: 'Contributed to Android application development with focus on creating user-friendly mobile experiences.',
    responsibilities: [
      'Developed Android applications using Java/Kotlin',
      'Implemented UI/UX designs following Material Design guidelines',
      'Integrated third-party libraries and APIs',
      'Collaborated with designers to implement intuitive interfaces',
      'Performed testing and debugging to ensure app stability',
    ],
    technologies: ['Android', 'Java', 'Kotlin', 'XML', 'Firebase', 'Git', 'Android Studio', 'Jetpack Compose'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="section-container bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent">
      <div ref={ref} className={`${inView ? 'animate-fade-in' : 'opacity-0'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional internship experiences that shaped my development journey
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card-gradient rounded-xl p-8 hover:border-primary-500/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-600/10 to-accent-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    {/* Job Title */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-100">{exp.title}</h3>
                        <p className="text-xl text-primary-400">{exp.company}</p>
                      </div>
                    </div>
                  </div>

                  {/* Type Badge */}
                  <span className="inline-block px-4 py-2 bg-accent-500/20 text-accent-400 rounded-full text-sm font-semibold mt-4 md:mt-0">
                    {exp.type}
                  </span>
                </div>

                {/* Location & Period */}
                <div className="flex flex-wrap gap-4 mb-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-4">{exp.description}</p>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-300 mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-400 flex items-start">
                        <span className="text-primary-400 mr-3 mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

