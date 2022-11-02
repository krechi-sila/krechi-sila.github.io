import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import style from './menu.module.css'

const ActiveLink = withRouter(({ router, children, ...props }) => (
  <Link {...props} legacyBehavior>
    {React.cloneElement(children, {
      className: router.pathname === props.href ? `${style.item} ${style.item_active}` : style.item,
    })}
  </Link>
))

export default function Menu () {
  return (
    <nav className={style.root}>
      <ActiveLink href="/"><a>Главная</a></ActiveLink>
      <ActiveLink href="/geo"><a>География</a></ActiveLink>
      <ActiveLink href="/photos"><a>Фото</a></ActiveLink>
      <ActiveLink href="/memories"><a>Истории</a></ActiveLink>
      <ActiveLink href="/airfield"><a>Аэродром</a></ActiveLink>
      <ActiveLink href="https://yandex.ru/maps/24/veliky-novgorod/routes/bus_101/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32353330343539393237266c6c3d33312e33323331393225324335382e353639323132266e616d653d31303126723d3632393726747970653d627573/?ll=31.343047%2C58.579901&z=13"><a target="_blank">101 автобус</a></ActiveLink>
    </nav>
  )
}
