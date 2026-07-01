import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-20 py-4 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}
        >
            <a href="#" className="text-white font-bold text-xl tracking-tight">Aluka<span className="text-[#4ade80]">.</span></a>
            <div className="hidden md:flex items-center gap-8">
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">About</a>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Projects</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Contact</a>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Services</a>
                <a href="mailto:chibuzoraluka14@gmail.com" className="bg-[#4ade80] text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-white transition-colors duration-300">Hire Me</a>
            </div>
        </motion.nav>
    )
}

export default Navbar
