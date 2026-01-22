import CategoryCard from './CategoryCard';
import { categories } from '@/data/mockData';
import { CategoryType } from '@/types/channel';
import { motion } from 'framer-motion';

interface CategoryGridProps {
  onCategorySelect: (category: CategoryType) => void;
}

const CategoryGrid = ({ onCategorySelect }: CategoryGridProps) => {
  return (
    <div className="container py-8">
      <motion.div 
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div>
          <h2 className="text-2xl font-bold text-foreground tracking-tight">
            Категории
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Выберите интересующий раздел</p>
        </div>
        <motion.span 
          className="text-sm font-medium text-muted-foreground bg-secondary px-4 py-2 rounded-full border border-border"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {categories.length} разделов
        </motion.span>
      </motion.div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {categories.map((category, index) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={() => onCategorySelect(category.id)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;