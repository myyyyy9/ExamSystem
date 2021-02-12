// pages/testPaper/testPaper.js
Page({
  _handleSubmitPaper:function(e){
    console.log(e,e.detail.value);
  },
  itemTap:function(e){
    console.log(e,e.currentTarget.dataset.id);
    if(e.currentTarget.dataset.id==1){
    var temp=this.data.singleSelect;
    temp.push(this.data.singleSelect.length);
    this.setData({
      singleSelect:temp 
    })}
     else if(e.currentTarget.dataset.id==2){
      var temp=this.data.multipleSelect;
      temp.push(this.data.multipleSelect.length);
      this.setData({
        multipleSelect:temp 
      })}
      else if(e.currentTarget.dataset.id==3){
        var temp=this.data.fillBlank;
        temp.push(this.data.fillBlank.length);
        this.setData({
          fillBlank:temp 
        })}
     

  },
  _actionSheetChange:function(){
    this.setData({
      isShowActionSheet:true
    })

  },
  _handleBtn:function(){
      this.setData({
        isShowActionSheet:false
      })
  },
  /**
   * 页面的初始数据
   */
  data: {
    singleSelect:[],
    multipleSelect:[],
    fillBlank:[],
    isShowActionSheet:true,
    groups:[
      {name:'单选题',id:1},
      {name:'多选题',id:2},
      {name:'填空题',id:3},
      {name:'主观题',id:4},
      {name:'判断题',id:5},
      {name:'批量添加',id:6}
    ]
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