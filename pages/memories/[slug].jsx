import Head from 'next/head'
import mainData from '../../data/main'
import { PostLayout } from '../../layouts'

export default function MemoryPage ({ allMemoriesData }) {
  return (
    <PostLayout>
      <Head>
        <title>{mainData.title}</title>
      </Head>
      <article>
        <h1 className="page__header"></h1>
      </article>
    </PostLayout>
  )
}
