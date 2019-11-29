/***
 * @Author:xiawen
 * @Date:2019-11-28 21:54:23
 * @LastModifiedBy:xiawen
 * @Last Modified time:2019-11-28 21:54:23
 */

const Api = require('./api')

const UID = "U785B76FC9"
const KEY = "4r9bergjetiv1tsd"
const api = new Api(UID, KEY)

module.exports = async function(city = 'ip') {
    try {
        return await Promise.all([api.getWeatherNow(city), api.getSuggestion(city), api.getDaily(city)])
    } catch (err) {
        throw err
    }
}