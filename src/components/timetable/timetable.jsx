import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './timetable.css'

const BusStop = ({
  currentHour,
  name,
  center,
  arrival,
  departure
}) => {

  return (
    <div className="bus-stop">
      <h2 className="bus-stop__name">{name}</h2>

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
      currentHour: (new Date()).getHours()
    }

    this.getCurrentHourInterval = null
  }

  componentDidMount () {
    this.getCurrentHourInterval = setInterval(
      () => this.setState({ currentHour: (new Date()).getHours()  }), 1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.getCurrentHourInterval)
  }

  render () {
    const data = this.props.data

    return (
      <div className="timetable">
        {
          data.map((stop, index) => (
            <BusStop
              currentHour={this.state.currentHour}
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
      departure: PropTypes.object
    })
  )
}

export default Timetable
