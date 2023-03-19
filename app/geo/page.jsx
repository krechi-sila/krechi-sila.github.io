import Head from 'next/head'

import parseMarkdownFile from '../../lib/parseMarkdownFile'

export async function getStaticProps () {
  const pageData = await parseMarkdownFile('./data/pages/geo.md')

  return {
    props: {
      pageData: {
        contentHtml: pageData.html,
        title: pageData.meta.title,
      },
    },
  }
}

export default function GeoPage ({ pageData }) {
  return (
    <>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      <article>
        <h1 className="page__header">{pageData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </article>
    </>
  )
}
