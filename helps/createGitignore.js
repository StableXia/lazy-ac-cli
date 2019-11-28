const https = require('https');
const fs = require('fs');

const url = 'https://raw.githubusercontent.com/xiaotangdou/lazy-cli/master/templates/gitignore.tpl';

module.exports = function createGitignore(){
  https.get(url, function (res) {
    res.setEncoding('utf8');

    let rawData = '';

    res.on('data', (chunk) => {
      rawData += chunk;
    });
    res.on('end', () => {
      fs.writeFileSync('.gitignore',rawData)
    });
  }).on('error',function (e) {
    console.log(e)
  })
}