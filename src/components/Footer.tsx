import { Heart, Crown } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="container py-8 mt-4">
      <div className="premium-divider mb-8" />
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <Crown className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-foreground">TopChannels</span>
        </div>
        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          Сделано с <Heart className="w-4 h-4 text-[hsl(var(--neon-pink))] fill-[hsl(var(--neon-pink))]" /> для Telegram
        </p>
        <p className="text-xs text-muted-foreground/60">
          © 2024 TopChannels. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
