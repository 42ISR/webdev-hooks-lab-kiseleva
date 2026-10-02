import './Checkbox.css'

function Checkbox({ id, checked, onChange, children }) {
  return (
    <>
      <input
        className="checkbox-input"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{children}</label>
    </>
  )
}

export default Checkbox
