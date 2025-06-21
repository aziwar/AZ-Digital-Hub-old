# Ahmed Ziwar - Digital Portfolio

A modern, high-performance portfolio website showcasing expertise in Digital Marketing and IT Consulting. Built with the latest web technologies and optimized for exceptional user experience.

![Portfolio Preview](public/og-image.jpg)

## 🚀 OpenAI Visual Optimization Deployment

### API Configuration
**OpenAI DALL-E 3**: Professional asset generation pipeline  
**Cost**: <$100 total (97% reduction from traditional services)  
**Timeline**: 5-day phased implementation

### Required Environment Variables
```env
# OpenAI Configuration
OPENAI_API_KEY=sk-your-openai-key-here

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://vpqhbrekfovgkcwegvxn.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwcWhicmVrZm92Z2tjd2VndnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NTI2MjQsImV4cCI6MjA2NDEyODYyNH0.UJfR_r6ax9sWWm9xp0haGKutBZF2ymxgrCZ5t1Vedj4

# Email Service
EMAIL_SERVICE_API_KEY=your-email-service-key
```

## ✅ Implementation Checklist

### Phase 1: Environment Setup (Day 1)
- [ ] OpenAI API key configuration
- [ ] Install dependencies: `npm install openai@^4.0.0`
- [ ] Configure next.config.js with remotePatterns
- [ ] Validate API connection
- [ ] Test image optimization pipeline

### Phase 2: Asset Generation (Day 2-3)
- [ ] LinkedIn photo processing setup
- [ ] Professional headshot variations (4 images @ $0.16)
- [ ] Brand logo generation (8 variations @ $0.32)
- [ ] Service graphics creation (12 images @ $0.48)
- [ ] Quality assurance review
- [ ] Asset optimization and storage

### Phase 3: Next.js Integration (Day 3-4)
- [ ] Implement ProfessionalHeadshot component
- [ ] Create dynamic asset loading API route
- [ ] Configure Image component optimization
- [ ] Test responsive image delivery
- [ ] Validate WebP/AVIF conversion

### Phase 4: Vercel Deployment (Day 4-5)
- [ ] Environment variables configuration
- [ ] Production deployment
- [ ] Performance validation (<3s load time)
- [ ] Core Web Vitals verification
- [ ] Cost monitoring setup

### Phase 5: Production Validation (Day 5)
- [ ] API functionality verification
- [ ] Image optimization confirmation
- [ ] Performance metrics validation
- [ ] Cost optimization verification (97% reduction)
- [ ] Final quality assurance

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4 with custom design system
- **AI Integration**: OpenAI DALL-E 3 API
- **Database**: Supabase
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Forms**: React Hook Form with Zod validation
- **Icons**: Heroicons & React Icons
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/aziwar/AZ-Digital-Hub.git
cd AZ-Digital-Hub
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
# Add API keys from checklist above
```

4. Run development server:
```bash
npm run dev
```

5. Generate professional assets:
```bash
npm run generate-assets
```

## 🏗 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/
│   │   └── generate-assets/ # OpenAI asset generation
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/
│   │   └── ProfessionalHeadshot.tsx # AI-generated headshots
│   ├── sections/          # Page sections
│   └── features/          # Feature components
├── lib/
│   ├── openai.ts          # OpenAI client configuration
│   └── utils/             # Utility functions
└── public/                # Static assets
```

## 🚀 Deployment

### Vercel Configuration
```javascript
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
        pathname: '/**',
      }
    ],
    formats: ['image/avif', 'image/webp']
  }
}
```

### Performance Targets
- **Page Load**: <3 seconds
- **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1
- **Image Optimization**: WebP/AVIF delivery
- **Cost Efficiency**: 97% reduction vs traditional services

## 🔧 API Integration

### OpenAI Asset Generation
```typescript
// Professional headshot generation
const response = await openai.images.create_variation({
  image: linkedinPhoto,
  n: 4,
  size: "1024x1024",
  response_format: "url"
});
```

### Supabase Configuration
- **Project**: ai-knowledge-automation
- **Region**: eu-central-1
- **Status**: ACTIVE_HEALTHY

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 📞 Contact

Ahmed Ziwar - [LinkedIn](https://linkedin.com/in/ahmedziwar) - ahmedziwar@gmail.com

---

Built with ❤️ by Ahmed Ziwar | Enhanced with OpenAI DALL-E 3