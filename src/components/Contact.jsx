import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="bg-[#0f0f0f] px-6 md:px-20 py-20">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-2xl">
        <p className="text-[#4ade80] text-xs md:text-sm tracking-widest uppercase mb-4">Contact</p>
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">Let's build something together.</h2>
        <p className="text-gray-400 text-base md:text-lg mb-12 leading-relaxed">I'm currently available for freelance projects and full-time roles. If you have a project in mind or just want to talk, reach out.</p>
        <div className="flex flex-col gap-4">
          <a href="mailto:chibuzoraluka14@gmail.com" className="flex flex-col sm:flex-row sm:items-center sm:justify-between border border-gray-800 rounded-2xl px-5 py-4 hover:border-[#4ade80] transition-colors duration-300 group gap-1">
            <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">Email</span>
            <span className="text-white font-medium text-sm break-all">chibuzoraluka14@gmail.com</span>
          </a>
          <a href="https://wa.me/2348104486148" target="_blank" rel="noreferrer" className="flex items-center justify-between border border-gray-800 rounded-2xl px-5 py-4 hover:border-[#4ade80] transition-colors duration-300 group">
            <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">WhatsApp</span>
            <span className="text-white font-medium text-sm">Message me</span>
          </a>
          <a href="https://github.com/Aluka-tech" target="_blank" rel="noreferrer" className="flex items-center justify-between border border-gray-800 rounded-2xl px-5 py-4 hover:border-[#4ade80] transition-colors duration-300 group">
            <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">GitHub</span>
            <span className="text-white font-medium text-sm">Aluka-tech</span>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="flex items-center justify-between border border-gray-800 rounded-2xl px-5 py-4 hover:border-[#4ade80] transition-colors duration-300 group">
            <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">LinkedIn</span>
            <span className="text-white font-medium text-sm">Connect with me</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
