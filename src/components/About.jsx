import { motion } from 'framer-motion'
import heroImg from '../assets/Hero.png'

const skills = ['React', 'JavaScript', 'Python', 'Django', 'PostgreSQL', 'REST APIs', 'Tailwind CSS', 'Git']

function About() {
    return (
        <section id="about" className="min-h-screen bg-[#0f0f0f] flex flex-col justify-center px-8 md:px-20 py-20">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1">
                    <p className="text-[#4ade80] text-sm tracking-widest uppercase mb-4">About Me</p>
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-8 max-w-2xl">I'm a self-taught full-stack developer with a proven ability to ship real products.</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed">From static business websites to full-stack web apps with auth, dashboards, and APIs — I build things that work.</p>
                    <div>
                        <p className="text-white font-semibold mb-4">My Stack</p>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span key={skill} className="border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:border-[#4ade80] hover:text-[#4ade80] transition-colors duration-300">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex-shrink-0">
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
