/**
 * 日期格式 ----> 2021-1-8 星期五 09:09:09
 */
export function getCurrentDate() {
  let myDate = new Date();
  let Year = myDate.getFullYear(); // 年
  let Month = myDate.getMonth() + 1; // 月
  let Day = myDate.getDate(); // 日
  let Hour = myDate.getHours(); // 时
  let Min = myDate.getMinutes(); // 分
  let seconds = myDate.getSeconds(); // 秒
  let days = myDate.getDay(); // 返回一周的某一天

  switch (days) {
    case 1:
      days = "星期一";
      break;
    case 2:
      days = "星期二";
      break;
    case 3:
      days = "星期三";
      break;
    case 4:
      days = "星期四";
      break;
    case 5:
      days = "星期五";
      break;
    case 6:
      days = "星期六";
      break;
    case 0:
      days = "星期日";
      break;
  }
  let str =
    Year +
    "年" +
    zeroFill(Month) +
    "月" +
    zeroFill(Day) +
    "日" +
    " " +
    days +
    " " +
    zeroFill(Hour) +
    ":" +
    zeroFill(Min) +
    ":" +
    zeroFill(seconds);

  return str;
}

function zeroFill(num) {
  return Number(num) < 10 ? "0" + num : num;
}
