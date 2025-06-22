// lib/google-drive-videos.ts

interface DriveVideo {
  id: string;
  name: string;
  mimeType: string;
  webViewLink: string;
  webContentLink: string;
  thumbnailLink?: string;
  createdTime: string;
  modifiedTime: string;
  size: string;
}

interface VideoConfig {
  folderId: string; // Your Google Drive folder ID
  apiKey: string;   // Google API Key (store in env)
}

export class GoogleDriveVideoService {
  private config: VideoConfig;
  private baseUrl = 'https://www.googleapis.com/drive/v3';

  constructor(config: VideoConfig) {
    this.config = config;
  }

  // Get all videos from a specific folder
  async getVideosFromFolder(): Promise<DriveVideo[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/files?` + new URLSearchParams({
          q: `'${this.config.folderId}' in parents and mimeType contains 'video/'`,
          key: this.config.apiKey,
          fields: 'files(id,name,mimeType,webViewLink,webContentLink,thumbnailLink,createdTime,modifiedTime,size)',
          orderBy: 'createdTime desc'
        })
      );

      if (!response.ok) {
        throw new Error('Failed to fetch videos from Google Drive');
      }

      const data = await response.json();
      return data.files || [];
    } catch (error) {
      console.error('Error fetching Google Drive videos:', error);
      return [];
    }
  }

  // Convert Google Drive video to embed URL
  getEmbedUrl(fileId: string): string {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }

  // Get direct download URL (requires proper permissions)
  getDownloadUrl(fileId: string): string {
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }

  // Get thumbnail URL for video
  getThumbnailUrl(fileId: string, width = 1280): string {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`;
  }
}

// Component usage example
export function useGoogleDriveVideos() {
  const [videos, setVideos] = useState<DriveVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const service = new GoogleDriveVideoService({
          folderId: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID!,
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!
        });

        const driveVideos = await service.getVideosFromFolder();
        setVideos(driveVideos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load videos');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return { videos, loading, error };
}

// Alternative: Video metadata stored in JSON
export const videoMetadata = {
  "videos": [
    {
      "driveId": "1ABC123DEF456", // Google Drive file ID
      "title": "Dr. Scent Brand Campaign",
      "client": "Dr. Scent Kuwait",
      "category": "marketing",
      "duration": "2:30",
      "description": "Luxury fragrance brand campaign showcasing the complete product line with lifestyle shots",
      "tags": ["fragrance", "luxury", "lifestyle"],
      "metrics": {
        "views": "125K",
        "engagement": "8.5%",
        "conversion": "3.2%",
        "roi": "280%"
      },
      "highlights": [
        "4K Ultra HD Production",
        "Drone cinematography",
        "Celebrity endorsement",
        "Multi-platform optimization"
      ]
    },
    {
      "driveId": "2GHI789JKL012",
      "title": "Ooredoo 5G Network Launch",
      "client": "Ooredoo Kuwait",
      "category": "corporate",
      "duration": "3:15",
      "description": "Corporate video showcasing Kuwait's first 5G network launch event and technology benefits",
      "tags": ["telecom", "technology", "corporate"],
      "metrics": {
        "views": "89K",
        "engagement": "12%",
        "mediaReach": "2.5M"
      },
      "highlights": [
        "Live event coverage",
        "Executive interviews",
        "3D animation integration",
        "Same-day delivery"
      ]
    },
    {
      "driveId": "3MNO345PQR678",
      "title": "AMZ Digital Services Showreel",
      "client": "Internal",
      "category": "marketing",
      "duration": "1:45",
      "description": "2024 agency showreel highlighting our best work across all service categories",
      "tags": ["showreel", "portfolio", "agency"],
      "metrics": {
        "newClients": "15",
        "conversionRate": "35%"
      },
      "highlights": [
        "Award-winning campaigns",
        "15+ industries covered",
        "ROI-focused results",
        "Creative excellence"
      ]
    }
  ]
};

// Hybrid approach: Combine Drive API with local metadata
export async function getEnhancedVideoData() {
  const service = new GoogleDriveVideoService({
    folderId: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID!,
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!
  });

  const driveVideos = await service.getVideosFromFolder();
  
  // Merge with metadata
  return videoMetadata.videos.map(meta => {
    const driveVideo = driveVideos.find(v => v.id === meta.driveId);
    return {
      ...meta,
      embedUrl: driveVideo ? service.getEmbedUrl(driveVideo.id) : '',
      thumbnailUrl: driveVideo ? service.getThumbnailUrl(driveVideo.id) : '/placeholder-video.jpg',
      available: !!driveVideo
    };
  });
}