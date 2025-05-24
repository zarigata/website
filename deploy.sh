#!/bin/bash

# CODEX: Deployment Script for CatchyCompany Website
# This script automates the deployment process to GitHub Pages

echo "🚀 Starting deployment process..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git and try again."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js and try again."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm and try again."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Build the project
echo "🏗️  Building the project..."
npm run build

# Update sitemap
echo "🗺️  Updating sitemap..."
npm run update-sitemap

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment completed successfully!"
echo "🌐 Your site should be live at: https://catchycompany.sa"
echo "⏳ Note: It may take a few minutes for changes to be visible."
