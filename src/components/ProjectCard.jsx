import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function ProjectCard({ project, isActive, onClick, onHoverStart, onHoverEnd }) {
  return (
    <motion.div 
      className={`bg-gradient-to-br ${project.color} rounded-2xl p-8 cursor-pointer relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
      whileHover={{ scale: 1.05, rotate: 1 }}
      onClick={onClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.025] bg-[size:20px_20px]" />
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <project.icon className="w-12 h-12 mr-4 text-white" />
          <h3 className="text-3xl font-bold text-white">{project.title}</h3>
        </div>
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="mb-6 text-white/90">
                This {project.title.toLowerCase()} project leveraged advanced machine learning algorithms to uncover hidden patterns and predict future trends.
              </p>
              <div className="bg-white/10 h-64 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-semibold">Interactive visualization coming soon</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
