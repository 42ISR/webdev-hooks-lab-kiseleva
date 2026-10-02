import './Button.css'

function Button({ children, onClick, variant, disabled, className = '' }) {
  const classes = ['btn', variant, className].filter(Boolean).join(' ')

  return (
    <button type="button" className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
