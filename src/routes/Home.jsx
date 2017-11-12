import React, { Component } from 'react'
import { getSiteProps } from 'react-static'
import { getRouteProps } from 'react-static'

class Home extends Component {
  componentDidMount () {
    const script = document.createElement('script')
    script.src = '//vk.com/js/api/openapi.js?72'
    script.onload = function () {
      if (window.VK) {
        VK.Widgets.Group(
          'vk_groups',
          {
            mode: 2,
            wide: 1,
            width: '550',
            height: '400'
          },
          239849
        )
      }

    }

    document.body.appendChild(script)
  }

  render () {
    const {title, content} = this.props
    return (
      <div className="home page">
        <h1 className="header">{title}</h1>
        <div className="content">
          {
            content.split('\n')
              .map((paragraph, index) => (<p className="text__p" key={index}>{paragraph}</p>))
          }
        </div>
        <div className="vkVidget">
          <div id="vk_groups" />
        </div>
      </div>
    )
  }
}

export default getRouteProps(Home)
