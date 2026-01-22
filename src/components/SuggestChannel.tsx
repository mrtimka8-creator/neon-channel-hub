import { PlusCircle, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const SuggestChannel = () => {
  const handleClick = () => {
    window.open('https://t.me/your_bot', '_blank');
  };

  return (
    <div className="container py-6">
      <motion.button
        onClick={handleClick}
        className="w-full relative overflow-hidden bg-gradient-to-r from-primary/10 via-[hsl(var(--neon-pink))]/10 to-primary/10 rounded-2xl p-6 flex items-center justify-between group border border-primary/20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        {/* Animated gradient background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-[hsl(var(--neon-pink))]/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        {/* Animated particles */}
        <motion.div
          className="absolute top-2 right-20 text-primary/30"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>
        
        <div className="relative z-10 flex items-center gap-5">
          <motion.div 
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-[hsl(var(--neon-pink))] flex items-center justify-center glow-primary"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
            animate={{
              boxShadow: [
                "0 0 20px hsl(270 100% 70% / 0.3)",
                "0 0 40px hsl(270 100% 70% / 0.5)",
                "0 0 20px hsl(270 100% 70% / 0.3)"
              ]
            }}
            style={{ transition: "box-shadow 2s ease-in-out infinite" }}
          >
            <PlusCircle className="w-7 h-7 text-white" />
          </motion.div>
          <div className="text-left">
            <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
              Предложить канал
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              Знаете крутой канал? Расскажите нам!
            </p>
          </div>
        </div>
        
        <motion.div 
          className="relative z-10 w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
          </motion.div>
        </motion.div>
      </motion.button>
    </div>
  );
};

export default SuggestChannel;