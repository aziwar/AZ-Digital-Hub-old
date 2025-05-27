# Development Guide - AZ Digital Hub

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- Git
- VS Code (recommended)

### Initial Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/AZ-Digital-Hub.git
cd AZ-Digital-Hub

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

## 📁 Project Architecture

### Directory Structure
```
src/
├── app/                    # Next.js 14 App Router
│   ├── (marketing)/       # Marketing pages group
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── sections/          # Page sections (Hero, About, etc.)
│   ├── ui/                # Reusable UI components
│   ├── layouts/           # Layout components
│   └── features/          # Feature-specific components
├── lib/
│   ├── api/               # API helper functions
│   ├── hooks/             # Custom React hooks
│   └── utils/             # Utility functions
├── styles/                # Global styles
└── types/                 # TypeScript type definitions
```

### Key Technologies
- **Next.js 14**: App Router, Server Components, API Routes
- **TypeScript**: Type safety and better DX
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Animations and interactions
- **Three.js**: 3D graphics and visualizations
- **React Hook Form + Zod**: Form handling and validation

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary: hsl(270, 80%, 60%);        /* Purple */
--primary-dark: hsl(270, 85%, 45%);
--primary-light: hsl(270, 75%, 75%);

/* Accent Colors */
--accent-cyan: hsl(180, 80%, 50%);
--accent-purple: hsl(290, 80%, 60%);

/* Neutral Colors */
--slate-50 through --slate-950        /* Slate scale */
```

### Typography
```css
/* Font Sizes - Fluid Typography */
--font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--font-size-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
/* ... etc */
```

### Spacing System
```css
/* Fluid Spacing */
--space-xs: clamp(0.5rem, 0.45rem + 0.25vw, 0.75rem);
--space-sm: clamp(1rem, 0.9rem + 0.5vw, 1.5rem);
/* ... etc */
```

## 🧩 Component Guidelines

### Creating New Components

1. **Server Components (Default)**
```tsx
// components/sections/NewSection.tsx
export default async function NewSection() {
  const data = await getData() // Fetch on server
  
  return (
    <section>
      <ClientInteraction data={data} />
    </section>
  )
}
```

2. **Client Components**
```tsx
// components/ui/InteractiveCard.tsx
'use client'

import { motion } from 'framer-motion'

export function InteractiveCard() {
  const [state, setState] = useState()
  
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      {/* Interactive content */}
    </motion.div>
  )
}
```

### Animation Patterns

1. **Scroll Animations**
```tsx
const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.1
})

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
```

2. **Stagger Children**
```tsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

## 🔧 Performance Best Practices

### 1. Image Optimization
```tsx
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority // For above-fold images
  placeholder="blur"
  blurDataURL={dataUrl}
/>
```

### 2. Code Splitting
```tsx
const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  { 
    loading: () => <Skeleton />,
    ssr: false // If needed
  }
)
```

### 3. Font Optimization
```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})
```

## 📝 Content Management

### Adding New Projects
1. Update `lib/api/portfolio.ts`
2. Add project images to `public/portfolio/`
3. Follow the existing data structure

### Adding Blog Posts (Future)
1. Create MDX file in `content/blog/`
2. Add frontmatter metadata
3. Write content with components

## 🧪 Testing

### Running Tests
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Type checking
npm run type-check
```

### Performance Testing
- Use Lighthouse CI
- Monitor Core Web Vitals
- Test on real devices

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Automatic deployment
git push origin main

# Manual deployment
vercel --prod
```

### Environment Variables
Set in Vercel dashboard:
- `NEXT_PUBLIC_GA_ID`
- `EMAIL_SERVICE_API_KEY`
- etc.

## 🐛 Debugging

### Common Issues

1. **Hydration Errors**
   - Check for conditional rendering
   - Ensure consistent server/client state
   - Use `suppressHydrationWarning` carefully

2. **Build Errors**
   - Run `npm run type-check`
   - Check for missing dependencies
   - Verify environment variables

3. **Performance Issues**
   - Use React DevTools Profiler
   - Check bundle size with `@next/bundle-analyzer`
   - Optimize images and fonts

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Three.js Documentation](https://threejs.org/docs/)

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open Pull Request

### Code Style
- Use TypeScript strict mode
- Follow ESLint rules
- Format with Prettier
- Write meaningful commit messages

### PR Guidelines
- Include description of changes
- Add screenshots for UI changes
- Update documentation if needed
- Ensure all tests pass
