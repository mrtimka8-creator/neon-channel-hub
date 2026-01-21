import { useState } from 'react';
import Header from '@/components/Header';
import StatsBar from '@/components/StatsBar';
import CategoryGrid from '@/components/CategoryGrid';
import ChannelList from '@/components/ChannelList';
import SuggestChannel from '@/components/SuggestChannel';
import Footer from '@/components/Footer';
import { CategoryType } from '@/types/channel';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategorySelect = (category: CategoryType) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen pb-6">
      <Header onSearch={setSearchQuery} />
      
      {selectedCategory ? (
        <ChannelList
          category={selectedCategory}
          onBack={handleBack}
          searchQuery={searchQuery}
        />
      ) : (
        <>
          <StatsBar />
          <CategoryGrid onCategorySelect={handleCategorySelect} />
          <SuggestChannel />
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
