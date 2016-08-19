var express=require('express')
var fs=require('fs')
var app=express()
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
app.get('/',function(req,res){
    res.writeHead(200,{'content-type':'text/plain'})
    var src=fs.createReadStream('readme.md');
    src.pipe(res);
})
app.get('/:time',function(req,res){
  var time=req.params.time;
  var unix_time=parseInt(time,10);
  var date;
  console.log(time+' '+unix_time);
  if(isNaN(unix_time))
  date=new Date(time );
  else date=new Date(unix_time)
  console.log(date);
  var object;
  if ( isNaN( date.getTime() ) ) {  // d.valueOf() could also work
    // date is not valid
    object={
      'unix':null,
      'natural':null
    }
  }
  else {
    // date is valid
    object={
      "unix":date.getTime(),
      "natural":monthNames[date.getMonth()]+' '+date.getDate()+','+date.getFullYear()}
  }
  res.send(object)
})
var port=Number(process.env.PORT || 3000)
app.listen(port);
