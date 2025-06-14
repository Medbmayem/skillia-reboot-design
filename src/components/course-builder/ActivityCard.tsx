
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Star, Plus } from 'lucide-react';
import { Activity } from './courseData';

interface ActivityCardProps {
  activity: Activity;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onAdd: () => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  isFavorite,
  onToggleFavorite,
  onAdd
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] rounded-2xl border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="text-3xl">{activity.icon}</div>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite();
                }}
                className={`p-1 h-8 w-8 ${isFavorite ? 'text-yellow-500' : 'text-gray-400'}`}
              >
                <Star className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
              </Button>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{activity.shortDescription}</p>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onAdd();
                }}
                style={{ backgroundColor: '#484dff' }}
                className="w-full text-white hover:bg-[#3d42e6] flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Ajouter
              </Button>
            </div>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80" side="top">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold flex items-center gap-2">
            <span className="text-lg">{activity.icon}</span>
            {activity.title}
          </h4>
          <p className="text-sm text-gray-600">{activity.description}</p>
          <div className="pt-2">
            <Button
              onClick={onAdd}
              style={{ backgroundColor: '#484dff' }}
              className="w-full text-white hover:bg-[#3d42e6] flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Ajouter
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ActivityCard;
