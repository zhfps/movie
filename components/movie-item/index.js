// components/movie-item/index.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    "id": 12,
    "image": "https://img9.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p17525.jpg",
    "rate": 9.1,
    "casts": "主演：蒂姆·罗宾斯,摩根·弗里曼,鲍勃·冈顿",
    "title": "肖申克的救赎",
    "year": 1994,
    "directors": "导演：克里斯托弗·诺兰"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getDetail: function(e){
      this.triggerEvent("getDetail", { id: this.data.id})
    }
  }
})
