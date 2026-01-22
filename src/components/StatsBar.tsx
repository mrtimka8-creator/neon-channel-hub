import { Users, Layers, Star, TrendingUp } from 'lucide-react';
import { stats } from '@/data/mockData';

const StatsBar = () => {
  const statItems = [
    { icon: Layers, label: 'Каналов', value: stats.totalChannels, gradient: 'from-primary to-accent-foreground' },
    { icon: Users, label: 'Подписчиков', value: stats.totalSubscribers, gradient: 'from-[hsl(var(--neon-green))] to-[hsl(160_84%_35%)]' },
    { icon: Star, label: 'Ср. рейтинг', value: stats.averageRating.toFixed(1), gradient: 'from-[hsl(var(--gold))] to-[hsl(var(--neon-orange))]' },
    { icon: TrendingUp, label: 'Категорий', value: stats.totalCategories, gradient: 'from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-pink))]' },
  ];

  return (
    <div className="container py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statItems.map((stat, index) => (
          <div key={index} className="stat-card flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-sm`}>
              <stat.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xl font-bold text-foreground tracking-tight">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
