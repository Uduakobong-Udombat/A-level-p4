# Python Programming Tutor

A Vercel-ready Next.js teaching app for Python programming fundamentals and recursion.

## Included topics

### Lists, algorithms, and testing
- declaring and filling 1D arrays / lists
- input validation loops
- bubble sort
- binary search
- outputting array contents clearly
- testing with shown inputs and outputs

### Recursion
- recursion
- features of recursion
- expressing recursion in code
- writing and tracing recursive algorithms
- when recursion is useful
- stack use and unwinding during recursion

## Interactive features
- worked Python examples
- shown inputs and outputs
- quizzes with instant feedback
- browser-based Python practice lab
- recursion trace explorer
- recursion stack and unwinding visualiser
- recursion use-case decision activity

## Stack
- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion
- Lucide React

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Production build

```bash
npm run build
npm run start
```

## First deployment to Vercel

### Option 1: GitHub + Vercel
1. Create a new GitHub repository.
2. Push this project to that repository.
3. Import the repository into Vercel.
4. Vercel should detect it as a Next.js project automatically.
5. Click deploy.

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel
vercel --prod
```

## Updating an existing GitHub + Vercel deployment

If your Vercel project is already connected to this GitHub repository:

```bash
git status
git add .
git commit -m "Add recursion lessons and interactives"
git push origin main
```

After the push, Vercel should start a new deployment automatically.

## Updating an existing Vercel app with the CLI

From inside the project folder:

```bash
vercel
vercel --prod
```

## Notes
- The app includes a browser-side Python practice lab using Skulpt loaded from a CDN at runtime.
- If the Skulpt CDN fails to load in the browser, the rest of the teaching app still works.
- No backend or environment variables are required.

## Main files
- `app/layout.jsx` - app shell and metadata
- `app/page.jsx` - homepage entry
- `components/PythonProgrammingTutorApp.jsx` - main teaching app
- `components/ui/*` - local UI primitives
- `app/globals.css` - Tailwind base styles
