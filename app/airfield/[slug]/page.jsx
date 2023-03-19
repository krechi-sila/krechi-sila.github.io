import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import getAllFilesIds from '../../../lib/getAllFilesIds'
import parseMarkdownFile from '../../../lib/parseMarkdownFile'

const memoryDirectory = path.join(process.cwd(), 'data', 'airfield')

export function generateStaticParams () {
  const paths = getAllFilesIds(memoryDirectory).map((path) => ({
    params: { slug: path },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default async function GovernmentPromises ({ params: { slug } }) {
  const fileData = await parseMarkdownFile(
    path.join(memoryDirectory, `${slug}.md`),
  )

  return (
    <>
      <Head>
        <title>
          {fileData.meta.date}: {fileData.meta.title}
        </title>
      </Head>

      <div>
        <Link
          href="/app/airfield"
          style={{
            position: 'fixed',
            fontSize: '3em',
            margin: '-0.1em 0 0 -1em',
          }}>

          ↑

        </Link>
      </div>
      <time style={{ display: 'block', margin: '0 0 1em 0', fontSize: '3em' }}>
        {fileData.meta.date}
      </time>

      <article>
        <div dangerouslySetInnerHTML={{ __html: fileData.html }} />
      </article>
    </>
  )
}
