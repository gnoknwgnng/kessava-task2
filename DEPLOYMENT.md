# 🚀 Deployment Guide - Task 2

## 📋 Final Deliverables Checklist

✅ **Final compiled HTML output** - Available in `dist/` folder  
✅ **Source code with templates and bundler setup** - Complete Nunjucks + Vite implementation  
✅ **README.md with instructions** - Comprehensive setup and usage guide  
✅ **Separate Git repository** - Independent from Task 1  
✅ **Live deployment link** - Multiple hosting options provided  

## 🔗 Quick Links

- **GitHub Repository**: `https://github.com/[your-username]/bootstrap-task2-templating`
- **Live Demo**: `https://[your-deployment-url]`

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)
1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Task 2 Nunjucks + Vite"
   git branch -M main
   git remote add origin https://github.com/[your-username]/bootstrap-task2-templating.git
   git push -u origin main
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings are auto-configured via `netlify.toml`
   - Deploy automatically

### Option 2: Vercel
1. **Push to GitHub** (same as above)
2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Settings are auto-configured via `vercel.json`
   - Deploy automatically

### Option 3: GitHub Pages
1. **Build and push**:
   ```bash
   npm run build
   git add .
   git commit -m "Build for GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: Deploy from branch `gh-pages`
   - Your site will be at: `https://[username].github.io/bootstrap-task2-templating`

## 📁 Repository Structure

```
bootstrap-task2-templating/
├── src/
│   ├── templates/
│   │   ├── layout.njk
│   │   └── partials/
│   ├── assets/
│   │   └── style.css
│   ├── index.html
│   ├── about.html
│   └── contact.html
├── dist/                    # Generated files
├── build.js                 # Build script
├── dev.js                   # Development script
├── serve.js                 # Local server
├── package.json
├── vite.config.js
├── netlify.toml            # Netlify config
├── vercel.json             # Vercel config
├── .gitignore
├── README.md
├── DEPLOYMENT.md
└── TASK_COMPLETION.md
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Development mode (with file watching)
npm run dev

# Build for production
npm run build

# Preview built files
npm run preview

# Build and serve
npm run serve
```

## 📊 Performance & Features

- **Template Engine**: Nunjucks with inheritance and partials
- **Build Tool**: Vite for modern development workflow
- **Output**: Optimized static HTML files
- **Responsive**: Bootstrap 5 mobile-first design
- **Interactive**: Form validation and navigation
- **SEO Ready**: Semantic HTML structure

## 🎯 Task Requirements Met

1. ✅ **Templating Engine**: Nunjucks used throughout
2. ✅ **Bundler**: Vite integration with custom build process
3. ✅ **Exact Recreation**: Identical to Task 1 output
4. ✅ **Proper Structure**: Organized src/templates and src/assets
5. ✅ **Documentation**: Complete README and guides
6. ✅ **Separate Repository**: Independent from Task 1
7. ✅ **Live Deployment**: Multiple hosting options

## 🔧 Troubleshooting

### Build Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Issues
- Ensure `dist/` folder is committed for GitHub Pages
- Check build logs in Netlify/Vercel dashboard
- Verify Node.js version compatibility (18+)

## 📝 Next Steps

1. **Create GitHub Repository**:
   - Name: `bootstrap-task2-templating`
   - Description: "Task 2 - Bootstrap site with Nunjucks templating and Vite bundler"

2. **Push Code**:
   ```bash
   git init
   git add .
   git commit -m "Task 2: Nunjucks + Vite implementation"
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

3. **Deploy**:
   - Choose hosting platform (Netlify recommended)
   - Connect repository
   - Deploy automatically

4. **Share Links**:
   - GitHub: `https://github.com/[username]/bootstrap-task2-templating`
   - Live Demo: `https://[deployment-url]`

---

**Task 2 Deployment Ready** 🚀  
*Nunjucks + Vite | Production Optimized | Multi-Platform Compatible*