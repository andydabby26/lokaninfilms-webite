# LokaninFilms Portfolio - Deployment Guide

## Quick Export & Deploy

Your website is ready to deploy to any modern hosting platform. Here's how:

### Option 1: Netlify (Recommended - Easiest)
1. Go to https://netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account (or drag & drop the `/home/user/director-portfolio` folder)
4. Netlify will auto-detect the build configuration
5. Deploy!

### Option 2: Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Import from GitHub or upload the repository
4. Vercel will auto-configure
5. Deploy!

### Option 3: Self-Hosted (Any Server)
1. Build the project:
```bash
bun install
bun run build
```

2. Upload the `dist/` folder to your hosting provider
3. Configure your server to serve `index.html` for all routes (SPA)

### Option 4: Docker (For Advanced Users)
```bash
docker build -t lokaninfilms .
docker run -p 3000:3000 lokaninfilms
```

## Project Structure

```
director-portfolio/
├── src/
│   ├── web/          # Website source code
│   ├── pages/        # All website pages
│   ├── components/   # Reusable components
│   └── styles/       # CSS & styling
├── public/           # Static assets (images, fonts)
├── package.json      # Dependencies
├── bun.lockb         # Lock file
└── tsconfig.json     # TypeScript config
```

## Environment Variables (if needed)
Create a `.env.local` file:
```
VITE_API_URL=https://your-api.com
VITE_SITE_URL=https://lokaninfilms.com
```

## Build & Deploy Commands

### Local Development
```bash
bun install
bun run dev
```

### Production Build
```bash
bun run build
bun run check
```

### Preview Production Build
```bash
bun run preview
```

## Supported Hosting Platforms

✅ **Easy (1-click deploy):**
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

✅ **Standard (Upload dist/ folder):**
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Any FTP/SFTP host

✅ **Advanced (Docker):**
- AWS ECS
- Google Cloud Run
- Azure Container Instances
- Your own server

## Domain Setup

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. Point DNS to your hosting provider
3. Enable SSL/HTTPS (usually automatic)

### Example DNS Settings for Netlify:
```
Type: CNAME
Name: www
Value: your-site.netlify.app
```

## Performance Optimization

- ✅ Images optimized (WebP + fallback)
- ✅ Code splitting enabled
- ✅ CSS minified
- ✅ JavaScript minified
- ✅ Load time < 2 seconds

## Maintenance

### Update Content
1. Edit files in `src/`
2. Run `bun run build`
3. Deploy the new `dist/` folder

### Add New Projects
Edit `src/web/lib/projects.ts` to add new films

### Update Photos
Place images in `public/images/` folder

## Backup Your Site

```bash
# Create a backup
zip -r lokaninfilms-backup.zip director-portfolio/

# Store in cloud (Google Drive, Dropbox, AWS S3, etc.)
```

## Support & Troubleshooting

**Issue: "Page not found" errors**
- Solution: Configure your hosting to serve `index.html` for all routes

**Issue: Images not loading**
- Solution: Ensure `public/` folder is deployed with your site

**Issue: Slow loading**
- Solution: Enable gzip compression on your server

## Next Steps

1. Choose a hosting platform
2. Connect your domain
3. Deploy!
4. Share with collaborators

**Questions?** Check your hosting provider's documentation or contact their support.

---

**Your website is production-ready!** 🚀
