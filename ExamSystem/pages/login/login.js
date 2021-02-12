// pages/login/login.js
Page({
  _handleGetUserInfo:function(e){
    console.log(e);
    const {userInfo} =e.detail;
    wx.setStorageSync("userInfo", userInfo);
  },

  // 登录按钮是否显示
  _handleInputPwd : function (e) {
     let pwd=e.detail.value;
    this.setData({
      pwd:pwd,
      canLogin:pwd.length>0&&this.data.isGood
    })

  },
  // 表单处理页面
  _handleSubmit : function (e) { 
    let account=e.detail.value.account;
    let pwd=e.detail.value.pwd;
    console.log(e)
    // 获取数据库的引用
    const db=wx.cloud.database()
    // 获取集合的引用
    const accountCollection = db.collection("_teacherAccount")
    accountCollection.where({
      account:account,
      pwd:pwd
    }).get().then(res=>{
      // console.log("查询成功",res)
      // console.log(res.data.length);
      if(res.data.length){

       


        wx.switchTab({
          url: '../../pages/teacherIndex/teacherIndex'
        })
      }
      else{
        wx.showToast({
          title: '密码错误或账号不存在',
          icon: 'none',
          duration: 2000
          
        })
      }
    }).catch(err=>{
      console.log("查询失败",err)
    })
    // console.log(e);
},
_handleInputAccount:function (e) {
    // console.log(e);
    let account=e.detail.value;
    
      this.setData({
        account:account,
        isGood:account.length>=5,
        canLogin:this.data.pwd.length>0&&account.length>=5
      })
    
   
},
//  密码是否显示
_handlePwdShow :function () {
    this.setData({
      isShowPwd:!this.data.isShowPwd,
      pwdImg:this.data.isShowPwd?"/asserts/images/bukejian.png":"/asserts/images/kejian.png"

    })
   
},
// 跳转注册页面
_handleRegister:function () {
    wx.navigateTo({
      url: '/pages/register/register'
     
    });
},
  /**
   * 页面的初始数据
   */
 
  data: {
      account:'',
      pwd:'',
      isGood:false,
      canLogin:false,
      isShowPwd:false,
      pwdImg:"/asserts/images/bukejian.png"
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