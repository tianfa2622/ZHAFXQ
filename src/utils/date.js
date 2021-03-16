/**
 * 日期格式 ----> 2021-1-8 星期五 09:09:09
 */
export function getCurrentDate(Timestamp) {
  const myDate = new Date()
  const Year = myDate.getFullYear() // 年
  const Month = myDate.getMonth() + 1 // 月
  const Day = myDate.getDate() // 日
  const Hour = myDate.getHours() // 时
  const Min = myDate.getMinutes() // 分
  const seconds = myDate.getSeconds() // 秒
  let days = myDate.getDay() // 返回一周的某一天

  switch (days) {
    case 1:
      days = '星期一'
      break
    case 2:
      days = '星期二'
      break
    case 3:
      days = '星期三'
      break
    case 4:
      days = '星期四'
      break
    case 5:
      days = '星期五'
      break
    case 6:
      days = '星期六'
      break
    case 0:
      days = '星期日'
      break
  }
  let str
  if (Timestamp) {
    str =
      Year +
      '-' +
      zeroFill(Month) +
      '-' +
      zeroFill(Day) +
      ' ' +
      zeroFill(Hour) +
      ':' +
      zeroFill(Min) +
      ':' +
      zeroFill(seconds)
  } else {
    str =
      Year + '年' + zeroFill(Month) + '月' + zeroFill(Day) + '日' + ' ' + days
    // +
    // " " +
    // zeroFill(Hour) +
    // ":" +
    // zeroFill(Min) +
    // ":" +
    // zeroFill(seconds);
  }

  return str
}

function zeroFill(num) {
  return Number(num) < 10 ? '0' + num : num
}

// 计算有效期
// date： 日期字符串yyyy-MM-dd，如：2016-02-14
// years：年份，正整数字符串
// 返回日期字符串yyyy-MM-dd，如：2016-02-14
export function dateAddYear(date, years) {
  var now = new Date(date)
  var intYear = now.getFullYear() + parseInt(years)
  var intMonth = now.getMonth() + 1 // 正常的月份，
  var intDay = now.getDate() - 1 // 日期-1
  if (intDay === 0) {
    intMonth-- // 减少一个月
    if (intMonth === 0) {
      intYear-- // 0:减少一年
      intMonth = 12
      intDay = 31
    } else if (intMonth === 4 || intMonth === 6 || intMonth === 9 || intMonth === 11) {
      intDay = 30 // 4,6,9,11:30天
    } else if (intMonth === 2) {
      intDay = 28 // 2:28/29
      if (intYear % 4 === 0) {
        intDay = 29
      }
    } else {
      intDay = 31 // 1,3,5,7,8,10,12 :31天
    }
  }

  var strMonth = (intMonth) < 10 ? '0' + (intMonth).toString() : (intMonth).toString()
  var strDay = (intDay) < 10 ? '0' + (intDay).toString() : (intDay).toString()
  var strEndDate = intYear + '-' + strMonth + '-' + strDay
  return strEndDate
}

/**
 * 获取"年-月-日"
 */
export function getDate() {
  var ddd = new Date()
  var month, day
  if (ddd.getMonth() < 9) {
    month = '0' + (ddd.getMonth() + 1)
  } else {
    month = (ddd.getMonth() + 1)
  }
  if (ddd.getDate() < 10) {
    day = '0' + ddd.getDate()
  } else {
    day = ddd.getDate()
  }
  var date = ddd.getFullYear() + '-' + month + '-' + day
  return date
}

/**
 * 获取"年-月-日 时：分：秒"
 */
export function getDatetime() {
  var ddd = new Date()
  var month, day, hours, minutes, seconds
  if (ddd.getMonth() < 9) {
    month = '0' + (ddd.getMonth() + 1)
  } else {
    month = (ddd.getMonth() + 1)
  }
  if (ddd.getDate() < 10) {
    day = '0' + ddd.getDate()
  } else {
    day = ddd.getDate()
  }
  if (ddd.getHours() < 10) {
    hours = '0' + ddd.getHours()
  } else {
    hours = ddd.getHours()
  }
  if (ddd.getMinutes() < 10) {
    minutes = '0' + ddd.getMinutes()
  } else {
    minutes = ddd.getMinutes()
  }
  if (ddd.getSeconds() < 10) {
    seconds = '0' + ddd.getSeconds()
  } else {
    seconds = ddd.getSeconds()
  }
  var datew = ddd.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
  return datew
}

/**
 * 获取"时：分：秒"
 */
export function hms() {
  var ddd = new Date()
  var hours, minutes, seconds
  if (ddd.getHours() < 10) {
    hours = '0' + ddd.getHours()
  } else {
    hours = ddd.getHours()
  }
  if (ddd.getMinutes() < 10) {
    minutes = '0' + ddd.getMinutes()
  } else {
    minutes = ddd.getMinutes()
  }
  if (ddd.getSeconds() < 10) {
    seconds = '0' + ddd.getSeconds()
  } else {
    seconds = ddd.getSeconds()
  }
  var datew = hours + ':' + minutes + ':' + seconds
  return datew
}
