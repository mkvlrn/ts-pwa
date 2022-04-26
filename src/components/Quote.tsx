import { Blockquote, Center, Loader } from '@mantine/core'
import { useEffect, useState } from 'react'

interface QuoteResult {
  author: string
  text: string
}

const sources = [
  {
    author: 'Kanye West',
    url: 'https://api.kanye.rest',
  },
  {
    author: 'Thanos',
    url: 'https://thanosapi.herokuapp.com/random/',
  },
]

export function Quote() {
  const [quote, setQuote] = useState<QuoteResult | undefined>(undefined)

  useEffect(() => {
    async function getData() {
      const source = sources[Math.floor(Math.random() * sources.length)]
      const response = await fetch(source.url)
      const data = await response.json()
      setQuote({ author: source.author, text: data.quote })
    }

    getData()
  }, [])

  return (
    <Center mt={15}>
      {!quote && (
        <Loader
          style={{ display: 'block' }}
          variant='dots'
        />
      )}
      {quote && <Blockquote cite={quote.author}>{quote.text}</Blockquote>}
    </Center>
  )
}
