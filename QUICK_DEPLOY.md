# LokaninFilms - Quick Deployment Guide

## Export Your Website

Your complete website is ready to deploy anywhere. Here's everything you need:

### Files Included
- ✅ All source code (React, TypeScript, Vite)
- ✅ All images and assets
- ✅ Configuration files
- ✅ Build instructions
- ✅ Dependencies list

### Step 1: Get Your Files

**Option A: Download the entire folder**
```bash
# Copy the entire director-portfolio folder to your computer
# Location: /home/user/director-portfolio/
```

**Option B: Use Git (if you have GitHub)**
```bash
git clone your-repository-url
cd director-portfolio
```

### Step 2: Install Dependencies

```bash
# If you have Node.js/npm
npm install

# Or if you have Bun (faster)
bun install
```

### Step 3: Build for Production

```bash
# Build the website
npm run build

# Or with Bun
bun run build
```

This creates a `dist/` folder with your complete website ready to deploy.

### Step 4: Deploy to Your Server

#### Option A: Netlify (Easiest - Free)
1. Go to https://netlify.com
2. Sign up free
3. Drag & drop your `director-portfolio` folder
4. Done! Your site is live

#### Option B: Vercel (Easy - Free)
1. Go to https://vercel.com
2. Sign up free
3. Import your GitHub repo or upload folder
4. Done! Your site is live

#### Option C: Any Web Host (Upload dist/ folder)
1. Build the project: `npm run build`
2. Connect via FTP/SFTP to your host
3. Upload the `dist/` folder contents
4. Point your domain to the public folder
5. Done!

#### Option D: Your Own Server
```bash
# Install Bun on your server
curl https://bun.sh | bash

# Clone your repo
git clone your-repo-url
cd director-portfolio

# Install and build
bun install
bun run build

# Run production build
bun run preview
```

### File Structure to Upload

If uploading via FTP, upload only the contents of the `dist/` folder:

```
dist/
├── index.html
├── assets/
│   ├── images/
│   ├── fonts/
│   └── js/css files
└── ...
```

### Environment Variables (Optional)

Create `.env` file in root if needed:
```
VITE_SITE_URL=https://your-domain.com
VITE_API_URL=https://your-api.com
```

### Important Settings for Any Host

Make sure your host is configured for **Single Page Application (SPA)**:

**Configure to serve `index.html` for all routes:**

**Nginx:**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

**Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Custom Domain

1. Buy domain (GoDaddy, Namecheap, etc.)
2. Point DNS to your host:
   - Netlify: Add CNAME record
   - Vercel: Add CNAME record
   - Other: Follow host instructions
3. Enable SSL (usually automatic)

### Troubleshooting

**"Page not found" errors**
→ Configure your server for SPA routing (see above)

**Images not loading**
→ Make sure `public/` folder assets are deployed

**Site is slow**
→ Enable gzip compression on server
→ Use CDN for images

**Local photos not showing**
→ Photos are stored in browser localStorage
→ Each browser/device has separate photo storage

### Support

- Netlify Support: https://docs.netlify.com
- Vercel Support: https://vercel.com/docs
- Your host's documentation

---

**Your website is production-ready!** 🚀

Questions? Contact your hosting provider's support team.
