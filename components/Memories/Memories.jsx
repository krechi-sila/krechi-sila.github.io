import { Memory } from '../Memory'

import styles from './memories.module.css'

export default function Memories ({ allMemoriesData }) {
  const groupedMemories = allMemoriesData.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue.memory_date_parsed.year]) {
      accumulator[currentValue.memory_date_parsed.year].push(currentValue)
    } else {
      accumulator[currentValue.memory_date_parsed.year] = [currentValue]
    }

    return accumulator
  }, {})

  const reverse = (firstEl, secondEl) => {
    return secondEl - firstEl
  }

  return (
    <ul className={styles.root}>
      {
        Object.keys(groupedMemories)
          .sort(reverse)
          .map(year => (
            <li className={styles.memoriesItem} key={year}>
              <time className={styles.memoriesItem__year} dateTime={year}>{year}</time>

              <div className={styles.memoriesItem__records}>
                {
                  groupedMemories[year].map(
                    memory => (
                      <div className={styles.memoriesItem__record} key={memory.slug}>
                        <Memory data={memory} key={memory.slug} />
                      </div>
                    ),
                  )
                }
              </div>
            </li>
          ))
      }
    </ul>
  )
}
