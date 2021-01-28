import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Alex Baumgertner'
const description = 'Кречевицы, Кречи, Кречи-сила, Krechi, Krechi-sila, Школа номер 15, школа № 15 имени Шпунякова, Кречевицы (аэропорт), 110 ВТАП'
export const siteTitle = 'Кречевицы — микрорайон Великого Новгорода'

export default function Layout ({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={description}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/krecevicy-flag.gif"
              className={`${styles.headerHomeImage}`}
              alt={'Флаг Кречевиц'}
            />
            <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/krecevicy-flag.gif"
                  className={`${styles.headerImage}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{siteTitle}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← На главную</a>
          </Link>
        </div>
      )}
      <footer className="footer">
        <span className="copyright footer__item">
          2003 — {(new Date()).getFullYear()}, 
          <a href="//metrika.yandex.ru/stat/?id=414633">
            Кречевицы в сети
          </a>
        </span>
        <span
          className="feedback footer__item">
          Пишите: 
          <a href="mailto:krechi-sila@yandex.ru">
            krechi-sila@yandex.ru
          </a>
        </span>
      </footer>
    </div>
  )
}
