import { type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  href?: string
  target?: string
  rel?: string
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  target,
  rel,
  ...props
}: ButtonProps) {
  const base =
    'group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold text-base tracking-wide transition-all duration-500 ease-emil will-change-transform'

  const variants = {
    primary: [
      'px-10 py-4 text-white',
      'bg-gradient-to-r from-brand-accent via-brand-accentDark to-brand-accent',
      'bg-[length:220%_100%] animate-gradient-drift',
      'shadow-brand-glow ring-1 ring-white/25',
      'hover:-translate-y-0.5 hover:shadow-brand-lg',
    ].join(' '),
    secondary: [
      'px-9 py-3.5 text-brand-accent',
      'bg-white/70 backdrop-blur-sm border border-brand-accent/60',
      'shadow-brand-sm',
      'hover:bg-brand-beige hover:border-brand-accent hover:-translate-y-0.5',
    ].join(' '),
  }

  const classes = `${base} ${variants[variant]} ${className}`

  const content = (
    <>
      {variant === 'primary' && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-emil group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.28), transparent 60%)',
          }}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
