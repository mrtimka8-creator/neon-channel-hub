export interface Channel {
  id: string;
  name: string;
  username: string;
  description: string;
  subscribers: number;
  rating: number;
  category: CategoryType;
  avatar?: string;
}

export type CategoryType = 'music' | 'sport' | 'crypto' | 'art' | 'anime' | 'games';

export interface Category {
  id: CategoryType;
  name: string;
  nameRu: string;
  icon: string;
  channelCount: number;
  color: string;
}

export type SortOption = 'rating' | 'subscribers' | 'name';
