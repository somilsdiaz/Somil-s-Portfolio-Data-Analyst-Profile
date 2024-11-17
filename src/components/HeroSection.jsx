import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const HeroSection = () => (
  <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-blue-900">
    <div className="text-center">
      <motion.h2 
        className="text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Data Insights <span className="text-cyan-400">Reimagined</span>
      </motion.h2>
      <motion.p 
        className="text-xl mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Transforming raw data into powerful visualizations and actionable strategies for forward-thinking businesses.
      </motion.p>
      <motion.a 
        href="#projects" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Explore Projects <ChevronRight className="ml-2" />
      </motion.a>
    </div>
  </section>
)

export default HeroSection
