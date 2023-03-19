import Head from 'next/head'
import path from 'path'
import getAllFilesIds from '../../../lib/getAllFilesIds'
import parseMarkdownFile from '../../../lib/parseMarkdownFile'

const memoryDirectory = path.join(process.cwd(), 'data', 'memories')

export function generateStaticParams () {
  const paths = getAllFilesIds(memoryDirectory).map(path => ({ params: { slug: path } }))

  return {
    paths,
    fallback: false,
  }
}

export default async function MemoryPage ({ params: { slug } })   {
  const fileData = await parseMarkdownFile(path.join(memoryDirectory, `${slug}.md`))

  return (
    <>
      <Head>
        <title>{fileData.meta.date}: {fileData.meta.title}</title>
      </Head>
      <article>
        <h1>{fileData.meta.date}: {fileData.meta.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: fileData.html }} />
      </article>
    </>
  )
}
