import React, { Component } from 'react'

import './home.css'

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
    return (
      <div className="page page_type_home">
        <h1 className="page__header">О проекте</h1>
        <div className="page__content">
          <p>Всем привет!</p>
          <p>
            Это — некоммерческий проект в поддержку нашего любимого авиагородока Кречевицы
            (для друзей он просто — Кречи).
          </p>
          <p>
            Идея создать сайт о Кречах пришла к нам не случайно.
            Как-то в процессе создания одной странички потребовалась инфа про родной Городок, н
            о утомительные поиски по всемирной ни к чему не привели.
            Нам это показалась несправедливым — умалчивать о существовании одного из прекраснейших мест на Земле — Кречевицах.
            Это был повод. Ну а коли есть повод... грех не выпить, то есть создать сайт. Вот собственно и все вступление.
          </p>
          <p>Таможенный контроль и КПП вы уже прошли. Теперь будьте смелее — и вперед по Кречам!!!</p>
        </div>
        <div className="vkVidget">
          <div id="vk_groups" />
        </div>
      </div>
    )
  }
}

export default Home
