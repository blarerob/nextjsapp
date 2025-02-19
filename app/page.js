'use client';
import React, { useState } from 'react';
import './styles/globals.css';
import ToDoForm from "@/components/ToDoForm";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`max-w-lg ${darkMode ? 'dark' : ''}`}>
      <button onClick={toggleDarkMode} className="mb-4 p-2 bg-gray-200 dark:bg-gray-800 rounded">
        Toggle Dark Mode
      </button>
      <h1 className="text-5xl mb-8 font-bold">New Landings Homes</h1>
      <ToDoForm />
    </div>
  );
};

export default Home;