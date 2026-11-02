# Сайт Кречевиц

## История версий
- [9 сентября 2020](https://web.archive.org/web/20200909013213/https://krechi-sila.github.io/)
- [9 ноября 2017](https://web.archive.org/web/20171109080811/https://krechi-sila.github.io/)
- [11 февраля 2017](https://web.archive.org/web/20170211025138/http://krechi-sila.narod.ru:80/)
- [30 июля 2014](https://web.archive.org/web/20140730172433/http://krechi-sila.narod.ru:80/)
- [27 ноября 2012](https://web.archive.org/web/20121127234516/http://www.krechi-sila.narod.ru:80/)
- [24 февраля 2009](https://web.archive.org/web/20090224194006/http://krechi-sila.narod.ru:80/)
- [15 мая 2007](https://web.archive.org/web/20070515143131/http://krechi-sila.narod.ru/)
- [28 мая 2004](https://web.archive.org/web/20040528031859/http://krechi-sila.narod.ru/)

## Технические подробности
- Построено на основе фреймворка [nextjs](https://nextjs.org/).
- Хостинг: https://pages.github.com/
- CI/CD: https://github.com/features/actions


## Копирайт
2003 — 2024, <br /> Кречевицы в сети.
<br />
<br />
Пишите: [krechi-sila@yandex.ru](mailto:krechi-sila@yandex.ru)

## Кречевицы сквозь века

Историческая летопись доступна по адресу `/chronicle/index.html` после сборки и
экспорта сайта. Ссылка «Сквозь века» добавлена в основное меню.

Исходные HTML, CSS, JavaScript, архивные изображения и локальная копия Leaflet
находятся в `public/chronicle/`. Это самостоятельный статический раздел:
существующие страницы Next.js продолжают работать по прежним адресам.

- 10 исторических глав и 9 подэпох послевоенного времени.
- Архив из 14 материалов, расшифровки, поиск, просмотр сканов с увеличением.
- Параллельная хронология Кречевиц и страны, люди и семьи.
- Отдельная книга об аэродроме и 16 датированных записей о гражданском проекте.
- Карта с тремя точками и фильтром эпох; памятник Ил-28 ожидает проверки координат.

Содержание и даты отражают версию от 11 октября 2026 года; последние проверенные
сообщения о реконструкции аэродрома датированы 20 сентября 2026 года.
Страница «Источники и принципы» и ссылки возле текста фиксируют происхождение
сведений. Архив обработан частично; неподтверждённые сведения отмечены.

### Локальная проверка

```sh
npm install
npm run build
npm run export
python3 -m http.server 8000 --directory out
```

Откройте `http://localhost:8000/chronicle/index.html`. Прямые разделы:
`#airfield`, `#archive`, `#timeline`, `#map`, `#people`.

Для карты нужна загрузка тайлов OpenStreetMap; Google Fonts имеют системные
замены. Данные летописи: `data.js`, `expansion.js`, `airfield.js`, `maps.js`;
представление: `app.js` и `style.css`.

Workflow проверяет pull request сборкой и экспортом. Публикация в `gh-pages`
выполняется только при push в `dev`, после принятия изменений.
