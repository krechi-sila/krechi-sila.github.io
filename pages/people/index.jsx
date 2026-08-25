import path from 'path'
import Head from 'next/head'
import Link from 'next/link'

import mainData from '../../data/main'
import getAllFilesIds from '../../lib/getAllFilesIds'
import { PagesLayout } from '../../layouts'
import parseMarkdownFile from '../../lib/parseMarkdownFile'

const peopleDirectory = path.join(process.cwd(), 'data', 'people')
const pageTitle = 'Известные люди'

export async function getStaticProps () {
  const allPeopleData = await Promise.all(
    getAllFilesIds(peopleDirectory).map(async (fileId) => {
      const fileData = await parseMarkdownFile(path.join(peopleDirectory, `${fileId}.md`))

      return {
        slug: `${fileId}`,
        title: fileData.meta.title,
        years: fileData.meta.years || null,
        role: fileData.meta.role || null,
        image: fileData.meta.image || null,
      }
    }),
  )

  allPeopleData.sort((a, b) => a.title.localeCompare(b.title, 'ru'))

  return {
    props: {
      allPeopleData,
    },
  }
}

export default function PeoplePage ({ allPeopleData }) {
  return (
    <PagesLayout>
      <Head>
        <title>{mainData.title}: {pageTitle}</title>
      </Head>

      <article>
        <h1 className="page__header">{pageTitle}</h1>

        {allPeopleData.length === 0 ? (
          <p>Пока нет опубликованных записей.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {allPeopleData.map((person) => (
              <li key={person.slug} style={{ marginBottom: '1rem' }}>
                <Link href={`/people/${person.slug}`}>
                  {person.title}
                </Link>
                {(person.role || person.years) && (
                  <div style={{ color: '#555', fontSize: '0.9em' }}>
                    {[person.role, person.years].filter(Boolean).join(' · ')}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </article>
    </PagesLayout>
  )
}
