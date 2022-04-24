import { Burger, Header as MHeader, MediaQuery, Text } from '@mantine/core'

interface HeaderProps {
  opened: boolean
  setOpened: (f: (o: boolean) => boolean) => void
}

export function Header({ opened, setOpened }: HeaderProps) {
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <MHeader
      height={70}
      p='md'
    >
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery
          largerThan='sm'
          styles={{ display: 'none' }}
        >
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size='sm'
            mr='xl'
          />
        </MediaQuery>

        <Text>Application header</Text>
      </div>
    </MHeader>
  )
}
