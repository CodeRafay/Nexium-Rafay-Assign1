# Quote Generator Web App
This is a Quote Generator Web App built as part of the [Nexium AI-First Web Development Internship (July 2025)](https://www.nexium.ltd/Bootcamp/Student-Handbook).
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

[View the Live App on Vercel](https://quote-generator-peach-two.vercel.app/)

---

## Features


- **Copy Quote**: Users can copy the displayed quote to their clipboard with a single click. A toast notification confirms the copy action.
- **Search Quotes by Category**: Users can search for quotes by selecting a category (e.g., "success", "motivation"). The app will display a random quote from the chosen category.
- **Responsive Design**: The app’s layout is fully responsive, providing an optimal experience across mobile, tablet, and desktop devices.
- **Toast Notifications**: User actions like copying a quote trigger toast notifications for visual feedback.
- **Accessible UI**: A clean, accessible UI with smooth transitions for a pleasant user experience.


---

## Functional Requirements

- **On Initial Load**: The app displays UI to search from a given set of topics.
- **Category Selection**: Users can select a category (e.g., "success", "motivation") from a listed categories.
- **Copy to Clipboard**: Users can copy the displayed quote to the clipboard with a single click. Upon success, a toast notification confirms the action.
- **Toast Feedback**: Users receive immediate feedback via toast notifications when copying quotes or generating new quotes.
- **Responsive UI**: The layout adjusts seamlessly to different screen sizes, ensuring that mobile, tablet, and desktop users all have an optimal experience.
- **Offline Data**: All quotes are stored locally within the app, ensuring it works offline with no external API dependencies.

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

This project is licensed under the [Apache 2.0 License](LICENSE).

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
