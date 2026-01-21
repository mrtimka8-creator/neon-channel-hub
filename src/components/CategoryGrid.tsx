import CategoryCard from './CategoryCard';
import { categories } from '@/data/mockData';
import { CategoryType } from '@/types/channel';

interface CategoryGridProps {
  onCategorySelect: (category: CategoryType) => void;
}

const CategoryGrid = ({ onCategorySelect }: CategoryGridProps) => {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-foreground">Категории</h2>
        <span className="text-sm text-muted-foreground">{categories.length} разделов</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
