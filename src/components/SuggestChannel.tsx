import { PlusCircle, ArrowRight } from 'lucide-react';

const SuggestChannel = () => {
  const handleClick = () => {
    window.open('https://t.me/your_bot', '_blank');
  };

  return (
    <div className="container py-6">
      <button
        onClick={handleClick}
        className="w-full bg-gradient-to-r from-primary/5 via-primary/10 to-accent/20 rounded-2xl p-6 flex items-center justify-between group border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
      >
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent-foreground flex items-center justify-center shadow-md glow-primary">
            <PlusCircle className="w-7 h-7 text-primary-foreground" />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-foreground text-lg">Предложить канал</h3>
            <p className="text-sm text-muted-foreground mt-0.5">Знаете крутой канал? Расскажите нам!</p>
          </div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <ArrowRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
      </button>
    </div>
  );
};

export default SuggestChannel;
