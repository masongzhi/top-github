//index.js
//获取应用实例
const app = getApp()
// const {repository_search_url} = require('../../api/api.js')
const { repository_search_url: data_repository_search_url } = require('./mock.js')

Page({
  data: {
    page: 1,
    time: 'Today',
    language: 'JavaScript',
    items: [],
    timeArr: ["Today", "Last week", "Last month", "Last year"],
    languageArr: [
      "All",
      "Go",
      "HTML",
      "Java",
      "JavaScript",
      "PHP",
      "Python"
    ],
    height: ''
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      page: 1,
      time: e.detail.value
    })
    // 调用getRepository
  },
  bindLanguageChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      page: 1,
      language: e.detail.value
    })
    // 调用getRepository
  },
  getRepository: function () {
    console.log(this.data)
    // wx.request({
    //   url: repository_search_url, //仅为示例，并非真实的接口地址
    //   data: {
    //     q: `created:>2018-04-18%20language:${this.data.language}`,
    //     sort: 'stars',
    //     order: 'desc',
    //     per_page: 10,
    //     page: this.data.page
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //     const data = res.data
    //     this.setData({
    //       // 使用mock数据
    //       // items: data.items
    //       items: data_repository_search_url
    //       page: ++page
    //     })
    //   }
    // })
  },
  onLoad: function () {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    })
    this.setData({
      // 使用mock数据
      items: data_repository_search_url.items
    })
    console.log(this.data.items)
    // 调用getRepository
  }
})
