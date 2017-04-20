var express = require('express');

var app = express();

app.get('/api/list',function(req,res){
   res.json({"code":0,data:[
        {img:"../../imgs/1.jpg",title:"我是萌萌"},
        {img:"../../imgs/2.jpg",title:"我是萌萌"},
        {img:"../../imgs/6.jpg",title:"我是萌萌"},
        {img:"../../imgs/3.jpg",title:"我是萌萌"},
        {img:"../../imgs/4.jpg",title:"我是萌萌"},
        {img:"../../imgs/5.jpg",title:"我是萌萌"},
        {img:"../../imgs/7.jpg",title:"我是萌萌"}
      ]

          }

        )
})


app.listen('8080');