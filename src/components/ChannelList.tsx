import { useState, useEffect } from 'react';
import { ArrowLeft, SlidersHorizontal, Star, Users, ArrowDownAZ } from 'lucide-react';
import ChannelItem from './ChannelItem';
import LoadingState from './LoadingState';
import { Channel, CategoryType, SortOption } from '@/types/channel';
import { channels, categories } from '@/data/mockData';

interface ChannelListProps {
  category: CategoryType;
  onBack: () => void;
  searchQuery: string;
}

const ChannelList = ({ category, onBack, searchQuery }: ChannelListProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>('rating');
  const [filteredChannels, setFilteredChannels] = useState<Channel[]>([]);

  const categoryInfo = categories.find(c => c.id === category);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let result = channels.filter(ch => ch.category === category);
      
      if (searchQuery) {
        result = result.filter(ch => 
          ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ch.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // Sort
      result.sort((a, b) => {
        switch (sortBy) {
          case 'rating':
            return b.rating - a.rating;
          case 'subscribers':
            return b.subscribers - a.subscribers;
          case 'name':
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });

      setFilteredChannels(result);
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [category, searchQuery, sortBy]);

  const sortOptions = [
    { id: 'rating' as SortOption, label: 'Рейтинг', icon: Star },
    { id: 'subscribers' as SortOption, label: 'Подписчики', icon: Users },
    { id: 'name' as SortOption, label: 'Имя', icon: ArrowDownAZ },
  ];

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-muted/50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div>
          <h2 className="text-xl font-semibold text-foreground">{categoryInfo?.nameRu}</h2>
          <p className="text-sm text-muted-foreground">{filteredChannels.length} каналов</p>
        </div>
      </div>

      {/* Sort Options */}
      <div className="flex items-center gap-2 mb-5 overflow-x-auto scrollbar-hide pb-2">
        <SlidersHorizontal className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        {sortOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSortBy(option.id)}
            className={`sort-button flex items-center gap-1.5 whitespace-nowrap ${
              sortBy === option.id ? 'sort-button-active' : ''
            }`}
          >
            <option.icon className="w-3.5 h-3.5" />
            {option.label}
          </button>
        ))}
      </div>

      {/* Channel List */}
      {isLoading ? (
        <LoadingState />
      ) : (
        <div className="space-y-3">
          {filteredChannels.map((channel) => (
            <ChannelItem key={channel.id} channel={channel} />
          ))}
          {filteredChannels.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Каналы не найдены</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChannelList;
