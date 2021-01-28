const ghpages = require('gh-pages')

ghpages.publish(
  'dist',
  {
    branch: 'main'
  },
  () => {
    console.log('deployed!'); // eslint-disable-line
  }
)
