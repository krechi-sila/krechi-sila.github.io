import fs from 'fs'
import path from 'path'
import {
  parseISO,
  getDate,
  getMonth,
  getYear,
} from 'date-fns'
import Head from 'next/head'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import mainData from '../../data/main'

import getAllFilesIds from '../../lib/getAllFilesIds'
import getFileData from '../../lib/getFileData'

import { PostLayout } from '../../layouts'

const memoryDirectory = path.join(process.cwd(), 'data', 'airfield')
const pageTitle = `Аэродром: хроника`

export async function getStaticProps () {
  const allArticles = await Promise.all(
    getAllFilesIds(memoryDirectory)
      .map(async (fileId) => {
        const fileData = await getFileData(path.join(memoryDirectory, `${fileId}.md`))
        fileData.metaData.slug = `${fileId}`
        const date = parseISO(fileData.metaData.date)

        fileData.metaData.date_parsed = {
          year: getYear(date),
          month: getMonth(date),
          day: getDate(date),
        }
        return {
          ...fileData,
        }
      }),
  )

  const imagesDirPath = path.join(process.cwd(), 'public', 'images', 'airfield', 'scheme')
  const schemesImages = fs.readdirSync(imagesDirPath)
    .map((fileName => {
      return {
        original: `../images/airfield/scheme/${fileName}`,
        thumbnail: `../images/airfield/scheme/${fileName}`,
      }
    }))

  return {
    props: {
      allArticles: allArticles.sort(
        (articlePrev, articleNext) => articleNext.metaData.date_parsed.year - articlePrev.metaData.date_parsed.year),
      schemesImages,
    },
  }
}

