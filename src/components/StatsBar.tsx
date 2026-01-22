import { Users, Layers, Star, TrendingUp } from 'lucide-react';
import { stats } from '@/data/mockData';
import { motion } from 'framer-motion';

const StatsBar = () => {
  const statItems = [
    { 
      icon: Layers, 
      label: 'Каналов', 
      value: stats.totalChannels, 
      gradient: 'from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))]',
      glow: 'hsl(var(--neon-purple) / 0.4)'
    },
    { 
      icon: Users, 
      label: 'Подписчиков', 
      value: stats.totalSubscribers, 
      gradient: 'from-[hsl(var(--neon-green))] to-[hsl(var(--neon-cyan))]',
      glow: 'hsl(var(--neon-green) / 0.4)'
    },
    { 
      icon: Star, 
      label: 'Ср. рейтинг', 
      value: stats.averageRating.toFixed(1), 
      gradient: 'from-[hsl(var(--gold))] to-[hsl(var(--neon-orange))]',
      glow: 'hsl(var(--gold) / 0.4)'
    },
    { 
      icon: TrendingUp, 
      label: 'Категорий', 
      value: stats.totalCategories, 
      gradient: 'from-[hsl(var(--neon-pink))] to-[hsl(var(--neon-purple))]',
      glow: 'hsl(var(--neon-pink) / 0.4)'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="container py-6">
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {statItems.map((stat, index) => (
          <motion.div 
            key={index} 
            className="stat-card flex items-center gap-4 group"
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div 
              className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}
              style={{ boxShadow: `0 4px 20px ${stat.glow}` }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <stat.icon className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <motion.p 
                className="text-2xl font-bold text-foreground tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StatsBar;