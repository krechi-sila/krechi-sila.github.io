import Head from 'next/head'
import path from 'path'
import { PagesLayout } from '../../layouts'
import getAllFilesIds from '../../lib/getAllFilesIds'
import parseMarkdownFile from '../../lib/parseMarkdownFile'
import mainData from '../../data/main'

const peopleDirectory = path.join(process.cwd(), 'data', 'people')

export function getStaticPaths () {
  const paths = getAllFilesIds(peopleDirectory).map((fileId) => ({
    params: { slug: fileId },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps ({ params }) {
  const fileData = await parseMarkdownFile(path.join(peopleDirectory, `${params.slug}.md`))

  return {
    props: {
      person: {
        title: fileData.meta.title,
        years: fileData.meta.years || null,
        role: fileData.meta.role || null,
        image: fileData.meta.image || null,
        html: fileData.html,
      },
    },
  }
}

export default function PersonPage ({ person }) {
  return (
    <PagesLayout>
      <Head>
        <title>{mainData.title}: {person.title}</title>
      </Head>
      <article>
        <h1>{person.title}</h1>
        {(person.role || person.years) && (
          <p style={{ color: '#555' }}>
            {[person.role, person.years].filter(Boolean).join(' · ')}
          </p>
        )}
        {person.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={person.image}
            alt={person.title}
            loading="lazy"
            style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem' }}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: person.html }} />
      </article>
    </PagesLayout>
  )
}
