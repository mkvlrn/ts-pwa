import { css, Global } from '@emotion/react'

const styles = css`
  color: red;
`

export function GlobalStyle() {
  return <Global styles={styles} />
}
