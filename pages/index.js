import { useEffect } from 'react'
import { Header } from 'semantic-ui-react'
import { getSortedPostsData } from '../lib/posts'
import { PostLayout } from '../layouts'

export default function Home () {
  
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//vk.com/js/api/openapi.js?168'
    script.onload = function () {
      if (window.VK) {
        VK.Widgets.Group(
          'vk_groups',
          {
            mode: 2,
            wide: 0,
            width: '700',
            height: '800'
          },
          239849
        )
      }

    }

    document.body.appendChild(script)
  }, [])
  
  return (
    <PostLayout home>
      <section className="ui text container">
        <Header as="h1">О проекте</Header>
        <article className="ui container">
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
        </article>
      </section>

      <div className="vkVidget">
        <div id="vk_groups" />
      </div>
    </PostLayout>
  )
}

export async function getStaticProps () {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}
