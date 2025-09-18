# 📄 Internship Task 2 – Templating Engine + Bundler Implementation

## 🎯 Project Overview
This project recreates the Bootstrap 5 UI from Task 1 using modern web development tools: **Nunjucks templating engine** and **Vite bundler**. The implementation demonstrates professional templating practices and efficient build processes while maintaining the exact visual output from the original task.

## 🛠️ Technology Stack Choices

### Templating Engine: **Nunjucks**
- **Why Nunjucks?** Powerful templating with inheritance, includes, macros, and filters
- **Benefits:** Clean separation of content and presentation, reusable components, maintainable code structure
- **Features Used:** Template inheritance, partials/includes, variables, conditional rendering

### Bundler: **Vite**
- **Why Vite?** Lightning-fast development server, modern ES modules, optimized builds
- **Benefits:** Instant hot module replacement, efficient bundling, excellent developer experience
- **Features Used:** Static site generation, asset optimization, development server

## 📂 Project Structure
```
├── src/
│   ├── templates/
│   │   ├── layout.njk              # Base template with common structure
│   │   └── partials/
│   │       ├── navbar.njk          # Navigation component
│   │       ├── footer.njk          # Footer component
│   │       └── icons.njk           # SVG icon definitions
│   ├── assets/
│   │   └── style.css               # Custom CSS styles
│   ├── index.html                  # Home page template
│   ├── about.html                  # About/Services page template
│   └── contact.html                # Contact page template
├── dist/                           # Compiled output (generated)
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
└── README.md                       # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** package manager

### Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/[your-username]/bootstrap-task2-templating.git
   cd bootstrap-task2-templating
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Development mode** (with file watching)
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview built files**
   ```bash
   npm run preview
   ```

6. **Build and serve**
   ```bash
   npm run serve
   ```

## 🌐 Live Demo

- **GitHub Repository**: [https://github.com/[your-username]/bootstrap-task2-templating](https://github.com/[your-username]/bootstrap-task2-templating)
- **Live Website**: [https://[your-deployment-url]](https://[your-deployment-url])

> **Note**: Replace the placeholder URLs above with your actual repository and deployment links.

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production files |
| `npm run preview` | Preview production build locally |

## ✨ Template Features Implemented

### 🏗️ Template Architecture
- **Base Layout (`layout.njk`)**: Common HTML structure, head, navigation, footer
- **Page Templates**: Extend base layout with specific content
- **Partials**: Reusable components (navbar, footer, icons)
- **Variables**: Dynamic content injection (site name, year, page state)

### 🎨 Component System
- **Responsive Navigation**: Bootstrap navbar with active state management
- **SVG Icon System**: Centralized icon definitions with reusable symbols
- **Footer Component**: Consistent footer across all pages
- **Dynamic Content**: Template variables for maintainable content

### 📱 Pages Recreated
1. **Home Page** (`index.html`)
   - Hero section with call-to-action buttons
   - Featured components grid
   - Secondary hero with image placeholder

2. **About Page** (`about.html`)
   - Services and pricing section
   - Pricing cards with comparison table
   - Features showcase with icons

3. **Contact Page** (`contact.html`)
   - Comprehensive contact form with validation
   - Contact information sidebar
   - Form validation JavaScript

## 🔧 Technical Implementation

### Nunjucks Template Features
```njk
<!-- Template inheritance -->
{% extends "layout.njk" %}

<!-- Variables and conditionals -->
{% set page = "home" %}
{% if page == "home" %} active{% endif %}

<!-- Includes for reusable components -->
{% include "partials/navbar.njk" %}

<!-- Content blocks -->
{% block content %}
<!-- Page-specific content -->
{% endblock %}
```

### Vite Configuration Highlights
```javascript
// Multi-page application setup
rollupOptions: {
  input: {
    main: 'src/index.html',
    about: 'src/about.html',
    contact: 'src/contact.html'
  }
}

// Nunjucks integration
nunjucks({
  templatesDir: 'src/templates',
  variables: {
    siteName: 'Bootstrap Remix',
    currentYear: new Date().getFullYear()
  }
})
```

## 🎯 Task Requirements Fulfilled

✅ **Exact Visual Recreation**: Maintains identical styling, layout, and functionality from Task 1  
✅ **Templating Engine**: Nunjucks used throughout for all HTML generation  
✅ **Bundler Integration**: Vite handles build process and development workflow  
✅ **Proper Folder Structure**: Organized src/templates/ and src/assets/ directories  
✅ **Compiled Output**: Clean dist/ folder with optimized production files  
✅ **Documentation**: Comprehensive README with setup and usage instructions  

## 🚀 Deployment

This project is configured for easy deployment on multiple platforms:

### Netlify (Recommended)
```bash
# Push to GitHub first, then:
# 1. Go to netlify.com
# 2. "New site from Git"
# 3. Connect your repository
# 4. Deploy (auto-configured via netlify.toml)
```

### Vercel
```bash
# Push to GitHub first, then:
# 1. Go to vercel.com  
# 2. Import your repository
# 3. Deploy (auto-configured via vercel.json)
```

### GitHub Pages
```bash
npm run build
git add dist/
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
# Enable Pages in repository settings
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## 🔍 Development Benefits

### Template System Advantages
- **Maintainability**: Single source of truth for common elements
- **Consistency**: Uniform structure across all pages
- **Scalability**: Easy to add new pages using existing templates
- **Developer Experience**: Clean separation of concerns

### Build Process Benefits
- **Performance**: Optimized assets and minified output
- **Development Speed**: Hot reload and instant updates
- **Modern Workflow**: ES modules and modern JavaScript features
- **Asset Management**: Automatic optimization and bundling

## 📊 Performance Optimizations

- **CSS Optimization**: Minified and optimized stylesheets
- **Asset Bundling**: Efficient resource loading
- **Template Compilation**: Pre-compiled templates for faster rendering
- **Modern Build**: Leverages latest web standards and optimizations

## 🤝 Contributing

To extend this project:

1. **Add New Pages**: Create new `.html` files in `src/` extending `layout.njk`
2. **Create Components**: Add reusable partials in `src/templates/partials/`
3. **Modify Styles**: Update `src/assets/style.css` for custom styling
4. **Update Configuration**: Modify `vite.config.js` for build customization

## 📝 Task Completion Summary

This implementation successfully demonstrates:
- **Professional templating** with Nunjucks template engine
- **Modern build process** using Vite bundler
- **Component-based architecture** with reusable templates
- **Exact recreation** of original Bootstrap 5 design
- **Production-ready output** with optimized assets
- **Developer-friendly workflow** with hot reload and modern tooling

The project showcases how modern web development tools can enhance maintainability and developer experience while delivering identical end-user results.

---

**Built with ❤️ using Nunjucks templating engine and Vite bundler**