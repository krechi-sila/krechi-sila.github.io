import React from 'react'
import axios from 'axios'

export default {
  Document: ({Html, Head, Body, children, siteProps, renderMeta}) => (
    <Html lang="ru">
    <Head>
      <meta name="yandex-verification" content="4c16862f72d07481" />
      <meta httpEquiv="X-UA-Compatible" content="IE=EmulateIE7, IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta name="description" content="Кречевицы — микрорайон Великого Новгорода" />
      <meta name="keywords"
        content="Кречевицы, Кречи, Кречи-сила, Krechi, Krechi-sila, Школа номер 15, школа № 15 имени Шпунякова, Кречевицы (аэропорт), 110 ВТАП" />
    </Head>
    <Body>{children}</Body>
    </Html>
  ),
  getSiteProps: () => ({
    title: 'Кречевицы'
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/routes/Home/Home'
      },
      {
        path: '/geo',
        component: 'src/routes/Geo/Geo'
      },
      {
        path: '/photos',
        component: 'src/routes/Photos/Photos'
      },
      {
        path: '/memories',
        component: 'src/routes/Memories/Memories'
      },
      {
        path: '/timetables/bus',
        component: 'src/routes/Bus/Bus'
      },
      {
        is404: true,
        component: 'src/routes/NotFound'
      }
    ]
  }
}
