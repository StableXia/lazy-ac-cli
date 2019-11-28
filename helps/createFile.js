const https = require('https')
const fs = require('fs')

module.exports = function createFile(url, filePath){
  https.get(url, function (res) {
    let rawData = ''
    res.setEncoding('utf8')
    res.on('data', chunk => { rawData += chunk })
    res.on('end', () => { fs.writeFileSync(filePath, rawData)})
  }).on('error',function (e) {
    console.log(e)
  })
}
