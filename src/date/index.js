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

/**
 * 获取指定时间日期距离现在的间隔
 * @param {Date} date 日期
 * @returns string 返回距离当前时间的间隔
 */
export const getBeforeDate = (date) => {
    const ms = Date.now() - date.getTime();
    const seconds = Math.round(ms / 1000);
    const minutes = Math.round(ms / 60000);
    const hours = Math.round(ms / 3600000);
    const days = Math.round(ms / 86400000);
    const months = Math.round(ms / 2592000000);
    const years = Math.round(ms / 31104000000);

    switch (true) {
        case seconds < 60:
          return `${seconds}秒前"`;
        case minutes < 60:
          return `${minutes}分钟前"`;
        case hours < 24:
          return `${hours}小时前"`;
        case days < 30:
          return `${days}天前`;
        case months < 12:
          return `${months}月前`;
        default:
          return `${years}年前`;
      }
}

export default {
    formatDateTime,
    getBeforeDate
}
