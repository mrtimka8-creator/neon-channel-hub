import { Search, Crown } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-border/30">
      <div className="container py-5">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-primary to-accent-foreground flex items-center justify-center shadow-lg glow-primary">
                <Crown className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--neon-orange))] flex items-center justify-center">
                <span className="text-[8px] font-bold text-white">✓</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground tracking-tight">TopChannels</h1>
              <p className="text-xs text-muted-foreground font-medium">Премиум каталог каналов</p>
            </div>
          </div>
          
          <div className="flex-1 max-w-md">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Поиск каналов..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted/30 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-background transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
