import { Navbar as Nav, Text } from '@mantine/core'

interface NavbarProps {
  opened: boolean
}

export function Navbar({ opened }: NavbarProps) {
  return (
    <Nav
      p='md'
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>navbar</Text>
    </Nav>
  )
}
