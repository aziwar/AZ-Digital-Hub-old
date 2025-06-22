// components/SimpleVideoShowcase.tsx
// No API keys required - works with public Google Drive links

'use client';

import { useState } from 'react';
import { PlayIcon, FilmIcon } from '@heroicons/react/24/solid';

interface VideoItem {
  id: string;
  title: string;
  client: string;
  category: string;
  driveFileId: string; // Extract from Google Drive sharing link
  duration: string;
  description: string;
}

// Extract file ID from Google Drive sharing links
// Example: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
const extractDriveFileId = (shareLink: string): string => {
  const match = shareLink.match(/\/d\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : '';
};

// Your video data - replace FILE_IDs with actual Google Drive file IDs
const videoData: VideoItem[] = [
  {
    id: '1',
    title: 'Dr. Scent Brand Campaign',
    client: 'Dr. Scent Kuwait',
    category: 'Marketing Campaign',
    driveFileId: 'YOUR_FILE_ID_HERE', // Replace with actual ID
    duration: '2:30',
    description: 'Luxury fragrance brand campaign'
  },
  {
    id: '2',
    title: 'Ooredoo 5G Launch Event',
    client: 'Ooredoo Kuwait',
    category: 'Corporate Video',
    driveFileId: 'YOUR_FILE_ID_HERE', // Replace with actual ID
    duration: '3:15',
    description: '5G network launch documentation'
  },
  {
    id: '3',
    title: 'Social Media Campaign',
    client: 'Smart Technology',
    category: 'Social Media',
    driveFileId: 'YOUR_FILE_ID_HERE', // Replace with actual ID
    duration: '0:45',
    description: 'Instagram reels campaign'
  }
];

export default function SimpleVideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const getEmbedUrl = (fileId: string) => 
    `https://drive.google.com/file/d/${fileId}/preview`;

  const getThumbnailUrl = (fileId: string) => 
    `https://drive.google.com/thumbnail?id=${fileId}&sz=w1280`;

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <FilmIcon className="w-10 h-10 text-purple-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Video Portfolio
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional video production and editing services showcasing our work 
            across marketing campaigns, corporate videos, and social media content
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoData.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Thumbnail with Gradient Overlay */}
              <div className="relative aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <img
                  src={getThumbnailUrl(video.driveFileId)}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback gradient if thumbnail fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.background = 
                      'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)';
                  }}
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 border-2 border-white/20">
                    <PlayIcon className="w-10 h-10 text-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-white text-sm font-medium z-20">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-purple-400 font-medium mb-1">{video.client}</p>
                <p className="text-gray-500 text-sm">{video.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Have a video project in mind? Let's create something amazing together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Start Your Video Project
          </a>
        </div>

        {/* Video Player Modal */}
        {activeVideo && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div 
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors text-lg font-medium"
              >
                ✕ Close
              </button>

              {/* Video Player */}
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src={getEmbedUrl(activeVideo.driveFileId)}
                  className="w-full h-full"
                  allow="autoplay"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              </div>

              {/* Video Info */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {activeVideo.title}
                </h3>
                <p className="text-purple-400 font-medium">
                  {activeVideo.client} • {activeVideo.category}
                </p>
                <p className="text-gray-400 mt-2">
                  {activeVideo.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}