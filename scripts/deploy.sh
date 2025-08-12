#!/bin/bash

# Deploy script for GitHub Pages
# This script builds the static site and prepares it for deployment

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf out/

# Build the static site
echo "🔨 Building static site..."
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
    echo "❌ Build failed! 'out' directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Static files generated in 'out/' directory"
echo ""
echo "🌐 To deploy to GitHub Pages:"
echo "   1. Push your code to GitHub"
echo "   2. The GitHub Actions workflow will automatically deploy"
echo "   3. Or manually upload the 'out/' directory contents to your web server"
echo ""
echo "🧪 To test locally:"
echo "   npx serve out"
echo "   # Then visit http://localhost:3000"
