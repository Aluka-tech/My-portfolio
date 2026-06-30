import { motion, useScroll, useSpring } from 'framer-motion'

function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div style={{ scaleX, transformOrigin: '0%' }} className="fixed top-0 left-0 right-0 h-[2px] bg-[#4ade80] z-[100]" />
  )
}

export default ProgressBar
