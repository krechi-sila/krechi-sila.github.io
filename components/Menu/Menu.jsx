"use client"

import React from 'react'
import Link from 'next/link'
import style from './menu.module.css'

export default function Menu () {
  return (
    <nav className={style.root}>
      <Link href="/">Главная</Link>
      <Link href="/geo">География</Link>
      <Link href="/photos">Фото</Link>
      <Link href="/memories">Истории</Link>
      <Link href="/airfield">Аэродром</Link>
      <Link href="https://yandex.ru/maps/24/veliky-novgorod/routes/bus_101/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32353330343539393237266c6c3d33312e33323331393225324335382e353639323132266e616d653d31303126723d3632393726747970653d627573/?ll=31.343047%2C58.579901&z=13">101 автобус</Link>
    </nav>
  )
}
