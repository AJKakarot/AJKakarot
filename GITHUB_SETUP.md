# GitHub Contributions Setup Guide

## Overview
This portfolio now includes a live GitHub contribution graph that displays your coding activity over the past year, similar to what you see on your GitHub profile.

## Setup Steps

### 1. Create a GitHub Personal Access Token
1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a name like "Portfolio Contributions"
4. Select the following scopes:
   - `read:user` (to read your profile)
   - `repo` (to read repository data)
5. Click "Generate token"
6. **Copy the token immediately** - you won't see it again!

### 2. Create Environment File
Create a `.env.local` file in your project root with:

```bash
# GitHub API Configuration
GITHUB_TOKEN=your_github_personal_access_token_here
GITHUB_USERNAME=divyansharma001
```

Replace `your_github_personal_access_token_here` with the token you copied in step 1.

### 3. Update Username (Optional)
If you want to display contributions for a different GitHub user, change the `GITHUB_USERNAME` value in `.env.local`.

### 4. Restart Your Development Server
After creating the `.env.local` file, restart your Next.js development server:

```bash
npm run dev
# or
pnpm dev
```

## Features

- **Live Data**: Fetches real-time contribution data from GitHub's GraphQL API
- **Responsive Design**: Works on all screen sizes
- **Interactive**: Hover over squares to see contribution details
- **Dark Mode Support**: Automatically adapts to your theme
- **Loading States**: Shows loading spinner while fetching data
- **Error Handling**: Gracefully handles API errors

## How It Works

1. The component makes a request to `/api/github/contributions`
2. This API route uses your GitHub token to fetch contribution data via GraphQL
3. The data is processed and displayed as a heatmap grid
4. Each square represents a day, with colors indicating contribution levels

## Troubleshooting

### "GitHub token not configured" Error
- Make sure you created the `.env.local` file
- Verify the token is correct
- Restart your development server

### "Failed to fetch contributions" Error
- Check if your GitHub token has expired
- Verify the token has the correct permissions
- Check your internet connection

### No Data Displayed
- Ensure your GitHub username is correct
- Check the browser console for errors
- Verify the API route is working by visiting `/api/github/contributions`

## Security Notes

- **Never commit your `.env.local` file** - it's already in `.gitignore`
- Your GitHub token is only used server-side and never exposed to the client
- Consider setting token expiration dates for security

## Customization

You can customize the component by modifying:
- Colors in `getContributionColor()` function
- Grid size and spacing
- Animation delays and effects
- Tooltip content and formatting

## API Rate Limits

GitHub's API has rate limits:
- Authenticated requests: 5,000 requests per hour
- Unauthenticated requests: 60 requests per hour

The contribution graph only makes one request per page load, so you're well within limits.
