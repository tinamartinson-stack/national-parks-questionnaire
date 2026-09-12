# National Parks Questionnaire

A client intake form for National Parks itinerary curation. Mobile-friendly, auto-saves responses, exports as text.

## Quick Start (Vercel Deployment)

### Step 1: Create a GitHub Account
Go to https://github.com/signup if you don't have one. Takes 2 minutes.

### Step 2: Create a GitHub Repository
1. Go to https://github.com/new
2. Name it `national-parks-questionnaire` (or whatever you want)
3. Choose "Public" (so it's easier to deploy)
4. Click "Create repository"

### Step 3: Clone the Repo & Add Files Locally
Open your terminal and run:
```bash
git clone https://github.com/YOUR_USERNAME/national-parks-questionnaire.git
cd national-parks-questionnaire
```

Then copy all files from this folder into that directory:
- `package.json`
- `next.config.js`
- `pages/index.js`
- `.gitignore`

### Step 4: Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### Step 5: Deploy to Vercel
1. Go to https://vercel.com/signup
2. Sign up with your GitHub account (choose "Continue with GitHub")
3. Click "Import Project"
4. Paste your GitHub repo URL (https://github.com/YOUR_USERNAME/national-parks-questionnaire)
5. Click "Import"
6. Vercel auto-detects Next.js settings. Just click "Deploy"
7. Wait 2 minutes. Done.

You'll get a URL like `https://national-parks-questionnaire.vercel.app`. That's your live app.

## Local Development (Optional)

To test locally before deploying:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## How It Works

- **8 sections** of questions covering motivation, experience, health, gear, risk tolerance, budget, and priorities
- **Auto-saves** to browser storage (persists across sessions)
- **Export** downloads responses as a text file clients can email back
- **Mobile-first** design optimized for phones

## What's NOT Included

- **Database:** Responses only save to the client's browser. When they export, they get a text file.
- **Backend:** No email collection, no API to capture submissions.
- **Branding:** Basic styling. You can customize colors/fonts by editing `pages/index.js`.

## Next Steps

Once clients start using this:

1. **Collect responses** via email after they export
2. **Watch for patterns** — contradictions, vague answers, real priorities
3. **Add a backend** (optional) if you want responses captured automatically to a database

## Troubleshooting

**"I don't have GitHub"**
- Go to https://github.com/signup, create an account (free)

**"I don't have Node.js installed"**
- You don't need it. Vercel handles all the deployment.
- Only install Node if you want to test locally (`brew install node` on Mac, https://nodejs.org on Windows)

**"My Vercel deployment failed"**
- Check the build logs in Vercel dashboard. Most common issue: typo in file names.
- This repo should deploy on first try if files are copied correctly.

## Support

- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- Questions about the form logic? Edit `pages/index.js` and redeploy. Changes push to Vercel automatically when you push to GitHub.
