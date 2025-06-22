# Video Portfolio Integration Guide

## Quick Setup Instructions

### Step 1: Get Google Drive File IDs

1. Go to your Google Drive folder with videos
2. Right-click on each video → "Get link"
3. Extract the file ID from the URL:
   ```
   https://drive.google.com/file/d/ABC123XYZ/view?usp=sharing
                                    ↑
                              This is your file ID
   ```

### Step 2: Add to Your Website

1. **Add the component to your page layout** (e.g., in `app/page.tsx`):
```tsx
import SimpleVideoShowcase from '@/components/SimpleVideoShowcase';

// In your page component:
<SimpleVideoShowcase />
```

2. **Update the video data** in `SimpleVideoShowcase.tsx`:
```tsx
const videoData: VideoItem[] = [
  {
    id: '1',
    title: 'Your Video Title',
    client: 'Client Name',
    category: 'Marketing Campaign',
    driveFileId: 'ABC123XYZ', // Your actual file ID
    duration: '2:30',
    description: 'Brief description'
  },
  // Add more videos...
];
```

### Step 3: Make Videos Public

**Important:** For videos to display properly:
1. Right-click video in Google Drive
2. Select "Share"
3. Change to "Anyone with the link can view"
4. Click "Copy link"

### Alternative Storage Options

If you prefer not to use Google Drive:

**Option 1: YouTube (Recommended)**
```tsx
// Replace driveFileId with YouTube video ID
const getEmbedUrl = (videoId: string) => 
  `https://www.youtube.com/embed/${videoId}`;
```

**Option 2: Vimeo**
```tsx
// Replace driveFileId with Vimeo video ID
const getEmbedUrl = (videoId: string) => 
  `https://player.vimeo.com/video/${videoId}`;
```

### Customization Options

**Change Colors:**
```tsx
// Purple gradient (current)
from-purple-600 to-blue-600

// Corporate blue
from-blue-600 to-cyan-600

// Modern orange
from-orange-600 to-red-600
```

**Add More Categories:**
```tsx
const categories = [
  'Marketing Campaign',
  'Corporate Video',
  'Social Media',
  'Product Demo',
  'Event Coverage',
  'Testimonials'
];
```

**Add Video Metrics:**
```tsx
interface VideoItem {
  // ... existing fields
  metrics?: {
    views: string;
    engagement: string;
    roi: string;
  };
}
```

### Performance Tips

1. **Lazy Loading**: Already implemented with onClick modal
2. **Thumbnail Optimization**: Google Drive auto-generates thumbnails
3. **Mobile Responsive**: Grid adjusts from 1 to 3 columns

### Troubleshooting

**Videos not showing?**
- Check if videos are set to "Anyone with link"
- Verify file IDs are correct
- Test with a public YouTube video first

**Thumbnails not loading?**
- The component has a fallback gradient
- You can add custom thumbnail URLs instead

**Slow loading?**
- Consider hosting videos on YouTube for better performance
- Use smaller file sizes (compress videos before uploading)

## Next Steps

1. Replace sample data with your actual videos
2. Test on mobile devices
3. Add to your main navigation menu
4. Consider adding video categories/filtering
5. Track engagement with analytics