var app = getApp()

Page({
    data:{
          select:"index",
          navIndex:0,
          nav:[{title:"足球现场"},
             {title:"足球生活"},
             {title:"足球美女"}
             ],
          lists:null,
          goodsList:[],
          scrollTop : 0,
          scrollHeight:0,
    },
onPullDownRefresh:function(){
        this.onLoad()
},
bindDownLoad:function(){
    var _this = this;
      wx.showLoading({mask:true,title:"努力加载..."});
    wx.showToast({
      icon:"success",
      title:"加载中...",
      mask:true
    });
  wx.request({
      
        url: app.globalData.globalUrl + '/api/list',
      data: {},
      method: 'GET',
      success:function(res){
            var li =_this.data.lists.concat(res.data.data);

        _this.setData({
         lists:li

          } 
         );
          wx.setStorage({
           key: 'lists',
           data: res.data.data
         });
      }  
  })

},

    swiperChange(event){
         this.setData({
      navIndex:event.detail.current
    })
    },
    handleChange(event){
      this.setData({
         navIndex:event.target.dataset.index
      })
  },
 


onLoad(){
    this.fetchList();
  },
fetchList(){
      var _this = this;
      console.log(_this)
     wx.showLoading({mask:true,title:"努力加载..."});
    wx.showToast({
      icon:"success",
      title:"加载中...",
      mask:true
    });

wx.request({

     url: app.globalData.globalUrl + '/api/list',
     data: {},
      method: 'GET',
      success: function(res){
     
         _this.setData({
            lists:res.data.data
          } 
         );
          wx.setStorage({
           key: 'lists',
           data: res.data.data
         });
         }
      });
      wx.getSystemInfo({
           success:function(res){
                _this.setData({                    scrollHeight:res.windowHeight
                    });
           }
      })
}
  
})