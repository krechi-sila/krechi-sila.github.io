import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './timetable.css'

const BusStop = ({
  name,
  center,
  arrival,
  departure
}) => {

  return (
    <div className="bus-stop">
      <h2 className="bus-stop__name">{name}</h2>

      <div className="bus-stop__times">

      {/*  <div className="bus-stop__time bus-stop__time_arrival">
          <h3>Прибытие</h3>
          {
            arrival.map((time, index) => {
              return <div key={index} className="time">{time}</div>
            })
          }
        </div>*/}

        <div className="bus-stop__time bus-stop__time_departure">
          <h3>Отправление</h3>
          {
            Object.keys(departure).map((hour, index) => {
              return (
                <div key={index} className="time">
                  <div className="time__hour">{hour}</div>
                  <div className="time__minutes">
                    {
                      departure[hour].map((minute, index) => {
                        return (
                          <div key={index} className="time__minute">{minute}</div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

class Timetable extends Component {
  render () {
    const data = this.props.data

    return (
      <div className="timetable">
        {
          data.map((stop, index) => (
            <BusStop
              key={index}
              name={stop.name}
              center={stop.center}
              arrival={stop.arrival}
              departure={stop.departure}
            />)
          )
        }
      </div>
    )
  }
}

Timetable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      center: PropTypes.array,
      arrival: PropTypes.array,
      departure: PropTypes.array
    })
  )
}

export default Timetable
