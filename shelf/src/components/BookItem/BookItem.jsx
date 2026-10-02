import './BookItem.css'

const coverPalette = ['#7c5a3c', '#4f6b52', '#7a3b3b', '#3f5566', '#8a6b3f', '#5c4a72']

function BookItem({ book, onToggleRead, onDelete }) {
  const { id, title, author, read } = book

  return (
    <div className="book-row">
      <div
        className="book-cover"
        style={{ background: coverPalette[id % coverPalette.length] }}
      >
        {title[0] || '?'}
      </div>
      <div className="book-info">
        <p className={`book-title ${read ? 'done' : ''}`}>{title}</p>
        <div className="book-author">{author}</div>
      </div>
      <div
        className={`read-check ${read ? 'checked' : ''}`}
        onClick={() => onToggleRead(id)}
      >
        <span className="check-circle">✓</span>
        <span className="read-label">Прочитано</span>
      </div>
      <button className="delete-btn" title="Убрать с полки" onClick={() => onDelete(id)}>
        ✕
      </button>
    </div>
  )
}

export default BookItem
