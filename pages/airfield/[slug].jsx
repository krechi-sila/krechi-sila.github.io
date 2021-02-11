import Head from 'next/head'
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
      <article>
        <h1>{allMemoriesData.metaData.date}: {allMemoriesData.metaData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: allMemoriesData.html }} />
      </article>
    </PostLayout>
  )
}

