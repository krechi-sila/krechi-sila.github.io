import React, { Component } from 'react'
import { getSiteProps } from 'react-static'
import { getRouteProps } from 'react-static'

class Photos extends Component {

  render () {
    const {title, content} = this.props
    return (
      <div className="home page">
        <h1 className="header">{title}</h1>
        <div className="content">
          {
            content.map(
              (item, index) => (
                <div className="photo-item" key={index}>
                  <a className="photo-item__link" href={item.link}>{item.title}</a>
                  {item.about && <div className="photo-item__about">{item.about}</div>}
                </div>
              )
            )
          }
        </div>
      </div>
    )
  }
}

export default getRouteProps(Photos)
