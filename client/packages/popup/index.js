export default Component({
  behaviors: [],
  properties: {
    title: {
      type: String,
      value: ''
    },
    visible: {
      type: Boolean,
      value: false
    },
    hideCancel: {
      type: Boolean,
      value: false
    },
    hideConfirm: {
      type: Boolean,
      value: false
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    confirmText: {
      type: String,
      value: '确定'
    }
  },
  data: {},
  methods: {
    showDialogBtn: function () {
      this.setData({
        visible: true
      })
    },
    /**
     * 弹出框蒙层截断touchmove事件
     */
    preventTouchMove: function () {
    },
    /**
     * 隐藏模态对话框
     */
    hideModal: function () {
      this.setData({
        visible: false
      })
    },
    /**
     * 对话框取消按钮点击事件
     */
    onCancel: function () {
      this.hideModal()
      this.triggerEvent('onCancel', {}, {})
    },
    /**
     * 对话框确认按钮点击事件
     */
    onConfirm: function () {
      this.hideModal()
      this.triggerEvent('onConfirm', {}, {})
    }
  }
});