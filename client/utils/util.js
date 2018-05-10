const ONE_DAY = 86400000
const formatTime = (date, sym = '/', option = {}) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  let result = [year, month, day].map(formatNumber).join(sym)
  if (option.complete) {
    result += [hour, minute, second].map(formatNumber).join(':')
  }

  return result
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


// 显示繁忙提示
var showBusy = text => wx.showToast({
  title: text,
  icon: 'loading',
  duration: 10000
})

// 显示成功提示
var showSuccess = text => wx.showToast({
  title: text,
  icon: 'success'
})

// 显示失败提示
var showModel = (title, content) => {
  wx.hideToast();

  wx.showModal({
    title,
    content: JSON.stringify(content),
    showCancel: false
  })
}

const getDayStart = time => {
  const date = time ? new Date(time) : new Date()
  return new Date(date.setHours(0, 0, 0, 0))
}

const transferRange = str => {
  const dayStartStamp = Date.prototype.getTime.call(getDayStart())
  let result

  switch (str) {
    case 'Today':
      // 如果设为当天凌晨，那么凌晨刷就没数据了，所以改为过去24小时
      result = new Date().getTime() - ONE_DAY
      break;
    case 'Last week':
      result = dayStartStamp - ONE_DAY * 7
      break;
    case 'Last month':
      result = dayStartStamp - ONE_DAY * 30
      break;
    case 'Last year':
      result = dayStartStamp - ONE_DAY * 365
      break;
  }
  console.log(formatTime(new Date(result), '-'))
  return formatTime(new Date(result), '-')
}

const transferTimeToStr = time => {
  if (!time) throw new Error('transferTimeToStr方法需要传入time')
  const dayStart = getDayStart(time)
  const diffDay = Math.floor(new Date().getTime() - new Date(time).getTime()) / ONE_DAY
  let result = ''
  switch (diffDay) {
    case 0:
      result = 'Today'
      break
    case 1:
      result = 'Last day'
      break
    case 2:
      result = 'Last 2 day'
      break
    case 3:
      result = 'Last 3 day'
      break
    default:
      result = formatTime(dayStart, '-')
  }
  return result
}

module.exports = {
  formatTime,
  showBusy,
  showSuccess,
  showModel,
  transferRange,
  getDayStart,
  transferTimeToStr
}
