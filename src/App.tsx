import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Global,
} from '@mantine/core';
import { Home } from '@pages/Home';
import { useState } from 'react';

export function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{ colorScheme, fontFamily: 'Signika, sans-serif' }}
      >
        <Global
          styles={(theme) => ({
            body: { ...theme.fn.fontStyles(), textAlign: 'center' },
          })}
        />
        <Home />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
