import { motion } from 'framer-motion'
import heroImg from '../assets/hero.png'

const skills = ['React', 'JavaScript', 'Python', 'Django', 'PostgreSQL', 'REST APIs', 'Tailwind CSS', 'Git']

const stats = [
  { number: '4+', label: 'Projects Delivered' },
  { number: '3+', label: 'Years Learning' },
  { number: '100%', label: 'On-Time Delivery' },
]

function About() {
  return (
    <section id="about" className="min-h-screen bg-[#0f0f0f] flex flex-col justify-center px-6 md:px-20 py-20">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        <div className="flex-1 w-full">
          <p className="text-[#4ade80] text-xs md:text-sm tracking-widest uppercase mb-4">About Me</p>
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 max-w-2xl">I'm a self-taught full-stack developer with a proven ability to ship real products.</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">From static business websites to full-stack web apps with auth, dashboards, and APIs — I build things that work. Based in Abuja, Nigeria, available for clients worldwide.</p>
          <div className="flex gap-6 md:gap-8 mb-8 border-t border-b border-gray-800 py-5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-white text-2xl md:text-3xl font-bold">{stat.number}</p>
                <p className="text-gray-500 text-xs md:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex md:hidden justify-center mb-8">
            <div className="relative w-56 h-72">
              <div className="absolute inset-0 rounded-2xl border border-[#4ade80]/20" style={{ transform: 'translate(6px, 6px)' }} />
              <img src={heroImg} alt="Aluka" className="relative z-10 w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </motion.div>
          <div>
            <p className="text-white font-semibold mb-4 text-sm md:text-base">My Stack</p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {skills.map((skill) => (
                <span key={skill} className="border border-gray-700 text-gray-300 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm hover:border-[#4ade80] hover:text-[#4ade80] transition-colors duration-300">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="hidden md:flex flex-shrink-0">
          <div className="relative w-64 h-80 md:w-72 md:h-96">
            <div className="absolute inset-0 rounded-2xl border border-[#4ade80]/20" style={{ transform: 'translate(8px, 8px)' }} />
            <img src={heroImg} alt="Aluka" className="relative z-10 w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
