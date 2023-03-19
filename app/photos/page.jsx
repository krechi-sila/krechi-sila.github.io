import fs from 'fs'
import Head from 'next/head'
import path from 'path'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import parseMarkdownFile from '../../lib/parseMarkdownFile'

export async function getStaticProps () {
  const dataDirPath = path.join(process.cwd(), 'data', 'pages')
  const fileFullPath = path.join(dataDirPath, `photos.md`)
  const pageData = await parseMarkdownFile(fileFullPath)
  const imagesDirPath = path.join(process.cwd(), 'public', 'images', 'album-1')
  const images = fs.readdirSync(imagesDirPath)
    .map((fileName => {
      return {
        original: `../images/album-1/${fileName}`,
        thumbnail: `../images/album-1/${fileName}`,
      }
    }))

  const personalArchiveImagesDirPath = path.join(process.cwd(), 'public', 'images', 'album-personal-archive')
  const personalArchiveImages = fs.readdirSync(personalArchiveImagesDirPath)
    .map((fileName => {
      return {
        original: `../images/album-personal-archive/${fileName}`,
        thumbnail: `../images/album-personal-archive/${fileName}`,
      }
    }))

  return {
    props: {
      pageData: {
        images,
        personalArchiveImages,
        title: pageData.meta.title,
        html: pageData.html,
      },
    },
  }
}

export default function PhotosPage ({ pageData }) {
  return (
    <>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      <article>
        <h1 className="page__header">{pageData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.html }} />
      </article>

      <h2 className="ui header">Фото из архива выставки</h2>
      <ImageGallery items={pageData.images} />

      <h2 className="ui header">Фото из архива автора сайта</h2>
      <ImageGallery items={pageData.personalArchiveImages} />
    </>
  )
}
