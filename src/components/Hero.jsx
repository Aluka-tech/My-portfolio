import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const trustBadges = [
  'On-Time Delivery',
  'Mobile-First',
  'Performance Optimized',
  'Real-World Ready',
]

function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col justify-center px-8 md:px-20 overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle, #ffffff18 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0" style={{ background: 'radial-gradient(circle, #4ade8015 0%, transparent 70%)' }} />
      <motion.div className="relative z-10" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <p className="text-[#4ade80] text-sm tracking-widest uppercase mb-6">Available for work — Worldwide</p>
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">I build fast, professional websites and web apps that grow your business.</h1>
        <p className="text-gray-400 text-base md:text-lg max-w-xl mb-6 leading-relaxed">Delivered clean, on time, every time. Full-stack developer available for freelance projects worldwide — I turn your idea into a product that works.</p>
        <div className="text-gray-500 text-base md:text-lg font-light mb-8">
          Specializing in{' '}
          <TypeAnimation sequence={['business websites.', 2000, 'full-stack web apps.', 2000, 'REST APIs.', 2000, 'products clients love.', 2000]} wrapper="span" speed={50} repeat={Infinity} className="text-white font-medium" />
        </div>
        <div className="flex flex-wrap gap-3 mb-8">
          {trustBadges.map((badge) => (
            <span key={badge} className="flex items-center gap-2 border border-gray-800 text-gray-400 text-xs px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] inline-block"></span>
              {badge}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#services" className="bg-[#4ade80] text-black font-semibold px-7 py-3 rounded-full hover:bg-white transition-colors duration-300">See My Services</a>
          <a href="#projects" className="border border-gray-600 text-white px-7 py-3 rounded-full hover:border-white transition-colors duration-300">View My Work</a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
