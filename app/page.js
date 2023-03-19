import Link from 'next/link'

export default function Home () {
  return (
      <section className="ui text container">
        <h1>О проекте</h1>
        <article className="ui container">
          <p>Кречеви́цы — микрорайон Великого Новгорода, до 2004 года — посёлок городского типа.</p>
          <br/>
          <p>
            В Кречевицах переплелась многовековая история России — от
            <a href="https://ru.wikipedia.org/wiki/Военные_поселения#Военные_поселения_в_Новгородской_губернии">военных поселений Аракчеева</a> и <a
            href="https://ru.wikipedia.org/wiki/Драгуны#История_появления_драгун">Драгунского полка</a> до многих значимых событий
            20 века — 110 авиаполк выполнял задания
            в Алжире, Египте, Сирии, Ираке, <a href="https://ru.wikipedia.org/wiki/Афганская_война_(1979—1989)">Афганистане</a>, Анголе, <a
            href="https://ru.wikipedia.org/wiki/Первая_чеченская_война">первой</a>/<a
            href="https://ru.wikipedia.org/wiki/Вторая_чеченская_война">второй</a> Чеченской войне, <a
            href="https://ru.wikipedia.org/wiki/Война_в_Грузии_(2008)">Южной Осетии</a>.
          </p>
          <br/>
          <p>
            В <Link href="app/memories/2009-10-14-regiment-disbandment">2009 полк был расформирован</Link>,
            много лет <Link href="/app/airfield">обсуждаются проекты переоборудования аэродрома</Link> под гражданские самолеты.
          </p>
          <br/>
          <p>Кречевицах существует филиал <a href="http://www.pegas-center.ru/">авиаклуба «Пегас»</a> для малой авиации.</p>
        </article>
      </section>
  )
}
