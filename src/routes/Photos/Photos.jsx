import React, { Component } from 'react'

import './photo-item.css'

class Photos extends Component {

  render () {
    return (
      <div className="page page_type_photos">
        <h1 className="page__header">Фотоальбомы</h1>
        <div className="page__content">
          {
            [
              {
                link: 'https://mikhail.krivyy.com/tag/кречевицы/',
                title: 'Заметки Михаила Кривых о Кречевицах',
              },
              {
                link: 'https://110vtap.ucoz.ru/index/istorija_v_fotografijakh/0-14',
                title: '110 ВОЕННО-ТРАНСПОРТНЫЙ АВИАЦИОННЫЙ ПОЛК',
                about: 'Очень много фотографий разных эпох военной жизни Кречевиц.'
              },
              {
                link: 'https://fotki.yandex.ru/users/nwb282/album/23269/',
                title: 'Кречевицы, 20.01.2008',
              },
              {
                link: 'https://fotki.yandex.ru/users/nwb282/album/10559/',
                title: 'Кречевицы, 22.10.2007 — 7.08.2008',
              },
              {
                link: 'https://fotki.yandex.ru/users/nwb282/album/37043/',
                title: 'Кречевицы, 2008, снег',
              },
              {
                link: 'https://vk.com/albums-239849',
                title: 'Кречевицы, фотографии Вконтакте-группы',
              },
            ].map(
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

export default Photos
