// pages/demo/demo.js
Page({
  itemTap:function(e){
    console.log(e);

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

  _handleGetUserInfo:function(e){
    console.log(e);
  },
  _handleSubmit:function (e) {
      console.log(e);
      let account=e.detail.value.account;
      let pwd=e.detail.value.pwd;
      console.log(account,pwd)
      const db=wx.cloud.database()
      const accountCollection=db.collection("_teacherAccount")
    // 数据库查
      accountCollection.where({
        account: account})
      .get({
        success: function(res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data,res.data.length)
          if(res.data.length){
            wx.showModal({
              title: '提示',
              content: '账号已经注册'
             
            })

          }
        }
      })



      // accountCollection.add({
      //   data: {
      //     account:account,
      //     pwd:pwd
      //   }
      // })

  },
  /**
   * 页面的初始数据
   */
  data: {
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
      if(wx.cloud){
        wx.cloud.init({
          env:'myapp-0c4c38',
          traceUser:true
        })
      }


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