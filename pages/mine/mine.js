// pages/mine/mine.js
Page({

  data: {

    // text:"这是一个页面"

    tip: '',

    buttonDisabled: false,

    modalHidden: true,

    show: false

  },

  showModal: function () {

    this.setData({

      modalHidden: !this.data.modalHidden

    })

  },

  modalBindaconfirm: function () {

    this.setData({

      modalHidden: !this.data.modalHidden,

      show: !this.data.show,

      tip: '您点击了【确认】按钮！',

      buttonDisabled: !this.data.buttonDisabled

    })

  },

  modalBindcancel: function () {

    this.setData({

      modalHidden: !this.data.modalHidden,

      tip: '您点击了【取消】按钮！'

    })

  },

  goIndex: function () {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  goIndex1: function () {
    wx.navigateTo({
      url: '/pages/newsList/newsList',
    })
  },
  goIndex2: function () {
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
  goIndex3: function () {
    wx.navigateTo({
      url: '/pages/set/set',
    })
  }

})