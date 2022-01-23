import { css, Global } from '@emotion/react'
// import emotionReset from 'emotion-reset'

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Noto Sans JP', sans-serif;
  }

  body {
    margin: 0;
    background-color: #3f3f3f;
  }
`

export function GlobalStyle() {
  return <Global styles={globalStyle} />
}
