import { SunIcon, MoonIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { LinkIcon } from '../linkIcon';

type Theme = 'light' | 'dark';

export function ChangeTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme') as Theme;
    return storedTheme;
  });

  const toggleTheme = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const iconTheme = {
    light: <MoonIcon />,
    dark: <SunIcon />,
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <LinkIcon
      href='#'
      aria-label='Change theme'
      title='Change theme'
      onClick={toggleTheme}
      type='button'
    >
      {iconTheme[theme]}
    </LinkIcon>
  );
}
