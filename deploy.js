const ghpages = require('gh-pages')

ghpages.publish(
  'dist',
  {
    branch: 'master'
  },
  () => {
    console.log('deployed!'); // eslint-disable-line
  }
)
