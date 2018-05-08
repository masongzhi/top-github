//index.js
//获取应用实例
const app = getApp()
const { repository_search_url } = require('../../api/api.js')
const config = require('../../config.js')
const { transferRange, transferTimeToStr } = require('../../utils/util.js')

Page({
  data: {
    page: 1,
    time: 'Last week',
    timeStr: transferRange('Last week'),
    language: 'JavaScript',
    languageStr: 'JavaScript',
    items: [],
    timeArr: ["Today", "Last week", "Last month", "Last year"],
    languageArr: [
      "All",
      "C#",
      "C++",
      "CSS",
      "CoffeeScript",
      "Go",
      "HTML",
      "Java",
      "JavaScript",
      "PHP",
      "Python"
    ],
    height: '',
    showPopup: false,
    popupMsg: ''
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)

    this.setData({
      page: 1,
      time: this.data.timeArr[e.detail.value],
      timeStr: transferRange(this.data.timeArr[e.detail.value])
    })
    // 调用getRepository
    this.getRepository()
  },
  bindLanguageChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      page: 1,
      languageStr: e.detail.value ? this.data.languageArr[e.detail.value] : '',
      language: this.data.languageArr[e.detail.value]
    })
    // 调用getRepository
    this.getRepository()
  },
  getRepository: function () {
    wx.showLoading({
      title: '加载中',
    })
    const that = this
    wx.request({
      url: config.service.repositorySearchUrl,
      data: {
        q: `created:>${that.data.timeStr} language:${that.data.language}`,
        sort: 'stars',
        order: 'desc',
        per_page: 10,
        page: that.data.page
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        const data = res.data
        let items = []
        // 区分是否改变条件
        if (that.data.page !== 1) {
          items = Array.prototype.concat.call(that.data.items, data.items)
        } else {
          items = data.items
        }
        that.setData({
          items: that.getItemsByAddCreateTime(items),
          page: ++that.data.page
        })
        wx.hideLoading()
      }
    })
  },
  getItemsByAddCreateTime: function (items) {
    return items && items.map(it => {
      it.createTime = transferTimeToStr(it.created_at)
      return it
    }) || []
  },
  showUrlModal: function (event) {
    this.setData({
      showPopup: true,
      popupMsg: event.currentTarget.id
    })
  },
  onShareAppMessage: function (res) {
    return {
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onLoad: function () {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    })
    // 调用getRepository
    this.getRepository()
  }
})
