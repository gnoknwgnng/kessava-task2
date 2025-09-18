import nunjucks from 'nunjucks';
import fs from 'fs';
import path from 'path';

// Configure Nunjucks
const env = nunjucks.configure('src/templates', { 
  autoescape: true,
  noCache: true 
});

// Add global variables
env.addGlobal('siteName', 'Bootstrap Remix');
env.addGlobal('currentYear', new Date().getFullYear());
env.addGlobal('author', 'Bootstrap Examples Remix');

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy assets
if (fs.existsSync('src/assets')) {
  if (!fs.existsSync('dist/assets')) {
    fs.mkdirSync('dist/assets');
  }
  fs.copyFileSync('src/assets/style.css', 'dist/assets/style.css');
}

// Process HTML files
const pages = ['index.html', 'about.html', 'contact.html'];

pages.forEach(page => {
  try {
    const templatePath = `src/${page}`;
    const outputPath = `dist/${page}`;
    
    // Read the template file
    const templateContent = fs.readFileSync(templatePath, 'utf8');
    
    // Render with Nunjucks
    const rendered = env.renderString(templateContent);
    
    // Write to dist
    fs.writeFileSync(outputPath, rendered);
    
    console.log(`✓ Built ${page}`);
  } catch (error) {
    console.error(`✗ Error building ${page}:`, error.message);
  }
});

console.log('Build complete!');