import React, { Component } from 'react'
import {
  getSiteProps,
  getRouteProps
} from 'react-static'

class Memories extends Component {

  render () {

    return (
      <div className="memories-route page">
        <h1 className="header">Наша Эра:</h1>
        <h3 className="header header_small">события, люди, явления</h3>

        <div className="namedni">
          <div className="namedni-year">
            <h1 className="header namedni-year__header">2017</h1>
            <ul className="event-list">
              <li className="event-list__item">
                <div className="event-item">
                  <div className="event-item__title">ноябрь. Перезапуск сайта на новой платформе и хостинге</div>
                  <div className="event-item__text">Обновленный дизайн, хостинг без рекламы, новая концепция</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="namedni-year">
            <h1 className="header namedni-year__header">1926</h1>
            <ul className="event-list">
              <li className="event-list__item">
                <div className="event-item">
                  <div className="event-item__title">
                    Разместился аэродром и гарнизон для летных частей Красной Армии
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="namedni-year">
            <h1 className="header namedni-year__header">1914</h1>
            <ul className="event-list">
              <li className="event-list__item">
                <div className="event-item">
                  <div className="event-item__title">
                    Гвардейском кавалерийском запас́ном полку проходил службу российский поэт <a
                    href="https://ru.wikipedia.org/wiki/Гумилёв,_Николай_Степанович">Николай Гумилёв</a>
                  </div>
                  <div
                    className="event-item__text">Кривцовичи Ивановского Переездовского погосту. Назвались "деревня Кривцовичи Ивановского Переездовского погосту." Впоследствии название неоднократно менялось.
                  </div>
                  <div className="event-item__photos">
                    <img src="/photos/memories/akhmatova_1914.png"
                      alt="akhmatovas poem" className="event-item__photo" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="namedni-year">
            <h1 className="header namedni-year__header">1500</h1>
            <ul className="event-list">
              <li className="event-list__item">
                <div className="event-item">
                  <div
                    className="event-item__title">Первое упоминание в <a href="https://ru.wikipedia.org/wiki/Водская_пятина">Писцовой книгой Водской пятины</a> Земли Новгородской
                  </div>
                  <div
                    className="event-item__text">Кривцовичи Ивановского Переездовского погосту. Назвались "деревня Кривцовичи Ивановского Переездовского погосту." Впоследствии название неоднократно менялось.</div>
                  <div className="event-item__photos">
                    <img src="/photos/memories/krechevitzy_1500_year.png" alt="krechevitzy on 1500 years map" className="event-item__photo" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default Memories
