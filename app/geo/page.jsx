import Head from 'next/head'

import parseMarkdownFile from '../../lib/parseMarkdownFile'

export default async function GeoPage () {
  const pageData = await parseMarkdownFile('./data/pages/geo.md')

  return (
    <>
      <Head>
        <title>{pageData.meta.title}</title>
      </Head>
      <article>
        <h1 className="page__header">{pageData.meta.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.html }} />
      </article>
    </>
  )
}
