/***
 * @Author:xiawen
 * @Date:2019-11-28 19:55:45
 * @LastModifiedBy:xiawen
 * @Last Modified time:2019-11-28 19:55:45
 */

const request = require('request-promise')
const fs = require('fs')

module.exports = async function downloadTemplate(url, filePath){
  try {
    const res = await request({ method: 'GET', url })
    fs.writeFileSync(filePath, res, { encoding: 'utf8' })
    return true
  } catch (err) {
    throw err
  }
}
