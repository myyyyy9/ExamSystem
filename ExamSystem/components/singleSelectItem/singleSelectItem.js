// components/singleSelectItem/singleSelectItem.js
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
    option:[
      {
        index:1,
        option:"选项A"
      },
      {
        index:2,
        option:"选项B"
      },
      {
        index:3,
        option:"选项C"
      },
      {
        index:4,
        option:"选项D"
      },
    ],
    singleSelect:[1]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _handleRadioChange:function(e){
      console.log(e);
  },
  _handleDeleteSingle:function(e){
    console.log(e);
    var temp = this.data.singleSelect;
  temp.pop(this.data.singleSelect.length);
  this.setData({
    singleSelect: temp
  })
  },
  }
})
