// components/fillBlankItem/fillBlankItem.js
Component({
  behaviors: ['wx://form-field-group'],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    fillBlank:[1]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _handleDeleteBlank:function(e){
      console.log(e);
      var temp = this.data.fillBlank;
    temp.pop(this.data.fillBlank.length);
    this.setData({
      fillBlank: temp
    })
    },
  }
})
