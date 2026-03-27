#!/bin/bash
# PromptBuilder AI - Environment Setup & Dev Server

echo "=== PromptBuilder AI Setup ==="

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "Node.js version: $(node -v)"
echo "npm version: $(npm -v)"

# Install dependencies
echo "Installing dependencies..."
npm install

# Start development server
echo "Starting dev server..."
npm run dev
