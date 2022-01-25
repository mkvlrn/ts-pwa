import { css, Global } from '@emotion/react'

const globalStyle = css`
  body {
    color: red;
  }
`
export function GlobalStyle() {
  return <Global styles={globalStyle} />
}
