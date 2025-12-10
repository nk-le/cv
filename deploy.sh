#!/bin/bash

# Portfolio Website Deployment Script
# This script helps you deploy your portfolio to GitHub Pages

echo "🚀 Portfolio Deployment Helper"
echo "================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git repository not initialized!"
    echo "Run: git init"
    exit 1
fi

# Check if remote origin exists
if ! git remote | grep -q "origin"; then
    echo "⚠️  No remote repository configured!"
    echo ""
    echo "Please follow these steps:"
    echo "1. Create a new repository on GitHub (https://github.com/new)"
    echo "2. Run this command with your repository URL:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
    echo ""
    read -p "Do you want to add the remote now? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter your GitHub repository URL: " repo_url
        git remote add origin "$repo_url"
        echo "✅ Remote added successfully!"
    else
        echo "Please add the remote manually and run this script again."
        exit 1
    fi
fi

echo ""
echo "Current remote repository:"
git remote -v | head -n 1
echo ""

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "📝 You have uncommitted changes."
    read -p "Do you want to commit them now? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        read -p "Enter commit message: " commit_msg
        if [ -z "$commit_msg" ]; then
            commit_msg="Update portfolio website"
        fi
        git commit -m "$commit_msg"
        echo "✅ Changes committed!"
    else
        echo "⚠️  Proceeding without committing changes..."
    fi
fi

echo ""
read -p "Ready to push to GitHub? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Check if main branch exists
    current_branch=$(git branch --show-current)
    
    # Rename to main if on master
    if [ "$current_branch" = "master" ]; then
        echo "📝 Renaming branch to 'main'..."
        git branch -M main
    fi
    
    # Push to GitHub
    echo "⬆️  Pushing to GitHub..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Successfully pushed to GitHub!"
        echo ""
        echo "📌 Next steps:"
        echo "1. Go to your GitHub repository"
        echo "2. Click on 'Settings'"
        echo "3. Navigate to 'Pages' in the left sidebar"
        echo "4. Under 'Source', select 'main' branch"
        echo "5. Click 'Save'"
        echo ""
        echo "Your site will be live at:"
        repo_url=$(git remote get-url origin)
        if [[ $repo_url =~ github\.com[:/]([^/]+)/([^/.]+) ]]; then
            username="${BASH_REMATCH[1]}"
            repo="${BASH_REMATCH[2]}"
            echo "https://${username}.github.io/${repo}/"
        fi
        echo ""
        echo "🎉 Deployment complete!"
    else
        echo ""
        echo "❌ Push failed! Please check your credentials and try again."
        echo "If this is your first push, you might need to authenticate with GitHub."
    fi
else
    echo "Deployment cancelled."
fi

