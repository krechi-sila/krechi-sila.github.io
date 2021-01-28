import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <h2 className={utilStyles.headingLg}>О проекте</h2>
        <article>
          <p>Всем привет!</p>

          <p>Это — некоммерческий проект в поддержку нашего любимого авиагородока Кречевицы (для друзей он просто — Кречи).</p>

          <p>Идея создать сайт о Кречах пришла к нам не случайно. Как-то в процессе создания одной странички потребовалась инфа про родной Городок,
            но утомительные поиски по всемирной ни к чему не привели.
            Нам это показалась несправедливым — умалчивать о существовании одного из прекраснейших мест на Земле — Кречевицах.
            Это был повод. Ну а коли есть повод... грех не выпить, то есть создать сайт. Вот собственно и все вступление.</p>
          <p>Таможенный контроль и КПП вы уже прошли. Теперь будьте смелее — и вперед по Кречам!!!</p>
        </article>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

        <h2 className={utilStyles.headingLg}>Статьи</h2>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
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
