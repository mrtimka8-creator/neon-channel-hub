import { PlusCircle, ExternalLink } from 'lucide-react';

const SuggestChannel = () => {
  const handleClick = () => {
    // В реальном приложении это будет открывать форму или бота
    window.open('https://t.me/your_bot', '_blank');
  };

  return (
    <div className="container py-4">
      <button
        onClick={handleClick}
        className="w-full glass-strong rounded-2xl p-5 flex items-center justify-between group hover:border-primary/30 transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <PlusCircle className="w-6 h-6 text-primary" />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-foreground">Предложить канал</h3>
            <p className="text-sm text-muted-foreground">Знаете крутой канал? Расскажите нам!</p>
          </div>
        </div>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </button>
    </div>
  );
};

export default SuggestChannel;
