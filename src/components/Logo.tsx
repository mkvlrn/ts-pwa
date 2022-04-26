import { Image, keyframes, createStyles } from '@mantine/core'

import logo from '@assets/logo.svg'

const logoSpin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(-360deg)' },
})

const useStyles = createStyles({
  logo: {
    animation: `${logoSpin} infinite 20s linear`,
    pointerEvents: 'none',
  },
})

export function Logo() {
  const { classes } = useStyles()

  return (
    <Image
      src={logo}
      className={classes.logo}
      fit='contain'
      height='30vmin'
    />
  )
}
