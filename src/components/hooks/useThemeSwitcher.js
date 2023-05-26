import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const [mode, setMode] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const handleColorSchemeChange = (e) => {
      const theme = e.matches ? 'dark' : 'light';
      setMode(theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    };

    mediaQuery.addEventListener('change', handleColorSchemeChange);
    handleColorSchemeChange(mediaQuery); // Update initial theme based on media query

    return () => {
      mediaQuery.removeEventListener('change', handleColorSchemeChange);
    };
  }, []);

  useEffect(() => {
    const localMode = window.localStorage.getItem('theme');
    const initialMode = localMode || (mode ? mode : 'light');

    setMode(initialMode);
    document.documentElement.classList.toggle('dark', initialMode === 'dark');
    window.localStorage.setItem('theme', initialMode);
  }, []);

  const handleModeChange = (newMode) => {
    setMode(newMode);
    document.documentElement.classList.toggle('dark', newMode === 'dark');
    window.localStorage.setItem('theme', newMode);
  };

  return [mode, handleModeChange];
};

export default useThemeSwitcher;
