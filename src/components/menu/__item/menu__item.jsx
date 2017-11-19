import React from 'react'
import { Link } from 'react-static'
import './menu__item.css'

const MenuItem = ({ to, title, icon }) => {
  return (
    <span className="menu__item">
      { icon && <span className="menu__item-icon">{icon}</span>}
      <Link className="menu__item-link" to={to}>{title}</Link>
    </span>
  )
}

export { MenuItem }
