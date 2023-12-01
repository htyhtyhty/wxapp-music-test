// components/section-footer/section-footer.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    tabsList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedKey: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickChangeTab(e) {
      this.setData({
        // 不能使用驼峰
        selectedKey: e.currentTarget.dataset.selectedkey
      })
      this.triggerEvent('clickGetSelectedTabKey', this.data.selectedKey)
    }
  },
  lifetimes: {
    created() {
      console.log('组件创建') // 网络请求 初始化数据 不能获取dom
    },
    attached() {
      console.log('组件被添加到组件树中attached') //可以获取dom
    },
    ready() {
      console.log('视图布局完成') //可以获取dom
    },
    detached() {
      console.log('组件从组件树中被移除')// 回收 取消事件监听等
    }
  },
  // 监听组件所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log('页面显示了')
    },
    hide() {
      console.log('页面隐藏了')
    },
    resize() {
      console.log('页面尺寸改变')
    }
  },
  observers: {
    selectedKey: function(newVal, oldVal) {
      console.log('tab更换了', newVal, oldVal)
    }
  }
})