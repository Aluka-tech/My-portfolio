import { motion } from 'framer-motion'
import lukaDdesigns from '../assets/project4.png'
import chopAndSpice from '../assets/project3.png'
import trackly from '../assets/jobtracker-dashboard.png'

const projects = [
  {
    title: 'Construx',
    description: 'A full-stack building materials marketplace that lets vendors list products and buyers order online — built for the Nigerian construction industry.',
    tags: ['React', 'Django', 'PostgreSQL', 'REST API'],
    live: '#',
    github: 'https://github.com/Aluka-tech',
    status: 'In Progress',
    image: null
  },
  {
    title: 'Luka Designs',
    description: 'A premium architecture studio website designed to attract high-value clients — clean, fast, and built to make a strong first impression.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://luka-designs.onrender.com',
    github: 'https://github.com/Aluka-tech/Luka-Designs.git',
    status: 'Live',
    image: lukaDdesigns
  },
  {
    title: 'Chop & Spice',
    description: 'A Nigerian restaurant website with an online menu and reservation form — helping the business attract and convert customers online.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://chop-and-spice.onrender.com',
    github: 'https://github.com/Aluka-tech/chop-and-spice-static.git',
    status: 'Live',
    image: chopAndSpice
  },
  {
    title: 'Trackly',
    description: 'A full-stack productivity app that helps job seekers track every application in one place — with auth, a live dashboard, and real-time filtering.',
    tags: ['Django', 'PostgreSQL', 'Python'],
    live: 'https://job-tracker-aje3.onrender.com',
    github: 'https://github.com/Aluka-tech/job-tracker.git',
    status: 'Live',
    image: trackly
  },
]

function Projects() {
  return (
    <section id="projects" className="bg-[#0a0a0a] px-8 md:px-20 py-20">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <p className="text-[#4ade80] text-sm tracking-widest uppercase mb-4">My Work</p>
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">Projects I've built.</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">Real products, built from scratch. Each one solving a real problem for real users.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }} className="border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-colors duration-300 flex flex-col">
              <div className="w-full h-48 bg-[#111] overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm tracking-widest uppercase">Coming Soon</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${project.status === 'Live' ? 'bg-[#4ade80]/10 text-[#4ade80]' : 'bg-yellow-500/10 text-yellow-400'}`}>{project.status}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-sm text-white hover:text-[#4ade80] transition-colors duration-300">Live Site</a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors duration-300">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
