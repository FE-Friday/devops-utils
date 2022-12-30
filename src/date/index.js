function addZero(num) {
    return num < 10 ? '0' + num : num.toString()
}

/**
 * 用于日期格式化
 * @param {*} date 日期
 * @returns 返回格式化日期
 */
export const formatDateTime = (date, format) => {
    if (!date) return ''
    const time = date instanceof Date ? date : new Date(date)
    const Y = time.getFullYear() + '-'
    const M = addZero(time.getMonth() + 1) + '-'
    const D = addZero(time.getDate())
    const h = addZero(time.getHours()) + ':'
    const m = addZero(time.getMinutes()) + ':'
    const s = addZero(time.getSeconds())
    if (format === 'yyyy-MM-dd') {
        return Y + M + D
    } else {
        return Y + M + D + ' ' + h + m + s
    }
}

export default {
    formatDateTime
}
