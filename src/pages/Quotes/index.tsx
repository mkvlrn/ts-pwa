import { IconBlock } from './IconBlock'

import kanye from './kanye.webp'
import lemon from './lemon.webp'
import thanos from './thanos.webp'

import sources from './sources.json'

export function Quotes() {
  const icons: { [key: string]: string } = { kanye, lemon, thanos }

  return (
    <div>
      {sources.map((src) => (
        <IconBlock
          key={src.key}
          icon={icons[src.key]}
          title={src.title}
        />
      ))}
    </div>
  )
}
