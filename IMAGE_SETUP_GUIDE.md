# Image Setup Guide for Liepaja Website

## Overview
All placeholder images have been replaced with references to local images. You need to add your real Liepaja images to the `public/images/` folder.

## Step-by-Step Instructions

### 1. Create the Images Folder
The folder structure is already set up at:
```
liepaja-website/public/images/
```

### 2. Add Your Images
Place your Liepaja images in the `public/images/` folder with these exact filenames:

#### Main Website Images
- **hero-liepaja.jpg** - Main hero image (recommended: Beach with "LIEPĀJA" letters at sunset)
- **city-view-1.jpg** - City view for About page (recommended: Aerial port city view)
- **city-view-2.jpg** - Architecture view for About page (recommended: Cathedral or old street)
- **city-view-3.jpg** - Nature/beach view for About page (recommended: Coastal boardwalk)
- **architecture-1.jpg** - Architecture for Home page (recommended: Modern buildings or old streets)
- **news-1.jpg** - News image 1 (Community/Events)
- **news-2.jpg** - News image 2 (Festivals/Events)
- **news-3.jpg** - News image 3 (Infrastructure/City)
- **news-4.jpg** - News image 4 (Parks/Nature)
- **news-5.jpg** - News image 5 (Services/Buildings)
- **news-6.jpg** - News image 6 (Environment/Sustainability)

#### Store Product Images
- **product-tshirt.jpg** - Liepāja T-shirt
- **product-tshirt-2.jpg** - Liepāja T-shirt (second view)
- **product-poster.jpg** - Liepāja Skyline Poster
- **product-jewelry.jpg** - Amber Jewelry Set
- **product-towel.jpg** - Beach Towel
- **product-wooden.jpg** - Handmade Wooden Crafts
- **product-postcards.jpg** - Postcards Set
- **product-tea.jpg** - Herbal Tea Box
- **product-book.jpg** - History Book
- **product-hoodie.jpg** - Liepāja Hoodie
- **product-bag.jpg** - Beach Bag
- **product-mug.jpg** - Ceramic Mug
- **product-scarf.jpg** - Handwoven Scarf

## Image Recommendations Based on Your Photos

Based on the images you shared, here are suggestions:

1. **hero-liepaja.jpg** → Beach scene with "LIEPĀJA" letters at sunset
2. **city-view-1.jpg** → Aerial port city view (showing the harbor and city)
3. **city-view-2.jpg** → Orthodox cathedral or old street scene
4. **city-view-3.jpg** → Coastal boardwalk scene
5. **architecture-1.jpg** → Modern building (Great Amber Concert Hall) or old street
6. **news images** → Use various city scenes: tram, buildings, streets, parks
7. **product images** → Use relevant Liepaja landmarks and scenes for each product

## Image Specifications

### Recommended Sizes:
- **Hero images**: 1920x1080px or larger (16:9 aspect ratio)
- **About/News images**: 800x600px or larger (4:3 aspect ratio)
- **Product images**: 800x800px (1:1 square aspect ratio)

### File Formats:
- Use JPG for photographs
- Use PNG for images with transparency (if needed)
- Optimize images for web (reduce file size while maintaining quality)

## Quick Setup

1. Copy your Liepaja images to `liepaja-website/public/images/`
2. Rename them to match the filenames listed above
3. Restart your development server (`npm start`)
4. The images will automatically appear on the website

## Testing

After adding images:
1. Check the homepage hero section
2. Visit the About page to see city views
3. Check the News page for news images
4. Visit the Store to see product images

## Notes

- All image paths are relative to the `public` folder
- Images are referenced as `/images/filename.jpg` in the code
- If an image is missing, the browser will show a broken image icon
- You can add more images later and update the filenames in the code

## Troubleshooting

**Images not showing?**
- Check that files are in `public/images/` folder (not `src/images/`)
- Verify filenames match exactly (case-sensitive)
- Check file extensions (.jpg, .jpeg, .png)
- Clear browser cache and refresh
- Restart the development server

**Images too large/slow loading?**
- Compress images using tools like TinyPNG or ImageOptim
- Resize images to recommended dimensions
- Use WebP format for better compression (requires code changes)

