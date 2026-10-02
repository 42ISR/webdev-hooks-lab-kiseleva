import './Input.css'

function Input({ value, onChange, onKeyDown, placeholder }) {
  return (
    <input
      className="input"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  )
}

export default Input
