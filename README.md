# Quote Generator Web App

A modern, responsive web application for discovering and sharing inspirational quotes. Built with Next.js 14+ and a clean UI powered by shadcn components and Tailwind CSS, this app allows users to view, copy, and generate random quotes from a curated local collection.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **UI Components:** shadcn UI (Button, Input, Card, Toast)
- **Styling:** Tailwind CSS, custom CSS variables
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Data Storage:** Local `data/quotes.json` file (category-based)
- **Deployment:** Vercel

---

## Live Demo

[View the Live App on Vercel](https://your-vercel-app-url.vercel.app)

---

## Features

- Display a random quote from a curated collection, organized by category
- "New Quote" button to generate another random quote
- Copy quote to clipboard with a single click
- Responsive design for mobile, tablet, and desktop
- Toast notifications for user feedback (e.g., successful copy)
- Clean, accessible UI with smooth transitions

---

## Functional Requirements

- On page load, a random quote is displayed from any category in `quotes.json`.
- Users can click "New Quote" to display a different random quote.
- Users can copy the current quote to their clipboard; a toast notification confirms the action.
- The app is fully responsive and adapts to various screen sizes.
- All quotes are sourced from a local JSON file for fast, offline access.

---

## Data Structure Example

The `data/quotes.json` file organizes quotes by category. Each category is a key with an array of quote strings:

```json
{
  "success": [
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "The harder you work for something, the greater you'll feel when you achieve it."
  ],
  "motivation": [
    "Push yourself, because no one else is going to do it for you.",
    "Dream it. Wish it. Do it."
  ]
  // ... more categories and quotes
}
```

Each category (e.g., `"success"`, `"motivation"`) contains an array of quotes as plain strings.

---

## Visual Design & Color Palette

- **Primary Color:** `#0D1B2A` (custom, see `app/globals.css`)
- **Primary Foreground:** `#ffffff`
- **Accent Color:** `#00C80F`
- **Accent Foreground:** `#ffffff`
- **Warning Color:** `#FFD700`
- **Warning Foreground:** `#333333`
- **Muted Background:** `#F8F9FA`
- **Muted Foreground:** `#64748b`
- **General Text Color:** `#333333`
- **Contrast Color:** `#f1f5f9` (used in gradients and backgrounds)
- **Other Tailwind Colors:** `blue-600`, `slate-900`, `white` (used in components and backgrounds)

---

## UI/UX Enhancements

- **Animations & Transitions:** Smooth fade-in/out for quotes and button hover effects
- **Toast Notifications:** Feedback for actions like copying quotes
- **Responsiveness:** Layout adapts seamlessly to all device sizes
- **User Feedback:** Disabled states for buttons during transitions, focus outlines for accessibility
- **Accessible Components:** All interactive elements are keyboard-navigable and screen-reader friendly

---

## Project Structure

```
quote-generator/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── favicon.ico
│   └── favicon1.ico
├── components/
│   ├── QuoteForm.tsx
│   ├── QuoteCard.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── sonner.tsx
├── data/
│   └── quotes.json
├── lib/
│   └── utils.ts
├── public/
│   ├── window.svg
│   ├── vercel.svg
│   ├── next.svg
│   ├── globe.svg
│   └── file.svg
├── types/
│   └── quotes.ts
├── tailwind.config.ts
├── package.json
├── package-lock.json
├── next.config.ts
├── next-env.d.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── README.md
└── .gitignore
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/CodeRafay/quote-generator.git
cd quote-generator
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Deployment Instructions

1. Push your project to a GitHub (or GitLab) repository.
2. Go to [Vercel](https://vercel.com/) and import your repository.
3. Set the framework preset to **Next.js**.
4. Click **Deploy**.
5. After deployment, update the Live Demo link in this README with your Vercel app URL.

---

## Optional Enhancements

- Add dark mode toggle
- Allow users to submit their own quotes
- Favorite or bookmark quotes
- Share quotes directly to social media
- Add categories or tags for quotes
- Fetch quotes from an external API

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Credits

- [Next.js](https://nextjs.org/)
- [shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://react.dev/)
- [Vercel](https://vercel.com/)

---

## Contact Information

For questions, feedback, or collaboration, please contact: [Rafay Adeel](mailto:rafayadeel1999@gmail.com)

---
