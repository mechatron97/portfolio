import React, { useEffect, useState } from 'react';

export const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const [mode, setMode] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem('theme');

    const handleChange = () => {
      let check = userPref || (mediaQuery.matches ? 'dark' : 'light');
      setMode(check);
      document.documentElement.classList.toggle('dark', check === 'dark');
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem('theme', mode);
      document.documentElement.classList.toggle('dark', mode === 'dark');
    }
  }, [mode]);

  return [mode, setMode];
};
