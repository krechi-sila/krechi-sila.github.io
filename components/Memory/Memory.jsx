import Link from 'next/link'

export default function Memory ({ data }) {
  return (
    <div className="event-item">
      <time>
        {data.memory_date_parsed.month ? data.memory_date_parsed.month + 1 : ''}
      </time>
      <div>
        <Link href={`/memories/${data.slug}`}>
          <a>{data.title}</a>
        </Link>
      </div>
    </div>
  )
}
