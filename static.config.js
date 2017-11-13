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
      <link
        href="https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:400,900&amp;subset=cyrillic"
        rel="stylesheet" />
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
        component: 'src/routes/Home',
        getProps: () => ({
          title: 'Кречевицы',
          content: 'Всем привет!\n' +
          '\n' +
          'То, что вы видите — некоммерческий проект в поддержку нашего любимого авиагородока Кречевицы (для друзей он просто — Кречи).\n' +
          '\n' +
          'Идея создать сайт о Кречах пришла к нам не случайно. Как-то в процессе создания одной странички потребовалась инфа про родной Городок, но утомительные поиски по всемирной ни к чему не привели. Нам это показалась несправедливым — умалчивать о существовании одного из прекраснейших мест на Земле — Кречевицах. Это был повод. Ну а коли есть повод... грех не выпить, то есть создать сайт. Вот собственно и все вступление.\n' +
          '\n' +
          'Таможенный контроль и КПП вы уже прошли. Теперь будьте смелее — и вперед по Кречам!!!'
        })
      },
      {
        path: '/geo',
        component: 'src/routes/Geo',
        getProps: () => ({
          title: 'География',
          content: '«Кречевицы — посёлок городского типа в Новгородской области РСФСР. Расположен на р. Волхов, в 15 км к С. от Новгорода. Жители посёлка работают на предприятиях Новгорода.» — так об этом сообщает Советская Энциклопедия.\n' +
          '\n' +
          'Вот уже не первый десяток лет не существует РСФСР, и в Кречах тоже с тех пор многое изменилось. Жаль, не в лучшую сторону. Характерное для всей России явление — разруха, не обошла стороной и наш городок. Обветшали многие здания, некоторые из них вообще перестали существовать, несколько дорог превратились в просто направления. Яблоневый сад в центре городка без должного ухода одичал, да и осталось от него пара деревцев.\n' +
          '\n' +
          'Но все же, Кречевицы остаются по-прежнему красивым и относительно спокойным местом, с атмосферой скорее села, нежели города. Доступны все виды транспорта, кроме подземного — водный, железнодорожный, авиационный, автомобильный.\n' +
          '\n' +
          'В принципе, те 10–15 км, что отделяют Кречевицы от Великого Новгорода не вызывают существенных отличий в природе местности. Так что все, что относится к Новгороду верно и для Кречевиц, естественно с учетом масштабных различий.'
        })
      },
      {
        path: '/photos',
        component: 'src/routes/Photos',
        getProps: () => ({
          title: 'Фотоальбомы',
          content: [
            {
              link: 'https://mikhail.krivyy.com/tag/кречевицы/',
              title: 'Заметки Михаила Кривых о Кречевицах',
            },
            {
              link: 'https://picasaweb.google.com/111862233650145507273',
              title: 'Галерея пользователя Александр Харьков',
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
          ]
        })
      },
      {
        is404: true,
        component: 'src/routes/404'
      }
    ]
  }
}
