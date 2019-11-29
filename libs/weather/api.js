/***
 * @Author:xiawen
 * @Date:2019-11-28 21:54:35
 * @LastModifiedBy:xiawen
 * @Last Modified time:2019-11-28 21:54:35
 */

const crypto = require('crypto')
const querystring = require('querystring')
const request = require('request-promise')
const { weatherUrl } = require('../consts')

function Api(uid, secretKey) {
  this.uid = uid
  this.secretKey = secretKey
}

Api.prototype.getSignatureParams = function() {

  var params = {}
  params.ts = Math.floor((new Date()).getTime() / 1000) // 当前时间戳（秒）
  params.ttl = 300 // 过期时间 
  params.uid = this.uid // 用户ID

  // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串进行加密
  params.sig = crypto.createHmac('sha1', this.secretKey)
    .update(querystring.encode(params))
    .digest('base64') // 将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig

  return params
}

Api.prototype.getWeatherNow = function(location) {
  var params = this.getSignatureParams();
  params.location = location;

  // 将构造的 weatherUrl.baidu 直接在后端 server 内调用
  return request({
    url: weatherUrl.baidu + 'weather/now.json',
    qs : params,
    json : true
  })
}

Api.prototype.getSuggestion = function(location) {
  var params = this.getSignatureParams()
  params.location = location

  // 将构造的 weatherUrl.baidu 直接在后端 server 内调用
  return request({
    url: weatherUrl.baidu + 'life/suggestion.json',
    qs : params,
    json : true
  })
}

Api.prototype.getDaily = function(location) {
  var params = this.getSignatureParams()
  params.location = location

  // 将构造的 weatherUrl.baidu 直接在后端 server 内调用
  return request({
    url: weatherUrl.baidu + 'weather/daily.json',
    qs : params,
    json : true
  })
}

module.exports = Api
