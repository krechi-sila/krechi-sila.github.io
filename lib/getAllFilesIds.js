import fs from 'fs'

/**
 * @param {String} path
 * @param {String} [ext='md']
 * @returns {string[]}
 */
export default function (path, ext = 'md') {
  const fileNames = fs.readdirSync(path)

  return fileNames.map(name => name.replace(/\.md$/, ''))
}
