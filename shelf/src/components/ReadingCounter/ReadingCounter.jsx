import Button from '../Button/Button'
import './ReadingCounter.css'

function ReadingCounter({ value, onIncrement, onDecrement, onReset }) {
  return (
    <div className="session-card">
      <p className="session-title">Страниц прочитано сегодня</p>
      <p className="session-sub">Обновляйте счётчик после каждой сессии чтения</p>
      <div className="counter-row">
        <button className="counter-btn" onClick={onDecrement} disabled={value === 0}>
          −
        </button>
        <span className="counter-value">{value}</span>
        <button className="counter-btn" onClick={onIncrement}>
          +
        </button>
      </div>
      <Button variant="ghost" className="counter-reset" onClick={onReset}>
        Сбросить счётчик
      </Button>
    </div>
  )
}

export default ReadingCounter
