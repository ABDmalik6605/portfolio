# How to Add Your Profile Picture

Follow these simple steps to add your profile photo to the About section.

## Step 1: Prepare Your Photo

1. **Choose a professional photo**
   - Clear face shot (headshot or professional photo)
   - Good lighting
   - Professional attire (optional but recommended)
   - Neutral or clean background

2. **Recommended specs:**
   - Format: JPG or PNG
   - Size: 500x500 pixels (or any square dimension)
   - File size: Under 500KB for fast loading
   - Name it: `profile.jpg` or `profile.png`

## Step 2: Add Photo to Project

1. Create the images folder (if it doesn't exist):
   ```
   /public/images/
   ```

2. Place your photo in that folder:
   ```
   /public/images/profile.jpg
   ```

## Step 3: Update the Component

Open `components/About.tsx` and find this section (around line 46):

### Current Code (with placeholder):
```tsx
{/* Replace this with your actual image */}
{/* <img 
  src="/images/profile.jpg" 
  alt="Abdullah Malik" 
  className="w-full h-full object-cover"
/> */}

{/* Temporary placeholder - Remove when you add your photo */}
<span className="text-6xl font-bold text-white">AM</span>
```

### Replace with (uncomment the img tag and remove the span):
```tsx
<img 
  src="/images/profile.jpg" 
  alt="Abdullah Malik" 
  className="w-full h-full object-cover"
/>
```

## Step 4: Save and Test

1. Save the file
2. Your dev server will auto-reload
3. Check http://localhost:3000 and scroll to the About section
4. You should see your photo with a gradient border!

## Alternative: Use an Online Image

If you have your photo hosted online (LinkedIn, etc.):

```tsx
<img 
  src="https://your-image-url.com/photo.jpg" 
  alt="Abdullah Malik" 
  className="w-full h-full object-cover"
/>
```

## Next.js Image Component (Optional - Better Performance)

For optimized loading, you can use Next.js Image:

1. Import at the top of `About.tsx`:
```tsx
import Image from 'next/image'
```

2. Replace the img tag:
```tsx
<Image
  src="/images/profile.jpg"
  alt="Abdullah Malik"
  width={192}
  height={192}
  className="w-full h-full object-cover"
  priority
/>
```

## Design Features

Your profile picture will have:
- ✨ Gradient border (blue to purple)
- 🎨 Hover zoom effect
- 📱 Responsive sizing
- 🌟 Professional appearance

## Tips for Best Results

1. **LinkedIn Photo**: You can download your LinkedIn profile photo
2. **Remove Background**: Use tools like remove.bg for clean backgrounds
3. **Square Crop**: Make sure your photo is square (1:1 ratio)
4. **Professional Look**: Smile, good posture, professional setting

---

**Need help?** If you're having trouble, just keep the "AM" placeholder until you get the perfect photo ready!

