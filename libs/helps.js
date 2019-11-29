const express = require('express')
const path = require('path')
const mime = require('mime')
const fs = require('fs')
const util = require('util')
const accessFile = util.promisify(fs.access)
const fsMkdir = util.promisify(fs.mkdir)

module.exports.resolveFromRoot = function(...relativePath) {
  return path.resolve(__dirname, '..', '..', ...relativePath)
}

module.exports.serveStatic = function(staticPath) {
  return express.static(module.exports.resolveFromRoot(staticPath))
}

module.exports.getMimeType = function(filePath) {
  const extname = path.extname(filePath)
  return extname ? mime.getType(extname.slice(1)) : ''
}

module.exports.filePathExist = function(filePath) {
  return accessFile(filePath, fs.constants.F_OK).then(() => true, () => false)
}

module.exports.createDir = function(filePath) {
  return fsMkdir(filePath).then(() => true, () => false)
}

module.exports.pickFields = function(obj, ...keys) {
  const result = {}
  keys.forEach(k => {
    result[k] = obj[k]
  })
  return result
}

module.exports.createStream = function(path, options = {}) {
  return fs.createReadStream(path, options)
}
