import React, { Component } from 'react'

import { NamedniYear } from '../../components'

class Namedni extends Component {

  render () {
    const events = [
      {
        date: (new Date('1926')).getTime(),
        title: 'Разместился аэродром и гарнизон для летных частей Красной Армии'
      },
      {
        date: (new Date('2017')).getTime(),
        title: 'Перезапуск сайта',
        text: 'Обновленный дизайн, хостинг без рекламы, новая концепция'
      },
      {
        date: (new Date('2017')).getTime(),
        title: 'А тут еще событие одно в 2017 году',
        text: 'Тест события, обычно пара предложений'
      },
      {
        date: (new Date('1914')).getTime(),
        title: 'Гвардейском кавалерийском запас́ном полку проходил службу российский поэт Николай Гумилёв',
        text: '',
        photos: [
          'akhmatova_1914.png'
        ]
      },
      {
        date: (new Date('1500')).getTime(),
        title: 'Первое упоминание в Писцовой книгой Водской пятины Земли Новгородской',
        text: 'Кривцовичи Ивановского Переездовского погосту. Назвались "деревня Кривцовичи Ивановского Переездовского погосту." Впоследствии название неоднократно менялось.',
        photos: [
          'krechevitzy_1500_year.png'
        ]
      }
    ]

    let years = {};

    events.forEach(event => {
      const year = (new Date(event.date)).getFullYear()

      if (years[year]) {
        years[year].events.push(event)
      } else  {
        years[year] = {
          events: [event]
        }
      }
    })

    return (
      <div className="namedni">
        {Object.keys(years).reverse().map(yearDataKey => <NamedniYear year={yearDataKey} yearData={years[yearDataKey]} />)}
      </div>
    )
  }
}

export default Namedni
