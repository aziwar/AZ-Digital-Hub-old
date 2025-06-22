'use client';

import { useState, useEffect } from 'react';
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface Video {
  id: string;
  title: string;
  client: string;
  category: 'marketing' | 'corporate' | 'social' | 'product' | 'event';
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  description?: string;
  metrics?: {
    views?: string;
    engagement?: string;
    conversion?: string;
  };
}

const categories = [
  { id: 'all', label: 'All Videos', color: 'from-purple-600 to-blue-600' },
  { id: 'marketing', label: 'Marketing Campaigns', color: 'from-pink-600 to-purple-600' },
  { id: 'corporate', label: 'Corporate Videos', color: 'from-blue-600 to-cyan-600' },
  { id: 'social', label: 'Social Media', color: 'from-green-600 to-teal-600' },
  { id: 'product', label: 'Product Demos', color: 'from-orange-600 to-red-600' },
  { id: 'event', label: 'Event Coverage', color: 'from-indigo-600 to-purple-600' }
];

// Sample videos - replace with Google Drive integration
const sampleVideos: Video[] = [
  {
    id: '1',
    title: 'Dr. Scent Brand Campaign',
    client: 'Dr. Scent Kuwait',
    category: 'marketing',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '2:30',
    description: 'Luxury fragrance brand campaign showcasing product line',
    metrics: {
      views: '125K',
      engagement: '8.5%',
      conversion: '3.2%'
    }
  },
  {
    id: '2',
    title: 'Ooredoo 5G Launch',
    client: 'Ooredoo Kuwait',
    category: 'corporate',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '1:45',
    description: '5G network launch event documentation and promotion',
    metrics: {
      views: '89K',
      engagement: '12%'
    }
  },
  // Add more videos...
];

export default function VideoPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>(sampleVideos);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredVideos(sampleVideos);
    } else {
      setFilteredVideos(sampleVideos.filter(video => video.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Video Portfolio
          </h2>
          <p className="text-xl text-gray-400">
            Showcasing our video production and editing expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-xl bg-gray-900 cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <PlayIcon className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-white text-sm">
                  {video.duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-400 mb-2">{video.client}</p>
                <p className="text-sm text-gray-500 capitalize">{video.category}</p>
                
                {/* Metrics */}
                {video.metrics && (
                  <div className="mt-4 flex gap-4 text-sm">
                    {video.metrics.views && (
                      <div className="text-gray-400">
                        <span className="text-purple-400 font-semibold">{video.metrics.views}</span> views
                      </div>
                    )}
                    {video.metrics.engagement && (
                      <div className="text-gray-400">
                        <span className="text-purple-400 font-semibold">{video.metrics.engagement}</span> engagement
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="relative w-full max-w-6xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors"
              >
                <XMarkIcon className="w-8 h-8" />
              </button>

              {/* Video Player */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <div className="mt-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-400 mb-4">{selectedVideo.client}</p>
                {selectedVideo.description && (
                  <p className="text-gray-300 mb-4">{selectedVideo.description}</p>
                )}
                {selectedVideo.metrics && (
                  <div className="flex gap-6">
                    {Object.entries(selectedVideo.metrics).map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <span className="text-gray-400 capitalize">{key}: </span>
                        <span className="text-purple-400 font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}