export default function AirfieldPage ({ allArticles, schemesImages }) {
  return (
    <PostLayout>
      <Head>
        <title>{mainData.title}: ${pageTitle}</title>
      </Head>

      <div className="airfieldPage">

        <h3>Хроника реконструкции</h3>
        <ul style={{
          width: '150%',
          margin:' 0px 0 0 -16.1%',
          fontSize: '0.8em',
          listStyle: 'none'
        }}>
          {allArticles.map(article => {
            return (
              <li key={article.metaData.slug}>
                <time style={{ fontSize: '1.1em'}} dateTime={article.metaData.date}>{article.metaData.date_parsed.year}</time>
                {' — '} 
                <a href={`/airfield/${article.metaData.slug}`}>
                  {article.metaData.title}
                </a>
              </li>
            )
          })}
        </ul>

        <h3>Информация об Аэродроме</h3>
        <figure>
          <blockquote
            cite="https://news.novgorod.ru/theme/%D0%90%D1%8D%D1%80%D0%BE%D0%BF%D0%BE%D1%80%D1%82+%D0%9A%D1%80%D0%B5%D1%87%D0%B5%D0%B2%D0%B8%D1%86%D1%8B/">
            <p>
              Аэропорт Кречевицы — несостоявшийся гражданский аэропорт Великого Новгорода.
              Уже много лет региональные власти обещают открыть аэропорт и начать регулярные авиационные перевозки.
              Но пока аэропорт нерегулярно используется лишь малой авиацией.
            </p>
          </blockquote>
          <figcaption>— «Новгород.ру», <cite><a href="https://news.novgorod.ru/theme/Аэропорт+Кречевицы/">news.novgorod.ru/theme/Аэропорт+Кречевицы</a></cite></figcaption>
          
        </figure>
        <p>
          <a href="http://portal.nov.ru/portal/item/6792-aeroport-v-krechevitsah-prozhekty-i-realii.html">
            <img src="./images/airfield/Aerodrom_Krechevitsy_5.jpg"
              alt="Клуб «Пегас» на территории аэродрома Кречевицы" />
          </a>
          Клуб «Пегас» на территории аэродрома Кречевицы
        </p>
        <figure>
          <blockquote cite="http://www.novgorodtransavia.ru/istoricheskaya-spravka.html">
            <p>
              В 2014 году аэродром был передан в собственность Новгородской области.
              В настоящее время площадка обустраиваемого аэродрома размещается в границах землеотвода аэродрома «Кречевицы»
              в 14 км северо-восточнее центра города Великого Новгорода.
              Аэродром имеет статус посадочной площадки для осуществления взлета и посадки в дневных простых метеоусловиях.
              Регулярные пассажирские и грузовые перевозки не осуществляются.
            </p>
            <p>
              Длина искусственной взлетно-посадочной полосы составляет 2000 м. при ширине 48 м.
              Кроме того, аэродром включает в себя магистральную рулежную дорожку, круговую рулежную дорожку,
              сеть соединительных рулежных дорожек шириной 16 м и перрон для стоянки воздушных судов.
              Объекты светосигнального и радиотехнического оборудования отсутствуют.
            </p>
            <p>
              На аэродроме ведется работа по приему воздушных судов 3 класса и вертолетов всех типов.
            </p>
          </blockquote>
          <figcaption>— Государственное областное казенное учреждение «НовгородТрансАвиа», <cite>Историческая справка</cite>
          </figcaption>
          <a
            href="http://www.novgorodtransavia.ru/istoricheskaya-spravka.html">novgorodtransavia.ru/istoricheskaya-spravka.html</a>
        </figure>

        <h3>Видео</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IIHU5m3ZM1I"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />

        <h3>Карта</h3>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <a
            href="https://yandex.ru/maps/org/aerodrom_krechevitsy/85020009820/"
            style={{ color: '#eeeeee', 'fontSize': '12px', position: 'absolute', top: '0px' }}
          >
            аэродром Кречевицы
          </a>
          <a
            href="https://yandex.ru/maps/24/veliky-novgorod/category/airfield/200992989394/?utm_medium=mapframe&utm_source=maps"
            style={{ color: '#eeeeee', 'fontSize': '12px', position: 'absolute', top: '14px' }}
          >Аэродром в Великом Новгороде</a>
          <iframe src="https://yandex.ru/map-widget/v1/-/CCUMZUg38C" width="560" height="400" frameBorder="1"
            allowFullScreen style={{ position: 'relative' }} />
        </div>

        <h3>Схемы</h3>
        <ImageGallery items={schemesImages} />

        <h3>Контакты</h3>
        <p>Администрация: <a href="mailto:738566@mail.ru">738566@mail.ru</a></p>
        <p>начальник ГОКУ <a href="http://www.novgorodtransavia.ru">«НовгородТрансАвиа»</a>: Трембицкий Сергей Сергеевич
        </p>
        <p>Старший авиационный начальник: <br /> Вячеслав Васильевич Гладышев <span>+79062015526</span></p>

        <h3>Инфраструктура, гостиница, такси</h3>
        <p>
          На территории в южной части посадочной площадки, примыкающей к магистральной РД базируется клуб «Пегас»
          Клубный домик (два 2-х местных номера), душ, туалет. Трансфер до города.
        </p>
        <a href="mailto:7151632@mail.ru">7151632@mail.ru</a>

        <h3>Материалы</h3>
        <ul>
          <li>ФАВТ: <a
            href="http://favt.gov.ru/aviaciya-obshego-haznacheniya-posadochnie-ploshadki-aerodromy/">посадочные площадки и аэродромы</a>
          </li>
          <li>Википедия: <a href="https://ru.wikipedia.org/wiki/Кречевицы_(аэропорт)">Кречевицы_(аэропорт)</a></li>
          <li>igor113: <a
            href="https://igor113.livejournal.com/735892.html">Открытие аэродрома Кречевицы 23102016 ч5 Кречевицы и путь домой....</a>
          </li>
          <li>flightradar24: <a href="https://www.flightradar24.com/58.65,31.23/10">карта</a></li>
          <li>urban3p: <a href="https://urban3p.com/vivarium/8661">В\Ч 21350-15, аэродром Кречевицы, 04.2019</a></li>
          <li>foursquare: <a href="http://4sq.com/QtSKpv">Аэропорт Кречевицы</a></li>
        </ul>
      </div>
    </PostLayout>
  )
}
