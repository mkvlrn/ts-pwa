import { Button, useMantineColorScheme } from '@mantine/core'
import { BrandGithub, ExternalLink } from 'tabler-icons-react'

export function Github() {
  const { colorScheme } = useMantineColorScheme()
  return (
    <Button
      component='a'
      href='https://github.com/mkvlrn/ts-pwa'
      rightIcon={<BrandGithub />}
      leftIcon={<ExternalLink />}
      variant={colorScheme === 'dark' ? 'filled' : 'outline'}
      target='_blank'
    >
      View on Github
    </Button>
  )
}
