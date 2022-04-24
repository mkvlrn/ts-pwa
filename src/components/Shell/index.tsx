import { MantineProvider, AppShell, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import { ReactNode, useState } from 'react'
import { Footer } from './Footer'

import { Header } from './Header'
import { Navbar } from './Navbar'

interface ShellProps {
  children: ReactNode
}

export function Shell({ children }: ShellProps) {
  const [opened, setOpened] = useState(false)
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <AppShell
          styles={{
            main: {
              background: colorScheme === 'dark' ? 'black' : 'white',
            },
          }}
          padding='md'
          header={
            <Header
              opened={opened}
              setOpened={setOpened}
            />
          }
          navbar={<Navbar opened={opened} />}
          navbarOffsetBreakpoint='sm'
          fixed
          footer={<Footer />}
        >
          {children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
