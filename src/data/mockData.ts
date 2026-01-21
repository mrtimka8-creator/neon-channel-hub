import { Category, Channel } from '@/types/channel';

export const categories: Category[] = [
  { id: 'music', name: 'Music', nameRu: 'Музыка', icon: 'Music', channelCount: 156, color: 'icon-music' },
  { id: 'sport', name: 'Sport', nameRu: 'Спорт', icon: 'Trophy', channelCount: 89, color: 'icon-sport' },
  { id: 'crypto', name: 'Crypto', nameRu: 'Криптовалюта', icon: 'Bitcoin', channelCount: 234, color: 'icon-crypto' },
  { id: 'art', name: 'Art', nameRu: 'Искусство', icon: 'Palette', channelCount: 112, color: 'icon-art' },
  { id: 'anime', name: 'Anime', nameRu: 'Аниме', icon: 'Sparkles', channelCount: 178, color: 'icon-anime' },
  { id: 'games', name: 'Games', nameRu: 'Игры', icon: 'Gamepad2', channelCount: 203, color: 'icon-games' },
];

export const channels: Channel[] = [
  // Music
  { id: '1', name: 'Музыкальный Рай', username: '@music_paradise', description: 'Лучшая музыка каждый день', subscribers: 125000, rating: 4.8, category: 'music' },
  { id: '2', name: 'Fresh Beats', username: '@freshbeats', description: 'Новинки музыки и треки', subscribers: 89000, rating: 4.6, category: 'music' },
  { id: '3', name: 'Lo-Fi Station', username: '@lofi_chill', description: 'Расслабляющая lo-fi музыка', subscribers: 67000, rating: 4.9, category: 'music' },
  { id: '4', name: 'EDM Universe', username: '@edm_world', description: 'Электронная музыка 24/7', subscribers: 156000, rating: 4.7, category: 'music' },
  
  // Sport
  { id: '5', name: 'Спорт Экспресс', username: '@sportexpress', description: 'Все новости спорта', subscribers: 234000, rating: 4.5, category: 'sport' },
  { id: '6', name: 'Football Daily', username: '@footballdaily', description: 'Футбольные новости и матчи', subscribers: 178000, rating: 4.7, category: 'sport' },
  { id: '7', name: 'UFC News', username: '@ufc_news', description: 'MMA и UFC контент', subscribers: 98000, rating: 4.4, category: 'sport' },
  
  // Crypto
  { id: '8', name: 'Crypto Signals Pro', username: '@cryptosignals', description: 'Торговые сигналы и аналитика', subscribers: 456000, rating: 4.3, category: 'crypto' },
  { id: '9', name: 'Bitcoin Today', username: '@btc_today', description: 'Новости Bitcoin ежедневно', subscribers: 312000, rating: 4.6, category: 'crypto' },
  { id: '10', name: 'DeFi World', username: '@defi_world', description: 'Децентрализованные финансы', subscribers: 189000, rating: 4.5, category: 'crypto' },
  { id: '11', name: 'NFT Gallery', username: '@nft_art', description: 'NFT коллекции и аукционы', subscribers: 145000, rating: 4.2, category: 'crypto' },
  
  // Art
  { id: '12', name: 'Арт Пространство', username: '@artspace', description: 'Современное искусство', subscribers: 87000, rating: 4.8, category: 'art' },
  { id: '13', name: 'Digital Artists', username: '@digitalart', description: 'Цифровое искусство', subscribers: 134000, rating: 4.7, category: 'art' },
  { id: '14', name: 'Street Art World', username: '@streetart', description: 'Уличное искусство мира', subscribers: 76000, rating: 4.5, category: 'art' },
  
  // Anime
  { id: '15', name: 'Anime News', username: '@animenews', description: 'Новости аниме индустрии', subscribers: 267000, rating: 4.9, category: 'anime' },
  { id: '16', name: 'Манга Daily', username: '@manga_daily', description: 'Манга каждый день', subscribers: 189000, rating: 4.7, category: 'anime' },
  { id: '17', name: 'Cosplay World', username: '@cosplayworld', description: 'Лучший косплей', subscribers: 145000, rating: 4.6, category: 'anime' },
  { id: '18', name: 'Anime OST', username: '@anime_ost', description: 'Саундтреки из аниме', subscribers: 98000, rating: 4.8, category: 'anime' },
  
  // Games
  { id: '19', name: 'Gaming News', username: '@gamingnews', description: 'Игровые новости 24/7', subscribers: 345000, rating: 4.6, category: 'games' },
  { id: '20', name: 'Esports Today', username: '@esports', description: 'Киберспорт события', subscribers: 278000, rating: 4.7, category: 'games' },
  { id: '21', name: 'Indie Games', username: '@indiegames', description: 'Инди игры и разработка', subscribers: 123000, rating: 4.5, category: 'games' },
  { id: '22', name: 'Mobile Gaming', username: '@mobilegaming', description: 'Мобильные игры', subscribers: 198000, rating: 4.4, category: 'games' },
];

export const stats = {
  totalChannels: 972,
  totalCategories: 6,
  totalSubscribers: '4.2M',
  averageRating: 4.6,
};
