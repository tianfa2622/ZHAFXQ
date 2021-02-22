import XLSX from 'xlsx'

/**
 * 导出json数据为Excel表格的xlsx文件
 * @param {array} jsonData 需要导出的数据
 * @param {object} headKey 需要导出的字段与字段名的映射
 * @param {string} fileName 导出的文件名
 */
export function ExportToExcel(jsonData, headKey, fileName) {
  let data
  if (headKey) {
    data = filter(jsonData, headKey)
  } else {
    data = jsonData
  }
  const workbook = XLSX.utils.book_new()
  const workSheet = XLSX.utils.json_to_sheet(data)
  XLSX.utils.book_append_sheet(workbook, workSheet, 'Sheet1')
  XLSX.writeFile(workbook, `${fileName}.xlsx`)
}

function filter(jsonData, headKey) {
  return jsonData.map(data => {
    const res = {}
    for (const key in headKey) {
      res[headKey[key]] = data[key]
    }
    return res
  })
}
