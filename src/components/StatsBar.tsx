import { Users, Layers, Star, TrendingUp } from 'lucide-react';
import { stats } from '@/data/mockData';

const StatsBar = () => {
  const statItems = [
    { icon: Layers, label: 'Каналов', value: stats.totalChannels, color: 'text-primary' },
    { icon: Users, label: 'Подписчиков', value: stats.totalSubscribers, color: 'text-neon-green' },
    { icon: Star, label: 'Ср. рейтинг', value: stats.averageRating.toFixed(1), color: 'text-yellow-400' },
    { icon: TrendingUp, label: 'Категорий', value: stats.totalCategories, color: 'text-neon-purple' },
  ];

  return (
    <div className="container py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {statItems.map((stat, index) => (
          <div key={index} className="stat-card flex items-center gap-3">
            <div className={`${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
