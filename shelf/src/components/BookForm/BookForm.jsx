import { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import './BookForm.css'

function BookForm({ onAdd }) {
  const [title, setTitle] = useState('')

  function handleAdd() {
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    onAdd(trimmedTitle)
    setTitle('')
  }

  return (
    <div className="add-book-row">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleAdd()
        }}
        placeholder="Название книги..."
      />
      <Button onClick={handleAdd}>Добавить на полку</Button>
    </div>
  )
}

export default BookForm
