# Quick Start Guide

Get your portfolio online in 5 minutes!

## ⚡ Fast Track Deployment

### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or `YOUR_USERNAME.github.io` for custom domain)
3. Make it **Public**
4. Click "Create repository"

### 2. Deploy to GitHub

Run these commands in your terminal:

```bash
# Navigate to your project directory
cd /home/nkle/Workspace/cv

# Make deploy script executable
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

Or manually:

```bash
# Add remote repository (replace with your actual URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages (left sidebar)
3. Source: Select "main" branch
4. Click "Save"

**Your site will be live in 2-5 minutes!**

URL: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## 🎨 Customize Your Portfolio

### Update Personal Information

Open `index.html` and update:

**Line ~70-85**: Partner 1 Information
```html
<h3>Your Name Here</h3>
<p class="role">Your Role</p>
<p class="description">Your description...</p>
```

**Line ~95-110**: Partner 2 Information
```html
<h3>Partner Name</h3>
<p class="role">Their Role</p>
<p class="description">Their description...</p>
```

**Line ~450-470**: Contact Information
```html
<p>your-email@example.com</p>
<p>+1 (555) 123-4567</p>
<p>Your City, Country</p>
```

### Update Social Links

Find and replace all `href="#"` in social links sections with your actual URLs:

```html
<!-- Example -->
<a href="https://linkedin.com/in/yourprofile">
<a href="https://github.com/yourusername">
<a href="https://twitter.com/yourhandle">
```

### Change Colors

Edit `styles.css` (Line ~8-20):

```css
:root {
    --primary-color: #6366f1;  /* Main color */
    --secondary-color: #8b5cf6; /* Secondary color */
    --accent-color: #ec4899;    /* Accent color */
}
```

### Add Your Logo

Replace "Portfolio" text in navigation (Line ~17 in index.html):

```html
<div class="nav-brand">
    <h2>Your Company Name</h2>
</div>
```

## 📸 Add Real Images

### Profile Photos

1. Create `images` folder in project root
2. Add your photos (e.g., `profile1.jpg`, `profile2.jpg`)
3. Update HTML (around line ~70 and ~95):

```html
<!-- Replace the profile-placeholder div with: -->
<img src="images/profile1.jpg" alt="Your Name" 
     style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover;">
```

### Portfolio Images

1. Add project images to `images` folder
2. Update portfolio cards (around line ~310-390):

```html
<div class="portfolio-image">
    <img src="images/project1.jpg" alt="Project Name" 
         style="width: 100%; height: 100%; object-fit: cover;">
    <div class="portfolio-overlay">
        <!-- content -->
    </div>
</div>
```

## 📧 Make Contact Form Work

### Option 1: Formspree (Recommended - Free & Easy)

1. Sign up at https://formspree.io
2. Create a form, get your form ID
3. Update form tag in `index.html` (line ~425):

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

4. Remove the JavaScript form handler from `script.js` (lines ~75-95)

### Option 2: EmailJS

1. Sign up at https://www.emailjs.com
2. Follow their setup guide
3. Add their SDK and update `script.js`

## 🔄 Update Your Site

After making changes:

```bash
# Save your files, then:
git add .
git commit -m "Update portfolio content"
git push

# Changes will be live in 1-2 minutes!
```

## ✅ Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Personal information updated
- [ ] Social links updated
- [ ] Contact information updated
- [ ] Colors customized (optional)
- [ ] Images added (optional)
- [ ] Contact form configured (optional)

## 🆘 Common Issues

**Site showing 404?**
- Wait 5-10 minutes after enabling GitHub Pages
- Check repository is public
- Verify GitHub Pages is enabled in settings

**Styles not loading?**
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check `.nojekyll` file exists
- Verify all files are in root directory

**Can't push to GitHub?**
- Check GitHub credentials
- Verify repository URL is correct
- Try: `git remote -v` to see current remote

## 📞 Need Help?

1. Check the full README.md for detailed instructions
2. Review GitHub Pages documentation
3. Check browser console for errors (F12)

## 🎉 You're Done!

Your professional portfolio is now live! Share your URL with potential clients and employers.

**Next Steps:**
- Share on LinkedIn
- Add to your resume
- Send to potential clients
- Keep it updated with new projects

---

Happy showcasing! 🚀

