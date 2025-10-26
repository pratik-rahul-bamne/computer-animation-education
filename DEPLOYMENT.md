# Deployment Guide

## Quick Deployment Options

### 1. Netlify (Recommended)
1. Zip all project files
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the zip file
4. Your site will be live instantly!

### 2. GitHub Pages
1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from branch" > "main"
5. Your site will be available at `username.github.io/repository-name`

### 3. Vercel
1. Create account at [vercel.com](https://vercel.com)
2. Click "New Project"
3. Upload project files or connect GitHub
4. Deploy automatically

### 4. Local Testing
- Use Live Server extension in VS Code
- Or run: `python -m http.server 8000`
- Open `http://localhost:8000`

## File Checklist Before Deployment
- [ ] index.html
- [ ] style.css  
- [ ] script.js
- [ ] assets/ folder (with images and videos)
- [ ] README.md

## Performance Tips
- Compress images before uploading
- Test on mobile devices
- Check loading speed
- Validate HTML/CSS
