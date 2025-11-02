'use client'

import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Code } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'A complete e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    category: 'Frontend',
    description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Social Media Dashboard',
    category: 'Full Stack',
    description: 'Analytics dashboard for managing multiple social media accounts with insights and scheduling capabilities.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Weather Forecast App',
    category: 'Frontend',
    description: 'Beautiful weather application with location-based forecasts, weather maps, and detailed weather information.',
    technologies: ['React', 'API Integration', 'CSS3', 'Geolocation'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Portfolio CMS',
    category: 'Backend',
    description: 'Content management system specifically designed for portfolio websites with easy customization.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Fitness Tracker',
    category: 'Mobile',
    description: 'Mobile-first fitness tracking application with workout plans, progress tracking, and nutrition guidance.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Charts'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
]

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile']

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="section-container bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
      <div ref={ref} className={`${inView ? 'animate-fade-in' : 'opacity-0'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects demonstrating various skills and technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-400 hover:text-gray-200 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="card-gradient rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-accent-600 text-white text-xs font-semibold rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-3">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/ABDmalik6605"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Code size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

