@echo off
REM CODEX: Windows Deployment Script for CatchyCompany Website

echo 🚀 Starting deployment process...

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js and try again.
    pause
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm is not installed. Please install npm and try again.
    pause
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm install --legacy-peer-deps
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to install dependencies.
    pause
    exit /b 1
)

REM Build the project
echo 🏗️  Building the project...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Build failed.
    pause
    exit /b 1
)

REM Update sitemap
echo 🗺️  Updating sitemap...
call npm run update-sitemap
if %ERRORLEVEL% NEQ 0 (
    echo ⚠️  Warning: Failed to update sitemap. Continuing...
)

REM Deploy to GitHub Pages
echo 🚀 Deploying to GitHub Pages...
call npm run deploy
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Deployment failed.
    pause
    exit /b 1
)

echo ✅ Deployment completed successfully!
echo 🌐 Your site should be live at: https://catchycompany.sa
echo ⏳ Note: It may take a few minutes for changes to be visible.
pause
