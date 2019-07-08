 import cartApi from "../../apis/cartApi.js"

Page({

  /**
   * 页面的初始数据
   * 当数据发生修改，render
   */
  data: {
    num:0,
    cartInfo:{}
  },
  
  update(){
     let {num} = this.data
     console.log(this.data.num)
     this.setData({
       num: ++num
     })
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
   onLoad:  function (options) {
    cartApi.getCartInfo().then(data=>{
      console.log(data)
      this.setData({
        cartInfo:data
      })
    })
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
    console.log("onPullDownRefresh")
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