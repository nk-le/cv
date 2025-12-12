#!/bin/bash

# Local Development Server Script
# Starts a simple HTTP server to test the portfolio website locally

PORT=8000

echo "🚀 Starting local development server..."
echo "📂 Serving files from: $(pwd)"
echo "🌐 Server running at: http://localhost:$PORT"
echo ""
echo "📄 Available pages:"
echo "   - Main page: http://localhost:$PORT/index.html"
echo "   - Portfolio: http://localhost:$PORT/portfolio.html"
echo "   - Team: http://localhost:$PORT/team.html"
echo ""
echo "Press Ctrl+C to stop the server"
echo "================================"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    python -m http.server $PORT
else
    echo "❌ Error: Python is not installed. Please install Python 3 to run the server."
    exit 1
fi

