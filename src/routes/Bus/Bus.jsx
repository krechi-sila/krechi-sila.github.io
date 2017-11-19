import React, { Component } from 'react'
import {
  getSiteProps,
  getRouteProps
} from 'react-static'

import {
  Timetable
} from '../../components'

import data from './timetables/101'

class Bus extends Component {

  render () {

    return (
      <div className="page page_type_bus">
        <h1 className="page__header">расписание 101</h1>
        <p>Маршрут:</p>
          <ul>
            <li>Кречевицы (Армейская ул.д.139)</li>
            <li>Трубичино</li>
            <li>Б.С.Петербургская ул (Щусева)</li>
            <li>ул. Газон</li>
            <li>ул. Людогоща</li>
            <li>Воскресенский бульвар</li>
            <li>Вокзал</li>
          </ul>
        <p>Время в пути: утром 35-40 минут, днем 45-50 минут</p>

        <div className="page__timetable">
          <Timetable data={data} />
        </div>

      </div>
    )
  }
}

export default Bus
