import Link from 'next/link'
import style from './memory.module.css'

export default function Memory ({ data }) {
  return (
    <div className={style.root}>
      <time className={style.time}>
        {data.memory_date_parsed.month ? data.memory_date_parsed.month + 1 : '1'}
      </time>
      <div className={style.slug}>
        <Link href={`/memories/${data.slug}`}>
          <a>{data.title}</a>
        </Link>
      </div>
    </div>
  )
}
