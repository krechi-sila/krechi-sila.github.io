import { useEffect } from 'react'
import { Header } from 'semantic-ui-react'

import { PagesLayout } from '../layouts'

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
            height: '800',
          },
          239849,
        )
      }

    }

    document.body.appendChild(script)
  }, [])

  return (
    <PagesLayout home>
      <section className="ui text container">
        <Header as="h1">О проекте</Header>
        <article className="ui container">
          <p>Кречеви́цы — микрорайон Великого Новгорода, до 2004 года — посёлок городского типа.</p>
          <p>
            В Кречевицах переплелась многовековая история России — от военных поселений Аракчеева и Драгунского полка до многих значимых событий
            20 века — 110 авиаполк выполнял задания
            в Алжире, Египте, Сирии, Ираке, Афганистане, Анголе, первой/второй Чеченской войне, Южной Осетии.
          </p>
          <p>
            В 2009 полк был расформирован, аэродром хотели сделать гражданским, много лет были проекты с привлечением инвесторов, но как-то не заладилось.
          </p>
          <p>Кречевицах существует филиал <a href="http://www.pegas-center.ru/">авиаклуба «Пегас»</a> для малой авиации.</p>
        </article>
      </section>

      <Header as="h3">Группа Вконтакте</Header>
      <div className="vkVidget">
        <div id="vk_groups" />
      </div>
    </PagesLayout>
  )
}
