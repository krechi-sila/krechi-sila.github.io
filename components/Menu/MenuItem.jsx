import Link from 'next/link'
import menuStyles from './menu.module.css'

const MenuItem = ({ to, title }) => {
  return (
    <span className={menuStyles.item}>
      <Link href={to}>
        <a className={menuStyles.itemLink}>{title}</a>
      </Link>
    </span>
  )
}

export { MenuItem }
