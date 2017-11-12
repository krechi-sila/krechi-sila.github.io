import React from 'react'
import { Link } from 'react-static'

import './menu.css'

import { MenuItem } from './__item'

const items = [
  {
    to: '/',
    title: 'Главная'
  },
  {
    to: '/geo',
    title: 'География'
  },
  {
    to: '/photos',
    title: 'Фото'
  },
  {
    to: '/memories',
    title: 'Истории'
  },
  {
    to: '/timetables/bus',
    title: '101 автобус'
  }
]

const Menu = (props) => {
  return (
    <nav className="menu">
      { items.map(item => <MenuItem key={item.title} to={item.to} title={item.title} />) }
    </nav>
  )
}

export default Menu
