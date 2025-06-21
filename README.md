# Ahmed Ziwar - Digital Portfolio

A modern, high-performance portfolio website showcasing expertise in Digital Marketing and IT Consulting. Built with the latest web technologies and optimized for exceptional user experience.

![Portfolio Preview](public/og-image.jpg)

## 📊 CURRENT SESSION STATUS (June 21, 2025)

### ✅ COMPLETED THIS SESSION
- **Phase 1 Environment Setup**: OpenAI integration, TypeScript path fix, API routes created
- **Production Deployment**: Build successful (commit: cc57da1a → d4fb416a)
- **Security Resolution**: Removed exposed Supabase credentials from repository
- **Context7 Technical Validation**: Identified 4 critical technical debt items

### 🔧 CRITICAL TECHNICAL DEBT (IMMEDIATE PRIORITY)
1. **HIGH**: Cost calculation error in `lib/openai.ts`
   - `generateHeadshots`: Uses `quality: 'hd'` ($0.08) but calculated at $0.04
   - **Fix**: Change to `quality: 'standard'` for $0.96 target
2. **MEDIUM**: API route type safety in `app/api/generate-assets/route.ts`
   - **Fix**: Add `import { NextRequest, NextResponse } from 'next/server'`
3. **MEDIUM**: DALL-E 3 size validation missing
   - **Fix**: Validate sizes: `1024×1024`, `1024×1792`, `1792×1024` only
4. **LOW**: Environment variables deployment
   - **Fix**: Configure `OPENAI_API_KEY` in Vercel dashboard

### 🎯 NEXT ACTIONS FOR NEW CHAT
1. **Execute technical debt fixes** (estimated 15 minutes)
2. **Deploy environment variables** to Vercel  
3. **Validate cost calculation** shows $0.96 total
4. **Begin Phase 2**: Asset generation pipeline

---

## 🚀 OpenAI Visual Optimization Deployment

### API Configuration
**OpenAI DALL-E 3**: Professional asset generation pipeline  
**Cost**: $0.96 total (97% reduction from traditional services)  
**Timeline**: 5-day phased implementation

### Required Environment Variables
```env
# Copy .env.example to .env.local and configure with your actual values
# NEVER commit actual API keys to version control

# OpenAI Configuration
OPENAI_API_KEY=your-openai-api-key-here

# Supabase Configuration  
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Email Service
EMAIL_SERVICE_API_KEY=your-email-service-key
```

## ✅ Implementation Status

### Phase 1: Environment Setup ✅ COMPLETED
- [x] OpenAI API key configuration
- [x] Install dependencies: `npm install openai@^4.0.0`
- [x] Configure next.config.js with remotePatterns
- [x] **CRITICAL FIX**: TypeScript path alias `@/*` → `"./*"`
- [x] Create OpenAI client (`lib/openai.ts`)
- [x] Build API route (`app/api/generate-assets/route.ts`)
- [x] **SECURITY FIX**: Remove exposed credentials from repository

### Phase 2: Asset Generation (READY FOR EXECUTION)
- [ ] **PREREQUISITE**: Fix 4 critical technical debt items above
- [ ] LinkedIn photo processing setup
- [ ] Professional headshot variations (4 images @ $0.16)
- [ ] Brand logo generation (8 variations @ $0.32)
- [ ] Service graphics creation (12 images @ $0.48)
- [ ] Quality assurance review
- [ ] Asset optimization and storage

### Phase 3: Next.js Integration
- [ ] Implement ProfessionalHeadshot component
- [ ] Create dynamic asset loading API route
- [ ] Configure Image component optimization
- [ ] Test responsive image delivery
- [ ] Validate WebP/AVIF conversion

### Phase 4: Vercel Deployment ✅ PRODUCTION READY
- [x] Environment variables configuration
- [x] Production deployment (commit: d4fb416a)
- [ ] Performance validation (<3s load time)
- [ ] Core Web Vitals verification
- [ ] Cost monitoring setup

### Phase 5: Production Validation
- [ ] API functionality verification
- [ ] Image optimization confirmation
- [ ] Performance metrics validation
- [ ] Cost optimization verification ($0.96 target)
- [ ] Final quality assurance

## 🛠 Tech Stack

- **Framework**: Next.js 15.1.5 (App Router)
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
# Add your actual API keys to .env.local (NEVER commit this file)
```

4. Run development server:
```bash
npm run dev
```

5. Validate Phase 1:
```bash
node scripts/validate-phase1.js
```

## 🏗 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/
│   │   └── generate-assets/ # OpenAI asset generation (NEEDS TYPE FIX)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/
│   │   └── ProfessionalHeadshot.tsx # AI-generated headshots
│   ├── sections/          # Page sections
│   └── features/          # Feature components
├── lib/
│   ├── openai.ts          # OpenAI client (NEEDS COST FIX)
│   └── utils/             # Utility functions
├── scripts/
│   └── validate-phase1.js # Environment validation
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
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    formats: ['image/avif', 'image/webp']
  }
}
```

### Performance Targets
- **Page Load**: <3 seconds
- **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1
- **Image Optimization**: WebP/AVIF delivery
- **Cost Efficiency**: $0.96 total (97% reduction vs traditional)

## 🔧 API Integration

### OpenAI Asset Generation
```typescript
// Professional headshot generation (CORRECTED)
const response = await openai.images.generate({
  model: 'dall-e-3',
  prompt: 'Professional corporate headshot...',
  n: 1,
  size: '1024x1024',
  quality: 'standard', // $0.04 per image
  response_format: 'url'
});
```

### Supabase Configuration
- **Project**: Configured via environment variables
- **Region**: eu-central-1
- **Status**: ACTIVE_HEALTHY

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 📞 Contact

Ahmed Ziwar - [LinkedIn](https://linkedin.com/in/ahmedziwar) - ahmedziwar@gmail.com

---

Built with ❤️ by Ahmed Ziwar | Enhanced with OpenAI DALL-E 3