import { Memory } from '../Memory'

import styles from './memories.module.css'

export default function Memories ({ allMemoriesData }) {
  const groupedMemories = allMemoriesData.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue.metaData.memory_date_parsed.year]) {
      accumulator[currentValue.metaData.memory_date_parsed.year].push(currentValue)
    } else {
      accumulator[currentValue.metaData.memory_date_parsed.year] = [currentValue]
    }

    return accumulator
  }, {})
  
  const reverse = (firstEl, secondEl) => {
    return secondEl - firstEl
  }

  return (
    <ul className={styles.root}>
      {
        Object.keys(groupedMemories).sort(reverse).map(year => (
          <li className={styles.memoriesItem} key={year}>
            <time className={styles.memoriesItem__year} dateTime={year}>{year}</time>

            <div className={styles.memoriesItem__records}>
              {
                groupedMemories[year].map(
                  memory => (
                    <div className={styles.memoriesItem__record} key={memory.metaData.slug}>
                      <Memory data={memory.metaData} key={memory.metaData.slug} />
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
