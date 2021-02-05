import path from 'path'
import { parseISO, getDate, getMonth, getYear } from 'date-fns'
import Head from 'next/head'
import 'react-image-gallery/styles/css/image-gallery.css'

import mainData from '../../data/main'

import getAllFilesIds from '../../lib/getAllFilesIds'
import getFileData from '../../lib/getFileData'

import { PostLayout } from '../../layouts'
import { Memory } from '../../components'

const memoryDirectory = path.join(process.cwd(), 'data', 'memories')
const pageTitle = `Истории`

export async function getStaticProps () {
  const allMemoriesData = await Promise.all(
    getAllFilesIds(memoryDirectory)
      .map(async (fileId) => {
        const fileData = await getFileData(path.join(memoryDirectory, `${fileId}.md`))
        fileData.metaData.slug = `${fileId}`
        const memory_date = parseISO(fileData.metaData.memory_date)
        
        fileData.metaData.memory_date_parsed = {
          year: getYear(memory_date),
          month: getMonth(memory_date),
          day: getDate(memory_date)
        }
        return {
          ...fileData,
        }
      }),
  )

  return {
    props: {
      allMemoriesData: allMemoriesData.sort((prev, next) => next.metaData.memory_date_parsed.year - prev.metaData.memory_date_parsed.year),
    },
  }
}

export default function MemoriesPage ({ allMemoriesData }) {
  const groupedMemories = allMemoriesData.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue.metaData.memory_date_parsed.year]) {
      accumulator[currentValue.metaData.memory_date_parsed.year].push(currentValue)
    } else {
      accumulator[currentValue.metaData.memory_date_parsed.year] = [currentValue]
    }

    return accumulator
  }, {})
  
  return (
    <PostLayout>
      <Head>
        <title>{mainData.title}: ${pageTitle}</title>
      </Head>
      
      <article>
        <h1 className="page__header">{pageTitle}</h1>

        <nav>
          <ul>
            {
              Object.keys(groupedMemories).map(year => (
                <li key={year}>
                  <time>{year}</time>
                  {groupedMemories[year].map(memory => <Memory data={memory.metaData} />)}
                </li>
              ))
            }
          </ul>
        </nav>
      </article>
      
    </PostLayout>
  )
}
