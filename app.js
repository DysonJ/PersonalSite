window.onload = function(){
  var text = ['&#xe900;','&#xe901;','&#xe902;','&#xe903;']
  var index = 0;
  setTimeout(function(){
    var typing = setInterval(function(){
      if (index < text.length){
        var string = '';
        for (var i = 0; i<=index; i++){
          string += text[i]
        }
        document.getElementById('stack-type').innerHTML = string+'<span>|</span>'
        console.log(index);
        index++
      }else{
        clearInterval(typing);
        setTimeout(function(){
          document.getElementById('stack-type').innerHTML = '&#xe900;&#xe901;&#xe902;&#xe903;'
        },1200)
      }
    },170)
  },1000)

}