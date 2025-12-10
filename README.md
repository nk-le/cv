# Portfolio Website

A modern, responsive portfolio website showcasing professional competencies and services.

## 🌟 Features

- **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Beautiful gradients, smooth animations, and interactive elements
- **Sections Include:**
  - Hero section with animated background
  - About section for introducing partners
  - Skills/Competencies showcase
  - Services offered
  - Portfolio/Projects gallery
  - Contact form with social links

## 🚀 Deployment to GitHub Pages

Follow these steps to deploy your portfolio to GitHub Pages:

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `portfolio` or `your-username.github.io`)
4. Make it **Public**
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Push Your Code to GitHub

Run these commands in your terminal from this directory:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO with your actual GitHub username and repository name
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (gear icon)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes for deployment

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

Or if you named it `YOUR_USERNAME.github.io`, it will be at: `https://YOUR_USERNAME.github.io/`

## 📝 Customization

### Update Your Information

1. **Personal Information**: Edit `index.html`
   - Update partner names in the About section
   - Change roles and descriptions
   - Update contact information (email, phone, location)

2. **Skills & Services**: Modify the skills and services sections in `index.html`
   - Add or remove skill cards
   - Update technology tags
   - Modify service offerings

3. **Portfolio Projects**: Update the portfolio section
   - Replace placeholder projects with your actual work
   - Add real project images (optional)
   - Update project descriptions and technologies

4. **Social Links**: Update social media links
   - LinkedIn, GitHub, Twitter, etc.
   - Replace `#` with your actual profile URLs

5. **Colors & Styling**: Edit `styles.css`
   - Modify CSS variables in `:root` section
   - Change colors, fonts, and animations
   - Customize responsive breakpoints

### Adding Real Images

To add real images for profile photos and portfolio items:

1. Create an `images` folder in your project
2. Add your images to this folder
3. Update the HTML to reference your images:

```html
<!-- Replace profile placeholder -->
<div class="about-image">
    <img src="images/profile1.jpg" alt="Partner 1">
</div>

<!-- Replace portfolio placeholder -->
<div class="portfolio-image">
    <img src="images/project1.jpg" alt="Project Name">
    <div class="portfolio-overlay">
        <!-- content -->
    </div>
</div>
```

## 🛠️ Local Development

To view your website locally:

1. Simply open `index.html` in your web browser
2. Or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📧 Contact Form Setup

The contact form currently shows an alert message. To make it functional:

### Option 1: Use Formspree (Easy & Free)

1. Go to [Formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form and get your form endpoint
4. Update your form in `index.html`:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- existing fields -->
</form>
```

### Option 2: Use EmailJS

1. Sign up at [EmailJS.com](https://www.emailjs.com)
2. Follow their integration guide
3. Update `script.js` with EmailJS code

### Option 3: Build Your Own Backend

Create a backend API using Node.js, Python Flask, or any backend framework to handle form submissions.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Technologies Used

- HTML5
- CSS3 (with CSS Grid & Flexbox)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 💡 Tips

- **SEO**: Add meta tags for better search engine optimization
- **Analytics**: Add Google Analytics to track visitors
- **Performance**: Optimize images and add lazy loading
- **Accessibility**: Test with screen readers and keyboard navigation
- **SSL**: GitHub Pages provides free SSL (HTTPS)

## 🆘 Troubleshooting

### Site not showing up after deployment?

- Check that GitHub Pages is enabled in repository settings
- Ensure your repository is public
- Wait 5-10 minutes for initial deployment
- Check for typos in your GitHub Pages URL

### Styles not loading?

- Make sure all files (`index.html`, `styles.css`, `script.js`) are in the root directory
- Check that the `.nojekyll` file exists (prevents Jekyll processing)
- Clear browser cache and hard refresh (Ctrl+F5 or Cmd+Shift+R)

### Contact form not working?

- The default form shows an alert - integrate with Formspree or EmailJS for real functionality
- Check browser console for JavaScript errors

## 📞 Support

For issues or questions, feel free to open an issue in the GitHub repository.

---

**Made with ❤️ for showcasing your professional portfolio**

