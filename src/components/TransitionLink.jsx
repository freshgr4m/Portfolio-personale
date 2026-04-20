import { usePageTransition } from '../context/TransitionContext'

export default function TransitionLink({ to, children, className, style }) {
  const { transitionTo } = usePageTransition()
  return (
    <a
      href={to}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault()
        transitionTo(to)
      }}
    >
      {children}
    </a>
  )
}
