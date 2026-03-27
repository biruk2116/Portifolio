import React from 'react'
import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-6"
        >
          <Code2 size={64} className="text-neon-purple" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <div className="text-2xl font-bold text-gradient">Loading Portfolio</div>
          <div className="flex space-x-1 justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.6, delay: i * 0.2, repeat: Infinity }}
                className="w-2 h-2 bg-neon-purple rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}