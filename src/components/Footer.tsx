import { Heart, Crown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="container py-10 mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <div className="premium-divider mb-10" />
      
      <div className="flex flex-col items-center gap-5">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Crown className="w-6 h-6 text-primary" />
          </motion.div>
          <span className="text-lg font-bold text-foreground">
            Top<span className="text-gradient">Channels</span>
          </span>
        </motion.div>
        
        <motion.p 
          className="text-sm text-muted-foreground flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Сделано с 
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart className="w-4 h-4 text-[hsl(var(--neon-pink))] fill-[hsl(var(--neon-pink))]" />
          </motion.span>
          для Telegram
        </motion.p>
        
        <p className="text-xs text-muted-foreground/60">
          © 2024 TopChannels. Все права защищены.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;