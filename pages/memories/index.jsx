import path from 'path'
import Head from 'next/head'
import Link from 'next/link'
import 'react-image-gallery/styles/css/image-gallery.css'

import mainData from '../../data/main'

import getAllFilesIds from '../../lib/getAllFilesIds'
import getFileData from '../../lib/getFileData'

import { PostLayout } from '../../layouts'

const memoryDirectory = path.join(process.cwd(), 'data', 'memories')
const pageTitle = `Истории`
const Memory = function ({ data }) {
  return (
    <li className="event-item">
      <div>
        {data.memory_date}
      </div>
      <div>
        {data.title}
      </div>
    </li>
  )
}

export async function getStaticProps () {
  const allMemoriesData = await Promise.all(
    getAllFilesIds(memoryDirectory)
      .map(fileId => getFileData(path.join(memoryDirectory, `${fileId}.md`))),
  )

  return {
    props: {
      allMemoriesData,
    },
  }
}

export default function MemoriesPage ({ allMemoriesData }) {
  return (
    <PostLayout>
      <Head>
        <title>{mainData.title}: ${pageTitle}</title>
      </Head>
      <article>
        <h1 className="page__header">{pageTitle}</h1>

        <nav>
          <ul>
            {allMemoriesData.map(({ metaData }) => <Memory key={metaData.title} data={metaData} />)}
          </ul>
        </nav>
      </article>
    </PostLayout>
  )
}
