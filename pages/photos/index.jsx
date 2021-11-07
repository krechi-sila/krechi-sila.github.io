import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'
import unwrapImages from 'remark-unwrap-images'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import { PostLayout } from '../../layouts'

export async function getStaticProps () {
  const dataDirPath = path.join(process.cwd(), 'data', 'posts')
  const fileFullPath = path.join(dataDirPath, `photos.md`)
  const fileContents = fs.readFileSync(fileFullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .use(unwrapImages)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

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
        contentHtml,
        ...matterResult.data,
      },
    },
  }
}

export default function PhotosPage ({ pageData }) {
  return (
    <PostLayout>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      <article>
        <h1 className="page__header">{pageData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </article>

      <h2 className="ui header">Фото из архива выставки</h2>
      <ImageGallery items={pageData.images} />

      <h2 className="ui header">Фото из архива автора сайта</h2>
      <ImageGallery items={pageData.personalArchiveImages} />
    </PostLayout>
  )
}
