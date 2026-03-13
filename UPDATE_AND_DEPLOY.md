# How to push this update and refresh Vercel

## 1) Open the project folder
```bash
cd /path/to/python-tutor-nextjs-updated
```

## 2) Install dependencies
```bash
npm install
```

## 3) Test locally
```bash
npm run dev
```

Open `http://localhost:3000`

## 4) Build for production
```bash
npm run build
npm run start
```

## 5) Push the update to GitHub
If this folder is already linked to your Git repository:

```bash
git status
git add .
git commit -m "Add recursion topics, demos, quizzes, and examiner guidance"
git push origin main
```

If your default branch is not `main`, replace it with your real production branch.

## 6) Let Vercel redeploy automatically
If the Vercel project is connected to the same GitHub repository, the push should trigger a fresh deployment automatically.

## 7) Manual Vercel CLI deploy alternative
```bash
npm install -g vercel
vercel
vercel --prod
```

## 8) If Vercel does not update
- Check that the correct Git repository is linked in the Vercel dashboard
- Check that you pushed to the production branch used by Vercel
- Open the Deployments tab in Vercel and inspect the latest build logs
