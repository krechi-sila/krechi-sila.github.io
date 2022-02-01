import Head from 'next/head'
import path from 'path'
import { PagesLayout } from '../../layouts'
import getAllFilesIds from '../../lib/getAllFilesIds'
import parseMarkdownFile from '../../lib/parseMarkdownFile'

const memoryDirectory = path.join(process.cwd(), 'data', 'memories')

export function getStaticPaths () {
  const paths = getAllFilesIds(memoryDirectory).map(path => ({ params: { slug: path } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps ({ params }) {
  const fileData = await parseMarkdownFile(path.join(memoryDirectory, `${params.slug}.md`))
  return {
    props: {
      allMemoriesData: {
        title: fileData.meta.title,
        date: fileData.meta.date,
        html: fileData.html,
      },
    },
  }
}

export default function MemoryPage ({ allMemoriesData }) {
  return (
    <PagesLayout>
      <Head>
        <title>{allMemoriesData.date}: {allMemoriesData.title}</title>
      </Head>
      <article>
        <h1>{allMemoriesData.date}: {allMemoriesData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: allMemoriesData.html }} />
      </article>
    </PagesLayout>
  )
}
