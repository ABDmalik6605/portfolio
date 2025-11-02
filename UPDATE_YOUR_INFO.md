# How to Update Your Portfolio with Personal Information

This guide will help you customize the portfolio with your actual information from your CV.

## 📝 Step-by-Step Update Guide

### 1. Education Section (`components/Education.tsx`)

Update lines 6-30 with your actual education:

```typescript
const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'YOUR UNIVERSITY NAME',  // Update this
    location: 'YOUR CITY, Pakistan',      // Update this
    period: '2021 - Present',              // Update dates
    description: 'YOUR DESCRIPTION',       // Customize
    achievements: [
      'YOUR ACHIEVEMENT 1',
      'YOUR ACHIEVEMENT 2',
      'YOUR ACHIEVEMENT 3',
    ],
  },
  // ... update second education entry similarly
]
```

### 2. Experience/Internships Section (`components/Experience.tsx`)

Update lines 6-49 with your actual internship details:

```typescript
const experiences = [
  {
    title: 'Full Stack Development Intern',
    company: 'ACTUAL COMPANY NAME',        // Update
    location: 'CITY, Pakistan',            // Update
    period: 'Month Year - Month Year',     // Update with actual dates
    description: 'YOUR DESCRIPTION',       // Customize
    responsibilities: [
      'WHAT YOU DID 1',
      'WHAT YOU DID 2',
      'WHAT YOU DID 3',
      'WHAT YOU DID 4',
      'WHAT YOU DID 5',
    ],
    technologies: ['Tech1', 'Tech2', ...], // Update with actual tech
  },
  // ... update second internship similarly
]
```

### 3. Projects Section (`components/Projects.tsx`)

Update lines 8-82 with your actual projects:

```typescript
const projects = [
  {
    title: 'YOUR PROJECT NAME',
    category: 'Full Stack | Frontend | Backend | Mobile',
    description: 'PROJECT DESCRIPTION',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    image: 'https://images.unsplash.com/photo-...', // or /images/project1.jpg
    liveUrl: 'YOUR LIVE DEMO URL',
    githubUrl: 'YOUR GITHUB REPO URL',
    featured: true, // Set to true for best projects
  },
  // Add 5-8 of your best projects
]
```

### 4. Skills Section (`components/Skills.tsx`)

The skills are already updated for an undergraduate with Full Stack and Android experience. 
Adjust the proficiency levels (0-100) based on your comfort level:

- 90-100: Expert, very comfortable
- 75-89: Proficient, good working knowledge
- 60-74: Intermediate, can work with guidance
- 40-59: Beginner, learning

### 5. Contact Information

#### Update in `components/Contact.tsx` (lines 8-24):
```typescript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',     // Update
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 XXX XXXXXXX',            // Update
    href: 'tel:+92XXXXXXXXX',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Your City, Pakistan',        // Update
    href: '#',
  },
]
```

#### Update in `components/Footer.tsx` (lines 6-11):
```typescript
const socialLinks = [
  { icon: Github, href: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/YOUR_USERNAME', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/YOUR_USERNAME', label: 'Twitter' },
  { icon: Mail, href: 'mailto:YOUR_EMAIL', label: 'Email' },
]
```

### 6. Resume PDF

1. Rename your CV to: `Abdullah_Malik_Resume.pdf`
2. Place it in the `/public` folder
3. Users can then download it from the Hero section

### 7. Metadata (`app/layout.tsx` lines 11-14)

```typescript
export const metadata: Metadata = {
  title: 'Abdullah Malik - Portfolio',
  description: 'Computer Science Undergraduate | Full Stack & Android Developer',
  keywords: ['Abdullah Malik', 'Portfolio', 'Full Stack Developer', 'Android Developer', 'Computer Science'],
}
```

## 🎯 Quick Checklist

- [ ] Update university name and dates in Education
- [ ] Update both internship details in Experience
- [ ] Add your actual projects (at least 6)
- [ ] Adjust skill proficiency levels
- [ ] Update email address (3 places: Contact, Footer, Hero download link)
- [ ] Update phone number
- [ ] Update city/location
- [ ] Update GitHub username (2 places: Contact social links, Footer)
- [ ] Update LinkedIn username
- [ ] Add resume PDF to /public folder
- [ ] Replace project images with your own (optional)

## 📸 Adding Project Images

**Option 1: Use Unsplash (Current)**
Keep the existing Unsplash URLs or find new ones at https://unsplash.com

**Option 2: Use Your Own Images**
1. Create `/public/images/` folder
2. Add your images: `project1.jpg`, `project2.jpg`, etc.
3. Update image URLs in Projects.tsx: `image: '/images/project1.jpg'`

## 🚀 After Updating

1. Save all files
2. Check your dev server (should auto-reload)
3. Test all sections
4. Verify all links work
5. Check mobile responsiveness
6. Ready to deploy!

---

**Need help?** Check the main README.md or SETUP.md files for more detailed instructions.

