import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Always use dark theme for black and yellow design
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Force dark theme for black/yellow design
    document.documentElement.classList.add('dark');
    document.body.style.background = '#000000';
    document.body.style.color = '#ffd700';
  }, []);

  const toggleTheme = () => {
    // Toggle between pure black and slightly lighter black
    const isVeryDark = document.body.style.background === 'rgb(0, 0, 0)';
    if (isVeryDark) {
      document.body.style.background = '#0a0a0a';
      setIsDark(false);
    } else {
      document.body.style.background = '#000000';
      setIsDark(true);
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};