import { useTheme } from '../context/ThemeContext';
import Button from './Button';

export default function Navbar() {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">PLP Task Manager</h1>
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={toggleTheme}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </Button>
      </div>
    </header>
  );
}