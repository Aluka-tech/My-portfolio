import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col justify-center px-8 md:px-20 overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle, #ffffff18 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0" style={{ background: 'radial-gradient(circle, #4ade8015 0%, transparent 70%)' }} />
      <motion.div className="relative z-10" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <p className="text-[#4ade80] text-sm tracking-widest uppercase mb-4">Available for work — Worldwide</p>
        <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-4">I build websites and web apps that help businesses grow online.</h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-6">Full-stack developer available for freelance projects worldwide. I turn your idea into a fast, clean, professional product.</p>
        <div className="text-gray-400 text-xl md:text-2xl font-light mb-8">
          Specializing in{' '}
          <TypeAnimation sequence={['business websites.', 2000, 'full-stack web apps.', 2000, 'REST APIs.', 2000, 'things clients love.', 2000]} wrapper="span" speed={50} repeat={Infinity} className="text-white font-medium" />
        </div>
        <div className="flex gap-4">
          <a href="#services" className="bg-[#4ade80] text-black font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors duration-300">See My Services</a>
          <a href="#projects" className="border border-gray-600 text-white px-6 py-3 rounded-full hover:border-white transition-colors duration-300">View My Work</a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
