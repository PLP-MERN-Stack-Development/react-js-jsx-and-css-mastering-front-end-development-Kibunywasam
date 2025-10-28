
A responsive, modern task management application built with React, Vite, and Tailwind CSS as part of the PLP (Programming Learning Pathway) Week 3 assignment. This project demonstrates component architecture, state management, theme switching, and API integration.

## Features
### Task Management
Add, delete, and mark tasks as complete
Filter tasks: All / Active / Completed
Local storage persistence (tasks survive page reloads)
### Light & Dark Mode
Toggle between themes with persistent user preference
### API Integration
Fetch and display posts from JSONPlaceholder
Search and pagination (Load More)
### Fully Responsive Design
Works on mobile, tablet, and desktop
### Modular Component Architecture
Reusable Button, Card, Navbar, Footer, and TaskManager components
### Modern React Patterns
useState, useEffect, useContext
Custom hook: useLocalStorage
Context API for theme management

## Tech Stack
Framework: React 18+
Build Tool: Vite
Styling: Tailwind CSS (with darkMode: 'class')
Routing: None (single-page app)
State Management: React Hooks + Context API
API: JSONPlaceholder (public REST API)

## Project Structure

src/
├── components/       # Reusable UI components
│   ├── Button.jsx    # Themed button with variants
│   ├── Card.jsx      # Styled container
│   ├── Navbar.jsx    # Navigation with theme toggle
│   ├── Footer.jsx    # Site footer
│   └── TaskManager.jsx # Full task CRUD interface
├── pages/
│   └── HomePage.jsx  # Main page combining task manager + API data
├── context/
│   └── ThemeContext.jsx # Manages light/dark mode
├── hooks/
│   └── useLocalStorage.js # Custom hook for localStorage
├── api/
│   └── api.js        # API service layer
├── utils/
│   └── helpers.js    # Utility functions (e.g., text truncation)
├── App.jsx           # Root component
└── main.jsx          # Entry point
## Getting Started

### Prerequisites
Node.js v18 or higher
npm or yarn
Installation
Clone the repository:
bash


1
2
git clone <your-github-repo-url>
cd react-js-jsx-and-css-mastering-front-end-development-Kibunywasam
Install dependencies:
bash


1
npm install
Start the development server:
bash


1
npm run dev
The app will open at http://localhost:5173 

## Testing the App
Task Manager: Add tasks, toggle completion, delete, and switch filters
Theme Toggle: Click the "🌙 Dark" / "☀️ Light" button in the navbar
API Section: View posts, search by title/body, and load more
All data is persisted in localStorage (tasks) and fetched from a live API (posts).

## Design & Styling
Built entirely with Tailwind CSS utility classes
No custom CSS files (except @tailwind directives)
Responsive breakpoints: sm, md, lg
Consistent spacing, typography, and color palette
Smooth transitions and hover states

## Assignment Compliance
This project fulfills all requirements from Week 3: React.js, JSX, and Tailwind CSS:

- Vite + React setup
- Reusable components with props
- State management with hooks (useState, useEffect, useContext)
- Custom hook (useLocalStorage)
- API integration with loading/error states
- Tailwind CSS for responsive, theme-aware UI
- Clean, organized code structure