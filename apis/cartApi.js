

module.exports = {

  /**
   *  访问远程数据，获取cartinfo
   */
  getCartInfo(cb){
     //不能使用ajax , fetch axios 
    return new Promise((resolve,reject)=>{
      try {
        wx.request({
          url: 'http://106.13.112.129:3000/api/cartinfo',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            resolve(res.data)
          }
        })
      }catch(e){
         reject(new Error("无法访问!"+e))
      }
    }) 
  
   
  }



}