import React, { Component } from 'react'

import './schedule.css'

import {
  Timetable
} from '../../components'

import data from './timetables/101'



class Bus extends Component {

  render () {

    return (
      <div className="page page_type_bus">
        <h1 className="page__header">расписание 101</h1>
        <div className="page__content">

          <div className="schedule">

            <div className="schedule__header">
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
            </div>

            <div className="schedule__timetable">
              <Timetable data={data} />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Bus
