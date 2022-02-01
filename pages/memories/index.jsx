import path from 'path'
import {
  parseISO,
  getDate,
  getMonth,
  getYear,
} from 'date-fns'
import Head from 'next/head'
import 'react-image-gallery/styles/css/image-gallery.css'

import mainData from '../../data/main'
import getAllFilesIds from '../../lib/getAllFilesIds'
import { PagesLayout } from '../../layouts'
import { Memories } from '../../components'
import parseMarkdownFile from '../../lib/parseMarkdownFile'

const memoryDirectory = path.join(process.cwd(), 'data', 'memories')
const pageTitle = `Истории`

export async function getStaticProps () {
  const allMemoriesData = await Promise.all(
    getAllFilesIds(memoryDirectory).map(async (fileId) => {
      const fileData = await parseMarkdownFile(path.join(memoryDirectory, `${fileId}.md`))
      const memory_date = parseISO(fileData.meta.memory_date)

      return {
        slug: `${fileId}`,
        title: fileData.meta.title,
        memory_date: fileData.meta.memory_date,
        memory_date_parsed: {
          year: getYear(memory_date),
          month: getMonth(memory_date),
          day: getDate(memory_date),
        }
      }
    }),
  )

  return {
    props: {
      allMemoriesData,
    },
  }
}

export default function MemoriesPage ({ allMemoriesData }) {
  return (
    <PagesLayout>
      <Head>
        <title>{mainData.title}: ${pageTitle}</title>
      </Head>

      <article>
        <h1 className="page__header">{pageTitle}</h1>

        <Memories allMemoriesData={allMemoriesData} />
      </article>

    </PagesLayout>
  )
}
