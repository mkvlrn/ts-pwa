import { Button, useMantineColorScheme } from '@mantine/core'
import { IconBrandGithub, IconExternalLink } from '@tabler/icons'

export function Github() {
  const { colorScheme } = useMantineColorScheme()
  return (
    <Button
      component='a'
      href='https://github.com/mkvlrn/ts-pwa'
      rightIcon={<IconBrandGithub />}
      leftIcon={<IconExternalLink />}
      variant={colorScheme === 'dark' ? 'filled' : 'outline'}
      target='_blank'
    >
      View on Github
    </Button>
  )
}
