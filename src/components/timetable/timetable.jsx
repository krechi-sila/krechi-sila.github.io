import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './timetable.css'

const BusStop = ({
                   currentHour,
                   name,
                   title,
                   center,
                   departure
                 }) => {

  return (
    <div className="bus-stop">
      <h2 className="bus-stop__name" title={name}>{title}</h2>

      <div className="bus-stop__times">

        <div className="bus-stop__time bus-stop__time_departure">
          <h3 className="bus-stop__direction">Отправление</h3>
          {
            Object.keys(departure).map((hour, index) => {
              const numericHour = parseInt(hour, 10)
              const nextHourCount = 3
              const isTimeCurrentAndNext = numericHour >= currentHour &&
                numericHour < currentHour + nextHourCount

              const displayedHour = hour === '24' ? 0 : hour

              return (
                <div
                  key={index}
                  className={
                    `time ${ isTimeCurrentAndNext ? 'time_available' : '' }`
                  }>
                  <div className="time__hour">{displayedHour}</div>
                  <div className="time__minutes">
                    {
                      departure[hour].map((minute, index) => {
                        const displayedMinute = minute > 9 ? minute : `0${minute}`

                        return (
                          <div
                            key={index}
                            className="time__minute"
                          >
                            {displayedMinute}
                          </div>
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
  constructor (props) {
    super(props)

    this.state = {
      currentHour: null,
      selectedStop: 0
    }

    this.getCurrentHourInterval = null
  }

  componentWillUnmount () {
    clearInterval(this.getCurrentHourInterval)
  }

  render () {
    const data = this.props.data

    return (
      <div className="timetable">

        <div className="timetable__info">
          <h3 className="timetable__title">{data.stops[0].title} — {data.stops[data.stops.length - 1].title}</h3>

  {/*        <select style={{fontSize: '1.3em'}} onChange={this.onSelect}>
            {
              data.stops.map((stop, index) => {

                return (
                  <option
                    key={index}
                    value={index}
                    disabled={index > 0}
                  >
                    {stop.title}
                  </option>
                )
              })
            }
          </select>*/}
        </div>
        <div className="timetable__stops">
          {
            data.stops.map((stop, index) => (
              stop.departure && <BusStop
                currentHour={this.state.currentHour}
                key={index}
                name={stop.name}
                title={stop.title}
                center={stop.center}
                departure={stop.departure}
              />)
            )
          }
        </div>
      </div>
    )
  }

  onSelect (e) {
    console.log(e.target.value) // eslint-disable-line
  }
}

Timetable.propTypes = {
  selectedStop: PropTypes.number,
  data: PropTypes.shape({
    stops: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        center: PropTypes.array,
        departure: PropTypes.object
      })
    )
  })
}

export default Timetable
