'use client'

interface ScrollLinkProps {
  to: string
  children: React.ReactNode
  className?: string
}

export function ScrollLink({ to, children, className }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' })
    window.history.pushState(null, '', `#${to}`)
  }

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}