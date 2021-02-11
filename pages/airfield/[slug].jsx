import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import { PostLayout } from '../../layouts'
import getAllFilesIds from '../../lib/getAllFilesIds'
import getFileData from '../../lib/getFileData'

const memoryDirectory = path.join(process.cwd(), 'data', 'airfield')

export function getStaticPaths () {
  const paths = getAllFilesIds(memoryDirectory).map(path => ({ params: { slug: path } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps ({ params }) {
  const fileData = await getFileData(path.join(memoryDirectory, `${params.slug}.md`))
  return {
    props: {
      allMemoriesData: fileData,
    },
  }
}

export default function GovernmentPromises ({ allMemoriesData }) {
  return (
    <PostLayout>
      <Head>
        <title>{allMemoriesData.metaData.date}: {allMemoriesData.metaData.title}</title>
      </Head>

      <div><Link href="/airfield"><a style={{ position: 'fixed', fontSize: '3em', margin: '-0.1em 0 0 -1em' }}>↑</a></Link></div>
      <time style={{ display: 'block', margin: '0 0 1em 0', fontSize: '3em' }}>{allMemoriesData.metaData.date}</time>
      
      
      <article>
        <div dangerouslySetInnerHTML={{ __html: allMemoriesData.html }} />
      </article>
    </PostLayout>
  )
}

