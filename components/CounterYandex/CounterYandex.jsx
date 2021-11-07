import React, { Component } from 'react'
import Image from 'next/image'
class CounterYandex extends Component {
  componentDidMount () {
    const script = document.createElement('script')
    script.src = '//mc.yandex.ru/metrika/watch.js'
    script.onload = (e) => {
      try {
        window.yaCounter414633 = new window.Ya.Metrika(414633)
      } catch (e) {
        console.log('e: ', e)
      }
    }

    document.body.appendChild(script)
  }

  render () {
    return (
      <noscript>
        <div style={{position: 'absolute'}}><Image src="//mc.yandex.ru/watch/414633" alt="" /></div>
      </noscript>
    )
  }
}

export { CounterYandex }
