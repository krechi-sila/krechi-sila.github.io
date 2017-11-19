const ghpages = require('gh-pages')

ghpages.publish(
  'dist',
  {
    branch: 'master'
  },
  (result) => {
    console.log('deployed!'); // eslint-disable-line
  }
)
