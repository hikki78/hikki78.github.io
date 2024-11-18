import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SocialCardProps {
  title: string;
  icon: ReactNode;
  link: string;
  color: string;
}

export default function SocialCard({ title, icon, link, color }: SocialCardProps) {
  if (title === "Coming Soon") {
    return (
      <motion.div
        className={`relative overflow-hidden rounded-2xl p-12 ${color} backdrop-blur-sm border border-white/10`}
        whileHover={{ 
          scale: 1.02,
          rotateY: 5,
          z: 50
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'
          }}
        />
        
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div 
            className="text-6xl transform transition-transform duration-300"
            animate={{ y: [0, -8, 0] }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {icon}
          </motion.div>
          <h3 className="text-2xl font-bold text-white/50 tracking-wide">{title}</h3>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative overflow-hidden rounded-2xl p-12 ${color} hover:shadow-2xl transition-all duration-300 group backdrop-blur-sm`}
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        z: 50
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'
        }}
      />
      
      <div className="flex flex-col items-center justify-center space-y-6">
        <motion.div 
          className="text-6xl transform transition-transform duration-300 group-hover:scale-110"
          animate={{ y: [0, -8, 0] }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold text-white tracking-wide">{title}</h3>
      </div>

      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      />
    </motion.a>
  );
}