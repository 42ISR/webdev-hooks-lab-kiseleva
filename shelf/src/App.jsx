import { useState } from 'react'
import ViewSwitch from './components/ViewSwitch/ViewSwitch'
import ShelfScreen from './pages/ShelfScreen/ShelfScreen'
import StatsScreen from './pages/StatsScreen/StatsScreen'
import './App.css'

const initialBooks = [
  { id: 1, title: 'Клара и Солнце', author: 'Кадзуо Исигуро', read: true },
  { id: 2, title: 'Маленькая жизнь', author: 'Ханья Янагихара', read: false },
  { id: 3, title: 'Пиранези', author: 'Сюзанна Кларк', read: false },
]

let nextId = 4

function App() {
  const [currentScreen, setCurrentScreen] = useState('shelf')
  const [books, setBooks] = useState(initialBooks)
  const [showOnlyUnread, setShowOnlyUnread] = useState(false)
  const [pagesToday, setPagesToday] = useState(0)

  function handleAddBook(title) {
    const newBook = { id: nextId++, title, author: 'Автор не указан', read: false }
    setBooks((prev) => [...prev, newBook])
  }

  function handleToggleRead(id) {
    setBooks((prev) =>
      prev.map((book) => (book.id === id ? { ...book, read: !book.read } : book)),
    )
  }

  function handleDeleteBook(id) {
    setBooks((prev) => prev.filter((book) => book.id !== id))
  }

  return (
    <div className="app">
      <div className="app-header">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div className="brand-name">Shelf</div>
        </div>
        <ViewSwitch currentScreen={currentScreen} onChange={setCurrentScreen} />
      </div>

      {currentScreen === 'shelf' ? (
        <ShelfScreen
          books={books}
          showOnlyUnread={showOnlyUnread}
          onShowOnlyUnreadChange={setShowOnlyUnread}
          onAddBook={handleAddBook}
          onToggleRead={handleToggleRead}
          onDeleteBook={handleDeleteBook}
        />
      ) : (
        <StatsScreen
          books={books}
          pagesToday={pagesToday}
          onIncrement={() => setPagesToday((prev) => prev + 1)}
          onDecrement={() => setPagesToday((prev) => Math.max(0, prev - 1))}
          onReset={() => setPagesToday(0)}
        />
      )}
    </div>
  )
}

export default App
