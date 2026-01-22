import { Music, Trophy, Bitcoin, Palette, Sparkles, Gamepad2, ChevronRight } from 'lucide-react';
import { Category } from '@/types/channel';

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
}

const CategoryCard = ({ category, onClick }: CategoryCardProps) => {
  const IconComponent = iconMap[category.icon as keyof typeof iconMap];

  return (
    <div className="category-card group" onClick={onClick}>
      <div className="flex items-start justify-between mb-5">
        <div className={`icon-container ${category.color}`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <span className="badge-count">{category.channelCount}</span>
      </div>
      
      <h3 className="text-lg font-bold text-foreground mb-1 tracking-tight">
        {category.nameRu}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {category.channelCount} каналов
      </p>
      
      <div className="flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
        Открыть
        <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  );
};

export default CategoryCard;
