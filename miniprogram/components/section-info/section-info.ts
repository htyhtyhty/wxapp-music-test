// components/section-info/section-info.ts
import { counterBehavior } from "../../behaviors/counter";
Component({
  options:{
    styleIsolation: "apply-shared",
  },
  behaviors: [counterBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '默认标题'
    },
    content: {
      type: String,
      value: '默认内容'
    },
  },
  // 传递class 用得少
  externalClasses: ['info'],
  /**
   * 组件的初始数据
   */
  data: {
    title: '',
    content: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickPass() {
      console.log('title被点击');
      this.triggerEvent("titleClick", this.properties);
    }
  }
})