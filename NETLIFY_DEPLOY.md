# Deploy LokaninFilms to Netlify

## ✅ Quick Deploy (2 minutes)

### Option 1: Drag & Drop (Easiest - No GitHub needed)

1. **Go to:** https://app.netlify.com/drop
2. **Drag and drop** the entire `director-portfolio` folder
3. **Wait** ~2 minutes for deployment
4. **Done!** Your site is live at `your-site.netlify.app`

---

### Option 2: GitHub + Netlify (Recommended - Easier updates)

#### Step 1: Upload to GitHub
```bash
# Create a new repository on GitHub.com first
# Name it: director-portfolio
# Don't initialize with README

# Then in your terminal:
cd /home/user/director-portfolio
git init
git add .
git commit -m "Initial LokaninFilms portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/director-portfolio.git
git push -u origin main
```

#### Step 2: Connect to Netlify
1. **Go to:** https://app.netlify.com
2. **Sign up** (free - use GitHub account for easier auth)
3. **Click:** "New site from Git"
4. **Select:** GitHub
5. **Choose:** `director-portfolio` repository
6. **Leave settings as default** (build command and publish dir are pre-configured)
7. **Click:** "Deploy site"
8. **Wait** ~3 minutes
9. **Done!** Your site is live

---

### Option 3: Netlify CLI (For developers)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Or with Bun
bun install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
cd /home/user/director-portfolio
netlify deploy --prod

# Follow the prompts and confirm
```

---

## 📋 What's Configured

Your `netlify.toml` file is already set up with:
- ✅ Build command: `bun run build`
- ✅ Publish directory: `dist`
- ✅ SPA routing (all routes serve index.html)
- ✅ Production environment variables

---

## 🎯 Custom Domain Setup

After deployment:

1. **Buy a domain** (GoDaddy, Namecheap, Hover, etc.)
   - Suggested: `lokaninfilms.com`

2. **In Netlify dashboard:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `lokaninfilms.com`)
   - Netlify will show you DNS settings

3. **In your domain registrar:**
   - Add the nameservers Netlify provides
   - OR add the CNAME records Netlify shows
   - Wait 24-48 hours for DNS propagation

4. **Enable SSL** (automatic with Netlify)

---

## 📊 Post-Deployment

**Check your site:**
- https://your-site.netlify.app
- Or your custom domain once DNS updates

**Monitor performance:**
- Netlify Dashboard → Analytics
- Check build logs if issues occur

**Update your contact:**
```
Website: https://your-site.netlify.app
```

---

## 🚨 Troubleshooting

**"Page not found" errors**
→ Already configured in netlify.toml ✓

**Build fails**
→ Check "Deploys" tab in Netlify dashboard for error logs

**Images not loading**
→ Verify images are in `public/` folder

**Need to update website**
→ If using GitHub: Push changes to main branch, Netlify auto-deploys
→ If using drag-drop: Redeploy by uploading folder again

---

## 💡 Pro Tips

1. **Auto-deploy on every push:**
   - Connected to GitHub = auto-deploy on push to main
   - No manual redeployment needed!

2. **Preview changes before publishing:**
   - Netlify auto-creates preview links for pull requests

3. **Rollback if something breaks:**
   - Netlify Dashboard → Deploys → Redeploy previous version

4. **Environment variables (if needed later):**
   - Netlify Dashboard → Site settings → Build & deploy → Environment

---

## ✨ You're All Set!

Your LokaninFilms website is production-ready and configured for Netlify.

**Next step:** Choose deployment option above and go live! 🚀

Questions? Contact Netlify support: https://support.netlify.com
