import React, { Component } from 'react'

import './schedule.css'

import {
  Timetable
} from '../../components'

import data from './timetables/101'

class Bus extends Component {
  render () {

    const forward = data.forward
    const backward = data.backward

    return (
      <div className="page page_type_bus">
        <h1 className="page__header">расписание</h1>
        <div className="page__content">

          <div className="schedule">

            {/*<div className="schedule__header">101</div>*/}

            <div className="schedule__timetables">
              <div className="schedule__timetable">
                <Timetable data={forward}/>
              </div>
              <div className="schedule__timetable">
                <Timetable data={backward}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Bus
