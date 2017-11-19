import React from 'react'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer">
      <span className="copyright footer__item">
        2003 — 2017, <a href="//metrika.yandex.ru/stat/?id=414633">Кречевицы в сети</a>
      </span>
      <span className="feedback footer__item">
        Пишите: <a href="mailto:krechi-sila@yandex.ru">krechi-sila@yandex.ru</a>
      </span>
    </footer>
  )
}

export default Footer
