# Next.js Starter Boilerplate

This is a modern, scalable, and extensible Next.js starter project, ready for production and team collaboration.

## Features
- **Next.js (App Router, TypeScript) — Views**
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for beautiful, accessible UI components
- **Zustand** for state management
- **Jest** for unit and integration testing
- **ESLint & Prettier** for code quality and formatting
- **File-based routing** with `/app` directory
- **Authentication with NextAuth.js** (GitHub provider sample, easily extendable)
- **Middleware-based route protection**
- **MVC-inspired structure** for maintainability
- **SOLID principles** for extensibility
- **Example pages and components**

## File Structure
```
app/            # Next.js app directory (routing, layouts, pages — Views)
  (public)/     # Public pages (home, about, sign-in)
  (protected)/  # Protected pages (dashboard, etc.)
components/     # Reusable UI components (shadcn/ui)
controllers/    # Business logic, request handlers (Controllers)
models/         # Data models, types, validation schemas (Models)
middleware/     # Modular middleware functions
store/          # Zustand stores
lib/            # Utility functions
styles/         # Tailwind and global styles
public/         # Static assets
tests/          # Jest test files
```

## For New Developers

Welcome! This project is designed for easy onboarding and collaboration. Follow these steps to get started and contribute effectively:

### Git Workflow (IMPORTANT)
- **Always create a new feature branch for every new feature or bugfix.**
  - Example: `git checkout -b your-feature-name`
- **Never push directly to `main` or `dev`.**
- When your feature is complete:
  1. Push your branch to GitHub: `git push -u origin your-feature-name`
  2. Open a Pull Request (PR) on GitHub to merge your feature branch into the `dev` branch.
  3. Request a code review if required.
  4. Only merge after review/approval.
- The `main` branch is for production only. All development happens in feature branches and is merged into `dev` via PRs.

### 1. Setup
- Clone the repository and run `npm install` to install dependencies.
- Create a `.env.local` file in the root with:
  ```env
  GITHUB_ID=your_github_client_id
  GITHUB_SECRET=your_github_client_secret
  NEXTAUTH_URL=http://localhost:3000
  ```
- Start the dev server: `npm run dev` (visit [http://localhost:3000](http://localhost:3000))

### 2. Adding New Features
- **New Page/View:** Add a new file in `app/(public)` or `app/(protected)` (e.g., `app/(protected)/profile/page.tsx`).
- **New Component:** Add a new file in `components/` (e.g., `components/MyButton.tsx`).
- **New Controller:** Add a new file in `controllers/` (e.g., `controllers/userController.ts`) and move business logic here.
- **New Model:** Add a new file in `models/` (e.g., `models/user.ts`) for data types, validation, or ORM models.
- **New Middleware:** Add a new file in `middleware/` and compose it in the root `middleware.ts`.
- **New Zustand Store:** Add a new file in `store/` for state management.
- **New Utility:** Add a new file in `lib/` for helper functions.

### 3. Committing Code
- Use clear, descriptive commit messages (e.g., `feat: add user profile controller` or `fix: correct auth redirect logic`).
- Follow the [conventional commits](https://www.conventionalcommits.org/) style if possible.
- Run `npm run lint` and `npx prettier --write .` before committing.
- Add and commit your changes:
  ```bash
  git add .
  git commit -m "feat: your message here"
  git push
  ```

### 4. Testing
- Add tests in `tests/` for new features or logic.
- Run tests with `npm test`.

### 5. Extending Authentication
- Add new providers in `controllers/authController.ts`.
- Add new user fields/types in `models/user.ts`.

### 6. General Guidelines
- **Single Responsibility:** Each file/folder should have one clear purpose.
- **Open/Closed:** Add new features by creating new files, not modifying existing ones unless necessary.
- **Use interfaces/types** for extensibility.
- **Keep code clean and modular.**
- **Ask for code reviews** if unsure about your changes.

## Authentication & Protected Routes
- **Sign in** at `/signin` (or `/api/auth/signin` for NextAuth default page).
- **Protected routes** are under `/dashboard` (or any route in `/app/(protected)`).
- **Middleware** (`middleware.ts`) automatically redirects unauthenticated users to sign-in.
- **Session** is managed by NextAuth.js using cookies.
- **Add more providers** in `controllers/authController.ts` as needed.

## Deployment

This project is ready to deploy on platforms like **Vercel** or **Netlify**. For Vercel:
1. Push your repo to GitHub.
2. Go to [vercel.com](https://vercel.com/) and import your repo.
3. Set the same environment variables in Vercel dashboard.
4. Click "Deploy".

## Customization
- Add new pages in `app/(public)` or `app/(protected)`
- Add new components in `components/`
- Add new Zustand stores in `store/`
- Add more NextAuth providers in `controllers/authController.ts`
- Add new models in `models/`
- Add new middleware in `middleware/`
- Add new controllers in `controllers/`

## Credits
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Jest](https://jestjs.io/)
- [NextAuth.js](https://next-auth.js.org/)

---

Happy hacking! 🚀
