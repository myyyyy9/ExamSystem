// pages/demoComponents/demoComponents.js
Page({
  _handleDeleteBlank:function(e){
    console.log(e);
    var temp = this.data.fillBlank;
  temp.pop(this.data.fillBlank.length);
  this.setData({
    fillBlank: temp
  })
  },
  _handleDeleteSingle:function(e){
    console.log(e);
    var temp = this.data.singleSelect;
  temp.pop(this.data.singleSelect.length);
  this.setData({
    singleSelect: temp
  })
  },
  _handleDeleteMultiple:function(e){
      console.log(e);
      var temp = this.data.multipleSelect;
    temp.pop(this.data.multipleSelect.length);
    this.setData({
      multipleSelect: temp
    })
  },
  /**
   * 页面的初始数据
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
      multipleSelect:[1],
      singleSelect:[1],
      fillBlank:[1]
        
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})