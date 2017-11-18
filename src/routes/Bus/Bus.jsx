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

        <div className="page__timetable">
          <Timetable data={data} />
        </div>

      </div>
    )
  }
}

export default Bus
