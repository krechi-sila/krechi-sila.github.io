import React, { Component } from 'react'
import { getSiteProps } from 'react-static'
import { getRouteProps } from 'react-static'

class Geo extends Component {

  render () {
    const {title, content} = this.props
    return (
      <div className="geo-route page">
        <h1 className="header">{title}</h1>
        <div className="content">
          {
            content.split('\n')
              .map((paragraph, index) => (<p className="text__p" key={index}>{paragraph}</p>))
          }
          <p>
            <a href="https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9_%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4#%D0%93%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F">Природа Великого Новгорода на сайте Википедия</a>.
          </p>
        </div>
      </div>
    )
  }
}

export default getRouteProps(Geo)
