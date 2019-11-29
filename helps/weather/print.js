/***
 * @Author:xiawen
 * @Date:2019-11-29 12:31:28
 * @LastModifiedBy:xiawen
 * @Last Modified time:2019-11-29 12:31:28
 */

exports.printToday = function (data) {
    var todayData = data.results[0]
    var todayStr = "\n " + todayData.location.name.bold + "今天天气 ".bold + todayData.now.text.magenta 
        + " 当前温度 " + todayData.now.temperature.green + "℃".green 
        + "  更新时间 ".gray + todayData.last_update.replace("T", " ").replace("+08:00", " ").gray
    console.log(todayStr)
}

exports.printSuggestion = function (data) {
    var suggestion = data.results[0].suggestion
    console.log("\n 1.穿衣 ".bold + suggestion.dressing.brief.magenta)
    console.log(" 2.感冒 ".bold + suggestion.flu.brief.magenta)
    console.log(" 3.运动 ".bold + suggestion.sport.brief.magenta)
    console.log(" 4.旅游 ".bold + suggestion.travel.brief.magenta)
    console.log(" 5.洗车 ".bold + suggestion.car_washing.brief.magenta)
    console.log(" 6.紫外线".bold + suggestion.uv.brief.magenta)
}

exports.printDaily = function (data) {
    var daily = data.results[0].daily
    console.log()
    daily.forEach(function (data) {
        var str = " " + data.date.bold + " 白天 " + data.text_day.magenta+ " 晚上 " + data.text_night.magenta
        str += "  温度 " + data.low.blue + "℃".blue
        str += " ~ " + data.high.red + "℃".red
        str += "  风力 " + data.wind_scale.yellow + "级".yellow
        console.log(str)
    })
}
