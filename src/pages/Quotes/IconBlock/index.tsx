interface IconBlockProps {
  icon: string
  title: string
}

export function IconBlock({ icon, title }: IconBlockProps) {
  return (
    <div>
      <img
        src={icon}
        alt={title}
      />
      <button type='button'>{title}</button>
    </div>
  )
}
