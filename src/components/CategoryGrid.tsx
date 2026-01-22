import CategoryCard from './CategoryCard';
import { categories } from '@/data/mockData';
import { CategoryType } from '@/types/channel';

interface CategoryGridProps {
  onCategorySelect: (category: CategoryType) => void;
}

const CategoryGrid = ({ onCategorySelect }: CategoryGridProps) => {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground tracking-tight">Категории</h2>
          <p className="text-sm text-muted-foreground mt-1">Выберите интересующий раздел</p>
        </div>
        <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
          {categories.length} разделов
        </span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={() => onCategorySelect(category.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
