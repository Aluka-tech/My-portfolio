import { motion } from 'framer-motion'

const services = [
  {
    title: 'Business Website',
    price: 'Starting from $300',
    description: 'A fast, clean, professional website for your business. Built to impress clients and rank on Google.',
    features: ['Responsive design', 'Contact form', 'SEO optimized', 'Deployed & ready to go'],
  },
  {
    title: 'Full-Stack Web App',
    price: 'Starting from $800',
    description: 'Custom web applications with user authentication, dashboards, APIs, and databases.',
    features: ['React frontend', 'Django/Node backend', 'Database integration', 'REST API'],
  },
  {
    title: 'UI/UX + Development',
    price: 'Custom Quote',
    description: 'You have an idea but need both the design and the code. I handle everything from wireframe to deployment.',
    features: ['Custom design', 'Responsive UI', 'Full development', 'Ongoing support'],
  },
]

function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a] px-8 md:px-20 py-20">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <p className="text-[#4ade80] text-sm tracking-widest uppercase mb-4">Services</p>
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">What I can build for you.</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">Every project is different. These are starting points — reach out and let's talk about what you need.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }} className="border border-gray-800 rounded-2xl p-6 hover:border-[#4ade80]/50 transition-colors duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-[#4ade80] font-medium mb-4">{service.price}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="flex flex-col gap-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-gray-500 text-sm flex items-center gap-2">
                      <span className="text-[#4ade80]">+</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="mt-8 block text-center border border-gray-700 text-white text-sm px-4 py-3 rounded-full hover:border-[#4ade80] hover:text-[#4ade80] transition-colors duration-300">Get a Quote</a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Services
