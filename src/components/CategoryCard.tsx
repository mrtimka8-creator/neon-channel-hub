import { Music, Trophy, Bitcoin, Palette, Sparkles, Gamepad2, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Category } from '@/types/channel';
import { motion } from 'framer-motion';

const iconMap = {
  Music,
  Trophy,
  Bitcoin,
  Palette,
  Sparkles,
  Gamepad2,
};

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
  index?: number;
}

const CategoryCard = ({ category, onClick, index = 0 }: CategoryCardProps) => {
  const IconComponent = iconMap[category.icon as keyof typeof iconMap];

  return (
    <motion.div 
      className="category-card group relative overflow-hidden"
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      {/* Shine effect on hover */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={false}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, hsl(0 0% 100% / 0.05) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['200% center', '-200% center'],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <motion.div 
            className={`icon-container ${category.color}`}
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <IconComponent className="w-6 h-6 text-white" />
          </motion.div>
          <motion.span 
            className="badge-count"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {category.channelCount}
          </motion.span>
        </div>
        
        <h3 className="text-lg font-bold text-foreground mb-1.5 tracking-tight group-hover:text-primary transition-colors duration-300">
          {category.nameRu}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {category.channelCount} каналов
        </p>
        
        <motion.div 
          className="flex items-center gap-2 text-primary text-sm font-semibold"
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ x: 5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Открыть</span>
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;