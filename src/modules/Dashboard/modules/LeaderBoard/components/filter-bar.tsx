import styles from "../pages/leaderboard.module.css"

type FilterType = "monthly" | "yearly" | "overall"

interface FilterBarProps {
  activeFilter: FilterType
  setActiveFilter: (filter: FilterType) => void
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export function FilterBar({ activeFilter, setActiveFilter, activeCategory, setActiveCategory }: FilterBarProps) {
  return (
    <div className={styles.filterBar}>
      <div className={styles.filterTabs}>
        <button
          type="button"
          className={`${styles.filterTab} ${activeFilter === "monthly" ? styles.active : ""}`}
          onClick={() => setActiveFilter("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`${styles.filterTab} ${activeFilter === "yearly" ? styles.active : ""}`}
          onClick={() => setActiveFilter("yearly")}
        >
          Yearly
        </button>
        <button
          type="button"
          className={`${styles.filterTab} ${activeFilter === "overall" ? styles.active : ""}`}
          onClick={() => setActiveFilter("overall")}
        >
          Overall
        </button>
      </div>

      <div className={styles.filterActions}>
        <select className={styles.select} value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="student">Student</option>
          <option value="mentor">Mentor</option>
          <option value="campus">Campus</option>
        </select>
        <button type="button" className={styles.buttonSecondary}>Show My Place</button>
      </div>
    </div>
  )
}
