# CODEX: PowerShell Deployment Script for CatchyCompany Website
# This script automates the deployment process to GitHub Pages

Write-Host "🚀 Starting deployment process..." -ForegroundColor Cyan

# Check if Node.js is installed
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js is not installed. Please install Node.js and try again." -ForegroundColor Red
    exit 1
}

# Check if npm is installed
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ npm is not installed. Please install npm and try again." -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Cyan
npm install --legacy-peer-deps
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies." -ForegroundColor Red
    exit 1
}

# Build the project
Write-Host "🏗️  Building the project..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed." -ForegroundColor Red
    exit 1
}

# Update sitemap
Write-Host "🗺️  Updating sitemap..." -ForegroundColor Cyan
try {
    npm run update-sitemap
    if ($LASTEXITCODE -ne 0) {
        Write-Host "⚠️  Warning: Failed to update sitemap. Continuing..." -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠️  Warning: Failed to update sitemap. Continuing..." -ForegroundColor Yellow
}

# Deploy to GitHub Pages
Write-Host "🚀 Deploying to GitHub Pages..." -ForegroundColor Cyan
npm run deploy
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Deployment failed." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Deployment completed successfully!" -ForegroundColor Green
Write-Host "🌐 Your site should be live at: https://catchycompany.sa" -ForegroundColor Cyan
Write-Host "⏳ Note: It may take a few minutes for changes to be visible." -ForegroundColor Yellow
