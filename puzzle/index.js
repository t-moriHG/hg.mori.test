var width = 20,height = 20;
var canvas = document.getElementById("world");
var ctx = canvas.getContext("2d");

var img = new Image();

//$.getJSON("img/tsuba2.jpg", function(data){
//  img.src = data.icon + "?" + new Date().getTime();
// });

img.src = "img/tsuba2.jpg";

img.onload = function() {
  var len = img.width / width;
  var hei = img.height / height;
  var ary = [];
  var cnt = 0;
  
  for(var i = 0;i < len;i++){
    for(var j = 0;j < hei;j++){
      ary[cnt++] = [i,j];
    }
  }
  
  //ary.shuffle();
  //console.log(ary);

  for(var i = 0;i < len;i++){
    for(var j = 0;j < hei;j++){
      cnt--;
      var x = ary[cnt][0],y = ary[cnt][1];
      ctx.drawImage(img, width * x, height * y, width, height, width * i, height * j, width, height);
    }
  }
}

Array.prototype.shuffle = function() {
  var i = this.length;
  while(i){
    var j = Math.floor(Math.random()*i);
    var t = this[--i];
    this[i] = this[j];
    this[j] = t;
  }
  return this;
}