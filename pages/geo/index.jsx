import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'
import unwrapImages from 'remark-unwrap-images'
import { PostLayout } from '../../layouts'

export async function getStaticProps () {
  const dataDirPath = path.join(process.cwd(), 'data', 'posts')
  const fileFullPath = path.join(dataDirPath, `geo.md`)
  const fileContents = fs.readFileSync(fileFullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .use(unwrapImages)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    props: {
      pageData: {
        contentHtml,
        ...matterResult.data,
      },
    },
  }
}

export default function GeoPage ({ pageData }) {
  return (
    <PostLayout>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      <article>
        <h1 className="page__header">{pageData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </article>
    </PostLayout>
  )
}
