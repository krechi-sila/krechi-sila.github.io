import * as matter from 'gray-matter'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export default async function parseMarkdownFile (path) {
  const matterResult = await matter.read(path)
  
  console.log("matterResult: ", matterResult); // eslint-disable-line

  const convertedData = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(matterResult.content)

  return {
    html: convertedData.value,
    meta: matterResult.data,
  }
}
