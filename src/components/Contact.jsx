import { motion } from 'framer-motion'

function Contact() {
    return (
        <section id="contact" className="bg-[#0f0f0f] px-8 md:px-20 py-20">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-2xl"
            >
                <p className="text-[#4ade80] text-sm tracking-widest uppercase mb-4">
                    Contact
                </p>
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
                    Let's build something together.
                </h2>
                <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                    I'm currently available for freelance projects and full-time roles.
                    If you have a project in mind or just want to talk, reach out.
                </p>

                <div className="flex flex-col gap-4">
                    <a href="mailto:chibuzoraluka14@gmail.com" className="flex items-center justify-between border border-gray-800 rounded-2xl px-6 py-4 hover:border-[#4ade80] transition-colors duration-300 group">
                        <span className="text-gray-400 group-hover:text-white transition-colors duration-300">Email</span>
                        <span className="text-white font-medium">chibuzoraluka14@gmail.com</span>
                    </a>

                    <a href="https://wa.me/2349114982819" target="_blank" rel="noreferrer" className="flex items-center justify-between border border-gray-800 rounded-2xl px-6 py-4 hover:border-[#4ade80] transition-colors duration-300 group">
                        <span className="text-gray-400 group-hover:text-white transition-colors duration-300">WhatsApp</span>
                        <span className="text-white font-medium">Message me</span>
                    </a>

                    <a href="https://github.com/Aluka-tech" target="_blank" rel="noreferrer" className="flex items-center justify-between border border-gray-800 rounded-2xl px-6 py-4 hover:border-[#4ade80] transition-colors duration-300 group">
                        <span className="text-gray-400 group-hover:text-white transition-colors duration-300">GitHub</span>
                        <span className="text-white font-medium">Aluka-tech</span>
                    </a>

                    <a href="https://www.linkedin.com/in/chibuzor-aluka" target="_blank" rel="noreferrer" className="flex items-center justify-between border border-gray-800 rounded-2xl px-6 py-4 hover:border-[#4ade80] transition-colors duration-300 group">
                        <span className="text-gray-400 group-hover:text-white transition-colors duration-300">LinkedIn</span>
                        <span className="text-white font-medium">Connect with me</span>
                    </a>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact