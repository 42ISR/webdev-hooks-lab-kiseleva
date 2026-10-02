import StatsSummary from '../../components/StatsSummary/StatsSummary'
import ReadingCounter from '../../components/ReadingCounter/ReadingCounter'

function StatsScreen({ books, pagesToday, onIncrement, onDecrement, onReset }) {
  return (
    <section>
      <p className="greeting">Статистика</p>
      <p className="greeting-sub">Как продвигается чтение</p>

      <StatsSummary books={books} />
      <ReadingCounter
        value={pagesToday}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onReset={onReset}
      />
    </section>
  )
}

export default StatsScreen
