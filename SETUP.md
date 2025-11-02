# Portfolio Setup Guide

Welcome to your new portfolio! Follow these steps to customize and deploy it.

## Quick Start

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Customization Steps

### Step 1: Update Personal Information

#### Hero Section (`components/Hero.tsx`)
- Update your name
- Modify the rotating titles array
- Edit the description

#### About Section (`components/About.tsx`)
- Write your bio
- Update experience years and project count
- Customize the highlights

### Step 2: Add Your Education

Edit `components/Education.tsx`:
- Add your degrees and institutions
- Include achievements
- List certifications

### Step 3: Showcase Projects

Edit `components/Projects.tsx`:
- Add your projects with descriptions
- Update project images (use Unsplash or upload to `/public/images/`)
- Add live demo and GitHub links
- Mark featured projects

### Step 4: List Your Skills

Edit `components/Skills.tsx`:
- Add your technical skills by category
- Adjust proficiency levels (0-100)
- Customize categories

### Step 5: Update Contact Information ✅ COMPLETED

Your contact information has been updated:
- ✅ Email: Abdullahmalik4641@gmail.com
- ✅ Phone: +92 306-4446501
- ✅ GitHub: https://github.com/ABDmalik6605
- ✅ LinkedIn: https://www.linkedin.com/in/abdullah-malik-7r3/

### Step 6: Add Your Resume

- Place your resume PDF in `/public` folder
- Name it: `Abdullah_Malik_Resume.pdf` (or update the link in Hero.tsx)

### Step 7: Update Metadata

Edit `app/layout.tsx`:
- Update the title and description
- Add relevant keywords

## Color Customization

Want to change the color scheme? Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your blue shades
  },
  accent: {
    // Your purple shades
  },
}
```

## Adding More Sections

To add a new section:

1. Create a new component in `/components`
2. Follow the existing section pattern (see `.cursor/rules/component-patterns.mdc`)
3. Import and add it to `app/page.tsx`
4. Add navigation link in `components/Navbar.tsx`

## Testing Before Deployment

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

Check:
- ✅ All sections display correctly
- ✅ Mobile responsiveness
- ✅ All links work
- ✅ Contact form functions
- ✅ No console errors
- ✅ Images load properly

## Deployment

### Deploy to Vercel (Easiest)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy"
5. Done! Your portfolio is live 🎉

### Custom Domain

In Vercel dashboard:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Features Overview

### ✨ Included Features
- Responsive navigation with mobile menu
- Animated hero section with floating elements
- About section with statistics
- Education timeline
- Project showcase with category filtering
- Skills with animated progress bars
- Contact form
- Social media integration
- Smooth scroll animations
- SEO optimized
- Dark theme

### 🎨 Design Elements
- Gradient text effects
- Hover animations
- Glass morphism cards
- Custom scrollbar
- Floating background elements
- Intersection observer animations

## Need Help?

Check the Cursor rules in `.cursor/rules/` for detailed guidelines on:
- Project structure
- Styling patterns
- Component patterns
- Content updates
- Deployment

## Tips for Best Results

1. **Images**: Use high-quality images (1200x800px recommended)
2. **Descriptions**: Keep them concise and impactful
3. **Projects**: Show your best 6-8 projects
4. **Skills**: Be honest about your proficiency levels
5. **Contact**: Test the form after deployment
6. **SEO**: Update meta tags with relevant keywords
7. **Performance**: Images are auto-optimized by Next.js

## Maintenance

Regular updates to keep your portfolio fresh:
- Add new projects as you complete them
- Update skills as you learn new technologies
- Add new certifications
- Keep contact information current
- Update resume periodically

---

**Good luck with your portfolio! 🚀**

If you encounter any issues, check the documentation or reach out for help.

