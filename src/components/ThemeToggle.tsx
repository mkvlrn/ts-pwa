import { ActionIcon, Center, useMantineColorScheme } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons'

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <Center>
      <ActionIcon
        variant='outline'
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title='Toggle color scheme'
        m={10}
      >
        {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
      </ActionIcon>
    </Center>
  )
}
