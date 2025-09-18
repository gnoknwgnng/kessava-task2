@echo off
REM Task 2 - Git Repository Initialization Script (Windows)
echo 🚀 Initializing Task 2 Git Repository...

REM Initialize git repository
git init

REM Add all files
git add .

REM Initial commit
git commit -m "Initial commit: Task 2 - Bootstrap with Nunjucks templating and Vite bundler" -m "✅ Templating Engine: Nunjucks with inheritance and partials" -m "✅ Bundler: Vite with custom build process" -m "✅ Exact recreation of Task 1 Bootstrap design" -m "✅ Proper folder structure (src/templates/, src/assets/, dist/)" -m "✅ Complete documentation and deployment configs" -m "✅ Production-ready build system"

REM Set main branch
git branch -M main

echo ✅ Git repository initialized!
echo.
echo 📋 Next steps:
echo 1. Create repository on GitHub: 'bootstrap-task2-templating'
echo 2. Add remote: git remote add origin https://github.com/[username]/bootstrap-task2-templating.git
echo 3. Push: git push -u origin main
echo 4. Deploy to Netlify/Vercel using the repository
echo.
echo 🔗 Repository should be separate from Task 1 as required!
pause