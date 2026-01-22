import { Search, Crown, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 glass-strong border-b border-border/50"
    >
      <div className="container py-5">
        <div className="flex items-center justify-between gap-6">
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative">
              <motion.div 
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[hsl(var(--neon-purple))] via-[hsl(var(--primary))] to-[hsl(var(--neon-pink))] flex items-center justify-center glow-primary"
                animate={{ 
                  boxShadow: [
                    "0 0 20px hsl(270 100% 70% / 0.4)",
                    "0 0 40px hsl(270 100% 70% / 0.6)",
                    "0 0 20px hsl(270 100% 70% / 0.4)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Crown className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div 
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--neon-orange))] flex items-center justify-center border-2 border-background"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Sparkles className="w-2.5 h-2.5 text-white" />
              </motion.div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground tracking-tight">
                Top<span className="text-gradient">Channels</span>
              </h1>
              <p className="text-xs text-muted-foreground font-medium">Премиум каталог каналов</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 max-w-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--neon-pink))] opacity-0 blur-xl"
                animate={{ opacity: isFocused ? 0.3 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors z-10" />
              <input
                type="text"
                placeholder="Поиск каналов..."
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="relative w-full pl-11 pr-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;