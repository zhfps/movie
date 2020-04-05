// components/movie-item/index.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    id: Number,
    image: String,
    rate: Number,
    casts: String,
    title: String,
    year: Number,
    directors: String

  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getDetail: function(e){
      this.triggerEvent("getDetail", { id: this.properties.id})
    }
  }
})
