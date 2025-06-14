
import React, { useState, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Search, Star, Eye, Upload } from 'lucide-react';
import ActivityCard from './course-builder/ActivityCard';
import ResourceCard from './course-builder/ResourceCard';
import { activities, resources } from './course-builder/courseData';

const CourseBuilder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const addToSelection = (id: string) => {
    setSelectedItems(prev => [...prev, id]);
  };

  const filteredActivities = useMemo(() => 
    activities.filter(activity => 
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]
  );

  const filteredResources = useMemo(() => 
    resources.filter(resource => 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]
  );

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Créer un parcours</h1>
            <p className="text-lg text-gray-600">Ajoutez des activités ou ressources pédagogiques</p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Rechercher une activité ou ressource..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="activities" className="mb-20">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
              <TabsTrigger value="activities" className="text-base">
                🟦 Activités
              </TabsTrigger>
              <TabsTrigger value="resources" className="text-base">
                🟩 Ressources
              </TabsTrigger>
            </TabsList>

            {/* Activities Tab */}
            <TabsContent value="activities">
              {filteredActivities.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">Aucune activité trouvée.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredActivities.map((activity) => (
                    <ActivityCard
                      key={activity.id}
                      activity={activity}
                      isFavorite={favorites.has(activity.id)}
                      onToggleFavorite={() => toggleFavorite(activity.id)}
                      onAdd={() => addToSelection(activity.id)}
                    />
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources">
              {filteredResources.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">Aucune ressource trouvée.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map((resource) => (
                    <ResourceCard
                      key={resource.id}
                      resource={resource}
                      isFavorite={favorites.has(resource.id)}
                      onToggleFavorite={() => toggleFavorite(resource.id)}
                      onAdd={() => addToSelection(resource.id)}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Floating Action Bar */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  {selectedItems.length} élément{selectedItems.length !== 1 ? 's' : ''} sélectionné{selectedItems.length !== 1 ? 's' : ''}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    Voir aperçu
                  </Button>
                  <Button 
                    style={{ backgroundColor: '#484dff' }}
                    className="text-white hover:bg-[#3d42e6] flex items-center gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Publier le parcours
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default CourseBuilder;
