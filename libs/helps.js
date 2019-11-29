const fs = require('fs')
const { promisify } = require('util')

const accessFile = promisify(fs.access)
const fsMkdir = promisify(fs.mkdir)

module.exports.filePathExist = function(filePath) {
  return accessFile(filePath, fs.constants.F_OK).then(() => true, () => false)
}

module.exports.createDir = function(filePath) {
  return fsMkdir(filePath).then(() => true, () => false)
}
