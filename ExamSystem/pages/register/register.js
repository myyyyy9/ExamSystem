// pages/register/register.js
Page({
  // 密码显示
  _handlePwdShow :function () {
    this.setData({
      isShowPwd:!this.data.isShowPwd,
      pwdImg:this.data.isShowPwd?"/asserts/images/bukejian.png":"/asserts/images/kejian.png"

    })
   
},
// 密码确认
_handleInputCorrectPwd:function (e) {
    let correctPwd=e.detail.value;
    this.setData({
      correctPwd:correctPwd,
      isPwd: correctPwd==this.data.pwd &&correctPwd.length>0,
      canRegister:correctPwd==this.data.pwd&&this.data.phoneNumeber.length==11
    })
},
// 密码
  _handleInputPwd:function (e) {
    let pwd=e.detail.value
    this.setData({
      pwd:pwd,
      isPwd: pwd==this.data.correctPwd,
      canRegister:pwd.length>0&&this.data.isGood&&this.data.phoneNumeber.length==11
    })
  },
  // 电话
  _handleInputPhone:function (e) {
    let phoneNumeber=e.detail.value
    this.setData({
      phoneNumeber:phoneNumeber,
      isPhone:phoneNumeber.length==11,
      canRegister:this.data.pwd.length>0&&this.data.account.length>=5&&phoneNumeber.length==11
    })
  },
  // 账号
  _handleInputAccount:function (e) {
    
    let account=e.detail.value
    this.setData({
      account:account,
      isGood:account.length>=5,
      canRegister:this.data.pwd.length>0&&account.length>=5&&this.data.phoneNumeber.length==11
    })
  },
  // 表单提交
  _handleSubmit:function (e) {
    console.log(e);
    // 获取数据
    let account=e.detail.value.account;
    let pwd=e.detail.value.pwd;
    let phoneNumeber=e.detail.value.phoneNumeber;
    console.log(account,pwd,phoneNumeber)
    // 获取数据库的引用
    const db=wx.cloud.database()
    // 获取集合的引用
    const accountCollection = db.collection("_teacherAccount")
    accountCollection.where({
      account:account
    
    }).get().then(res=>{
      console.log("查询成功",res)
      // console.log(res.data.length);
      if(res.data.length){
        wx.showModal({
          title: '提示',
          content: '账号已经注册'
         
        })
        
      }
      else
      {
        accountCollection.add({
          data: {
            account:account,
            pwd:pwd,
            phoneNumber:phoneNumeber
    
          },
          success: function(res) {
            // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            console.log(res)
            wx.showToast({
              title: '注册成功',
              icon: 'success',
              duration: 2000
              
            }),setTimeout(function(){
              wx.navigateTo({
                url: '../../pages/login/login'
              })
            },2000) 
            
    
          }
    
        })

      }
    }).catch(err=>{
      console.log("查询失败",err)
    })





    // 通过add方法添加数据
    

  },
  /**
   * 页面的初始数据
   */
  data: { 
    account:'',
    pwd:'',
    correctPwd:'',
    phoneNumeber:'',
    isPwd:false,
    isGood:false,
    isPhone:false,
    canRegister:false,
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