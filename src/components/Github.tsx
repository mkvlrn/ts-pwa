import { Button, useMantineColorScheme } from '@mantine/core'
import { BrandGithub } from 'tabler-icons-react'

export function Github() {
  const { colorScheme } = useMantineColorScheme()
  return (
    <Button
      leftIcon={<BrandGithub />}
      variant={colorScheme === 'dark' ? 'filled' : 'outline'}
    >
      View on Github
    </Button>
  )
}
