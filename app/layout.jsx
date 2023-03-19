import Head from 'next/head'
import {
  CounterYandex,
  Header,
} from '../components'
import mainData from '../data/main'

import pageLayoutStyles from './layout.module.css'

export default function RootLayout ({ children }) {
  return (
    <html>
    <body>
    <div className={pageLayoutStyles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="yandex-verification" content="4c16862f72d07481" />
        <meta
          name="description"
          content={mainData.description}
        />
        <meta name="og:title" content={mainData.title} />
        <title>{mainData.title}</title>
      </Head>

      <Header />

      <main>{children}</main>
    </div>

    <footer className="footer">
        <span className="copyright footer__item">
          <a
            href="https://web.archive.org/web/20040528031859/http://krechi-sila.narod.ru/">2004</a> — {(new Date()).getFullYear()},{' '}
          <a href="//metrika.yandex.ru/stat/?id=414633">
            Кречевицы в сети
          </a>
        </span>
      <span
        className="feedback footer__item">
          Пишите:{' '}
        <a href="mailto:krechi-sila@yandex.ru">
            krechi-sila@yandex.ru
          </a>
        </span>
      <span className="footer__item">Открытые исходники:{' '}
        <a
          href="https://github.com/krechi-sila/krechi-sila.github.io"
          target="_blank"
          rel="noreferrer"
        >github.com/krechi-sila/krechi-sila.github.io</a>
        </span>
    </footer>

    <CounterYandex />
    </body>
    </html>
  )
}
