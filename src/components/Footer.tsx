import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="container py-6 mt-4">
      <div className="glass rounded-2xl p-4 text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          Сделано с <Heart className="w-4 h-4 text-neon-pink fill-neon-pink" /> для Telegram
        </p>
        <p className="text-xs text-muted-foreground/60 mt-1">
          © 2024 TopChannels
        </p>
      </div>
    </footer>
  );
};

export default Footer;
