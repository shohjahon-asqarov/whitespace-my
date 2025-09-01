# Whitepace - SaaS Landing Page

A modern, professional SaaS landing page built with Next.js 15, TypeScript, and Tailwind CSS. This project provides a solid foundation for creating beautiful, responsive landing pages with a well-organized component structure.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS v4
- **Professional Design**: Clean, modern UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Component-Based**: Reusable components with TypeScript interfaces
- **Performance Optimized**: Fast loading with Next.js optimizations
- **Accessible**: WCAG compliant components and semantic HTML
- **Customizable**: Easy to modify colors, fonts, and styling

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Basic UI components
│   │   ├── Button.tsx    # Button component with variants
│   │   ├── Card.tsx      # Card component
│   │   └── Container.tsx # Layout container
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Site footer
│   └── sections/         # Page sections
│       └── Hero.tsx      # Hero section component
├── lib/                  # Utility libraries
│   └── constants.ts      # Site configuration and data
├── types/                # TypeScript type definitions
│   └── index.ts          # Component and data types
├── utils/                # Utility functions
│   └── cn.ts            # Class name utility
├── hooks/                # Custom React hooks
├── styles/               # Additional styles
└── assets/               # Static assets
    ├── images/           # Image files
    └── icons/            # Icon files
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#667eea to #764ba2)
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Orange for highlights and CTAs
- **Success**: Green for positive states
- **Warning**: Yellow for warnings
- **Error**: Red for errors

### Typography
- **Sans**: Inter (body text)
- **Display**: Poppins (headings)
- **Mono**: JetBrains Mono (code)

### Spacing
- Consistent spacing scale using Tailwind's spacing system
- Responsive breakpoints: sm, md, lg, xl, 2xl

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd whitespace
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Component Usage

### Button Component
```tsx
import Button from '@/components/ui/Button'

// Primary button
<Button>Get Started</Button>

// Secondary button with link
<Button variant="secondary" href="/pricing">
  View Pricing
</Button>

// Large outline button
<Button variant="outline" size="lg">
  Learn More
</Button>
```

### Card Component
```tsx
import Card from '@/components/ui/Card'

<Card padding="lg" shadow="large">
  <h3>Feature Title</h3>
  <p>Feature description...</p>
</Card>
```

### Container Component
```tsx
import Container from '@/components/ui/Container'

<Container maxWidth="xl">
  <h1>Page Content</h1>
</Container>
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    900: '#0c4a6e',
  },
  // ... other colors
}
```

### Typography
Update font families in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Poppins', 'system-ui', 'sans-serif'],
}
```

### Components
All components are built with TypeScript interfaces for easy customization. Check the `src/types/index.ts` file for available props.

## 📱 Responsive Design

The project uses a mobile-first approach with responsive breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

- **Image Optimization**: Next.js Image component for optimized images
- **Code Splitting**: Automatic code splitting with Next.js
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 🔧 Development

### Adding New Components

1. Create component file in appropriate directory
2. Add TypeScript interface in `src/types/index.ts`
3. Export component from index file
4. Add to Tailwind content paths if needed

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Follow the design system colors and spacing
- Use the `cn()` utility for conditional classes
- Keep components responsive and accessible

### Code Quality

- Use TypeScript for all components
- Follow ESLint rules
- Write meaningful component and prop names
- Add JSDoc comments for complex components

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions, please open an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
