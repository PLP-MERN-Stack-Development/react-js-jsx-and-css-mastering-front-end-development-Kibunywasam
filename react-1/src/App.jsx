import { useState } from 'react'

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';



function App() {
  const [count, setCount] = useState(0)

  return (

          <ThemeProvider>
            <div className="min-h-screen bg-gray-100 dark:bg-black-100 text-gray-900 dark:text-gray-100 flex flex-col">
              <Navbar />
              <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex-grow">
                <HomePage />
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        );
}

export default App
