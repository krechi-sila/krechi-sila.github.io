import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

/**
 * @param {String} path
 * @returns {Promise<{metaData: {[p : String] : any}, html: String}>}
 */
export default async function getFileData (path) {
  const fileContent = fs.readFileSync(path, 'utf-8')
  const matterResult = matter(fileContent)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  
  return {
    html: processedContent.toString(),
    metaData: matterResult.data,
  }
}
