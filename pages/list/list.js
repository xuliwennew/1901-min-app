 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[1,2,3,4,5,6,7,8],
    isShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
       isShow: true,
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
     this.setData({
       list:[9,10,11,12,13,122,2212,2222]
     })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom")
    let newData = [10,20,30,40,50,60,70]
    setTimeout(()=>{
      
      this.setData({
      
        list: this.data.list.concat(newData)
      })
    },3000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})