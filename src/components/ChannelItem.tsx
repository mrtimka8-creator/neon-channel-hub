import { Star, Users, ExternalLink } from 'lucide-react';
import { Channel } from '@/types/channel';

interface ChannelItemProps {
  channel: Channel;
}

const formatSubscribers = (count: number): string => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M';
  }
  if (count >= 1000) {
    return (count / 1000).toFixed(0) + 'K';
  }
  return count.toString();
};

const ChannelItem = ({ channel }: ChannelItemProps) => {
  const handleClick = () => {
    window.open(`https://t.me/${channel.username.replace('@', '')}`, '_blank');
  };

  return (
    <div className="channel-item group cursor-pointer" onClick={handleClick}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-lg font-semibold text-foreground">
          {channel.name.charAt(0)}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-medium text-foreground truncate">{channel.name}</h4>
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-sm text-muted-foreground truncate">{channel.description}</p>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="w-3.5 h-3.5" />
              <span>{formatSubscribers(channel.subscribers)}</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400">{channel.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        
        <span className="text-xs text-muted-foreground">{channel.username}</span>
      </div>
    </div>
  );
};

export default ChannelItem;
